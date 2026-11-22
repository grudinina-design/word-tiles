const categories = {easy:"Easy", normal:"Normal", hard:"Hard", letter:"Letter", theme:"Theme"};
const storageKey = "word-tiles-v2";
const byId = id => document.getElementById(id);
const board = byId("board"), frame = byId("frame");
const keyButtons = [];
const hintButton = button("Hint", "hint-key", () => enter("reveal"));
hintButton.setAttribute("aria-label", "Reveal letter for one hint");
let memory, state, puzzle, category, cells, selected, activeWord, selectionVersion = 0;
let pending = Promise.resolve();
let gridColumns, gridRows;
let gridZoom = 1, pinch, suppressTapUntil = 0;

function read() {
  let saved;
  try { saved = JSON.parse(localStorage.getItem(storageKey)); } catch {}
  return migrateGrids(saved || memory || {balance:0, streak:0, games:{}});
}

function edit(change) {
  const commit = () => {
    const next = read();
    const message = change(next);
    memory = next;
    try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
    state = next;
    render(message);
  };
  pending = pending.catch(console.error).then(() => navigator.locks
    ? navigator.locks.request(storageKey, commit)
    : commit());
  return pending;
}

function dayNumber(date) {
  return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000);
}

function awardDaily(next, today) {
  if (next.day >= today) return;
  next.streak = next.day === today - 1 ? next.streak + 1 : 1;
  next.day = today;
  const reward = next.streak >= 5 ? 7 : next.streak >= 3 ? 5 : 3;
  next.balance += reward;
  return "Daily reward: +" + reward + " hints";
}

function dailyVisit() {
  const today = dayNumber(new Date());
  if (!(read().day >= today)) edit(next => awardDaily(next, today));
}

function button(label, className, action) {
  const element = document.createElement("button");
  element.type = "button";
  element.className = className;
  element.textContent = label;
  element.addEventListener("click", action);
  return element;
}

function makeModel(definition) {
  const words = [], cells = new Map();
  for (const [answer, clue, x, y, direction] of definition.words) {
    const step = direction === "across" ? 1 : definition.width;
    const origin = y * definition.width + x;
    const positions = Array.from(answer, (_, i) => origin + step * (i + 1));
    const word = {answer, clue, direction, positions};
    words.push(word);
    positions.forEach((position, i) => {
      if (!cells.has(position)) cells.set(position, {answer:answer[i], words:[]});
      cells.get(position).words.push(word);
    });
  }
  const starts = [...new Set(words.map(word => word.positions[0]))].sort((a,b) => a - b);
  const numbers = new Map(starts.map((position,i) => [position,i+1]));
  for (const word of words) word.number = numbers.get(word.positions[0]);
  words.sort((a,b) => a.number - b.number || a.direction.localeCompare(b.direction));
  return {...definition, words, cells, numbers};
}

const models = puzzles.map(makeModel);
function migrateGrids(saved) {
  if (saved.compactGrids === 3) return saved;
  for (const model of models) {
    const game = saved.games[model.id];
    if (!game) continue;
    const previous = game.letters || {};
    const mapping = saved.compactGrids === 2 ? model.denseCells
      : saved.compactGrids ? model.compactCells : model.legacyCells;
    if (!mapping) continue;
    const letters = {};
    for (const [position, cell] of model.cells) {
      const candidates = mapping[position].map(index => previous[index]).filter(Boolean);
      if (game.solved || candidates.includes(cell.answer)) {
        letters[position] = cell.answer;
      } else if (candidates.length && candidates.every(letter => letter === candidates[0])) {
        letters[position] = candidates[0];
      }
    }
    game.letters = letters;
    if (!game.solved && [...model.cells].every(([position, cell]) => letters[position] === cell.answer)) {
      game.solved = true;
      saved.balance += 3;
    }
  }
  saved.compactGrids = 3;
  return saved;
}

const byCategory = Object.fromEntries(Object.keys(categories).map(group =>
  [group, models.filter(model => model.category === group)]
));
const gatedCategories = new Set(["easy", "normal", "hard"]);
const initialPuzzles = 5;

function unlockedCount(group, source = state) {
  const list = byCategory[group];
  if (!gatedCategories.has(group)) return list.length;
  const completed = list.filter(model => source.games[model.id]?.solved).length;
  return Math.min(list.length, initialPuzzles + completed);
}

function canOpen(model, source = state) {
  return byCategory[model.category].indexOf(model) < unlockedCount(model.category, source);
}

function getLetters(model, source = state) {
  return source.games[model.id]?.letters || {};
}

function solvedWords(model, entries) {
  return new Set(model.words.filter(word =>
    word.positions.every((position, i) => entries[position] === word.answer[i])
  ));
}

function href(group, id) {
  return "#" + group + (id ? "/" + id : "");
}

function card(label, link) {
  const element = document.createElement("a");
  element.className = "card";
  element.href = link;
  const title = document.createElement("strong");
  title.textContent = label;
  element.append(title);
  return element;
}

function renderCatalog() {
  const list = byCategory[category];
  const available = unlockedCount(category);
  byId("catalog-title").textContent = categories[category];
  const summary = byId("catalog-summary");
  summary.hidden = !gatedCategories.has(category);
  summary.textContent = available + " of " + list.length + " unlocked"
    + (available < list.length ? " · Solve a puzzle to unlock the next" : "");
  byId("puzzle-list").replaceChildren(...list.map((model, i) => {
    if (i >= available) {
      const locked = document.createElement("div");
      locked.className = "card locked-card";
      const heading = document.createElement("strong");
      heading.textContent = model.title;
      const details = document.createElement("small");
      const remaining = i - available + 1;
      details.textContent = "Level " + (i + 1) + " · Solve " + remaining + " more " + (remaining === 1 ? "puzzle" : "puzzles");
      heading.append(details);
      const badge = document.createElement("span");
      badge.className = "percentage";
      badge.textContent = "Locked";
      locked.append(heading, badge);
      return locked;
    }
    const solved = solvedWords(model, getLetters(model)).size;
    const total = model.words.length;
    const percent = Math.floor(100 * solved / total);
    const link = card(model.title, href(category, model.id));
    link.classList.toggle("complete", solved === total);
    const details = document.createElement("small");
    details.textContent = "Level " + (i + 1) + " · " + solved + " of " + total + " words";
    link.firstChild.append(details);
    const percentage = document.createElement("span");
    percentage.className = "percentage";
    percentage.textContent = percent + "%";
    const progress = document.createElement("progress");
    progress.value = solved;
    progress.max = total;
    progress.setAttribute("aria-label", model.title + " progress");
    link.append(percentage, progress);
    return link;
  }));
}

function navigate(focusHeading = true) {
  const [group, id] = location.hash.slice(1).split("/");
  const chosenGroup = Object.hasOwn(categories, group) ? group : null;
  const chosenPuzzle = models.find(model => model.category === chosenGroup && model.id === id);
  category = chosenGroup;
  puzzle = chosenPuzzle && canOpen(chosenPuzzle) ? chosenPuzzle : undefined;
  if (category && id && !puzzle) history.replaceState(null, "", href(category));
  byId("home").hidden = Boolean(category);
  byId("catalog").hidden = !category || Boolean(puzzle);
  byId("game").hidden = !puzzle;
  byId("back-to-list").hidden = !puzzle;
  byId("brand").hidden = Boolean(puzzle);
  byId("streak").hidden = Boolean(puzzle);
  if (puzzle) loadGame();
  render();
  if (focusHeading) byId(puzzle ? "title" : category ? "catalog-title" : "home-title").focus({preventScroll:true});
}

function loadGame() {
  byId("title").textContent = puzzle.title;
  byId("back-to-list").href = href(category);
  cells = new Map([...puzzle.cells].map(([position, cell]) =>
    [position, {...cell, square:button("", "square", () => selectCell(position))}]
  ));
  for (const [position, number] of puzzle.numbers) cells.get(position).square.dataset.number = number;
  const columns = [...cells.keys()].map(position => position % puzzle.width);
  const rows = [...cells.keys()].map(position => Math.floor(position / puzzle.width));
  const left = Math.min(...columns);
  const top = Math.min(...rows);
  gridColumns = Math.max(...columns) - left + 1;
  gridRows = Math.max(...rows) - top + 1;
  board.style.setProperty("--cols", gridColumns);
  board.style.setProperty("--rows", gridRows);
  board.replaceChildren(...Array.from({length:gridColumns * gridRows}, (_, i) => {
    const position = (top + Math.floor(i / gridColumns)) * puzzle.width + left + i % gridColumns;
    if (cells.has(position)) return cells.get(position).square;
    const blank = document.createElement("div");
    blank.className = "void";
    blank.setAttribute("aria-hidden", "true");
    return blank;
  }));
  const entries = getLetters(puzzle);
  const solved = solvedWords(puzzle, entries);
  chooseWord(puzzle.words.find(word => !solved.has(word)) || puzzle.words[0], entries, solved);
  gridZoom = 1;
  pinch = undefined;
  suppressTapUntil = 0;
  frame.scrollLeft = frame.scrollTop = 0;
  fitGrid();
  byId("status").textContent = "";
}

function fitGrid() {
  if (!puzzle || !frame.clientWidth || !frame.clientHeight) return;
  // The grid has a 1px gap and 4px of padding on each edge.
  const width = (frame.clientWidth - 8 - (gridColumns - 1)) / gridColumns;
  const height = (frame.clientHeight - 8 - (gridRows - 1)) / gridRows;
  const size = Math.max(2, Math.floor(Math.min(width, height, 44) * 10) / 10);
  board.style.setProperty("--cell", Math.min(64, size * gridZoom) + "px");
}

function pinchPoint(event) {
  const touches = Array.from(event.touches).filter(touch => frame.contains(touch.target));
  if (touches.length !== 2) return;
  const [a, b] = touches;
  const distance = Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
  if (distance < 1) return;
  return {x:(a.clientX + b.clientX) / 2, y:(a.clientY + b.clientY) / 2, distance};
}

function startGridPinch(event) {
  const point = pinchPoint(event);
  if (!point || !puzzle) return;
  const bounds = board.getBoundingClientRect();
  if (!bounds.width || !bounds.height) return;
  if (event.cancelable) event.preventDefault();
  pinch = {
    distance:point.distance, zoom:gridZoom,
    x:(point.x - bounds.left) / bounds.width,
    y:(point.y - bounds.top) / bounds.height
  };
}

function moveGridPinch(event) {
  const point = pinchPoint(event);
  if (!point || !pinch) return;
  if (event.cancelable) event.preventDefault();
  gridZoom = Math.max(1, Math.min(6, pinch.zoom * point.distance / pinch.distance));
  fitGrid();
  const bounds = board.getBoundingClientRect();
  frame.scrollLeft += bounds.left + pinch.x * bounds.width - point.x;
  frame.scrollTop += bounds.top + pinch.y * bounds.height - point.y;
}

function endGridPinch(event) {
  if (pinch && !pinchPoint(event)) {
    pinch = undefined;
    suppressTapUntil = performance.now() + 250;
  }
}

frame.addEventListener("touchstart", startGridPinch, {passive:false});
frame.addEventListener("touchmove", moveGridPinch, {passive:false});
frame.addEventListener("touchend", endGridPinch);
frame.addEventListener("touchcancel", endGridPinch);
frame.addEventListener("click", event => {
  if (event.detail && performance.now() < suppressTapUntil) {
    event.preventDefault();
    event.stopPropagation();
  }
}, true);

function chooseWord(word, entries, solved) {
  activeWord = word;
  const locked = lockedCells(solved);
  const editable = word.positions.filter(position => !locked.has(position));
  selected = editable.find(position => !entries[position]) ?? editable[0] ?? word.positions[0];
  selectionVersion++;
}

function browseClue(offset) {
  const words = puzzle.words;
  const index = words.indexOf(activeWord);
  const entries = getLetters(puzzle);
  chooseWord(words[(index + offset + words.length) % words.length], entries, solvedWords(puzzle, entries));
  render();
  if (gridZoom > 1) {
    const tile = cells.get(selected).square.getBoundingClientRect();
    const viewport = frame.getBoundingClientRect();
    frame.scrollLeft += Math.max(0, tile.right - viewport.left - frame.clientWidth)
      + Math.min(0, tile.left - viewport.left);
    frame.scrollTop += Math.max(0, tile.bottom - viewport.top - frame.clientHeight)
      + Math.min(0, tile.top - viewport.top);
  }
}

function selectCell(position) {
  const choices = cells.get(position).words;
  const solved = solvedWords(puzzle, getLetters(puzzle));
  const repeat = position === selected;
  activeWord = repeat && choices.includes(activeWord)
    ? choices[(choices.indexOf(activeWord) + 1) % choices.length]
    : choices.find(word => word === activeWord && !solved.has(word))
      || choices.find(word => !solved.has(word)) || choices[0];
  selected = position;
  selectionVersion++;
  render();
}

function lockedCells(solved) {
  return new Set([...solved].flatMap(word => word.positions));
}

function render(message) {
  byId("balance").textContent = state.balance + (state.balance === 1 ? " hint" : " hints");
  byId("streak").textContent = state.streak + "-day streak";
  if (!puzzle) {
    if (category) renderCatalog();
    return;
  }
  const entries = getLetters(puzzle);
  const solved = solvedWords(puzzle, entries);
  const locked = lockedCells(solved);
  const tabStop = selected ?? Math.min(...cells.keys());
  for (const [position, {square}] of cells) {
    square.textContent = entries[position] || "";
    square.tabIndex = position === tabStop ? 0 : -1;
    square.classList.toggle("word", Boolean(activeWord?.positions.includes(position)));
    square.classList.toggle("selected", position === selected);
    square.classList.toggle("locked", locked.has(position));
    const row = Math.floor(position / puzzle.width) + 1;
    const column = position % puzzle.width + 1;
    square.setAttribute("aria-label", "Row " + row + ", column " + column + ", " + (entries[position] || "empty") + (locked.has(position) ? ", locked" : "") + (position === selected ? ", selected" : ""));
  }
  byId("dock").hidden = !activeWord;
  if (activeWord) {
    const clue = byId("current");
    const definition = activeWord.clue + " (" + activeWord.answer.length + ")";
    if (clue.textContent !== definition) {
      clue.textContent = definition;
      byId("clue-copy").scrollTop = 0;
    }
    hintButton.disabled = !state.balance || locked.has(selected);
    for (const key of keyButtons) key.disabled = solved.has(activeWord);
  }
  fitGrid();
  byId("progress").textContent = solved.size + " / " + puzzle.words.length + " words solved";
  if (message !== undefined) byId("status").textContent = message;
  else if (solved.size === puzzle.words.length && !byId("status").textContent) byId("status").textContent = "Solved";
}

function enter(input) {
  if (!puzzle || !activeWord) return;
  const model = puzzle, word = activeWord, initialPosition = selected, version = selectionVersion;
  edit(next => {
    if (!canOpen(model, next)) return;
    const currentSelection = puzzle === model && selectionVersion === version;
    const start = currentSelection ? selected : initialPosition;
    const entries = getLetters(model, next);
    const solved = solvedWords(model, entries);
    const locked = lockedCells(solved);
    if (solved.has(word)) return;
    const offset = word.positions.indexOf(start);
    let position = start;
    let value = input;
    if (input === "Backspace") {
      if (locked.has(start) || !entries[start]) {
        position = word.positions.slice(0, offset).reverse().find(cell => !locked.has(cell));
      }
    } else if (input === "reveal") {
      if (!next.balance || locked.has(start)) return;
      value = model.cells.get(start).answer;
      if (entries[start] === value) return currentSelection ? "This letter is already correct" : undefined;
      next.balance--;
    } else if (locked.has(start)) {
      position = word.positions.slice(offset + 1).find(cell => !locked.has(cell));
    }
    if (position === undefined) return;
    const game = (next.games[model.id] ||= {letters:{}});
    if (input === "Backspace") delete game.letters[position];
    else game.letters[position] = value;
    const after = solvedWords(model, game.letters);
    let message = "";
    if (after.size === model.words.length && !game.solved) {
      const before = unlockedCount(model.category, next);
      game.solved = true;
      next.balance += 3;
      const opened = unlockedCount(model.category, next) > before;
      message = opened ? "Solved! +3 hints · Next level unlocked" : "Solved! +3 hints";
    }
    if (currentSelection) {
      const blocked = lockedCells(after);
      selected = input === "Backspace" || after.has(word) ? position
        : word.positions.slice(word.positions.indexOf(position) + 1).find(cell => !blocked.has(cell)) ?? position;
      const focusedCell = document.activeElement?.classList.contains("square");
      if (focusedCell) cells.get(selected).square.focus({preventScroll:true});
    }
    return puzzle === model ? message : undefined;
  });
}

for (const [group, label] of Object.entries(categories)) {
  const link = card(label, href(group));
  link.className += " category-card";
  link.dataset.category = group;
  const art = document.createElement("span");
  art.className = "tile-art";
  art.setAttribute("aria-hidden", "true");
  for (let i = 0; i < (group === "easy" ? 6 : 4); i++) art.append(document.createElement("i"));
  const detail = document.createElement("span");
  detail.className = "category-detail";
  detail.textContent = byCategory[group].length + " puzzles";
  link.append(art, detail);
  byId("categories").append(link);
}
for (const letters of ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"]) {
  const row = document.createElement("div");
  row.className = "keys";
  if (letters === "ZXCVBNM") row.append(hintButton);
  for (const letter of letters) {
    const key = button(letter, "", () => enter(letter));
    keyButtons.push(key);
    row.append(key);
  }
  if (letters === "ZXCVBNM") {
    const erase = button("⌫", "erase", () => enter("Backspace"));
    erase.setAttribute("aria-label", "Delete letter");
    keyButtons.push(erase);
    row.append(erase);
  }
  byId("keyboard").append(row);
}
const gridDirections = {ArrowLeft:[-1,0], ArrowRight:[1,0], ArrowUp:[0,-1], ArrowDown:[0,1]};
function moveGridFocus(target, event) {
  const current = [...cells].find(([,cell]) => cell.square === target)?.[0];
  if (current === undefined) return;
  const [dx,dy] = gridDirections[event.key];
  let x = current % puzzle.width + dx;
  let y = Math.floor(current / puzzle.width) + dy;
  while (x >= 0 && x < puzzle.width && y >= 0 && y < puzzle.height) {
    const position = y * puzzle.width + x;
    if (cells.has(position)) {
      event.preventDefault();
      selectCell(position);
      cells.get(position).square.focus({preventScroll:true});
      return;
    }
    x += dx;
    y += dy;
  }
}

document.addEventListener("keydown", event => {
  if (!puzzle || byId("guide").open || event.ctrlKey || event.metaKey || event.altKey || event.isComposing) return;
  if (event.target.classList?.contains("square") && Object.hasOwn(gridDirections, event.key)) {
    moveGridFocus(event.target, event);
  } else if (activeWord && (/^[a-z]$/i.test(event.key) || event.key === "Backspace")) {
    event.preventDefault();
    enter(event.key === "Backspace" ? event.key : event.key.toUpperCase());
  }
});
document.querySelector(".skip").addEventListener("click", event => {
  event.preventDefault();
  byId("main-content").focus();
});
byId("help").addEventListener("click", () => byId("guide").showModal());
byId("previous-clue").addEventListener("click", () => browseClue(-1));
byId("next-clue").addEventListener("click", () => browseClue(1));
window.addEventListener("hashchange", () => navigate());
window.addEventListener("storage", event => {
  if (event.key === storageKey) {
    state = read();
    render();
  }
});
window.addEventListener("focus", dailyVisit);
document.addEventListener("visibilitychange", () => { if (!document.hidden) dailyVisit(); });

state = read();
navigate(false);
dailyVisit();
if (typeof ResizeObserver !== "undefined") {
  const header = document.querySelector("header");
  new ResizeObserver(() => {
    document.documentElement.style.setProperty("--header-height", header.offsetHeight + "px");
  }).observe(header);
  new ResizeObserver(fitGrid).observe(frame);
}

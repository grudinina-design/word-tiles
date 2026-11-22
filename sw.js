const scope = new URL(self.registration.scope);
const prefix = "word-tiles:" + scope.pathname + ":";
const version = prefix + "4";
const shell = new URL("index.html", scope).href;
const files = [
  "index.html", "style.css", "game.js", "puzzles.js", "install.js",
  "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png",
  "wordnet-license.txt"
].map(file => new URL(file, scope).href);
const assets = new Set(files);

self.addEventListener("install", event => {
  event.waitUntil(caches.open(version).then(cache =>
    cache.addAll(files.map(url => new Request(url, {cache:"reload"})))
  ));
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) {
      if (key.startsWith(prefix) && key !== version) await caches.delete(key);
    }
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  const {request} = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  const navigation = request.mode === "navigate"
    && (url.href === scope.href || url.href === shell
      || (url.origin === scope.origin && [scope.pathname, new URL(shell).pathname].includes(url.pathname)));
  if (!navigation && !assets.has(url.href)) return;
  event.respondWith((async () => {
    const cache = await caches.open(version);
    return await cache.match(navigation ? shell : request) || fetch(request);
  })());
});

/*
WordNet Release 3.0

This software and database is being provided to you, the LICENSEE, by
Princeton University under the following license.  By obtaining, using
and/or copying this software and database, you agree that you have
read, understood, and will comply with these terms and conditions.:

Permission to use, copy, modify and distribute this software and
database and its documentation for any purpose and without fee or
royalty is hereby granted, provided that you agree to comply with
the following copyright notice and statements, including the disclaimer,
and that the same appear on ALL copies of the software, database and
documentation, including modifications that you make for internal
use or for distribution.

WordNet 3.0 Copyright 2006 by Princeton University.  All rights reserved.

THIS SOFTWARE AND DATABASE IS PROVIDED "AS IS" AND PRINCETON
UNIVERSITY MAKES NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR
IMPLIED.  BY WAY OF EXAMPLE, BUT NOT LIMITATION, PRINCETON
UNIVERSITY MAKES NO REPRESENTATIONS OR WARRANTIES OF MERCHANT-
ABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE
OF THE LICENSED SOFTWARE, DATABASE OR DOCUMENTATION WILL NOT
INFRINGE ANY THIRD PARTY PATENTS, COPYRIGHTS, TRADEMARKS OR
OTHER RIGHTS.

The name of Princeton University or Princeton may not be used in
advertising or publicity pertaining to distribution of the software
and/or database.  Title to copyright in this software, database and
any associated documentation shall at all times remain with
Princeton University and LICENSEE agrees to preserve same.
*/
const puzzles = [
  {
    "category": "easy", "id": "first-steps", "title": "First Steps", "width": 13, "height": 13,
    "legacyCells": {"18":[57],"31":[69],"43":[19],"44":[31,81],"45":[43],"46":[55],"47":[67],"57":[93],"60":[68,85],"61":[86],"62":[87],"63":[88],"64":[89],"66":[147],"67":[148],"68":[149],"69":[150],"70":[105,151],"71":[152],"73":[69],"86":[70],"90":[74],"95":[29],"97":[110],"99":[71,107],"100":[112,119],"101":[131],"102":[143],"103":[86,155],"108":[41],"110":[111],"113":[124],"116":[98],"120":[103],"121":[53,104],"122":[105],"123":[106,112],"124":[107],"126":[136],"129":[110],"134":[65],"136":[113],"139":[148],"142":[122],"147":[77],"149":[104,114],"150":[116],"151":[128],"152":[140,160],"153":[152],"155":[134],"160":[89]},
    "words": [
      ["RIVER", "Water that flows to the sea", 5, 11, "across"],
      ["APPLE", "Fruit in a classic pie", 9, 6, "down"],
      ["CHAIR", "Seat with a back", 6, 6, "down"],
      ["DANCE", "Move to music", 7, 7, "across"],
      ["PENCIL", "Writing tool you can sharpen", 12, 5, "down"],
      ["CLOUD", "White shape in the sky", 8, 2, "down"],
      ["LEMON", "Sour yellow fruit", 7, 4, "across"],
      ["MUSIC", "Sounds with rhythm and melody", 3, 3, "across"],
      ["BREAD", "What toast starts as", 2, 9, "across"],
      ["GARDEN", "Place to grow plants", 4, 6, "down"],
      ["HOUSE", "Building you live in", 5, 0, "down"],
      ["FLOWER", "Bloom in a garden", 0, 5, "across"]
    ]
  },
  {
    "category": "easy", "id": "everyday", "title": "Everyday Things", "width": 14, "height": 14,
    "legacyCells": {"15":[143],"16":[144],"17":[145],"18":[73,146],"19":[147],"20":[148],"32":[88],"44":[26],"45":[41],"46":[56,103],"47":[71],"48":[86],"51":[17],"55":[68],"58":[27],"60":[118],"65":[18],"69":[69],"72":[28],"75":[110],"79":[19],"83":[70],"86":[29,122],"87":[123],"88":[124],"89":[125],"90":[126],"91":[127],"93":[20],"94":[35],"95":[50],"96":[65],"97":[71,80],"103":[140],"107":[21],"111":[72],"117":[76,155],"118":[77],"119":[78],"120":[79],"121":[22,80],"122":[81],"125":[73],"131":[170],"133":[93],"147":[108],"160":[113],"161":[114,123],"162":[115],"163":[116],"164":[117],"165":[118],"175":[138],"189":[153]},
    "words": [
      ["SHOES", "What you wear on your feet", 1, 3, "across"],
      ["DOOR", "It opens to let you in", 4, 0, "down"],
      ["WINDOW", "Glass opening in a wall", 0, 1, "across"],
      ["SOAP", "Something to wash with", 2, 2, "down"],
      ["PILLOW", "Cushion for your head in bed", 1, 6, "across"],
      ["CLOCK", "It tells the time", 5, 4, "down"],
      ["COFFEE", "Drink brewed from roasted beans", 4, 8, "across"],
      ["BOTTLE", "Container with a neck", 9, 2, "down"],
      ["TABLE", "Furniture for serving dinner", 8, 6, "across"],
      ["FRIEND", "Someone you like and trust", 13, 2, "down"],
      ["FAMILY", "Parents and children, for example", 7, 7, "down"],
      ["MIRROR", "It shows your reflection", 5, 11, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-03", "title": "Coffee Break", "width": 11, "height": 13,
    "legacyCells": {"12":[128],"13":[55,129],"14":[130],"15":[131],"16":[106,132],"18":[26,70],"19":[71],"20":[72],"21":[73],"24":[72],"27":[107],"29":[43],"35":[89],"38":[108],"40":[36,60],"41":[53],"42":[62,70],"43":[87],"46":[106,132],"47":[149],"48":[166],"49":[109,183],"50":[200],"51":[77,217],"53":[79],"60":[110],"62":[94],"64":[96],"75":[113],"80":[58],"83":[57,103],"84":[120],"85":[137],"86":[130,154],"87":[171],"91":[75],"94":[58],"97":[147],"102":[92],"105":[59],"108":[164],"113":[109],"116":[60],"124":[126,171],"125":[172],"126":[173],"127":[61,174],"128":[175],"129":[176],"135":[143],"138":[62]},
    "words": [
      ["FIGURE", "A drawing or diagram in a book", 1, 4, "across"],
      ["FORUM", "A public meeting or assembly for open discussion", 5, 0, "down"],
      ["HALF", "One of two equal parts", 2, 0, "down"],
      ["CHIEF", "A person who is in charge", 0, 1, "across"],
      ["SUPER", "Informal term for a building superintendent", 7, 0, "down"],
      ["STAR", "A point of light in the night sky", 6, 1, "across"],
      ["PAST", "The time that has elapsed", 6, 3, "across"],
      ["SPECIAL", "A dish featured on a restaurant menu today", 9, 2, "down"],
      ["CHAIN", "A series of connected metal links", 5, 7, "across"],
      ["CAMPUS", "The grounds and buildings of a university", 6, 6, "down"],
      ["NATURE", "The world of wild plants, animals and landscapes", 2, 11, "across"],
      ["AMOUNT", "How much of something there is", 3, 6, "down"]
    ]
  },
  {
    "category": "easy", "id": "easy-04", "title": "A Fresh Page", "width": 13, "height": 14,
    "legacyCells": {"22":[200],"28":[117,176],"29":[118],"30":[119],"31":[21,120],"35":[201],"41":[190],"44":[35,73],"45":[87],"46":[101],"47":[115],"48":[129,202],"49":[143],"54":[204],"57":[49],"61":[203],"67":[218],"70":[63],"73":[99],"74":[113,204],"75":[127],"76":[141],"79":[174],"80":[188,232],"81":[202],"82":[216],"83":[77,230],"84":[244],"87":[205],"96":[91],"100":[206],"109":[105],"112":[169],"113":[183,207],"114":[197],"115":[211],"116":[225],"119":[19],"120":[33],"121":[47],"122":[61,119],"123":[75],"125":[170],"138":[171],"146":[228],"147":[229],"148":[230],"149":[231],"150":[232],"151":[172,233],"152":[234],"153":[235],"164":[173],"176":[117],"177":[131,174],"178":[145],"179":[159],"180":[173]},
    "words": [
      ["MATERIAL", "What an object is made of", 5, 1, "down"],
      ["PALM", "The inside surface of your hand", 1, 2, "across"],
      ["PHONE", "Device you use to call someone", 2, 1, "down"],
      ["RESORT", "A place people go for a holiday", 0, 6, "across"],
      ["CABLE", "A thick wire that carries power or signals", 1, 9, "across"],
      ["ACCESS", "The right to enter", 4, 3, "across"],
      ["CUSTOMER", "Someone who pays for goods or services", 9, 0, "down"],
      ["GOLF", "A game played on a large open course with 9 or 18 holes", 7, 5, "across"],
      ["DRIVE", "Travel by car while controlling it", 7, 8, "across"],
      ["DINNER", "The main meal, often eaten in the evening", 8, 7, "down"],
      ["CURRENCY", "The metal or paper medium of exchange that is presently used", 2, 11, "across"],
      ["PRIME", "A number that has no factor but itself and 1", 6, 13, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-05", "title": "Pocket Puzzle", "width": 11, "height": 13,
    "legacyCells": {"18":[191],"26":[163,218],"27":[177],"28":[191],"29":[192,205],"30":[219],"32":[212],"37":[232],"40":[193],"43":[213],"48":[185,246],"49":[199],"50":[187,213],"51":[194,227],"54":[214],"57":[97],"59":[260],"61":[201],"63":[253],"65":[215],"68":[111],"71":[129],"72":[130,215],"73":[131],"74":[132,254],"76":[216],"79":[125],"81":[116],"83":[229],"85":[255],"87":[217],"90":[139],"92":[130],"95":[147],"96":[161,256],"97":[175],"98":[189,218],"101":[153],"103":[144],"107":[257],"109":[219],"111":[66],"112":[80,167],"113":[94],"114":[108,158],"115":[122],"116":[136],"117":[150],"118":[164,258],"123":[181],"125":[172],"129":[259],"140":[260]},
    "words": [
      ["PARK", "Public green space for walks and play", 3, 4, "across"],
      ["TAPE", "A sticky strip for joining things", 4, 1, "down"],
      ["DARK", "Absence of light or illumination", 7, 0, "down"],
      ["TODAY", "The day you are in now", 3, 2, "across"],
      ["ROOT", "The part of a plant that usually grows underground", 6, 3, "down"],
      ["ZOOM", "Make an image look closer on a screen", 4, 6, "across"],
      ["EMPLOYEE", "A worker who is hired to perform a job", 8, 4, "down"],
      ["INDUSTRY", "Businesses that make or provide the same type of thing", 0, 10, "across"],
      ["SELLING", "Giving goods to customers in exchange for money", 2, 4, "down"],
      ["FOCUS", "Give something your full attention", 4, 6, "down"],
      ["FLAT", "Smooth and level, without bumps", 6, 8, "across"],
      ["PRIORITY", "The thing that comes first in importance", 10, 1, "down"]
    ]
  },
  {
    "category": "easy", "id": "easy-06", "title": "On a Roll", "width": 11, "height": 14,
    "legacyCells": {"15":[98],"26":[99],"37":[100],"43":[141],"48":[101],"54":[142],"56":[91],"57":[106],"58":[35,121],"59":[102,136],"60":[151],"63":[174],"65":[143],"69":[36],"73":[99],"74":[114,175],"75":[129],"76":[144],"80":[37],"85":[176],"87":[145],"91":[38,112],"92":[127],"93":[142],"94":[157],"95":[27,172],"96":[177,187],"98":[146],"102":[39],"106":[42],"108":[215],"114":[131],"115":[146],"116":[161],"117":[57,176],"119":[216],"125":[132],"128":[72],"130":[217],"136":[133],"139":[87],"141":[218],"147":[134],"149":[174],"150":[102,189],"151":[204],"152":[219]},
    "words": [
      ["SENATE", "The upper chamber of the US Congress", 7, 7, "down"],
      ["FEAR", "The feeling that something may harm you", 5, 13, "across"],
      ["PRIOR", "Earlier in time", 9, 8, "down"],
      ["COURSE", "Education imparted in a series of lessons or meetings", 2, 8, "across"],
      ["TURN", "Change the direction you are facing", 3, 10, "across"],
      ["TASK", "A piece of work to do", 4, 9, "down"],
      ["BEACH", "An area of sand sloping down to the water of a sea or lake", 3, 4, "down"],
      ["FINE", "Money paid as a penalty", 8, 4, "down"],
      ["LABEL", "A tag showing what something is", 0, 5, "across"],
      ["HIRE", "Give someone a paid job", 6, 6, "across"],
      ["BUREAU", "A chest of drawers, in American English", 10, 2, "down"],
      ["THREE", "One more than two", 4, 0, "down"]
    ]
  },
  {
    "category": "easy", "id": "easy-07", "title": "Short and Sweet", "width": 10, "height": 13,
    "legacyCells": {"12":[74,80],"13":[98],"14":[122],"15":[146],"16":[127,170],"22":[81],"26":[128],"28":[164],"32":[82],"36":[129],"38":[165],"41":[66],"42":[83,90],"43":[114],"44":[138],"46":[103,130],"47":[127],"48":[151,166],"49":[175],"52":[84],"55":[52],"58":[167],"61":[117,146],"62":[85,147],"63":[148],"64":[149],"65":[53,150],"66":[151],"71":[141],"75":[54],"81":[165],"83":[97],"84":[98],"85":[55,99],"86":[100],"87":[101],"88":[102],"89":[52,103],"91":[189],"99":[76],"101":[213],"109":[100],"111":[65,237],"112":[66],"113":[67],"114":[68],"115":[69],"116":[70],"117":[71],"119":[124],"121":[261],"129":[148]},
    "words": [
      ["WORD", "A unit of language with a meaning", 8, 1, "down"],
      ["TERM", "A period of lessons in a school year", 5, 4, "across"],
      ["EAST", "The direction of sunrise", 6, 0, "down"],
      ["CAUSE", "What makes something happen", 1, 1, "across"],
      ["CRUISE", "An ocean trip taken for pleasure", 2, 0, "down"],
      ["FILM", "A movie", 0, 4, "across"],
      ["SELLER", "The opposite of a buyer", 0, 6, "across"],
      ["TEXT", "The written words on a page", 5, 4, "down"],
      ["PATIENT", "A person who requires medical care", 2, 8, "across"],
      ["TRIAL", "A court hearing to decide a case", 9, 7, "down"],
      ["SPONSOR", "Someone who supports or champions something", 1, 5, "down"],
      ["OFFICER", "Any person in the armed services who holds a position of authority or command", 0, 11, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-08", "title": "A Little Longer", "width": 13, "height": 14,
    "legacyCells": {"20":[136],"21":[137],"22":[138],"23":[139],"30":[197],"36":[152],"43":[131,210],"44":[144],"45":[157],"46":[170],"48":[131],"49":[132,165],"50":[133],"51":[134],"56":[223],"59":[171],"62":[178],"66":[163],"69":[236],"72":[172],"75":[191],"79":[164],"82":[249],"85":[19,173],"86":[32],"87":[45],"88":[58,204],"89":[71],"90":[84],"92":[165],"95":[262],"98":[174],"105":[166],"111":[175,230],"112":[243],"113":[256],"114":[269],"115":[282],"116":[295],"118":[80,167],"119":[81],"120":[82],"121":[83],"122":[80,84],"123":[85],"124":[86,176],"131":[168],"135":[93],"148":[106],"159":[105],"160":[106],"161":[107,119],"162":[108],"163":[109],"164":[110],"174":[132]},
    "words": [
      ["PARENT", "A father or mother", 10, 0, "down"],
      ["DROP", "A very small amount of liquid, such as one from a tap", 6, 1, "across"],
      ["BATTLE", "A fight between two armies", 6, 6, "across"],
      ["ORAL", "Spoken aloud", 8, 3, "across"],
      ["NUMBERS", "What you use to count and measure", 7, 2, "down"],
      ["RACING", "Competing to see who is fastest", 6, 8, "across"],
      ["OPEN", "The opposite of closed", 3, 3, "across"],
      ["COLUMN", "A vertical set of entries in a table", 4, 1, "down"],
      ["EXPRESS", "Send by a faster mail service", 0, 9, "across"],
      ["SCREEN", "The part of a device that displays an image", 1, 4, "down"],
      ["ERROR", "A mistake", 5, 8, "down"],
      ["GROWTH", "An increase in size", 2, 12, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-09", "title": "Letter After Letter", "width": 13, "height": 14,
    "legacyCells": {"20":[283],"21":[110,284],"22":[285],"23":[286],"28":[75],"32":[156],"34":[111],"38":[125],"41":[76],"45":[157,188],"46":[189],"47":[112,190],"48":[191],"49":[188,192],"51":[143],"53":[149],"54":[77,167],"55":[185],"56":[203],"57":[221],"58":[158,239],"60":[113],"62":[206],"64":[161],"67":[78],"71":[159],"73":[114,245],"74":[263],"75":[224,281],"76":[299],"77":[179,317],"80":[79],"84":[160],"86":[115],"88":[242],"90":[197],"93":[80],"97":[161],"101":[260],"103":[215],"106":[81],"112":[136,276],"113":[277],"114":[278],"115":[279],"125":[154],"127":[296],"138":[172],"151":[190],"164":[120,208],"165":[121],"166":[122],"167":[123],"177":[226]},
    "words": [
      ["IMPACT", "A forceful hit, or the effect it produces", 8, 0, "down"],
      ["ALPHA", "The first letter of the Greek alphabet", 5, 3, "across"],
      ["DATING", "Going out with someone romantically", 6, 1, "down"],
      ["LINK", "A clickable reference that takes you to another webpage", 6, 1, "across"],
      ["COVER", "Something placed over an object to protect it", 7, 5, "across"],
      ["DEGREE", "A unit used to measure an angle", 12, 1, "down"],
      ["ADVISOR", "Someone who helps you make decisions", 10, 2, "down"],
      ["SHOW", "A performance for an audience", 7, 8, "across"],
      ["SUPPLY", "A stock of something available for use", 8, 7, "down"],
      ["LOSS", "The opposite of a win", 7, 12, "across"],
      ["MOMENT", "A very short period of time", 0, 4, "across"],
      ["THOUGHT", "An idea that passes through your mind", 2, 1, "down"]
    ]
  },
  {
    "category": "easy", "id": "easy-10", "title": "The Long Weekend", "width": 10, "height": 13,
    "legacyCells": {"16":[81],"17":[82],"18":[83,294],"19":[84],"23":[260],"25":[182],"28":[295],"33":[276],"35":[198],"38":[296],"43":[292],"45":[214],"46":[215],"47":[216],"48":[217,297],"52":[133,262],"53":[278,308],"54":[294],"55":[230,310],"62":[149],"66":[17],"72":[165],"76":[18],"78":[129],"81":[60],"82":[76,181],"83":[92],"84":[108],"85":[124],"86":[19,140],"88":[130],"96":[20],"98":[131],"105":[306],"106":[21,307],"107":[308],"108":[132,309],"109":[310],"118":[133],"125":[178],"126":[179],"127":[180],"128":[134,181],"129":[182]},
    "words": [
      ["DISK", "A round, flat object", 5, 1, "across"],
      ["STOP", "Come to a halt", 8, 0, "down"],
      ["SHIP", "A large boat that carries people or cargo", 4, 4, "across"],
      ["LOST", "Unable to find your way", 5, 1, "down"],
      ["CAST", "The actors in a play", 1, 5, "across"],
      ["IDEA", "A suggestion or plan that comes to mind", 3, 1, "down"],
      ["CAPE", "A sleeveless cloak worn over the shoulders", 2, 4, "down"],
      ["CENSUS", "An official count of the people in a country", 0, 8, "across"],
      ["LASER", "A device that produces a narrow beam of light", 6, 5, "down"],
      ["GRANT", "Money awarded for a purpose, such as research", 4, 10, "across"],
      ["CHANCE", "A possibility that something may happen", 8, 6, "down"],
      ["WHEEL", "A round part that lets a vehicle roll", 4, 12, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-11", "title": "A Small Detour", "width": 13, "height": 14,
    "legacyCells": {"19":[56,113],"20":[74],"21":[92],"22":[73,110],"32":[131],"35":[74],"40":[83],"43":[172],"45":[149],"48":[75],"53":[101],"55":[189],"56":[190],"57":[191],"58":[167,192],"61":[76],"66":[119],"69":[208],"79":[137],"82":[226],"90":[31],"92":[155,164],"93":[165],"94":[166],"95":[167,244],"98":[166],"103":[49],"108":[223,262],"109":[241],"110":[259],"111":[184,277],"112":[295],"116":[67],"121":[280],"124":[202],"129":[85],"137":[220,300],"138":[301],"139":[302],"140":[303],"141":[304],"142":[103,305],"145":[211],"146":[229],"147":[247],"148":[265],"149":[283],"150":[238,301],"155":[121],"168":[139],"181":[157]},
    "words": [
      ["HOLIDAY", "Leisure time away from work devoted to rest or pleasure", 4, 2, "down"],
      ["LORD", "A title for a male member of the nobility", 0, 7, "across"],
      ["TOTAL", "A quantity obtained by the addition of a group of numbers", 1, 2, "down"],
      ["POND", "Small area of still water", 2, 4, "across"],
      ["MIND", "That which is responsible for one's thoughts and feelings", 6, 0, "down"],
      ["MASS", "The amount of matter in an object", 5, 1, "across"],
      ["ANGEL", "A heavenly figure often depicted with wings", 3, 8, "across"],
      ["SAFE", "A strong locked box for valuables", 9, 0, "down"],
      ["REACH", "Stretch out your arm to touch something", 7, 6, "down"],
      ["LENGTH", "How long something is from end to end", 1, 11, "across"],
      ["CHURCH", "A building used for Christian worship", 6, 10, "across"],
      ["CLOTHING", "A covering designed to be worn on a person's body", 12, 5, "down"]
    ]
  },
  {
    "category": "easy", "id": "easy-12", "title": "One More Page", "width": 11, "height": 14,
    "legacyCells": {"14":[280],"17":[140],"25":[281],"26":[297],"27":[313],"28":[141,329],"36":[282],"39":[142],"41":[167],"45":[86],"47":[283],"50":[92,143],"51":[108],"52":[124,183],"53":[140],"56":[87],"58":[284],"63":[199],"67":[88],"71":[201],"72":[217],"73":[233,276],"74":[215,249],"78":[89],"84":[292],"89":[90,115],"90":[116],"91":[117],"92":[118],"93":[119],"94":[120],"95":[121,308],"96":[122],"100":[91],"106":[324],"109":[323],"111":[92],"114":[20],"115":[36],"116":[52],"117":[68,340],"118":[84],"119":[100],"120":[116,324],"131":[325],"142":[326],"147":[126],"148":[142],"149":[158],"150":[174],"151":[190],"152":[206],"153":[222,327]},
    "words": [
      ["HOPE", "The general feeling that some desire will be fulfilled", 2, 2, "across"],
      ["SHEET", "A single piece of paper", 3, 0, "down"],
      ["DEAL", "A particular instance of buying or selling", 6, 0, "down"],
      ["LOAD", "Weight to be borne or conveyed", 5, 4, "across"],
      ["JACK", "A tool for lifting a car off the ground", 8, 2, "down"],
      ["PACK", "Put your things in a bag or suitcase", 4, 6, "across"],
      ["CHART", "A visual display of information", 7, 5, "down"],
      ["BROTHER", "A male with the same parents as someone else", 3, 10, "across"],
      ["CRIMINAL", "Someone who has committed a crime or has been legally convicted of a crime", 0, 8, "across"],
      ["COUNCIL", "A body serving in an administrative capacity", 1, 3, "down"],
      ["WRONG", "The opposite of correct", 10, 8, "down"],
      ["MAILING", "Sending something by post", 3, 13, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-13", "title": "Sunday Morning", "width": 10, "height": 14,
    "legacyCells": {"15":[263],"16":[279],"17":[295],"18":[311],"19":[129,327],"29":[130],"31":[152,293],"32":[168],"33":[184],"34":[200],"35":[216],"36":[232],"39":[131],"41":[294],"47":[164],"49":[132],"51":[295],"56":[218],"57":[180,234],"58":[250],"59":[133,266],"61":[296],"67":[196],"71":[140,297],"72":[141],"73":[142],"74":[143,188],"76":[106],"77":[107,212],"78":[108,213],"79":[109],"81":[298],"84":[204],"86":[122],"88":[229],"91":[299],"94":[220],"96":[138],"98":[245],"104":[236],"106":[154],"108":[261],"113":[23],"114":[39,252],"115":[55],"116":[71,170],"117":[87],"118":[103,277],"119":[119],"124":[268],"126":[186],"128":[293],"134":[284]},
    "words": [
      ["BASS", "The lowest part of the musical range", 5, 5, "across"],
      ["SALE", "A particular instance of selling", 7, 3, "down"],
      ["CELL", "The basic unit of a living organism", 5, 7, "across"],
      ["GUESS", "Give an answer without being sure it is right", 9, 0, "down"],
      ["THING", "An object whose name you cannot recall or do not need to say", 4, 1, "across"],
      ["LAWYER", "A professional person authorized to practice law", 8, 6, "down"],
      ["CREDIT", "Money available for a client to borrow", 6, 6, "down"],
      ["CABINET", "A piece of furniture with shelves behind doors", 2, 11, "across"],
      ["LIBRARY", "A room where books are kept", 4, 6, "down"],
      ["BILL", "A printed request for payment", 0, 7, "across"],
      ["RAINBOW", "Bands of color seen in the sky after rain", 1, 2, "down"],
      ["RELIEF", "The feeling that comes when something burdensome is removed or reduced", 0, 3, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-14", "title": "A Quiet Minute", "width": 12, "height": 12,
    "legacyCells": {"13":[185],"14":[208],"15":[231,325],"16":[254],"21":[164],"23":[306],"27":[348],"30":[281],"33":[165],"35":[307],"37":[210],"39":[143,371],"40":[166],"41":[189],"42":[212,304],"44":[279],"45":[166,280],"46":[281],"47":[282,308],"49":[233],"51":[394],"54":[327],"57":[167],"59":[309],"61":[28,256],"62":[51],"63":[74,417],"64":[97],"66":[306,350],"67":[208,329],"68":[352],"69":[168,375],"71":[310],"73":[279],"75":[440],"79":[209],"89":[95],"90":[96],"91":[97,210],"92":[98],"93":[99],"103":[211],"115":[212],"122":[78],"123":[79],"124":[80],"125":[81],"126":[82],"127":[83,213],"128":[84],"129":[85],"139":[214]},
    "words": [
      ["BIRD", "An animal with feathers and a beak", 0, 5, "across"],
      ["DEBT", "Money or goods or services owed by one person to another", 1, 2, "down"],
      ["MEMORY", "Something that is remembered", 3, 0, "down"],
      ["GAME", "A contest with rules to determine a winner", 0, 1, "across"],
      ["MODE", "A setting that changes how a device works", 2, 3, "across"],
      ["WELL", "A deep hole dug to reach water", 6, 1, "down"],
      ["LANE", "A narrow way or road", 5, 5, "across"],
      ["SMOKE", "The gray cloud that rises from a fire", 9, 0, "down"],
      ["TOWN", "An urban area with a fixed boundary that is smaller than a city", 7, 3, "across"],
      ["LUNCH", "A midday meal", 11, 0, "down"],
      ["ADDRESS", "The details that tell you where someone lives", 7, 4, "down"],
      ["PROPOSAL", "A suggested plan put forward for others to consider", 1, 10, "across"],
      ["VIDEO", "A recording of moving images", 4, 7, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-15", "title": "Morning Pages", "width": 12, "height": 16,
    "legacyCells": {"22":[84],"34":[85],"46":[86],"55":[213],"58":[87],"65":[282],"66":[298],"67":[229,314],"68":[330],"69":[346],"70":[88,362],"71":[378],"79":[245],"85":[43],"86":[59],"87":[75],"88":[91],"89":[107,329],"90":[123],"91":[139,261],"92":[155,211],"101":[330],"104":[227],"113":[331],"116":[243],"125":[332],"128":[259],"131":[257],"133":[257,279],"134":[273],"135":[289],"136":[293,305],"137":[321,333],"140":[275],"143":[258],"145":[295],"148":[309],"150":[164],"152":[291],"155":[259],"157":[311],"160":[325],"162":[180],"164":[307],"167":[260],"169":[327],"171":[84],"172":[100,341],"173":[116],"174":[132,196],"179":[261],"184":[357],"186":[179,212],"187":[180],"188":[181],"189":[182],"190":[183],"191":[184,262]},
    "words": [
      ["SIGN", "Write your name on a document", 2, 14, "across"],
      ["LONG", "The opposite of short", 6, 11, "down"],
      ["CIVIL", "Polite and respectful, even in a disagreement", 4, 10, "down"],
      ["BLOCK", "Stop something from passing through", 0, 11, "across"],
      ["BOAT", "A small vessel for travel on water", 1, 10, "down"],
      ["FRANK", "Open and honest, even when the truth is awkward", 5, 6, "down"],
      ["MODIFIED", "Changed in form or character", 0, 7, "across"],
      ["DIVORCE", "The legal dissolution of a marriage", 8, 6, "down"],
      ["GOLDEN", "Having the color of gold", 5, 15, "across"],
      ["BROKEN", "In pieces or no longer working", 11, 9, "down"],
      ["MAKE", "Create something", 7, 3, "down"],
      ["QUARTER", "One of four equal parts", 4, 5, "across"],
      ["STYLE", "How something is done or how it happens", 10, 0, "down"]
    ]
  },
  {
    "category": "easy", "id": "easy-16", "title": "In the Bag", "width": 13, "height": 13,
    "legacyCells": {"18":[306],"19":[326],"20":[346],"21":[108,366],"34":[109],"47":[110],"51":[141],"56":[186,363],"57":[187],"58":[188],"59":[189],"60":[111,190],"64":[142],"66":[268],"67":[288],"68":[308],"69":[328,364],"73":[112,187],"74":[207],"75":[227],"76":[247],"77":[143,267],"82":[365],"86":[113],"90":[144],"95":[179,366],"96":[199],"97":[219],"98":[239],"99":[114,259],"100":[279],"103":[145],"105":[267],"106":[177,268],"107":[269],"108":[270,367],"116":[146],"119":[197],"122":[292],"126":[330],"127":[331],"128":[332],"129":[147,333],"132":[217],"135":[293],"145":[171,237],"146":[172],"147":[173],"148":[174,294],"149":[175],"158":[257],"161":[295]},
    "words": [
      ["USAGE", "Accepted or habitual practice", 1, 11, "across"],
      ["HUGE", "Unusually great in size or amount or degree or especially extent or scope", 5, 8, "down"],
      ["INPUT", "Signal going into an electronic system", 2, 7, "down"],
      ["MILE", "A unit of length equal to 1,760 yards or 5,280 feet", 0, 8, "across"],
      ["WORSE", "Less good than before", 4, 3, "down"],
      ["INFO", "Short for information", 0, 5, "across"],
      ["WATER", "The clear liquid people drink and plants need", 3, 4, "across"],
      ["SORTED", "Put into groups or arranged in order", 3, 7, "across"],
      ["STORAGE", "Space used to keep things for later", 8, 0, "down"],
      ["PLUS", "The symbol used for addition", 4, 1, "across"],
      ["ALBUM", "One or more recordings issued together", 7, 5, "across"],
      ["COMPARE", "Examine and note the similarities or differences of", 12, 2, "down"],
      ["COME", "Move toward the person speaking", 8, 9, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-17", "title": "The Daily Mix", "width": 11, "height": 13,
    "legacyCells": {"18":[78],"26":[291,316],"27":[317],"28":[318],"29":[96,319],"30":[320],"31":[321],"32":[40,322],"37":[292],"40":[114],"43":[41],"45":[303],"46":[321],"47":[339],"48":[293,357],"49":[375],"51":[132],"54":[42],"59":[294],"65":[43],"68":[349],"70":[295],"72":[370],"73":[388],"74":[63,406],"75":[424],"76":[44,442],"78":[68],"79":[86,367],"80":[104],"81":[122,296],"82":[140],"85":[81],"90":[385],"95":[25],"96":[43,99],"97":[61],"98":[79],"101":[403],"105":[88],"107":[117],"112":[421],"114":[110],"115":[128],"116":[106,146],"117":[164],"118":[135,182],"127":[124],"137":[65],"138":[83,142],"139":[101],"140":[119],"141":[137]},
    "words": [
      ["TOOL", "An item used to carry out a task", 6, 8, "down"],
      ["SHORT", "Cheat someone by not returning him enough money", 3, 10, "across"],
      ["PLANT", "Buildings for carrying on industrial labor", 4, 12, "across"],
      ["SAINT", "Person of exceptional holiness", 8, 5, "down"],
      ["GIVE", "The elasticity of something that can be stretched and returns to its original length", 6, 8, "across"],
      ["BASIC", "Reduced to the simplest and most significant form possible without loss of generality", 5, 6, "across"],
      ["MAGIC", "Any art that invokes supernatural powers", 10, 1, "down"],
      ["MAXIMUM", "The largest possible quantity", 3, 2, "across"],
      ["MODERN", "A contemporary person", 4, 1, "down"],
      ["VICE", "A specific form of evildoing", 7, 0, "down"],
      ["FUNNY", "Arousing or provoking laughter", 0, 7, "across"],
      ["QUICK", "Accomplished rapidly and without delay", 2, 5, "down"],
      ["GUIDE", "Someone employed to conduct others", 0, 4, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-18", "title": "Keep It Simple", "width": 13, "height": 13,
    "legacyCells": {"18":[244],"22":[316],"24":[321],"30":[390],"31":[269,391],"32":[392],"33":[393],"35":[317],"37":[322],"44":[294],"48":[318],"50":[323],"57":[181,319],"58":[182],"59":[183,191],"60":[184],"61":[185,319],"62":[186],"63":[187,324],"66":[87],"72":[192],"77":[87],"79":[88],"84":[197],"85":[193,222],"86":[247],"87":[272],"88":[297],"89":[322],"90":[112,347],"92":[89],"98":[194],"103":[137],"105":[90],"111":[195],"116":[162],"118":[91],"120":[269],"125":[162,224],"126":[249],"127":[274],"128":[299],"129":[187,324],"131":[92],"133":[270],"138":[163],"142":[212],"144":[54,93],"145":[79],"146":[104,271],"147":[129],"148":[154],"149":[179],"150":[204],"151":[164,229],"157":[94],"159":[272],"164":[165]},
    "words": [
      ["RESERVE", "Formality and propriety of manner", 4, 4, "across"],
      ["CORE", "The center of an object", 11, 0, "down"],
      ["NEAR", "Not far distant in time or space or degree or circumstances", 5, 0, "down"],
      ["FEED", "Food for domestic livestock", 3, 2, "across"],
      ["PAIR", "A set of two similar things considered as a unit", 9, 0, "down"],
      ["STUFF", "The tangible substance that goes into the makeup of a physical object", 7, 3, "down"],
      ["AUCTION", "A variety of bridge in which tricks made in excess of the contract are scored toward game", 5, 6, "across"],
      ["ANSWER", "A statement that solves a problem or explains how to solve the problem", 12, 4, "down"],
      ["WHOLE", "All of something including all its component elements or parts", 7, 9, "across"],
      ["WALK", "Use one's feet to advance", 8, 8, "down"],
      ["CRITICAL", "Marked by a tendency to find and call attention to errors and flaws", 0, 11, "across"],
      ["EXIT", "An opening that permits escape or release", 3, 8, "down"],
      ["ABSTRACT", "A concept or idea not associated with any specific instance", 1, 4, "down"]
    ]
  },
  {
    "category": "easy", "id": "easy-19", "title": "A Change of Pace", "width": 13, "height": 14,
    "legacyCells": {"14":[41],"27":[42,258],"28":[259],"29":[260],"30":[261],"31":[262],"32":[263],"33":[264],"40":[43],"53":[44],"66":[25,45],"67":[26],"68":[27],"69":[28,130],"82":[153],"90":[300],"93":[42,201],"94":[65],"95":[88,176],"96":[111],"97":[134],"98":[157],"103":[301],"106":[202],"108":[199],"116":[302],"119":[203],"121":[57,222],"122":[80],"123":[103,141],"124":[126],"126":[53,62],"127":[85],"128":[108],"129":[131,303],"131":[60],"132":[83,204],"133":[106],"134":[129,245],"136":[142],"139":[54],"142":[304],"145":[205],"147":[268],"149":[143],"152":[55],"155":[305],"158":[206],"160":[291],"162":[144],"165":[56],"168":[306],"174":[144],"175":[145,167],"176":[190],"177":[213],"178":[57,236],"179":[259],"181":[307]},
    "words": [
      ["COMPLETE", "Come or bring to a finish or an end", 4, 4, "down"],
      ["LOGO", "A company emblem or device", 3, 9, "across"],
      ["GUEST", "A visitor to whom hospitality is extended", 6, 8, "down"],
      ["REMAIN", "Stay the same", 1, 7, "across"],
      ["RIDING", "The sport of siting on the back of a horse while controlling its movements", 2, 6, "down"],
      ["NINE", "The cardinal number that is the sum of eight and one", 0, 10, "across"],
      ["DISC", "Something with a round shape resembling a flat circular plate", 0, 5, "across"],
      ["STABLE", "A farm building for housing horses or other livestock", 4, 13, "across"],
      ["HOTEL", "A building where travelers can pay for lodging and meals and other services", 9, 8, "down"],
      ["HEAT", "A form of energy that is transferred by a difference in temperature", 8, 9, "across"],
      ["PROTOCOL", "Forms of ceremony and etiquette observed by diplomats and heads of state", 12, 5, "down"],
      ["GRAND", "The cardinal number that is the product of 10 and 100", 1, 0, "down"],
      ["REQUEST", "Express the need or desire for", 0, 2, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-20", "title": "Good Company", "width": 14, "height": 15,
    "legacyCells": {"22":[238],"23":[250],"24":[201,262],"25":[274],"38":[213],"40":[56],"52":[225],"54":[68],"64":[260],"65":[272],"66":[237,284],"67":[296],"68":[80,308],"82":[92],"85":[253],"86":[254],"87":[255],"88":[256],"89":[257],"90":[102,258],"93":[253,279],"94":[280],"95":[281],"96":[104,282],"104":[114],"107":[265],"110":[116],"117":[321],"118":[126,333],"119":[345],"120":[357],"121":[277,369],"122":[381],"132":[138],"135":[289],"138":[173],"143":[142],"144":[154],"145":[166],"146":[150,178],"148":[18],"149":[30,301],"150":[42],"151":[54],"152":[66,174],"153":[78],"163":[313],"166":[175],"180":[176],"194":[177],"201":[63],"202":[64],"203":[65],"204":[66],"205":[67],"206":[68],"207":[69],"208":[70,178]},
    "words": [
      ["WINTER", "The coldest season of the year", 12, 1, "down"],
      ["FACE", "The front of the human head from the forehead to the chin and ear to ear", 8, 6, "across"],
      ["QUEEN", "The only fertile female in a colony of social insects such as bees and ants and termites", 7, 4, "across"],
      ["EDGE", "The boundary of a surface", 10, 0, "down"],
      ["DIET", "A prescribed selection of foods", 7, 1, "across"],
      ["FACTOR", "An abstract part of something", 9, 5, "down"],
      ["POTTER", "Do random, unplanned work or activities or spend time idly", 7, 10, "across"],
      ["LAUNCH", "A motorboat with an open deck or a half deck", 4, 8, "across"],
      ["SPACE", "The area beyond Earth's atmosphere", 6, 5, "down"],
      ["BLUE", "The color of a clear daytime sky", 2, 10, "across"],
      ["FAMOUS", "Widely known and esteemed", 0, 6, "across"],
      ["SECURE", "Get by special effort", 12, 8, "down"],
      ["PIPELINE", "Gossip spread by spoken communication", 4, 14, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-21", "title": "Around the Corner", "width": 10, "height": 15,
    "legacyCells": {"11":[66,113],"12":[67],"13":[68],"14":[69],"21":[114],"27":[145],"31":[115],"33":[257],"37":[146],"41":[116],"43":[258],"47":[147],"51":[117],"53":[259],"55":[20],"57":[148],"61":[118,167],"62":[168],"63":[169,260],"64":[170],"65":[36,171],"66":[172],"67":[149,173],"73":[261],"75":[52],"77":[150],"82":[313],"85":[68],"91":[228],"92":[229,314],"93":[230],"94":[34,231],"95":[84,232],"97":[66],"99":[180],"102":[315],"104":[35],"106":[291],"107":[82,307],"108":[323],"109":[196,339],"112":[316],"114":[36],"117":[98],"119":[212],"122":[317],"124":[37,101],"125":[117],"126":[133],"127":[114,149],"129":[228],"132":[318],"134":[38],"142":[319]},
    "words": [
      ["FALL", "A sudden drop from an upright position", 5, 10, "across"],
      ["CLUB", "A team of professional baseball players who play and travel together", 9, 8, "down"],
      ["MADE", "Produced by a manufacturing process", 7, 8, "down"],
      ["CARE", "The work of providing treatment for or attending to someone or something", 3, 12, "across"],
      ["TRUCK", "An automotive vehicle suitable for hauling", 4, 8, "down"],
      ["BOOTY", "Goods or money obtained illegally", 0, 9, "across"],
      ["FORWARD", "At or near or directed toward the front", 2, 7, "down"],
      ["PUSSY", "Obscene terms for female genitals", 5, 4, "down"],
      ["LECTURE", "A lengthy rebuke", 0, 6, "across"],
      ["PIECE", "A separate part of a whole", 3, 2, "down"],
      ["BUDGET", "A sum of money allocated for a particular purpose", 7, 1, "down"],
      ["MENTAL", "Involving the mind or an intellectual process", 1, 0, "down"],
      ["MESH", "The number of openings per linear inch of a screen", 0, 1, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-22", "title": "Little by Little", "width": 11, "height": 15,
    "legacyCells": {"15":[203],"20":[199],"26":[216],"29":[237,261],"30":[250],"31":[212,263],"32":[276],"37":[229,232],"38":[245],"39":[258],"40":[262,271],"42":[225],"48":[242],"51":[263],"53":[238],"62":[264],"69":[132],"70":[133],"71":[134],"72":[135],"73":[136,265],"74":[137],"82":[147],"93":[94,160],"94":[95],"95":[96],"96":[97],"97":[98],"101":[56,170],"102":[171],"103":[172],"104":[173],"112":[69],"123":[82],"126":[94],"133":[298],"134":[95,311],"135":[324],"136":[337],"137":[107,350],"138":[363],"148":[120],"158":[21],"159":[34,133],"160":[47],"161":[60],"162":[73],"163":[86]},
    "words": [
      ["NEXT", "Nearest in space or position", 3, 3, "across"],
      ["STORM", "Behave violently, as if in state of a great anger", 7, 1, "down"],
      ["FONT", "A specific size and style of type within a type family", 4, 0, "down"],
      ["BECOME", "Enter or assume a certain state or condition", 2, 6, "across"],
      ["SHOP", "A mercantile establishment for the retail sale of goods or services", 6, 2, "across"],
      ["CODE", "A coding system used for transmitting messages requiring brevity or secrecy", 9, 0, "down"],
      ["COLD", "The absence of heat", 5, 5, "down"],
      ["LEARN", "Gain knowledge or skills", 4, 8, "across"],
      ["WIND", "To move or cause to move in a sinuous, spiral, or circular course", 1, 9, "across"],
      ["WIDE", "Broad in scope or content", 2, 8, "down"],
      ["VENDOR", "Someone who promotes or exchanges goods or services for money", 0, 12, "across"],
      ["LOVE", "A strong positive emotion of regard and affection", 5, 10, "down"],
      ["CENTER", "The piece of ground in the outfield directly ahead of the catcher", 3, 14, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-23", "title": "A Quick Think", "width": 13, "height": 13,
    "legacyCells": {"16":[206],"17":[207],"18":[208,371],"19":[209],"31":[393],"36":[313],"38":[243],"44":[415],"47":[81,152],"48":[174],"49":[196,335],"50":[218],"51":[240,244],"55":[412],"56":[413],"57":[414,437],"58":[307,415],"60":[103],"62":[357],"64":[245],"71":[329],"73":[125],"75":[379],"77":[246],"82":[57],"83":[79],"84":[101,351],"85":[123],"86":[145,147],"88":[401],"90":[247],"94":[297],"97":[373],"99":[169],"101":[423],"103":[248],"105":[316],"106":[317],"107":[318,319],"108":[319],"109":[320],"110":[321,395],"112":[191],"114":[445],"116":[249],"120":[341],"132":[191],"133":[192,363],"134":[193],"135":[194],"136":[195],"137":[196],"146":[385],"159":[53,407],"160":[54],"161":[55],"162":[56],"163":[57],"164":[58]},
    "words": [
      ["DAYS", "The time during which someone's life continues", 2, 4, "across"],
      ["EASY", "Posing no difficulty", 5, 0, "down"],
      ["FUEL", "A substance that can be consumed to produce energy", 2, 1, "across"],
      ["STONE", "Of any of various dull tannish or grey colors", 6, 3, "down"],
      ["GROVE", "A small growth of trees without underbrush", 3, 6, "across"],
      ["STREAM", "A natural body of running water flowing on or under the earth", 8, 2, "down"],
      ["CHEESE", "A solid food prepared from the pressed curd of milk", 0, 8, "across"],
      ["SOLAR", "Relating to or derived from the sun or utilizing the energies of the sun", 7, 3, "across"],
      ["CLIMATE", "The prevailing psychological state", 10, 1, "down"],
      ["PROBLEM", "A state of difficulty that needs to be resolved", 12, 1, "down"],
      ["FEMALE", "Characteristic of or peculiar to a woman", 3, 6, "down"],
      ["MANUAL", "A small handbook", 1, 10, "across"],
      ["ENOUGH", "An adequate quantity", 2, 12, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-24", "title": "Take Your Time", "width": 12, "height": 13,
    "legacyCells": {"16":[158],"17":[159,257],"18":[160],"19":[161],"21":[167],"23":[188],"26":[258],"29":[258],"33":[191],"35":[212],"38":[282],"41":[259,387],"42":[388],"43":[389],"44":[390],"45":[215,391],"46":[392],"47":[236,393],"49":[43],"50":[67,306],"51":[91],"52":[115],"53":[139,260],"57":[239],"59":[260],"62":[330],"66":[324],"67":[280,325],"68":[326],"69":[263,327],"70":[328],"79":[304],"88":[292],"89":[316],"90":[340],"91":[328,364],"92":[388],"93":[412],"94":[436],"100":[293],"103":[352],"112":[294],"115":[376],"124":[295],"126":[399],"127":[400],"128":[401],"129":[402],"130":[403],"131":[404],"136":[296],"148":[77,297],"149":[101],"150":[125],"151":[149],"152":[173],"153":[197],"154":[221]},
    "words": [
      ["STAGE", "A specific identifiable position in a continuum or series or especially in a process", 0, 4, "across"],
      ["LAKE", "A purplish red pigment prepared from lac or cochineal", 5, 0, "down"],
      ["FLOW", "Move or progress freely as if in a stream", 3, 1, "across"],
      ["AUTO", "A motor vehicle with four wheels", 2, 1, "down"],
      ["KINGDOM", "A domain in which something is dominant", 4, 3, "across"],
      ["JUDGE", "An authority who is able to estimate worth or quality", 9, 0, "down"],
      ["TRIED", "Tested and proved useful or correct", 5, 5, "across"],
      ["SAME", "Closely similar or comparable in kind or quality or quantity or degree", 11, 0, "down"],
      ["REDUCE", "Cut down on", 7, 4, "down"],
      ["BINDING", "The capacity to attract and hold something", 3, 7, "across"],
      ["REMOVE", "Degree of figurative distance or separation", 5, 10, "across"],
      ["BRANCH", "A division of some larger or more complex organization", 4, 6, "down"],
      ["HOUSING", "Structures collectively in which people are housed", 3, 12, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-25", "title": "Small Wonders", "width": 13, "height": 15,
    "legacyCells": {"17":[88],"18":[117],"19":[146,301],"20":[175],"23":[239],"32":[330],"36":[240],"43":[120],"45":[99,359],"46":[128],"47":[157],"48":[186],"49":[215,241],"50":[244],"51":[273],"54":[280],"56":[149],"58":[388],"62":[242],"67":[281],"69":[178,474],"70":[475],"71":[417,476],"72":[477],"75":[243],"80":[282],"82":[207],"84":[446],"86":[146,327],"87":[356],"88":[244,385],"89":[414],"93":[283],"95":[236],"97":[475],"99":[147],"101":[245],"105":[326],"106":[284,327],"107":[328],"108":[265,329],"109":[330],"112":[148],"119":[285],"123":[332],"125":[149],"136":[361],"138":[150],"147":[332],"148":[333],"149":[334,390],"150":[335],"151":[151,336],"152":[337],"153":[338],"162":[419],"164":[152],"175":[448],"183":[276],"184":[305],"185":[334],"186":[363],"187":[392],"188":[421,477],"189":[450]},
    "words": [
      ["REVENUE", "The entire amount of income before any deductions are made", 6, 0, "down"],
      ["MARK", "Attach a tag or label to", 3, 1, "across"],
      ["CENT", "A fractional monetary unit of several countries", 3, 5, "across"],
      ["PACKET", "A collection of things wrapped or boxed together", 4, 2, "down"],
      ["WRITE", "Produce a literary work", 0, 8, "across"],
      ["LUXURY", "Something that is an indulgence rather than a necessity", 2, 3, "down"],
      ["VIEWING", "The display of a motion picture", 5, 3, "across"],
      ["DRIVING", "Acting with vigor", 10, 0, "down"],
      ["RENT", "Let for money", 7, 6, "across"],
      ["RELATED", "Connected by kinship, common origin, or marriage", 8, 5, "down"],
      ["PROCESS", "Deal with in a routine way", 3, 11, "across"],
      ["PROFIT", "Derive a benefit from", 6, 8, "down"],
      ["PROMOTE", "Contribute to the progress or growth of", 0, 14, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-26", "title": "In the Neighborhood", "width": 14, "height": 14,
    "legacyCells": {"17":[26],"24":[279],"31":[27],"38":[280],"43":[100],"44":[101],"45":[28,102],"46":[103],"52":[281],"59":[29],"62":[153],"63":[165],"64":[177],"65":[189],"66":[201,282],"67":[213],"68":[225],"69":[237],"73":[30],"80":[283],"87":[31,279],"88":[291],"89":[303],"90":[54,315],"92":[49],"94":[284],"96":[18],"101":[32],"104":[55],"106":[50,135],"107":[136],"108":[137,285],"109":[138],"110":[30,139],"111":[140],"117":[15],"118":[27,56],"119":[39],"120":[51],"122":[286],"124":[42],"132":[57],"134":[52],"138":[54],"143":[364],"144":[376],"145":[388],"146":[58,400],"147":[77,412],"161":[89],"172":[34],"173":[46],"174":[58],"175":[70,101],"176":[82],"189":[113]},
    "words": [
      ["MEET", "Get together socially or for a specific purpose", 4, 8, "across"],
      ["GATE", "A movable barrier in a fence or wall", 8, 5, "down"],
      ["THEME", "A unifying idea that is a recurrent element in literary or artistic work", 6, 5, "down"],
      ["UPPER", "The higher of two berths", 2, 10, "across"],
      ["UNIT", "Any division of quantity accepted as a standard of measurement or exchange", 2, 6, "across"],
      ["READ", "Interpret something that is written or printed", 7, 9, "down"],
      ["CLEAN", "A weightlift in which the barbell is lifted to shoulder height and then jerked overhead", 3, 12, "across"],
      ["SERIOUS", "Concerned with work or important matters rather than play or trivialities", 3, 0, "down"],
      ["FARM", "Collect fees or profits", 0, 3, "across"],
      ["AUTHOR", "Someone who originates or causes or initiates something", 7, 7, "across"],
      ["ULTIMATE", "The finest or most superior quality of its kind", 10, 0, "down"],
      ["BOOT", "Footwear that covers the whole foot and lower leg", 12, 5, "down"],
      ["MARRIAGE", "Two people who are married to each other", 5, 4, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-27", "title": "A Day Off", "width": 13, "height": 14,
    "legacyCells": {"14":[244],"16":[394],"18":[318],"22":[295],"27":[270],"29":[395],"31":[272,344],"32":[273],"33":[274],"34":[275],"35":[276,296],"40":[296,375],"41":[376],"42":[377,396],"43":[378],"44":[370,379],"48":[297],"53":[322],"55":[397],"57":[171,396],"58":[197],"59":[223],"60":[249,287],"61":[275,298],"66":[348],"73":[288],"75":[238],"84":[124],"86":[289],"88":[239],"96":[304],"97":[150,330],"98":[356],"99":[290,382],"101":[240],"110":[176],"112":[189,291],"113":[215],"114":[241],"115":[267],"116":[293],"123":[202],"127":[242],"136":[228],"144":[197],"145":[198],"146":[199],"147":[200],"148":[201],"149":[202,254],"150":[203],"151":[204],"162":[280],"175":[246,306],"176":[272],"177":[298],"178":[324],"179":[350],"180":[376]},
    "words": [
      ["HEAVY", "An actor who plays villainous roles", 1, 0, "down"],
      ["ALLOW", "Consent to, give permission", 0, 3, "across"],
      ["GULF", "An arm of a sea or ocean partly enclosed by land", 3, 0, "down"],
      ["BOWL", "A round vessel that is open at the top", 5, 0, "down"],
      ["LAYER", "Single thickness of usually some homogeneous substance", 4, 4, "across"],
      ["OPERA", "A drama set to music", 4, 2, "across"],
      ["FAIR", "A traveling show", 9, 0, "down"],
      ["EVENT", "A special set of circumstances", 8, 3, "down"],
      ["JEAN", "A coarse durable twill-weave cotton fabric", 4, 7, "across"],
      ["THIRD", "One of three equal parts of a divisible whole", 7, 8, "across"],
      ["TOPIC", "Some situation or event that is thought about", 10, 4, "down"],
      ["DECISION", "A position or opinion or judgment reached after consideration", 6, 5, "down"],
      ["ADDITION", "A component that is added to something to improve it", 0, 11, "across"],
      ["NORMAL", "In accordance with scientific laws", 5, 13, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-28", "title": "Halfway There", "width": 13, "height": 15,
    "legacyCells": {"17":[161],"18":[182],"19":[119,203],"20":[224],"21":[245],"32":[120],"45":[121],"50":[61],"58":[122],"63":[82],"69":[226],"70":[247],"71":[123,268],"72":[289],"73":[310],"74":[331],"75":[352],"76":[103,373],"84":[124],"89":[124],"100":[34],"102":[145],"105":[194],"107":[178],"110":[161],"111":[162],"112":[163],"113":[55,164],"114":[165],"115":[166],"118":[215],"120":[179],"122":[59],"126":[76],"131":[150,236],"132":[151],"133":[152,180],"134":[153],"135":[80,154],"136":[155],"137":[156,212],"139":[97,99],"140":[120],"141":[141,224],"142":[162],"144":[257],"146":[181],"148":[101],"150":[233],"154":[225],"157":[278],"159":[182],"161":[122],"163":[72,254],"164":[73],"165":[74],"166":[75],"167":[76,226],"168":[77],"176":[275],"180":[227],"189":[296]},
    "words": [
      ["SHARING", "Using or enjoying something jointly with others", 0, 10, "across"],
      ["VISIT", "Go to certain places as for sightseeing", 1, 7, "down"],
      ["MILK", "A white nutritious liquid secreted by mammals and used as food by human beings", 5, 8, "down"],
      ["GRACE", "Make more attractive by adding ornament, colour, etc", 3, 7, "down"],
      ["GUARD", "A person who keeps watch over something or someone", 7, 9, "down"],
      ["AFFECT", "The conscious subjective aspect of feeling or emotion", 6, 12, "across"],
      ["LOCK", "A fastener fitted to a door or drawer to keep it firmly closed", 11, 9, "down"],
      ["HOLE", "An opening into or through something", 8, 10, "across"],
      ["MUCH", "A great amount or extent", 9, 6, "down"],
      ["RETURN", "Document giving the tax collector information about the taxpayer's tax liability", 5, 8, "across"],
      ["BUTTON", "An electrical switch operated by pressing", 11, 2, "down"],
      ["CHECKOUT", "The latest time for vacating a hotel room", 3, 5, "across"],
      ["POCKET", "A small pouch inside a garment for carrying small articles", 6, 0, "down"],
      ["REPLY", "The speech act of continuing a conversational exchange", 3, 1, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-29", "title": "Find Your Feet", "width": 12, "height": 13,
    "legacyCells": {"16":[113],"17":[114],"18":[115],"19":[116],"20":[117,131],"21":[118],"25":[352],"32":[158],"34":[261],"37":[353],"41":[71,182],"42":[183],"43":[184],"44":[185],"46":[262],"49":[266,354],"50":[293],"51":[320],"52":[347],"53":[72,374],"56":[212],"57":[213],"58":[214,263],"59":[215],"61":[355],"65":[73],"67":[286],"70":[264],"73":[356],"77":[46,74],"78":[73],"79":[100,313],"80":[127],"85":[357],"91":[340],"97":[358],"100":[171],"103":[367],"112":[126,172],"113":[153],"114":[180],"115":[207,394],"116":[234,315],"117":[261],"124":[173],"128":[316],"136":[174],"138":[161],"139":[188],"140":[215,317],"141":[242],"148":[175],"152":[318]},
    "words": [
      ["RAIL", "A barrier consisting of a horizontal bar and supports", 4, 6, "across"],
      ["BEAR", "Massive plantigrade carnivorous or omnivorous mammals with long shaggy coats and strong claws", 5, 2, "down"],
      ["BORN", "Brought into existence", 4, 3, "across"],
      ["RING", "A toroidal shape", 8, 0, "down"],
      ["REFORM", "A campaign aimed to correct abuses or malpractices", 3, 1, "across"],
      ["GIRL", "A youthful female person", 7, 4, "across"],
      ["YARD", "A unit of length equal to 3 feet", 10, 1, "down"],
      ["NIGHT", "The time after sunset and before sunrise while it is dark outside", 7, 4, "down"],
      ["PRETTY", "Pleasing by delicacy or grace", 3, 9, "across"],
      ["LARGE", "Above average in size or number or quantity or magnitude or extent", 0, 4, "across"],
      ["TALKING", "An exchange of ideas via conversation", 1, 1, "down"],
      ["TOLL", "Value measured by what must be given or done or undergone to obtain something", 8, 8, "down"],
      ["GOLD", "A deep yellow color", 5, 11, "across"],
      ["SPEED", "Distance travelled per unit time", 4, 7, "down"]
    ]
  },
  {
    "category": "easy", "id": "easy-30", "title": "A Clear Morning", "width": 14, "height": 14,
    "legacyCells": {"19":[248],"24":[230],"27":[285],"30":[268],"33":[35,268],"34":[55],"35":[75,332],"36":[95],"37":[115],"38":[135,250],"39":[155],"40":[175],"41":[195,286],"44":[269],"47":[288],"49":[333],"52":[270],"55":[287],"58":[270],"61":[142,308],"62":[143],"63":[144,334],"64":[145],"65":[146],"66":[147,290],"67":[148],"69":[288],"71":[263],"72":[271,283],"73":[303],"74":[323],"75":[328,343],"77":[335],"80":[310],"86":[272],"91":[336],"95":[221],"97":[221],"100":[273],"105":[112,337],"106":[132],"107":[152],"108":[172],"109":[192,222],"110":[212],"111":[232,241],"114":[274,410],"115":[411],"116":[313,412],"117":[413],"118":[414],"123":[223],"125":[261],"130":[333],"135":[361],"136":[381],"137":[224,401],"138":[421],"139":[281,441],"144":[353],"151":[225],"153":[301],"158":[373],"165":[226],"167":[321],"172":[393],"186":[413]},
    "words": [
      ["AFFILIATE", "A subordinate or subsidiary associate", 4, 2, "across"],
      ["TELL", "Express in words", 13, 0, "down"],
      ["FALSE", "Not in accordance with the fact or reality or actuality", 5, 0, "down"],
      ["SURGERY", "Medical treatment by means of an operation", 4, 4, "across"],
      ["MICRO", "Extremely small in scale or scope or capability", 10, 0, "down"],
      ["FORMER", "The first of two or the first mentioned of two", 7, 1, "down"],
      ["RELEASE", "Grant freedom to", 6, 7, "across"],
      ["VOICE", "The distinctive quality or pitch or condition of a person's speech", 0, 5, "across"],
      ["ACCOUNT", "A record or narrative description of past events", 2, 1, "down"],
      ["TIMES", "The word read aloud for × in a sum", 1, 8, "across"],
      ["LATEST", "The most recent news or development", 11, 5, "down"],
      ["SPEND", "Pass time in a specific way", 8, 9, "across"],
      ["LEADER", "A person who rules or guides or inspires others", 13, 5, "down"],
      ["MODULE", "One of the inherent cognitive or perceptual powers of the mind", 4, 7, "down"]
    ]
  },
  {
    "category": "easy", "id": "easy-31", "title": "A Walk Around", "width": 14, "height": 15,
    "legacyCells": {"21":[97],"35":[98,218],"36":[239],"37":[260],"38":[281],"39":[302],"40":[323],"49":[99],"63":[100],"75":[45],"77":[101],"82":[179],"87":[308],"89":[46,214],"90":[235],"91":[102,256],"92":[111,277],"96":[200],"101":[309],"103":[47],"106":[132],"108":[220,255],"109":[256],"110":[221,257],"111":[258],"115":[310],"117":[48],"120":[153],"122":[221],"124":[242],"129":[311],"131":[49],"134":[174],"136":[222],"143":[312],"145":[50],"148":[195,299],"149":[300],"150":[223,301],"151":[302],"155":[253],"156":[274],"157":[295,313],"158":[316],"159":[51,337],"160":[358],"162":[216],"164":[224],"166":[360],"171":[314],"178":[225,264],"179":[265],"180":[266,361],"181":[267],"194":[362],"205":[106],"206":[127],"207":[148],"208":[169,363]},
    "words": [
      ["MANNER", "How something is done or how it happens", 10, 6, "down"],
      ["MEAN", "Have as a logical consequence", 9, 7, "across"],
      ["ROOF", "A protective covering that covers or forms the top of a building", 9, 12, "across"],
      ["MENU", "A list of dishes available at a restaurant", 7, 10, "across"],
      ["WOOD", "The hard fibrous lignified substance under the bark of trees", 12, 10, "down"],
      ["KIND", "A category of things distinguished by some common characteristic or quality", 8, 14, "across"],
      ["SCHEME", "A statement that evades the question by cleverness or trickery", 8, 5, "down"],
      ["CHAT", "An informal conversation", 12, 4, "down"],
      ["EYES", "Opinion or judgment", 4, 6, "across"],
      ["DEFENSE", "Protection from harm", 5, 4, "down"],
      ["ESTATE", "Everything you own", 7, 0, "down"],
      ["STATUS", "The relative position or standing of things or especially persons in a society", 6, 2, "across"],
      ["PROPER", "Marked by suitability or rightness or appropriateness", 0, 11, "across"],
      ["FREEDOM", "Immunity from an obligation or duty", 3, 5, "down"]
    ]
  },
  {
    "category": "easy", "id": "easy-32", "title": "Extra Room", "width": 13, "height": 15,
    "legacyCells": {"14":[291],"20":[256],"25":[416],"27":[292],"30":[195],"32":[216],"33":[233,257],"34":[250],"35":[267],"36":[78,284],"37":[301],"38":[318,417],"40":[293],"43":[212],"46":[258],"49":[79],"51":[418],"53":[294],"55":[191],"56":[208,229],"57":[225],"58":[242],"59":[259],"62":[80],"64":[419],"66":[295],"69":[246],"75":[81],"77":[420],"79":[296,393],"80":[394],"81":[395],"82":[263,396],"83":[397],"85":[108,244],"86":[125],"87":[142],"88":[82,159],"95":[280],"98":[261],"102":[154],"109":[219],"111":[222,278],"112":[223],"113":[224],"114":[225],"115":[171,226],"120":[343],"121":[360],"122":[236,377],"123":[394],"124":[295,411],"128":[188],"135":[253],"137":[312],"141":[205],"148":[270],"154":[222],"161":[287],"174":[304],"187":[321]},
    "words": [
      ["TRUST", "Have confidence or faith in", 10, 1, "down"],
      ["SALT", "White crystalline form of especially sodium chloride used to season and preserve food", 6, 6, "across"],
      ["MONITOR", "Keep tabs on", 5, 2, "across"],
      ["BRIEF", "Give essential information to someone", 12, 0, "down"],
      ["BOOK", "Engage for a performance", 7, 0, "down"],
      ["STOCK", "Have on hand", 2, 4, "across"],
      ["RATING", "An appraisal of the value of something", 4, 1, "down"],
      ["DRINK", "A single serving of a beverage", 0, 6, "across"],
      ["SHARED", "Have in common", 1, 0, "down"],
      ["STEEL", "An alloy of iron with small amounts of carbon", 7, 5, "down"],
      ["SHARE", "Have in common", 2, 9, "across"],
      ["ENJOY", "Derive or receive pleasure from", 6, 8, "across"],
      ["CYCLE", "An interval during which a recurring sequence of events occurs", 11, 6, "down"],
      ["MACHINE", "An efficient person", 5, 7, "down"]
    ]
  },
  {
    "category": "easy", "id": "easy-33", "title": "A Spot of Sun", "width": 11, "height": 14,
    "legacyCells": {"12":[51],"14":[351],"23":[71],"25":[352],"27":[129],"34":[91],"36":[353],"38":[149],"40":[242],"45":[111,250],"46":[270],"47":[290,354],"48":[310],"49":[169,330],"51":[243],"56":[131],"58":[355],"60":[189],"61":[190],"62":[191,244],"63":[192],"67":[151],"69":[356],"71":[209],"73":[245],"81":[295],"84":[246],"86":[37],"89":[290],"92":[315],"95":[55,247],"96":[56],"97":[57],"98":[58],"100":[291],"103":[128,335],"104":[129],"105":[55,130],"106":[131,248],"108":[77],"111":[292],"112":[312],"113":[332],"114":[352,355],"116":[75],"119":[97],"122":[293],"127":[95],"130":[117],"135":[245],"136":[265],"137":[285],"138":[115,305],"141":[137],"152":[157]},
    "words": [
      ["WIFE", "A married woman", 4, 6, "down"],
      ["FACT", "A piece of information about circumstances that exist or events that have occurred", 3, 9, "across"],
      ["CLIP", "A metal frame or container holding cartridges", 6, 8, "down"],
      ["JUMP", "A sudden and decisive increase", 2, 12, "across"],
      ["SURE", "Exercising or taking care great enough to bring assurance", 0, 10, "across"],
      ["DISH", "A particular item of prepared food", 1, 7, "down"],
      ["SUBJECT", "Cause to experience or suffer or make liable or vulnerable to", 7, 2, "down"],
      ["BABY", "Treat with excessive indulgence", 4, 5, "across"],
      ["ADOBE", "Sun-dried brick", 5, 1, "down"],
      ["RADIO", "Medium for communication", 0, 4, "across"],
      ["NEEDED", "Necessary for relief or supply", 3, 0, "down"],
      ["FOURTH", "Following the third position", 1, 0, "down"],
      ["COOL", "Neither warm nor very cold", 6, 8, "across"],
      ["CORRECT", "Free from error", 9, 6, "down"]
    ]
  },
  {
    "category": "easy", "id": "easy-34", "title": "Over the Fence", "width": 13, "height": 15,
    "legacyCells": {"15":[186],"21":[103],"27":[69],"28":[86,203],"29":[103],"30":[120],"34":[104],"41":[220],"47":[105],"54":[148,237],"55":[165],"56":[182],"57":[199],"58":[216],"59":[233],"60":[106,250],"61":[267],"62":[284],"67":[254],"73":[107],"80":[271],"84":[54],"92":[180],"93":[181,288],"94":[182],"95":[183],"96":[184],"97":[55,185],"98":[186],"110":[56],"114":[312],"119":[74,296],"120":[75],"121":[76],"122":[77],"123":[57,78],"124":[79,107],"127":[313],"132":[313],"137":[124],"140":[314],"144":[23],"145":[40,330],"146":[57],"147":[74],"150":[141,154],"151":[155],"152":[156],"153":[157,315],"154":[158],"155":[159],"158":[347],"163":[158],"166":[316],"171":[364],"174":[40],"175":[41],"176":[42,175],"177":[43],"179":[317],"183":[111],"184":[128,381],"185":[145],"186":[162],"189":[192]},
    "words": [
      ["MOTION", "Show, express or direct through movement", 2, 8, "down"],
      ["ITEM", "A small part that can be considered separately from the whole", 0, 11, "across"],
      ["INCH", "A unit of length equal to one twelfth of a foot", 0, 14, "across"],
      ["MASTER", "An artist of consummate skill", 1, 9, "across"],
      ["REPAIR", "A formal way of referring to the condition of something", 7, 8, "down"],
      ["TRIP", "Miss a step and fall or nearly fall", 4, 13, "across"],
      ["FIRE", "Cause to go off", 6, 5, "down"],
      ["CLASSIC", "A creation of the highest excellence", 0, 7, "across"],
      ["PAYDAY", "The day on which you receive pay for your work", 6, 11, "across"],
      ["WONDER", "The feeling aroused by something strange and surprising", 10, 7, "down"],
      ["CENTRAL", "Serving as an essential component", 2, 0, "down"],
      ["SEAT", "The fleshy part of the human body that you sit on", 0, 2, "across"],
      ["TRANSPORT", "Move something or somebody around", 1, 4, "across"],
      ["ACTOR", "A theatrical performer", 8, 0, "down"]
    ]
  },
  {
    "category": "easy", "id": "easy-35", "title": "Step by Step", "width": 16, "height": 17,
    "legacyCells": {"27":[164],"40":[464],"43":[186],"53":[243],"54":[265],"55":[287],"56":[309,465],"57":[331],"58":[353],"59":[208,375],"60":[397],"72":[466],"75":[230],"85":[390],"88":[467],"91":[252],"101":[412],"104":[468],"106":[213],"107":[214,274],"108":[215],"109":[216],"110":[217],"111":[218],"114":[380],"115":[402],"116":[424],"117":[434,446],"118":[468],"119":[490],"120":[469,512],"121":[534],"130":[381],"133":[456],"136":[470],"146":[382],"161":[201],"162":[202,383],"163":[203],"164":[204],"165":[205,257],"166":[206],"167":[207],"168":[208,366],"178":[384],"181":[258],"184":[388],"186":[144],"195":[301],"197":[259],"200":[410],"201":[411],"202":[166,412],"203":[413],"210":[318],"211":[323,340],"212":[362],"213":[260,384],"216":[432],"218":[188],"227":[345],"229":[261],"232":[454],"234":[210],"243":[367],"245":[262],"250":[232],"261":[263]},
    "words": [
      ["COST", "The total spent for goods or services including money and time and labor", 1, 13, "across"],
      ["DOSE", "A measured portion of medicine taken at any one time", 3, 11, "down"],
      ["MEETING", "A formally arranged gathering", 5, 9, "down"],
      ["REMEMBER", "Recall knowledge from memory", 0, 10, "across"],
      ["RAPID", "A part of a river where the current is very fast", 8, 9, "down"],
      ["POOL", "Combine into a common fund", 7, 12, "across"],
      ["MONTH", "One of the twelve divisions of the calendar year", 10, 10, "down"],
      ["QUIET", "An untroubled state", 2, 6, "down"],
      ["QUESTION", "Challenge the accuracy, probity, or propriety of", 1, 7, "across"],
      ["HOST", "A vast multitude", 5, 4, "down"],
      ["DESKTOP", "The top of a desk", 8, 1, "down"],
      ["CATEGORY", "A collection of things sharing a common attribute", 4, 3, "across"],
      ["SCRIPT", "Something written by hand", 11, 0, "down"],
      ["STATIC", "A crackling or hissing noise caused by electrical interference", 9, 6, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-36", "title": "The Letter Trail", "width": 13, "height": 15,
    "legacyCells": {"17":[62],"19":[195],"20":[196],"21":[197],"22":[198],"23":[40,199],"24":[200],"25":[201],"30":[79],"36":[57],"43":[96],"49":[74],"56":[113],"60":[229],"62":[91],"69":[130,307],"70":[308],"71":[309],"72":[310],"73":[246,311],"74":[312],"75":[108,313],"80":[320],"82":[147],"86":[263],"93":[337],"95":[164],"97":[35],"98":[52],"99":[69,280],"100":[86],"101":[103],"106":[354],"108":[181],"111":[53],"114":[104],"119":[371],"121":[198],"124":[54],"126":[88],"127":[105],"128":[122],"129":[139,193],"132":[388],"135":[21],"136":[38],"137":[55],"138":[72],"140":[106],"142":[210],"145":[405],"150":[56],"155":[227],"157":[43],"158":[60,422],"159":[77],"160":[94],"161":[111],"162":[128],"163":[57,145],"165":[259],"166":[276],"167":[293],"168":[244,310],"171":[439],"184":[456]},
    "words": [
      ["KEEP", "The main tower within the walls of a medieval castle or fortress", 8, 12, "across"],
      ["DEEP", "The central and most intense or profound part", 12, 8, "down"],
      ["SAND", "A loose material consisting of grains of rock or coral", 8, 9, "across"],
      ["LOAN", "A word borrowed from another language", 10, 6, "down"],
      ["PANEL", "A committee appointed to judge a competition", 5, 7, "across"],
      ["ACTIVE", "Tending to become more severe or wider in scope", 7, 6, "down"],
      ["JOIN", "Become part of", 4, 10, "across"],
      ["DOWN", "Soft fine feathers", 8, 3, "down"],
      ["SUPPORT", "The activity of providing for or maintaining by supplying with money or necessities", 3, 5, "across"],
      ["PICTURE", "Graphic art consisting of an artistic composition made by applying paints to a surface", 0, 12, "across"],
      ["ASSISTANT", "A person who contributes to the fulfillment of a need or furtherance of an effort or purpose", 4, 0, "down"],
      ["HEART", "The locus of feelings and intuitions", 10, 0, "down"],
      ["FURTHER", "Promote the growth of", 5, 1, "across"],
      ["BEGINNING", "The event consisting of the start of something", 2, 5, "down"]
    ]
  },
  {
    "category": "easy", "id": "easy-37", "title": "Fresh Air", "width": 15, "height": 16,
    "legacyCells": {"19":[222,485],"20":[486],"21":[487],"22":[383,488],"23":[489],"24":[490],"25":[491],"28":[449],"34":[223],"37":[384],"41":[476],"42":[496],"43":[450,516],"44":[536],"49":[224],"51":[354],"52":[374,385],"53":[394],"54":[414],"55":[434],"58":[451],"64":[225],"67":[386],"70":[381,435],"71":[401],"72":[421],"73":[441,452],"74":[461],"76":[453],"77":[473],"78":[493],"79":[226,513],"80":[533],"82":[387],"85":[436],"88":[453],"94":[227],"98":[390],"100":[437],"109":[228],"113":[410,478],"114":[498],"115":[438,518],"116":[252,538],"124":[229],"128":[430],"131":[272],"143":[450],"146":[292],"161":[312],"176":[332],"191":[352],"201":[512],"202":[513],"203":[514],"204":[515],"205":[516],"206":[372,517],"207":[518],"208":[519],"221":[392],"231":[227],"232":[247],"233":[267],"234":[287],"235":[307],"236":[327,412],"237":[347]},
    "words": [
      ["FLASH", "A sudden intense burst of radiant energy", 13, 0, "down"],
      ["WILD", "In a natural state", 10, 2, "across"],
      ["RAISE", "The amount a salary is increased", 9, 4, "across"],
      ["TREAT", "Something considered choice to eat", 10, 2, "down"],
      ["VOTE", "A choice that is made by counting the number of people in favor of each alternative", 7, 7, "across"],
      ["EVIL", "Morally objectionable behavior", 8, 5, "down"],
      ["SPORT", "An active diversion requiring physical exertion and competition", 5, 3, "across"],
      ["DEPTH", "The extent downward or backward or inward", 7, 0, "down"],
      ["PRODUCT", "Commodities offered for sale", 3, 1, "across"],
      ["PORTABLE", "Easily or conveniently transported", 4, 0, "down"],
      ["HUMAN", "Relating to a person", 0, 5, "across"],
      ["EXTENSION", "A mutually agreed delay in the date set for the completion of a job or payment of a debt", 11, 6, "down"],
      ["BIDDING", "Making offers at an auction", 5, 15, "across"],
      ["FACILITY", "A building or place set up for a particular activity", 5, 13, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-38", "title": "Out and About", "width": 14, "height": 15,
    "legacyCells": {"23":[354],"36":[256],"37":[257,355],"38":[258],"39":[259],"40":[260],"41":[261],"51":[356],"62":[315],"63":[316],"64":[317],"65":[318,357],"66":[319],"67":[320],"68":[22,321],"69":[322],"79":[358],"82":[34],"96":[46],"100":[26],"106":[54,97],"107":[55],"108":[56],"109":[57],"110":[58],"111":[31,59],"113":[73],"114":[38,85],"115":[97],"116":[83,109],"117":[121],"118":[133],"120":[98],"125":[32],"128":[50],"130":[95],"134":[99],"137":[90],"139":[33],"142":[62],"144":[107],"148":[100],"150":[20],"151":[32,91],"152":[44],"153":[34,56],"158":[119,152],"159":[164],"160":[176],"161":[188],"162":[101,200],"165":[92],"167":[35],"179":[93],"189":[134],"190":[146],"191":[158],"192":[170],"193":[94,182],"194":[194],"207":[95]},
    "words": [
      ["CUSTOM", "Accepted or habitual practice", 0, 8, "across"],
      ["BUSH", "Not of the highest quality or sophistication", 2, 6, "down"],
      ["TEST", "Trying something to find out about it", 4, 7, "down"],
      ["TAKEN", "Understood in a certain way", 3, 11, "across"],
      ["SEVEN", "The cardinal number that is the sum of six and one", 8, 6, "down"],
      ["SURVEY", "A detailed critical inspection", 7, 7, "across"],
      ["YEARS", "A late time of life", 13, 6, "down"],
      ["WEAR", "Have clothing on your body", 9, 10, "across"],
      ["DESIRE", "The feeling that accompanies an unsatisfied state", 11, 8, "down"],
      ["IMPORT", "Bring in from abroad", 6, 13, "across"],
      ["TRUE", "Consistent with fact or reality", 12, 3, "down"],
      ["IDENTITY", "The distinct personality of an individual regarded as a persisting entity", 5, 4, "across"],
      ["BOUND", "Confined by bonds", 9, 0, "down"],
      ["COLOUR", "Modify or bias", 7, 2, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-39", "title": "An Open Book", "width": 13, "height": 15,
    "legacyCells": {"18":[364],"28":[191],"29":[192],"30":[193],"31":[194,365],"40":[259],"44":[366],"48":[340],"53":[284],"55":[95],"57":[367],"59":[268],"61":[365],"66":[213,309],"67":[238],"68":[96,263],"69":[288],"70":[313,368],"72":[293],"74":[390],"79":[334],"81":[97],"84":[116],"85":[117,318],"86":[118],"87":[119,415],"89":[286],"92":[359],"94":[98],"96":[288],"98":[343],"100":[440],"102":[311],"105":[384],"107":[99,309],"108":[310],"109":[289,311],"110":[312],"111":[313,368],"113":[465],"115":[336],"118":[409],"122":[290],"128":[361],"135":[147,291],"136":[172],"137":[197],"138":[119,222],"139":[247],"141":[386],"151":[144],"154":[411],"164":[169],"167":[436],"175":[464],"176":[465],"177":[194,466],"178":[467],"179":[468],"180":[461,469],"181":[470],"190":[219]},
    "words": [
      ["CLOSE", "The temporal end", 7, 3, "down"],
      ["GOOD", "Moral excellence or admirableness", 5, 6, "across"],
      ["HANDLE", "Be in charge of, act on, or dispose of", 9, 2, "down"],
      ["SCORE", "Gain points in a game", 2, 8, "across"],
      ["POOR", "Deserving or inciting pity", 5, 6, "down"],
      ["BASIS", "A relation that provides the foundation for something", 3, 3, "down"],
      ["ROADS", "A partly sheltered anchorage", 4, 10, "across"],
      ["SHAPE", "The spatial arrangement of something as distinct from its substance", 0, 5, "across"],
      ["MYSTERY", "Something that baffles understanding and cannot be explained", 1, 2, "down"],
      ["WASTE", "Any materials unused and rejected as worthless or unwanted", 5, 0, "down"],
      ["AREA", "A subject of study", 1, 2, "across"],
      ["DREAM", "A series of mental images and emotions occurring during sleep", 8, 9, "down"],
      ["LEADING", "Thin strip of metal used to separate lines of type in printing", 5, 13, "across"],
      ["DOWNTOWN", "The central area or commercial center of a town or city", 11, 5, "down"]
    ]
  },
  {
    "category": "easy", "id": "easy-40", "title": "A Clear View", "width": 13, "height": 15,
    "legacyCells": {"17":[470],"19":[170],"20":[171,182],"21":[172],"22":[173],"23":[174],"24":[175],"30":[471],"33":[203],"43":[472],"45":[228],"46":[224,249],"47":[270],"48":[291],"49":[312],"50":[333,348],"51":[354],"56":[473],"59":[245],"63":[349],"69":[474],"76":[350],"82":[306,475],"83":[307],"84":[308],"85":[309],"87":[287],"89":[351],"95":[476],"99":[444],"100":[308,445],"101":[446],"102":[352,447],"103":[448],"106":[324],"108":[477],"111":[428],"113":[329],"115":[353],"118":[351],"119":[325,372],"120":[393],"121":[414,478],"123":[226],"124":[247,429],"125":[268],"126":[289,350],"128":[354],"132":[326],"137":[430],"144":[30],"145":[51,327],"146":[72,300],"147":[93],"148":[114],"149":[135],"150":[156,431],"151":[177],"159":[301],"163":[432],"172":[302],"183":[409],"184":[430],"185":[303,451],"186":[472],"187":[493]},
    "words": [
      ["DELIVERY", "The event of giving birth", 0, 11, "across"],
      ["MALE", "Characteristic of a man", 2, 7, "down"],
      ["HATE", "The emotion of intense dislike", 0, 9, "across"],
      ["PEARL", "A smooth lustrous round structure inside the shell of a clam or oyster", 7, 7, "down"],
      ["BEAT", "A regular route for a sentry or policeman", 5, 9, "across"],
      ["LAST", "The temporal end", 3, 10, "down"],
      ["MATCH", "A thin stick used to start a small flame", 0, 14, "across"],
      ["POST", "A message you publish online", 9, 5, "down"],
      ["SOLID", "Characterized by good substantial quality", 7, 7, "across"],
      ["NOTHING", "A quantity of no importance", 11, 2, "down"],
      ["RANKING", "Position on a scale in relation to others in a sport", 5, 3, "across"],
      ["EXAM", "A set of questions or exercises evaluating skill or knowledge", 7, 0, "down"],
      ["EXCLUSIVE", "A news report that is reported first by one news organization", 4, 0, "down"],
      ["SNOW", "Precipitation falling from clouds in the form of ice crystals", 3, 6, "across"],
      ["SECTOR", "A plane figure bounded by two radii and the included arc of a circle", 5, 1, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-41", "title": "A Good Start", "width": 15, "height": 15,
    "legacyCells": {"29":[77],"41":[118],"42":[142],"43":[166],"44":[78,190],"46":[390],"47":[391],"48":[392],"49":[393],"50":[394],"51":[261,395],"52":[396],"53":[397],"54":[398],"59":[79],"66":[285],"74":[80],"76":[123],"77":[147],"78":[171],"79":[195],"80":[219],"81":[243,309],"82":[267],"83":[291,473],"84":[315],"89":[81],"96":[333],"98":[474],"104":[82],"106":[378],"113":[86,475],"114":[87],"115":[88],"116":[89],"117":[90],"118":[91],"119":[83,92],"121":[136,402],"122":[160],"123":[184],"124":[203,208],"125":[232],"126":[256],"127":[280],"128":[304,476],"136":[426],"139":[227],"144":[92],"151":[450],"154":[251,522],"155":[523],"156":[524],"157":[452,525],"159":[116],"166":[474],"169":[275],"172":[476],"174":[140],"176":[424],"186":[162],"187":[186,500],"188":[210],"189":[164,234],"190":[258],"191":[282,425],"202":[524],"204":[188],"206":[426],"219":[212],"221":[427]},
    "words": [
      ["INSIDE", "The inner or enclosed surface of something", 5, 12, "across"],
      ["LEAD", "An advantage held by a competitor in a race", 11, 10, "down"],
      ["SENT", "Caused or enabled to go or be conveyed or transmitted", 7, 9, "down"],
      ["MEDIUM", "Around the middle of a scale of evaluation", 9, 8, "down"],
      ["LOTS", "A large number or amount", 3, 10, "across"],
      ["HALL", "An indoor passage that connects rooms", 4, 7, "down"],
      ["EXCHANGE", "Give to, and receive from, one another", 0, 8, "across"],
      ["READY", "Prepare for eating by applying heat", 1, 6, "down"],
      ["TYPE", "A subdivision of a particular kind of thing", 8, 4, "down"],
      ["CHOCOLATE", "A beverage made from cocoa powder and milk and sugar", 0, 5, "across"],
      ["TALK", "An exchange of ideas via conversation", 6, 2, "down"],
      ["NUTRITION", "A source of materials to nourish the body", 0, 3, "across"],
      ["PREMIUM", "Payment for insurance", 7, 7, "across"],
      ["BEDROOM", "A room used primarily for sleeping", 14, 0, "down"],
      ["ZONE", "Regulate housing in", 10, 2, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-42", "title": "By the Window", "width": 13, "height": 15,
    "legacyCells": {"16":[355],"18":[51,369],"19":[392],"20":[415],"21":[438],"29":[356],"31":[74],"34":[439],"42":[357],"44":[97],"46":[330],"47":[353,440],"48":[376],"49":[399],"50":[422],"53":[39],"54":[62],"55":[85,358],"56":[108],"57":[120,131],"58":[154],"60":[441],"68":[359],"70":[143],"73":[139,442],"74":[162],"75":[185],"76":[146,208],"77":[231],"83":[166],"86":[443],"89":[169],"92":[50,146],"93":[147],"94":[148],"95":[149],"96":[150,189],"97":[151],"102":[192],"105":[51],"113":[176,301],"114":[324],"115":[215,347],"116":[370],"118":[52],"121":[326],"126":[199],"128":[238],"131":[53],"134":[349],"139":[222],"144":[54],"147":[112,372],"148":[135],"149":[158],"150":[181],"151":[204],"152":[227,245],"153":[250],"154":[273],"155":[296],"157":[55],"160":[395],"165":[268],"170":[56],"173":[418],"175":[217],"176":[218],"177":[219],"178":[220,291],"183":[57],"186":[441]},
    "words": [
      ["SENSE", "Detect some circumstance or entity automatically", 11, 4, "down"],
      ["CROSS", "A wooden structure consisting of an upright post with a transverse piece", 7, 5, "across"],
      ["WISH", "A specific feeling of desire", 8, 8, "across"],
      ["DIRECT", "Command with authority", 8, 0, "down"],
      ["DRAMA", "An episode that is turbulent or highly emotional", 6, 3, "across"],
      ["PAID", "Marked by the reception of pay", 4, 1, "across"],
      ["PORTION", "Something determined in relation to something that includes it", 5, 0, "down"],
      ["STRONG", "Not faint or feeble", 0, 7, "across"],
      ["BEAUTY", "The qualities that give pleasure to the senses", 0, 4, "across"],
      ["CLEAR", "Rid of obstructions", 3, 0, "down"],
      ["WANTED", "Desired or wished for or sought", 9, 7, "down"],
      ["HOLD", "Keep in a certain state, position, or activity", 5, 13, "across"],
      ["SITUATION", "A condition or position in which you find yourself", 3, 11, "across"],
      ["SPECIFIC", "Stated explicitly or in detail", 1, 6, "down"],
      ["MUSCLE", "One of the contractile organs of the body", 4, 8, "down"]
    ]
  },
  {
    "category": "easy", "id": "easy-43", "title": "A Walk in the Park", "width": 15, "height": 15,
    "legacyCells": {"21":[127],"22":[128],"23":[96,129],"24":[130],"25":[131],"26":[132],"38":[97],"53":[98],"55":[40],"67":[81],"68":[99],"69":[117],"70":[58,135],"71":[153],"78":[399],"82":[82],"85":[76],"93":[400],"95":[73],"96":[74],"97":[75,83],"98":[76],"100":[94],"104":[257],"108":[401],"112":[84],"114":[181],"119":[258],"123":[402],"125":[47,218],"126":[236],"127":[85,254],"128":[272],"129":[182,290],"130":[308],"132":[111],"134":[259],"138":[403],"140":[48],"144":[183],"147":[129],"149":[260],"151":[31,38],"152":[49],"153":[67,404],"154":[85],"155":[49,103],"156":[121],"157":[139],"159":[184],"162":[147],"164":[261],"166":[39],"168":[405],"170":[50],"173":[158],"174":[176,185],"175":[194],"176":[212],"177":[165,230],"178":[248],"179":[262,266],"181":[40],"183":[406],"189":[186],"192":[183],"196":[41],"198":[407],"207":[201],"222":[219]},
    "words": [
      ["ENTIRE", "Constituting the full quantity or extent", 5, 1, "across"],
      ["TECH", "A school teaching mechanical and industrial arts and the applied sciences", 8, 0, "down"],
      ["CHEAP", "Relatively low in price or charging low prices", 6, 4, "across"],
      ["LADY", "A polite name for any woman", 10, 2, "down"],
      ["CRASH", "A loud resonant repeating noise", 7, 3, "down"],
      ["SCHOOL", "An educational institution", 4, 8, "across"],
      ["BRAD", "A small nail", 4, 6, "across"],
      ["SKIP", "A gait in which steps and hops alternate", 5, 7, "down"],
      ["COMMON", "A piece of open land for recreational use in an urban area", 9, 6, "down"],
      ["CONTEXT", "The surrounding details that help explain what something means", 7, 11, "across"],
      ["ARTIST", "A person whose creative work shows sensitivity and imagination", 14, 5, "down"],
      ["ATTEMPT", "Earnest and conscientious activity intended to do or accomplish something", 12, 7, "down"],
      ["FISHING", "The occupation of catching fish for a living", 0, 10, "across"],
      ["WHOLESALE", "The selling of goods to merchants", 3, 4, "down"],
      ["FULL", "Beat for the purpose of cleaning and thickening", 1, 9, "down"]
    ]
  },
  {
    "category": "easy", "id": "easy-44", "title": "The Easy Route", "width": 15, "height": 16,
    "legacyCells": {"21":[123],"36":[147],"40":[85],"42":[187],"49":[318],"51":[41,171],"52":[65],"53":[89],"54":[113],"55":[109,137],"57":[188],"64":[319],"66":[195],"70":[133],"72":[189],"76":[305],"79":[320],"81":[219,222],"82":[246],"83":[270],"84":[294],"85":[157,318],"86":[342],"87":[190,366],"91":[306],"94":[321],"96":[243],"100":[181],"106":[307],"108":[145],"109":[146,322],"110":[147],"111":[148,267],"112":[149],"113":[150],"115":[56,205],"116":[57],"117":[58],"118":[43,59],"121":[308],"124":[323],"133":[67],"136":[309],"139":[324],"143":[176],"144":[177],"145":[178],"146":[40,179],"147":[180],"148":[91,181],"151":[133,310],"152":[134],"153":[135],"154":[136,325],"155":[137],"156":[138],"161":[41],"163":[115],"166":[311],"173":[140],"174":[164],"175":[188],"176":[42,212],"177":[236],"191":[43],"201":[239],"202":[263],"203":[287],"204":[311],"205":[335],"206":[44,359],"207":[383],"208":[407],"209":[431],"221":[45],"236":[46]},
    "words": [
      ["WRITING", "The work of a writer", 6, 0, "down"],
      ["IMAGE", "An iconic mental representation", 5, 3, "across"],
      ["SECOND", "Give support or one's approval to", 10, 1, "down"],
      ["IMPROVE", "To make better", 5, 5, "across"],
      ["RACE", "A contest of speed", 12, 1, "down"],
      ["DELL", "A small wooded hollow", 9, 7, "across"],
      ["LAND", "Reach or come to rest", 13, 6, "down"],
      ["DOMAIN", "A particular environment or walk of life", 7, 9, "across"],
      ["FORGET", "Fail to remember", 2, 7, "across"],
      ["OUTDOORS", "Where the air is unconfined", 4, 2, "down"],
      ["CLOSED", "Not open or affording passage or access", 0, 10, "across"],
      ["SCIENCE", "Ability to produce solutions in some problem domain", 1, 4, "down"],
      ["AIRLINE", "A hose that carries air under pressure", 11, 8, "down"],
      ["SMART", "A kind of pain such as that caused by a wound or a burn or a sore", 7, 11, "across"],
      ["IMMEDIATE", "Very close or connected in space or time", 5, 13, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-45", "title": "The Home Stretch", "width": 15, "height": 15,
    "legacyCells": {"26":[47],"41":[70],"50":[60],"56":[93],"58":[31],"62":[80],"63":[81],"64":[82],"65":[83],"66":[84],"69":[320],"71":[116],"73":[32],"77":[103],"80":[106],"84":[343],"86":[139],"88":[33],"92":[126],"93":[127],"94":[128],"95":[129],"98":[288],"99":[311,366],"100":[334],"101":[162,357],"102":[380],"103":[34,403],"104":[426],"107":[149],"110":[152],"114":[389],"118":[35],"121":[418],"125":[175],"129":[412],"131":[223],"136":[49,419],"137":[72],"138":[95],"139":[118],"140":[141,198],"141":[164],"143":[278],"144":[279,435],"145":[280],"146":[224,281],"147":[282],"151":[420],"159":[458],"161":[225],"166":[421],"168":[31],"174":[481],"176":[226],"181":[422,496],"182":[497],"183":[54,498],"184":[499],"185":[500],"186":[501],"187":[502],"188":[503],"189":[504],"191":[227],"196":[423],"198":[77],"206":[228],"213":[100,267],"214":[268],"215":[269],"216":[270],"217":[271],"218":[272],"221":[229]},
    "words": [
      ["CARRY", "Move while supporting, either in a vehicle or in one's hands or on one's body", 1, 4, "across"],
      ["COPY", "A thing made to be similar or identical to another thing", 2, 3, "down"],
      ["PUMP", "A mechanical device that moves fluid or gas by pressure or suction", 1, 6, "across"],
      ["GRAPHIC", "An image that is generated by a computer", 5, 2, "down"],
      ["NOTICE", "An announcement containing information about an event", 0, 9, "across"],
      ["UNIQUE", "Radically distinctive and without equal", 1, 7, "down"],
      ["UNIVERSAL", "Of worldwide scope or applicability", 0, 12, "across"],
      ["BEAUTIFUL", "Delighting the senses or exciting intellectual or emotional admiration", 9, 3, "down"],
      ["MISS", "Fail to perceive or to catch with the senses or the mind", 3, 10, "down"],
      ["SAYING", "A word or phrase that particular people use in particular situations", 2, 14, "across"],
      ["PILOT", "Someone who is licensed to operate an aircraft in flight", 7, 9, "across"],
      ["SOCIETY", "A formal association of people with similar interests", 11, 7, "down"],
      ["CARRIER", "Someone whose employment involves carrying something", 7, 6, "across"],
      ["MIXED", "Made up of more than one kind of thing", 13, 2, "down"],
      ["FINDER", "Someone who comes upon something after searching", 11, 0, "down"]
    ]
  },
  {
    "category": "easy", "id": "easy-46", "title": "A Word at a Time", "width": 14, "height": 15,
    "legacyCells": {"23":[409],"37":[410],"51":[411],"59":[191],"60":[192],"61":[193],"62":[194],"63":[195],"64":[196],"65":[197,412],"69":[119],"79":[413],"83":[152],"91":[105],"92":[106],"93":[107,414],"94":[108],"95":[109],"96":[110],"97":[111,185],"111":[218],"114":[146],"118":[93],"119":[126],"120":[159],"121":[192],"122":[225],"123":[258],"124":[291],"125":[251,324],"127":[234],"128":[179,267],"129":[300],"130":[37,333],"131":[366],"139":[284],"142":[212],"144":[70],"147":[275],"148":[276],"149":[277,364],"150":[278],"153":[317],"156":[245],"158":[103],"161":[308],"163":[365],"165":[172],"167":[350],"170":[278],"172":[136,177],"173":[178],"174":[179],"175":[180,341],"177":[270,366],"178":[303],"179":[205,336],"180":[369],"181":[383,402],"186":[169],"189":[374],"191":[367],"193":[238],"198":[280],"199":[313],"200":[202,346],"201":[379],"202":[412],"207":[271]},
    "words": [
      ["STAND", "A support or foundation", 8, 12, "across"],
      ["PART", "Something determined in relation to something that includes it", 11, 10, "down"],
      ["RISK", "A source of danger", 9, 9, "down"],
      ["FORM", "A category of things distinguished by some common characteristic or quality", 6, 10, "across"],
      ["FEEL", "An intuitive awareness", 7, 9, "down"],
      ["ROLE", "An actor's portrayal of someone in a play", 3, 12, "across"],
      ["SOURCE", "Specify the origin of", 4, 8, "down"],
      ["GREAT", "Relatively large in size or number or extent", 1, 14, "across"],
      ["GLASS", "A brittle transparent solid with irregular atomic structure", 0, 9, "across"],
      ["CLAIM", "Assert or affirm strongly", 2, 7, "down"],
      ["CONNECTED", "Joined or linked together", 13, 3, "down"],
      ["CAPTAIN", "The person in charge of a ship", 6, 6, "across"],
      ["NEGATIVE", "A reply of denial", 5, 8, "across"],
      ["LAPTOP", "A portable computer small enough to use in your lap", 9, 0, "down"],
      ["PAYMENT", "A sum of money paid or a claim discharged", 2, 4, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-47", "title": "Room to Think", "width": 12, "height": 13,
    "legacyCells": {"15":[476],"16":[477],"17":[192,478],"18":[479],"23":[280],"29":[193],"32":[87],"35":[305],"41":[194,360],"42":[361],"43":[362],"44":[112,363],"47":[330],"49":[354],"50":[355],"51":[356],"52":[357],"53":[195,358],"56":[137,404],"57":[429],"58":[454],"59":[355,479],"65":[196],"68":[162],"74":[340],"77":[197],"79":[86],"80":[87,187],"81":[88],"82":[89],"83":[81,90],"86":[341,356],"87":[381],"88":[406],"89":[198,431],"90":[456],"95":[106],"98":[342],"101":[199],"107":[131],"110":[343],"117":[159],"119":[156],"122":[344],"128":[303],"129":[184,304],"130":[305],"131":[181,306],"133":[408],"134":[345,409],"135":[410],"136":[411],"137":[412],"141":[209],"146":[346],"152":[238],"153":[234,239],"154":[240],"155":[241]},
    "words": [
      ["DEAN", "An administrator in charge of a division of a university or college", 7, 12, "across"],
      ["NAME", "A language unit by which a person or thing is known", 9, 8, "down"],
      ["GAIN", "A quantity that is added", 7, 10, "across"],
      ["GIVEN", "Something accepted as a starting assumption", 11, 5, "down"],
      ["BRING", "Take something or somebody with oneself somewhere", 6, 6, "across"],
      ["REFER", "Be relevant to", 8, 1, "down"],
      ["FAST", "Abstaining from food", 7, 4, "across"],
      ["HIDE", "Body covering of a living animal", 4, 3, "across"],
      ["GIFT", "Something acquired without compensation", 11, 0, "down"],
      ["SCHEDULE", "A temporally organized plan for matters to be attended to", 5, 0, "down"],
      ["JUST", "Fair to all parties as dictated by reason and conscience", 2, 1, "across"],
      ["APPLY", "Put into service", 1, 7, "across"],
      ["PACIFIC", "Disposed to peace or of a peaceful nature", 2, 5, "down"],
      ["STATE", "The territory occupied by one of the constituent administrative districts of a nation", 0, 4, "across"],
      ["TITLE", "A heading that names a statute or legislative bill", 0, 11, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-48", "title": "Almost There", "width": 14, "height": 15,
    "legacyCells": {"20":[257],"34":[279],"40":[303],"45":[24],"46":[25],"47":[26],"48":[27,301],"49":[28],"50":[29],"54":[304],"62":[323],"68":[305],"71":[292],"73":[321],"74":[322],"75":[244,323],"76":[324,345],"79":[273],"82":[306],"85":[293],"89":[266],"92":[170],"93":[192,295],"94":[214],"95":[236],"96":[258,307],"99":[294,429],"100":[430],"101":[431],"102":[432],"103":[288,433],"105":[252],"107":[317],"113":[295],"117":[310,335],"118":[336],"119":[253,337],"120":[338],"121":[339],"122":[340],"123":[56,341],"124":[342],"125":[343],"127":[296],"133":[254],"137":[57],"141":[189,297],"142":[190],"143":[191],"144":[192],"145":[193],"146":[194],"147":[195,255],"151":[58],"165":[59],"178":[262],"179":[60,284],"180":[306],"181":[328],"193":[61],"204":[124],"205":[125],"206":[126],"207":[62,127],"208":[128],"209":[129]},
    "words": [
      ["PLACEMENT", "The spatial property of the way in which something is placed", 4, 8, "across"],
      ["CROP", "The yield from plants in a single growing season", 5, 4, "down"],
      ["TAKE", "The income or profit arising from such transactions as the sale of land or other property", 9, 4, "down"],
      ["MAJOR", "Of greater importance or stature or rank", 7, 6, "across"],
      ["ROCK", "Move back and forth or sideways", 2, 5, "across"],
      ["PHOTO", "A representation of a person or scene in the form of a print or transparent slide", 0, 7, "across"],
      ["PASS", "Go across or through", 7, 6, "down"],
      ["DETAILS", "True confidential information", 0, 10, "across"],
      ["EXPAND", "Extend in one or more directions", 1, 4, "down"],
      ["OFFER", "Make available or accessible, provide or furnish", 12, 1, "down"],
      ["CHECK", "Examine so as to determine accuracy, quality, or condition", 6, 0, "down"],
      ["INSERT", "A folded section placed between the leaves of another publication", 2, 3, "across"],
      ["EASTERN", "Lying toward or situated in the east", 11, 7, "down"],
      ["WINNER", "The contestant who wins the contest", 7, 14, "across"],
      ["SEEM", "Give a certain impression or have a certain outward aspect", 9, 12, "across"]
    ]
  },
  {
    "category": "easy", "id": "easy-49", "title": "The Last Lap", "width": 12, "height": 15,
    "legacyCells": {"13":[257],"14":[276],"15":[295],"16":[314],"17":[333],"18":[31,352],"19":[371],"22":[31],"30":[50],"32":[69],"33":[70],"34":[32,71],"35":[72],"42":[69],"46":[33],"54":[88,137],"55":[156],"56":[175],"57":[194],"58":[34,213],"59":[232],"63":[215],"64":[234],"65":[253],"66":[107,272],"75":[216],"78":[126],"80":[240],"87":[217],"90":[145,319],"91":[320],"92":[259,321],"93":[322],"97":[101],"98":[120],"99":[139,218],"100":[158],"104":[278],"111":[219],"113":[156],"116":[47,297],"117":[48],"118":[49],"119":[50],"122":[160,320],"123":[220,339],"124":[358],"125":[157,377],"126":[396],"127":[415],"134":[179],"137":[158],"146":[198],"148":[183],"149":[159,184],"150":[185],"151":[186],"152":[187],"153":[188],"158":[217],"161":[160],"170":[236]},
    "words": [
      ["TANK", "A large container that holds water or fuel", 10, 0, "down"],
      ["SCAN", "Examine minutely or intensely", 7, 2, "across"],
      ["THANKS", "An acknowledgment of appreciation", 5, 4, "across"],
      ["TESTING", "An examination of the characteristics of something", 6, 0, "down"],
      ["GRAY", "A neutral achromatic color midway between white and black", 5, 7, "across"],
      ["WALL", "An architectural partition with a height and length greater than its thickness", 8, 5, "down"],
      ["LIFE", "A characteristic state or mode of living", 7, 9, "across"],
      ["MINI", "A very short skirt", 2, 5, "across"],
      ["MANAGE", "Be in charge of, act on, or dispose of", 3, 4, "down"],
      ["REPORT", "To give an account or representation of in words", 1, 10, "across"],
      ["PLAN", "A series of steps to be carried out or goals to be accomplished", 0, 8, "across"],
      ["FACULTY", "One of the inherent cognitive or perceptual powers of the mind", 0, 1, "across"],
      ["HONOR", "A tangible symbol signifying approval or distinction", 5, 8, "down"],
      ["COTTON", "Take a liking to", 3, 12, "across"],
      ["ROUND", "A charge of ammunition for a single shot", 2, 9, "down"]
    ]
  },
  {
    "category": "easy", "id": "easy-50", "title": "Fifty and Counting", "width": 14, "height": 15,
    "legacyCells": {"19":[376],"24":[430],"25":[350,447],"26":[464],"27":[481],"29":[435],"30":[436],"31":[437],"32":[438],"33":[393,439],"34":[440],"35":[441],"39":[351],"47":[410],"50":[277],"53":[352],"59":[318],"61":[427],"64":[294,418],"65":[435],"66":[452],"67":[353,469],"68":[486],"69":[330,503],"72":[28],"73":[45,335],"74":[62],"75":[79,444],"76":[96],"77":[113],"78":[130,311],"81":[354],"83":[331],"85":[364],"87":[352],"89":[461],"92":[328],"97":[332],"99":[381],"101":[369],"108":[275],"109":[292],"110":[309],"111":[326,333],"113":[398],"115":[386],"117":[146],"127":[393,415],"128":[394],"129":[395,403],"130":[396],"131":[163,397],"132":[398],"133":[399],"136":[256],"145":[180],"150":[273],"158":[201],"159":[197,218],"160":[235],"161":[252],"162":[269],"163":[286],"164":[290,303],"165":[320],"173":[214],"178":[307],"187":[231],"192":[324],"206":[341]},
    "words": [
      ["CITY", "A large and densely populated urban area", 9, 1, "across"],
      ["INDEX", "A numerical scale used to compare variables with one another or with some reference number", 11, 0, "down"],
      ["APPEAR", "Give a certain impression or have a certain outward aspect", 7, 4, "across"],
      ["RICH", "Possessing material wealth", 13, 3, "down"],
      ["HIGH", "Greater than normal in degree or intensity or amount", 9, 7, "across"],
      ["MASK", "A covering to disguise or conceal the face", 8, 2, "down"],
      ["FITNESS", "Good physical condition", 1, 5, "across"],
      ["LEGEND", "A story about mythical or supernatural beings or events", 5, 0, "down"],
      ["PATTERN", "A perceptual structure", 0, 2, "across"],
      ["MIDDLE", "An area that is approximately central within some larger region", 3, 3, "down"],
      ["ELEMENT", "An abstract part of something", 0, 9, "across"],
      ["NONE", "A canonical hour that is the ninth hour of the day counting from sunrise", 1, 5, "down"],
      ["KERNEL", "The inner and usually edible part of a seed or grain or nut or fruit stone", 5, 7, "down"],
      ["INCREASE", "A quantity that is added", 3, 11, "across"],
      ["RESCUE", "Recovery or preservation from loss or danger", 10, 8, "down"]
    ]
  },
  {
    "category": "normal", "id": "curious-minds", "title": "Curious Minds", "width": 15, "height": 15,
    "legacyCells": {"23":[57],"33":[108],"34":[123],"35":[138],"36":[153],"37":[168],"38":[72,183],"53":[87],"55":[233],"64":[144],"65":[159],"66":[174],"67":[189],"68":[102,204],"69":[219],"70":[234],"83":[117],"85":[235],"87":[25],"89":[155],"92":[106],"93":[107,211],"94":[108],"95":[109],"96":[110],"97":[111],"98":[112,132],"100":[236],"102":[40],"104":[170],"108":[212],"113":[147],"115":[237],"117":[55],"119":[185],"123":[213],"126":[141],"129":[181],"130":[182,238],"131":[183],"132":[70,184],"133":[185],"134":[186,200],"138":[97,214],"139":[112],"140":[127],"141":[142],"142":[157],"143":[172],"145":[239],"147":[85],"149":[215],"153":[215],"156":[143],"162":[100],"164":[230],"171":[144],"177":[115],"182":[35],"183":[50],"184":[65],"185":[80],"186":[95,145],"187":[110],"188":[125],"201":[146],"211":[61],"212":[76],"213":[91],"214":[106],"215":[121],"216":[136,147],"217":[151]},
    "words": [
      ["COMPASS", "Tool that indicates north", 1, 6, "across"],
      ["ORBIT", "The path of a planet around a star", 3, 5, "down"],
      ["ISLAND", "Land surrounded by water", 2, 9, "across"],
      ["BALANCE", "State of being steady", 6, 7, "down"],
      ["JOURNAL", "A diary or academic publication", 1, 12, "across"],
      ["GLACIER", "Slow-moving mass of ice", 0, 14, "across"],
      ["ECLIPSE", "The Moon may block the Sun during one", 8, 0, "down"],
      ["MOSAIC", "Picture made with small tiles", 2, 2, "across"],
      ["ARCHIVE", "Place for historical records", 3, 4, "across"],
      ["FEATHER", "Part of a bird's plumage", 10, 2, "down"],
      ["NECTAR", "Sweet liquid produced by flowers", 8, 8, "across"],
      ["LANTERN", "Portable light with a protective case", 12, 4, "down"],
      ["QUARTZ", "Mineral commonly used in watches", 14, 4, "down"]
    ]
  },
  {
    "category": "normal", "id": "open-road", "title": "The Open Road", "width": 15, "height": 15,
    "legacyCells": {"21":[199],"36":[214],"46":[66],"47":[81],"48":[96],"49":[111],"50":[126],"51":[141,229],"52":[156],"56":[107],"66":[244],"71":[108],"80":[231],"81":[232,259],"82":[233],"83":[234],"84":[235],"85":[236],"86":[109,237],"87":[238],"96":[274],"101":[110],"108":[114],"116":[111],"123":[129],"126":[162],"127":[71,177],"128":[192],"129":[207],"130":[222],"131":[112,237],"138":[144],"140":[23],"142":[86],"147":[34],"149":[48],"153":[159],"155":[38],"157":[101,141],"158":[142],"159":[143],"160":[144],"161":[145],"162":[35,146],"164":[63],"168":[174],"170":[53],"172":[116],"177":[36],"179":[78],"183":[189],"185":[68],"187":[131],"190":[70],"191":[71],"192":[37,72],"193":[73],"194":[74,93],"198":[173,204],"199":[174],"200":[83,175],"201":[176],"202":[146,177],"203":[178],"207":[38],"209":[108],"224":[123]},
    "words": [
      ["FERRY", "Boat that carries passengers across water", 9, 12, "across"],
      ["ZEBRA", "Striped animal that lends its name to a crossing", 12, 8, "down"],
      ["CANYON", "Deep valley with steep sides", 14, 8, "down"],
      ["GARAGE", "Place to park or repair a car", 6, 10, "across"],
      ["ENGINE", "Machine that powers a vehicle", 7, 7, "down"],
      ["DETOUR", "Alternate route around a blockage", 5, 8, "across"],
      ["TUNNEL", "Passage through a hill", 2, 13, "across"],
      ["VIADUCT", "Long bridge carrying a road or railway", 3, 6, "down"],
      ["WAGON", "Vehicle pulled by animals or a locomotive", 5, 8, "down"],
      ["BORDER", "Line separating two countries", 11, 2, "down"],
      ["LANDMARK", "Recognizable feature used for navigation", 4, 5, "across"],
      ["SIGNAL", "Indication to stop or go", 6, 0, "down"],
      ["MILEAGE", "Distance traveled in miles", 0, 3, "across"]
    ]
  },
  {
    "category": "normal", "id": "normal-03", "title": "Second Guess", "width": 14, "height": 16,
    "legacyCells": {"21":[171],"35":[185],"49":[199],"58":[216],"59":[230],"60":[244],"61":[258],"62":[272],"63":[213,286],"64":[300],"65":[314],"66":[328],"77":[227],"85":[219],"86":[220],"87":[221],"88":[57,222],"89":[223],"91":[241],"102":[58],"105":[255],"114":[323],"115":[324],"116":[59,325],"117":[326],"118":[327],"119":[269,328],"120":[329],"121":[330],"127":[16],"130":[60],"141":[30,185],"142":[186],"143":[187],"144":[61,188],"145":[189],"146":[190],"147":[48,191],"148":[192],"149":[193],"152":[117],"155":[44],"158":[62],"161":[62],"166":[118],"169":[58],"171":[247],"175":[76],"176":[77],"177":[78],"178":[79],"179":[80],"180":[81,119],"181":[82],"185":[86,261],"186":[87],"187":[88],"188":[89],"189":[90],"194":[120],"199":[275],"205":[79],"206":[93],"207":[107],"208":[121],"209":[135],"213":[289]},
    "words": [
      ["APPEARING", "Coming into view", 0, 10, "across"],
      ["IRON", "A heavy ductile magnetic metallic element", 7, 9, "down"],
      ["ORGAN", "A body part with a specific function", 2, 13, "across"],
      ["SAGE", "An herb often used to season stuffing", 1, 8, "down"],
      ["SENDER", "Someone who transmits a message", 4, 5, "down"],
      ["DRESS", "A one-piece garment for a woman", 0, 6, "across"],
      ["HANDHELD", "Small and light enough to be operated while you hold it in your hands", 1, 8, "across"],
      ["FORK", "A utensil with prongs", 3, 11, "down"],
      ["OUTCOME", "A phenomenon that follows and is caused by some previous phenomenon", 6, 12, "across"],
      ["COMIC", "A publication that tells stories through pictures and speech bubbles", 12, 9, "down"],
      ["CATCH", "A drawback or difficulty that is not readily evident", 8, 14, "across"],
      ["VARIABLE", "Something that is likely to vary", 7, 0, "down"],
      ["CARTRIDGE", "Ammunition consisting of a cylindrical casing containing an explosive charge and a bullet", 1, 4, "across"]
    ]
  },
  {
    "category": "normal", "id": "normal-04", "title": "A Good Hunch", "width": 13, "height": 15,
    "legacyCells": {"15":[93],"27":[225],"28":[94,226],"29":[227],"30":[228],"31":[229],"32":[230],"33":[231],"34":[232],"41":[95],"51":[279],"54":[96,158],"55":[171],"56":[184],"57":[197],"58":[210],"59":[223],"60":[236],"61":[249],"62":[253,262],"64":[292],"67":[97],"75":[254],"77":[305],"80":[98],"84":[147],"88":[255],"90":[318],"93":[99],"95":[206],"97":[148],"98":[161],"99":[174],"100":[187],"101":[200,256],"102":[213],"103":[226,331],"106":[100],"108":[219],"110":[149],"114":[257],"118":[23],"119":[36,101],"120":[49],"121":[62,232],"122":[75],"123":[88,150],"124":[101],"127":[258],"129":[304],"132":[102],"134":[245],"136":[151],"139":[330],"142":[305],"147":[258],"149":[152,278],"150":[279],"151":[280],"152":[281,331],"153":[282],"154":[283],"155":[284,306],"162":[153],"165":[332],"168":[307],"178":[333],"188":[100],"189":[113],"190":[126],"191":[139,334],"192":[152],"193":[165],"194":[178]},
    "words": [
      ["BOWLING", "The playing of a game of tenpins or duckpins etc", 5, 14, "across"],
      ["MEDAL", "An award for winning a championship or commemorating some other event", 9, 9, "down"],
      ["INTERIM", "The time between one event, process, or period and another", 5, 11, "across"],
      ["ARMS", "The limbs that extend from the shoulders", 12, 8, "down"],
      ["ORGANIC", "A fertilizer that is derived from animal or vegetable matter", 6, 5, "down"],
      ["ROMANCE", "A relationship between two lovers", 5, 7, "across"],
      ["TWENTY", "The total number of fingers and toes most people have", 10, 3, "down"],
      ["NURSE", "A healthcare professional who cares for patients", 12, 2, "down"],
      ["SPOTLIGHT", "A focus of public attention", 1, 4, "across"],
      ["ILLEGAL", "Prohibited by law or by official or accepted rules", 0, 9, "across"],
      ["QUERY", "An instance of questioning", 4, 6, "down"],
      ["REASONABLE", "Showing reason or sound judgment", 2, 0, "down"],
      ["DEADLINE", "The point in time at which something must be completed", 0, 2, "across"]
    ]
  },
  {
    "category": "normal", "id": "normal-05", "title": "Between the Lines", "width": 13, "height": 15,
    "legacyCells": {"19":[29],"29":[322],"30":[323],"31":[324],"32":[49,325],"33":[326],"34":[327],"35":[328],"36":[329],"37":[330],"38":[331],"45":[69],"53":[128],"54":[148],"55":[168],"56":[188,243],"57":[208],"58":[89,228],"59":[248],"60":[268],"69":[244],"71":[109],"82":[245],"84":[129],"92":[65],"95":[246],"98":[226],"105":[31,85],"106":[51],"107":[71],"108":[91,247],"109":[111],"110":[131],"111":[151,246],"115":[188],"118":[105],"121":[248],"124":[266],"126":[27],"128":[189],"131":[125],"134":[249],"136":[41,128],"137":[129,286],"138":[130],"139":[47,131],"140":[132],"141":[133,190],"144":[145],"146":[123],"149":[61],"152":[67],"154":[191],"158":[53],"159":[73,124],"160":[93],"161":[113],"162":[81,133],"163":[153],"165":[87],"167":[192],"172":[125],"175":[101],"180":[193],"185":[126],"188":[121]},
    "words": [
      ["LOVELY", "A very pretty girl who works as a photographer's model", 1, 12, "across"],
      ["SOUL", "The immaterial part of a person", 3, 10, "down"],
      ["SALAD", "Food mixtures either arranged on a plate or tossed and served with a moist dressing", 6, 9, "down"],
      ["SERIAL", "A periodical that appears at scheduled times", 5, 10, "across"],
      ["BIKE", "A motor vehicle with two wheels and a strong frame", 9, 8, "down"],
      ["POLISH", "The property of being smooth and shiny", 11, 7, "down"],
      ["KNEE", "Joint between the femur and tibia in a quadruped", 7, 6, "down"],
      ["CONTAIN", "Lessen the intensity of", 0, 8, "across"],
      ["OCCUR", "Come to one's mind", 1, 6, "down"],
      ["POINTER", "A mark to indicate a direction or relation", 4, 3, "down"],
      ["SUPPLIER", "Someone whose business is to supply a particular service or commodity", 0, 4, "across"],
      ["EMPIRE", "The domain ruled by an emperor or empress", 6, 0, "down"],
      ["COMMITMENT", "The trait of sincere and steadfast fixity of purpose", 2, 2, "across"]
    ]
  },
  {
    "category": "normal", "id": "normal-06", "title": "Piece by Piece", "width": 14, "height": 15,
    "legacyCells": {"23":[41],"29":[132],"37":[42],"43":[152],"51":[43],"57":[172],"60":[334],"65":[44],"71":[185,192],"72":[205],"73":[225],"74":[245,335],"75":[265],"76":[285],"77":[305],"78":[325],"79":[45,345],"81":[132],"85":[212],"88":[336],"93":[46],"95":[133],"99":[232],"102":[127,337],"103":[147],"104":[167],"105":[187,218],"109":[134],"113":[252],"116":[338],"119":[238],"121":[129,134],"122":[149],"123":[135,169],"124":[189,228],"127":[272],"130":[339],"133":[258],"135":[154],"138":[229],"145":[309],"147":[269,278],"148":[270],"149":[174,271],"150":[272],"151":[273],"152":[230,274],"153":[275],"159":[310],"161":[298],"163":[194],"166":[231],"173":[311],"175":[318],"180":[232],"187":[312],"189":[338],"194":[233],"201":[255,313],"202":[275],"203":[295,358],"204":[315],"205":[335],"206":[355],"208":[234]},
    "words": [
      ["RUSH", "The act of moving hurriedly and in a careless manner", 8, 8, "across"],
      ["BARS", "Long, narrow pieces of metal", 11, 4, "down"],
      ["RIDE", "A journey in a vehicle (usually an automobile)", 9, 7, "down"],
      ["HANGING", "Decoration that is hung (as a tapestry) on a wall or over a window", 12, 7, "down"],
      ["LODGING", "Structures collectively in which people are housed", 6, 10, "across"],
      ["EXPLORER", "Someone who travels into little known regions (especially for some scientific purpose)", 7, 6, "down"],
      ["AGREED", "United by being of the same opinion", 4, 14, "across"],
      ["VILLA", "Detached or semidetached suburban house", 5, 9, "down"],
      ["SHOE", "U-shaped plate nailed to underside of horse's hoof", 3, 7, "across"],
      ["VESSEL", "A tube in which a body fluid circulates", 4, 3, "down"],
      ["WAREHOUSE", "A storehouse for goods and merchandise", 0, 5, "across"],
      ["BROWSING", "Reading superficially or at random", 1, 1, "down"],
      ["COOPER", "A maker of wooden barrels", 9, 0, "down"]
    ]
  },
  {
    "category": "normal", "id": "normal-07", "title": "Mind the Gap", "width": 12, "height": 15,
    "legacyCells": {"19":[121],"20":[122],"21":[123],"22":[124],"23":[61,125],"35":[82],"37":[150],"47":[103],"49":[151],"51":[223],"53":[193],"54":[194],"55":[195],"56":[165,196],"57":[197],"58":[125,198],"59":[124,199],"61":[152],"63":[224],"68":[186],"70":[146],"73":[153],"75":[225],"77":[80],"78":[81],"79":[82],"80":[83,207],"82":[167],"85":[154],"87":[226],"89":[101],"92":[228],"94":[188],"97":[155],"99":[227],"101":[122],"106":[209],"109":[25,156],"110":[46],"111":[67,228],"112":[88,135],"113":[109,143],"124":[136],"136":[56,137],"137":[77],"138":[98],"139":[119],"140":[140],"141":[161],"142":[182],"148":[138],"160":[139],"170":[72],"171":[93],"172":[114,140],"173":[135],"174":[156],"175":[177],"176":[198],"177":[219]},
    "words": [
      ["CHIP", "A small piece broken off a larger object", 4, 6, "across"],
      ["PIPE", "A tube that carries water or gas", 8, 3, "down"],
      ["COOK", "Prepare a hot meal", 5, 5, "down"],
      ["PREPARE", "Make ready or suitable or equip in advance for a particular purpose or for some use, event, etc", 4, 4, "across"],
      ["ROUGH", "The part of a golf course bordering the fairway where the grass is not cut short", 10, 3, "down"],
      ["RICE", "Grains used as food either unpolished or more often polished", 11, 0, "down"],
      ["TOWER", "A structure taller than its diameter", 6, 1, "across"],
      ["SPEAK", "Give a speech to", 0, 9, "across"],
      ["REBATE", "A refund of some fraction of the amount paid", 3, 3, "down"],
      ["ILLNESS", "Impairment of normal physiological function affecting part or all of an organism", 1, 2, "down"],
      ["ARCADE", "A covered passageway with shops and stalls on either side", 4, 8, "down"],
      ["TREASURY", "The funds of a government or institution or individual", 1, 14, "across"],
      ["CONVERT", "Change from one system to another or to a new plan or policy", 3, 11, "across"]
    ]
  },
  {
    "category": "normal", "id": "normal-08", "title": "Point of View", "width": 13, "height": 14,
    "legacyCells": {"15":[308],"18":[259],"27":[326],"28":[327],"29":[328],"30":[329],"31":[260,330],"32":[331],"34":[143],"38":[24],"41":[346],"44":[261],"47":[162],"49":[173],"51":[43],"54":[365],"57":[262],"60":[181],"62":[174],"64":[62],"66":[214],"68":[274],"70":[166,263],"71":[185],"72":[204],"73":[200,223],"75":[175],"77":[81],"79":[221,233],"80":[240],"81":[259,275],"82":[278],"83":[264,297],"88":[176],"90":[100],"92":[252],"94":[276],"98":[236],"99":[255],"100":[274],"101":[177,293],"102":[312],"103":[119,331],"105":[271],"107":[277],"114":[178],"116":[138],"120":[160,278],"121":[161],"122":[162],"123":[163],"124":[164,291],"125":[165],"126":[166],"127":[167,179],"137":[310],"150":[329],"163":[348],"173":[365],"174":[366],"175":[367],"176":[367,368],"177":[369]},
    "words": [
      ["TIGHT", "Fitting closely, with little room", 3, 4, "down"],
      ["UNITY", "An undivided or unbroken completeness or totality with nothing wanting", 0, 6, "across"],
      ["BUZZ", "Sound of rapid vibration", 1, 4, "down"],
      ["INJURY", "Any physical damage to the body caused by violence or accident or fracture etc", 5, 0, "down"],
      ["LOVING", "Feeling or showing love and affection", 0, 2, "across"],
      ["BOSS", "The person who supervises your work", 2, 0, "down"],
      ["RANK", "Position in an ordered hierarchy", 4, 5, "across"],
      ["DESK", "A piece of furniture with a writing surface and usually drawers or other compartments", 8, 1, "down"],
      ["TREASURE", "Accumulated wealth in the form of money or jewels etc", 2, 9, "across"],
      ["PROMISE", "Grounds for feeling hopeful about the future", 10, 2, "down"],
      ["EATING", "The act of consuming food", 6, 7, "across"],
      ["BIOLOGY", "The science that studies living organisms", 12, 1, "down"],
      ["SMILE", "A facial expression characterized by turning up the corners of the mouth", 7, 8, "down"],
      ["SHEEP", "Woolly usually horned ruminant mammal related to the goat", 3, 13, "across"]
    ]
  },
  {
    "category": "normal", "id": "normal-09", "title": "In the Margins", "width": 12, "height": 15,
    "legacyCells": {"17":[221],"20":[216,221],"21":[222],"22":[223],"23":[224],"28":[357],"29":[247,358],"30":[359],"31":[360],"32":[242,361],"39":[341],"41":[273],"44":[268],"46":[347],"50":[270],"51":[271,342],"52":[272],"53":[273,299],"56":[294],"58":[348],"61":[105],"63":[343],"67":[244],"68":[270,320],"69":[296],"70":[322,349],"71":[348],"73":[106],"75":[266,344],"76":[292],"77":[288,318],"78":[344],"82":[350],"85":[107],"89":[289],"92":[235],"93":[236],"94":[237,351],"95":[238],"97":[108],"101":[290],"109":[109],"113":[291],"121":[92,110],"122":[93],"123":[94],"124":[95],"125":[96,292],"126":[97],"127":[98],"128":[99],"129":[100],"130":[101],"133":[111],"137":[293],"145":[112],"147":[44],"148":[70],"149":[96,294],"150":[122],"151":[148],"152":[174],"153":[200],"154":[226],"157":[113],"161":[295],"169":[114],"173":[296]},
    "words": [
      ["KICK", "The act of delivering a blow with the foot", 2, 6, "across"],
      ["DUCK", "A water bird with a broad bill", 3, 2, "down"],
      ["NULL", "Having no value, as in a database field", 1, 4, "across"],
      ["BELL", "A hollow object that rings when struck", 5, 0, "down"],
      ["FEVER", "A rise in the temperature of the body", 3, 2, "across"],
      ["BRAIN", "The organ that controls thought and movement", 8, 0, "down"],
      ["INNER", "Located or occurring within or closer to a center", 6, 5, "across"],
      ["ARENA", "A particular environment or walk of life", 10, 2, "down"],
      ["BATH", "A wash taken in a tub", 7, 1, "across"],
      ["SPAN", "The complete duration of something", 7, 7, "across"],
      ["COALITION", "An organization of people (or countries) involved in a pact or treaty", 5, 5, "down"],
      ["SWIMMING", "Filled or brimming with tears", 2, 12, "across"],
      ["DISCIPLINE", "A branch of knowledge", 0, 10, "across"],
      ["ACCREDITED", "Given official approval to act", 1, 4, "down"]
    ]
  },
  {
    "category": "normal", "id": "normal-10", "title": "The Turning Point", "width": 15, "height": 15,
    "legacyCells": {"23":[263],"25":[222],"26":[223],"27":[224],"28":[225,386],"29":[226],"38":[284],"43":[387],"50":[286],"51":[287],"52":[288],"53":[289,305],"54":[290],"56":[31],"58":[388],"61":[217],"68":[326],"70":[183],"71":[32,204],"72":[225],"73":[246,389],"76":[238],"81":[46],"83":[347],"86":[33],"88":[390],"91":[259],"96":[47],"98":[368],"100":[248],"101":[34,269],"102":[290],"103":[311,391],"106":[280],"110":[33],"111":[48,54],"112":[75],"113":[96,389],"118":[392],"121":[301],"126":[49],"128":[410],"133":[393],"136":[322],"141":[50],"143":[75,431],"144":[76],"145":[77],"146":[78],"147":[79,91],"148":[80,394],"151":[211,343],"152":[212],"153":[213],"154":[214],"155":[215],"156":[51,216],"157":[217],"162":[92],"177":[93],"192":[94],"202":[179],"203":[180],"204":[181],"205":[182],"206":[183],"207":[95,184],"222":[96]},
    "words": [
      ["NODE", "A connecting point at which several lines come together", 9, 4, "across"],
      ["SOLO", "A musical passage performed by one person", 11, 2, "down"],
      ["BOLD", "A typeface with thick heavy lines", 9, 6, "across"],
      ["DEPENDENT", "A person who relies on another person for support (especially financial support)", 13, 0, "down"],
      ["SOCKET", "A bony hollow into which a structure fits", 7, 9, "across"],
      ["AWARENESS", "State of elementary or undifferentiated consciousness", 8, 0, "down"],
      ["ASIDE", "A remark spoken to the audience in a play", 9, 1, "across"],
      ["LOSE", "Fail to keep or to maintain", 4, 7, "across"],
      ["MORAL", "The significance of a story or event", 4, 3, "across"],
      ["FLORAL", "Resembling or made of or suggestive of flowers", 6, 4, "down"],
      ["TROUBLE", "A source of difficulty", 0, 10, "across"],
      ["EXHAUST", "Gases ejected from an engine as waste products", 1, 3, "down"],
      ["ENGAGE", "Carry out or participate in an activity", 12, 8, "down"],
      ["TIMING", "The time when something happens", 6, 13, "across"]
    ]
  },
  {
    "category": "normal", "id": "normal-11", "title": "Pattern Finder", "width": 15, "height": 15,
    "legacyCells": {"17":[60],"18":[81],"19":[102,240],"20":[123],"21":[144],"31":[135],"34":[241],"46":[25,156],"47":[46],"48":[67],"49":[88,242],"50":[109],"51":[97,130],"52":[151],"58":[24],"61":[177],"64":[243],"66":[98],"73":[25],"76":[198],"80":[180],"81":[99,201],"82":[222],"83":[243],"88":[26],"91":[219],"96":[100],"99":[160],"103":[27],"106":[240,274],"107":[275],"108":[52,276],"109":[277],"110":[278],"111":[101,279],"112":[280],"113":[281],"114":[161,282],"118":[28],"123":[73],"126":[102],"129":[162],"131":[326],"133":[29],"138":[94],"142":[193],"143":[214],"144":[163,235],"145":[256],"146":[277,347],"147":[298],"148":[30,319],"153":[115,135],"154":[136],"155":[137],"156":[138],"161":[368],"168":[136],"174":[190],"175":[191],"176":[192,389],"177":[193],"178":[194],"179":[195],"191":[410],"206":[431],"221":[452]},
    "words": [
      ["ECOLOGY", "The environment as it relates to living organisms", 0, 3, "across"],
      ["ROLL", "Rotary motion of an object around its own axis", 4, 0, "down"],
      ["STRIP", "A relatively long narrow piece of something", 1, 1, "across"],
      ["TEMPER", "A tendency to get angry quickly", 1, 1, "down"],
      ["GUITAR", "A stringed instrument usually having six strings", 6, 2, "down"],
      ["REFINANCE", "Renew the financing of", 0, 7, "across"],
      ["DIAL", "The face of a timepiece", 4, 5, "across"],
      ["DEAR", "A greeting used before the name at the start of a letter", 9, 5, "down"],
      ["FAITH", "A strong belief in a supernatural power or powers that control human destiny", 3, 6, "down"],
      ["THIN", "Of relatively small extent from one surface to the opposite or in cross section", 2, 10, "across"],
      ["NURSING", "The work of caring for the sick or injured or infirm", 6, 9, "across"],
      ["BEARING", "Direction expressed as an angle from north", 13, 2, "down"],
      ["DIPLOMA", "A document certifying the successful completion of a course of study", 11, 7, "down"],
      ["WALNUT", "A wrinkled edible nut in a hard shell", 8, 11, "across"]
    ]
  },
  {
    "category": "normal", "id": "normal-12", "title": "Across the Page", "width": 17, "height": 17,
    "legacyCells": {"27":[156],"28":[176],"29":[196],"30":[216],"31":[173,236],"32":[256],"48":[193],"65":[213],"74":[245],"78":[25,255],"79":[45],"80":[65],"81":[85,90],"82":[105,233],"83":[125],"84":[145],"91":[246],"95":[256],"98":[91],"108":[247],"112":[21,257],"113":[22],"114":[23],"115":[24,92],"116":[25],"117":[26,181],"125":[248],"129":[258],"132":[93],"134":[201],"142":[249],"149":[94],"151":[221],"159":[250,409],"160":[410],"161":[411],"162":[201,412],"163":[413],"164":[414],"165":[415],"166":[95,416],"168":[241],"176":[251],"179":[202],"183":[96],"185":[261],"196":[203],"200":[97],"202":[281],"205":[67],"206":[87],"207":[107],"208":[127],"209":[147],"210":[167],"211":[187],"212":[207],"213":[204,227],"214":[247],"219":[301],"230":[205],"233":[173],"234":[31,174],"235":[175],"236":[176,321],"237":[177],"247":[206],"251":[51],"261":[147],"262":[148],"263":[149],"264":[150,207],"265":[151],"266":[152],"268":[71],"281":[208],"285":[91]},
    "words": [
      ["SPEAKER", "Someone who expresses in language", 9, 4, "across"],
      ["SICK", "Affected by an impairment of normal physical or mental function", 14, 0, "down"],
      ["PRAISE", "An expression of approval and commendation", 9, 1, "across"],
      ["SEAL", "Fastener consisting of a resinous composition that is plastic when warm", 10, 3, "down"],
      ["ADJUST", "Alter or regulate so as to achieve accuracy or conform to a standard", 9, 6, "across"],
      ["ALUMINUM", "A silvery ductile metallic element found primarily in bauxite", 13, 3, "down"],
      ["TRAVELER", "A person who changes location", 15, 5, "down"],
      ["SPARE", "An extra component of a machine or other apparatus", 11, 13, "across"],
      ["POLL", "An inquiry into public opinion conducted by interviewing a random sample of people", 13, 12, "down"],
      ["GUARDIAN", "A person who cares for persons or property", 5, 9, "across"],
      ["ROMANTIC", "A soulful or amorous idealist", 9, 8, "down"],
      ["VINTAGE", "A season's yield of wine from a vineyard", 6, 3, "down"],
      ["NOTIFY", "Inform (somebody) of something", 5, 15, "across"],
      ["TECHNICIAN", "Someone whose occupation involves training in a specific technical process", 0, 12, "across"]
    ]
  },
  {
    "category": "normal", "id": "normal-13", "title": "Word by Word", "width": 14, "height": 14,
    "legacyCells": {"24":[101],"31":[302],"35":[48],"36":[76,164],"37":[104],"38":[102,132],"41":[386],"44":[45],"45":[46,330],"46":[47],"47":[48],"48":[49],"50":[192],"52":[103],"55":[387],"59":[358],"64":[220],"66":[104],"69":[388],"71":[194,455],"72":[456],"73":[386,457],"74":[458],"75":[459],"76":[460],"77":[461],"78":[248,462],"80":[105,305],"81":[333],"82":[361],"83":[389],"85":[222],"94":[106],"99":[250],"101":[287],"107":[214],"108":[107,242],"109":[270],"110":[216,298],"113":[278,436],"114":[437],"115":[315,438],"116":[439],"117":[440],"118":[441],"124":[244],"127":[306],"129":[343],"138":[272],"143":[371],"152":[300],"157":[399],"166":[328],"170":[78],"171":[106,427],"172":[134],"173":[162],"174":[190],"175":[218],"185":[455]},
    "words": [
      ["REDUCING", "Loss of excess weight (as by dieting)", 0, 5, "across"],
      ["GRID", "A pattern of regularly spaced horizontal and vertical lines", 3, 1, "down"],
      ["DRAFT", "A document ordering the payment of money", 1, 3, "across"],
      ["LUNG", "Either of two saclike respiratory organs in the chest of vertebrates", 8, 1, "down"],
      ["FLIP", "Hot or cold alcoholic mixed drink containing a beaten egg", 6, 2, "across"],
      ["OPTIMAL", "Most desirable possible under a restriction expressed or implied", 10, 0, "down"],
      ["ROUTE", "An established line of travel or access", 1, 4, "down"],
      ["TURKEY", "Large gallinaceous bird with fan-shaped tail", 0, 8, "across"],
      ["SLOW", "So lacking in interest as to cause mental weariness", 8, 7, "across"],
      ["MINE", "Explosive device that explodes on contact", 9, 5, "across"],
      ["DIVE", "A cheap disreputable nightclub or dance hall", 13, 1, "down"],
      ["WIDTH", "The extent of something from side to side", 12, 6, "down"],
      ["GRAMMAR", "The branch of linguistics that deals with syntax and morphology (and sometimes also deals with semantics)", 3, 6, "down"],
      ["SAVING", "An act of economizing", 1, 12, "across"]
    ]
  },
  {
    "category": "hard", "id": "fine-print", "title": "The Fine Print", "width": 18, "height": 18,
    "legacyCells": {"31":[179],"45":[171],"46":[185],"47":[199],"48":[213],"49":[193,227],"50":[241],"51":[255],"52":[269],"53":[283],"57":[177],"67":[207],"75":[191],"80":[216],"81":[217],"82":[218],"83":[219],"84":[220],"85":[221],"86":[222],"87":[223],"91":[291],"93":[205],"103":[235],"106":[281],"109":[305],"111":[219],"117":[169],"118":[183],"119":[197],"120":[211],"121":[225,249],"122":[239],"123":[253],"124":[267,282],"125":[281],"127":[319],"129":[233],"139":[263],"142":[283],"145":[333],"147":[247],"152":[75],"160":[284],"163":[347],"165":[261],"170":[89,271],"171":[285],"172":[299],"173":[313],"174":[327],"175":[341],"176":[355],"177":[369],"178":[285,383],"179":[397],"181":[113,361],"182":[114],"183":[115,275],"184":[116],"185":[117],"186":[118],"187":[119],"188":[103,120],"196":[286],"199":[375],"201":[289],"206":[117],"208":[22],"209":[36],"210":[50],"211":[64],"212":[78],"213":[92],"214":[106,287],"215":[120],"217":[389],"224":[131],"235":[403],"242":[145,185],"243":[186],"244":[187],"245":[188],"246":[189],"247":[190],"248":[191],"249":[192],"250":[193],"251":[194],"260":[159],"277":[450],"278":[173,451],"279":[452],"280":[453],"281":[454],"282":[455],"283":[456],"284":[457],"285":[458],"286":[459],"287":[460],"296":[187],"313":[73],"314":[74,201],"315":[75],"316":[76],"317":[77],"318":[78],"319":[79],"320":[80],"321":[81],"322":[82],"323":[83]},
    "words": [
      ["CATHARSIS", "Emotional release", 8, 2, "across"],
      ["LACONIC", "Using very few words", 13, 0, "down"],
      ["QUOTIDIAN", "Everyday or commonplace", 8, 6, "across"],
      ["HEGEMONY", "Dominance of one group over others", 7, 4, "across"],
      ["NASCENT", "Just beginning to develop", 16, 4, "down"],
      ["OBDURATE", "Stubbornly refusing to change", 9, 11, "across"],
      ["BELLWETHER", "Early indicator of future trends", 7, 9, "across"],
      ["ABERRATION", "Departure from what is normal", 8, 7, "down"],
      ["APOCRYPHAL", "Of doubtful authenticity", 7, 13, "across"],
      ["ANACHRONISM", "Something placed in the wrong historical period", 6, 17, "across"],
      ["VICISSITUDE", "An unexpected change in circumstances", 6, 15, "across"],
      ["DIATRIBE", "A bitter verbal attack", 0, 10, "across"],
      ["CONUNDRUM", "A particularly puzzling problem", 1, 4, "down"],
      ["EPHEMERAL", "Lasting a very short time", 3, 2, "down"]
    ]
  },
  {
    "category": "hard", "id": "deep-cut", "title": "Deep Cut", "width": 17, "height": 17,
    "legacyCells": {"25":[138],"26":[139],"27":[140],"28":[141],"29":[142],"30":[143],"31":[144],"32":[145,420],"33":[146],"49":[421],"57":[288],"61":[57],"66":[422],"71":[90],"72":[112],"73":[134],"74":[156,310],"75":[178],"76":[200],"77":[222],"78":[79,244],"80":[89],"83":[423],"86":[52],"91":[332],"95":[101],"97":[90],"100":[424],"103":[74,182],"104":[183],"105":[32,184],"106":[185],"107":[186],"108":[187,354],"109":[188],"110":[189],"112":[123],"114":[91],"117":[425],"120":[96],"122":[54],"125":[376],"128":[26],"129":[48,145],"130":[70],"131":[92],"132":[114],"133":[136],"134":[158,426],"137":[118],"139":[76],"142":[398],"144":[225],"146":[167],"148":[93],"151":[427],"154":[140],"156":[98],"159":[420],"161":[226],"163":[189],"165":[94],"168":[428],"171":[162,229],"172":[251],"173":[120,273],"174":[295],"175":[317],"176":[339,442],"177":[361],"178":[227,383],"182":[95],"185":[429],"188":[184],"190":[142],"193":[464],"195":[228],"199":[96],"212":[229],"229":[230],"245":[62],"246":[84,231],"247":[106],"248":[128],"249":[150],"250":[172],"251":[194],"252":[216],"253":[238],"254":[260],"263":[232],"277":[473],"278":[474],"279":[475],"280":[233,476],"281":[477],"282":[478],"283":[479],"284":[480],"285":[481],"286":[482]},
    "words": [
      ["EXEGESIS", "Critical explanation of a text", 0, 10, "across"],
      ["ACUMEN", "Keen judgment in a particular field", 3, 5, "down"],
      ["ALACRITY", "Brisk and cheerful readiness", 0, 6, "across"],
      ["PANACEA", "Supposed cure for every problem", 1, 4, "down"],
      ["SOLIPSISM", "View that only one's own mind can be known to exist", 6, 2, "down"],
      ["ABROGATE", "Formally repeal a law", 2, 4, "across"],
      ["PERFIDY", "Deliberate betrayal of trust", 10, 2, "down"],
      ["LIMINAL", "Relating to a threshold or transition", 8, 7, "across"],
      ["TACITURN", "Habitually quiet", 12, 3, "down"],
      ["ICONOCLAST", "Challenger of cherished beliefs", 15, 0, "down"],
      ["ECCENTRIC", "Unconventional in habits or appearance", 7, 1, "across"],
      ["DESUETUDE", "State of having fallen out of use", 8, 7, "down"],
      ["OBSEQUIOUS", "Overly eager to please someone powerful", 4, 16, "across"],
      ["MUNIFICENT", "Extremely generous", 6, 14, "across"]
    ]
  },
  {
    "category": "hard", "id": "hard-03", "title": "Fine Distinctions", "width": 17, "height": 17,
    "legacyCells": {"19":[236],"24":[379],"36":[237],"41":[380],"53":[238],"56":[28],"57":[51],"58":[74,381],"59":[97],"60":[120],"61":[143],"62":[166],"63":[189],"64":[212],"70":[239],"75":[382],"86":[285],"87":[240,308],"88":[331],"89":[354],"90":[377,432],"91":[400],"92":[383,423],"93":[446],"104":[241],"107":[455],"109":[384],"121":[242],"124":[478],"126":[385],"139":[282],"141":[501],"145":[335],"146":[358],"147":[381],"148":[404],"149":[427],"150":[450],"151":[473],"156":[283],"158":[524],"161":[83],"168":[474],"173":[236,284],"174":[259],"175":[282,547],"176":[305],"177":[328],"178":[84,351],"179":[374],"180":[397],"181":[420],"182":[426,443],"185":[475],"190":[285],"192":[570],"195":[85],"199":[427],"202":[476],"207":[286],"212":[86,565],"213":[566],"214":[567],"215":[568],"216":[428,569],"217":[570],"218":[571],"219":[477,572],"220":[573],"224":[287],"229":[87],"233":[429],"236":[478],"241":[288],"243":[518],"244":[519],"245":[520],"246":[88,521],"247":[522],"248":[523],"249":[524],"250":[430,525],"253":[479],"263":[89],"267":[431],"280":[90],"282":[202],"283":[225],"284":[248,432],"285":[271],"286":[294],"287":[317],"288":[340]},
    "words": [
      ["PREACHING", "An address of a religious nature (usually delivered during a church service)", 7, 12, "across"],
      ["STUNNED", "So surprised that you cannot react immediately", 15, 7, "down"],
      ["FURIOUS", "Extremely angry", 8, 8, "across"],
      ["MISPLACE", "Place (something) where one cannot find it again", 8, 8, "down"],
      ["ROCKERS", "Curved supports that let a chair sway back and forth", 12, 9, "down"],
      ["DESCENT", "Properties attributable to your ancestry", 9, 16, "across"],
      ["VOLATILE", "Evaporating readily at normal temperatures and pressures", 4, 14, "across"],
      ["PETITIONER", "One praying humbly for something", 2, 10, "across"],
      ["TYPHOON", "A tropical cyclone occurring in the western pacific or indian oceans", 3, 7, "down"],
      ["STEALTH", "Avoiding detection by moving carefully", 5, 4, "down"],
      ["HARDSHIP", "A state of misfortune or affliction", 0, 5, "across"],
      ["DERRICK", "A tall framework used to support drilling equipment", 7, 0, "down"],
      ["PURCHASER", "A person who buys", 4, 3, "across"],
      ["PAGEANT", "An elaborate representation of scenes from history etc", 2, 0, "down"]
    ]
  },
  {
    "category": "hard", "id": "hard-04", "title": "From Memory", "width": 16, "height": 16,
    "legacyCells": {"25":[70,183],"26":[205],"27":[227],"28":[249],"29":[271],"30":[293],"31":[315],"41":[92],"51":[278],"53":[133],"54":[134],"55":[135],"56":[136],"57":[114,137],"58":[138],"59":[139],"60":[140],"61":[141],"63":[90],"67":[300],"73":[136],"79":[91],"83":[322],"85":[309,426],"86":[427],"87":[428],"88":[429],"89":[158,430],"90":[431],"91":[432],"93":[339],"95":[92],"99":[344],"101":[310],"105":[180],"109":[361],"111":[93],"115":[366],"117":[311],"120":[378],"121":[202,379],"122":[380],"123":[381],"124":[382],"125":[383],"126":[384],"127":[94,385],"131":[388],"133":[312],"141":[405],"143":[95],"147":[410],"149":[313],"154":[30],"157":[427],"159":[96],"161":[200],"162":[201],"163":[202,432],"164":[203],"165":[204,314],"166":[205],"167":[206],"169":[441],"170":[52,442],"171":[443],"172":[444],"173":[445,449],"174":[446],"175":[97,447],"181":[315],"186":[74],"189":[471],"202":[96],"215":[314],"216":[336],"217":[358],"218":[118,380],"219":[402],"220":[424],"221":[446],"222":[468],"234":[140],"247":[65],"248":[87],"249":[109],"250":[131,162],"251":[153],"252":[175],"253":[197],"254":[219],"255":[241]},
    "words": [
      ["SEVENTEEN", "The prime number between sixteen and eighteen", 6, 15, "across"],
      ["KEYNOTE", "The principal theme in a speech or literary work", 10, 8, "down"],
      ["IMPOSING", "Used of a person's appearance or behavior", 6, 13, "across"],
      ["BENDING", "Movement that causes the formation of a curve", 8, 10, "across"],
      ["CORSAIR", "A pirate or privateer", 13, 4, "down"],
      ["JEOPARDY", "A source of danger", 7, 7, "across"],
      ["WORRYING", "The act of harassing someone", 15, 2, "down"],
      ["BRIGADE", "Army unit smaller than a division", 9, 0, "down"],
      ["BLOWOUT", "A sudden malfunction of a part or apparatus", 8, 1, "across"],
      ["ORIGINATE", "Begin a trip at a certain point, as of a plane, train, bus, etc", 4, 3, "across"],
      ["SALVAGE", "Property or goods saved from damage or destruction", 4, 5, "across"],
      ["SUBUNIT", "A monetary unit that is valued at a fraction (usually one hundredth) of the basic monetary unit", 5, 4, "down"],
      ["STERILE", "Free of or using methods to keep free of pathological microorganisms", 0, 10, "across"],
      ["CHLORINE", "The chemical element with the symbol Cl", 3, 2, "down"]
    ]
  },
  {
    "category": "hard", "id": "hard-05", "title": "Close Reading", "width": 16, "height": 17,
    "legacyCells": {"17":[119],"33":[144],"49":[169],"53":[54],"54":[79,271],"55":[104],"56":[129],"57":[154],"58":[179],"59":[204],"65":[194],"67":[205],"70":[296],"81":[219],"83":[230],"86":[259,321],"87":[260],"88":[261],"89":[262],"90":[263],"91":[264],"92":[112,265],"94":[502],"97":[244],"99":[255],"102":[346],"108":[113],"110":[503],"113":[269],"115":[280],"118":[371],"121":[151],"122":[152],"123":[153],"124":[114,154],"125":[155],"126":[156,504],"127":[157],"129":[37,294],"130":[62],"131":[87,305],"132":[112],"133":[137],"134":[162,396],"135":[187],"136":[212],"140":[115],"142":[505],"145":[319],"147":[330],"150":[421],"153":[185],"156":[116],"158":[506],"161":[344],"163":[355],"168":[378],"169":[210,403],"170":[428],"171":[453],"172":[117,478],"173":[503],"174":[507,528],"185":[235],"188":[118],"190":[508],"194":[58],"195":[59],"196":[60],"197":[61],"198":[62],"199":[63],"200":[64],"201":[65,260],"204":[119],"206":[509],"217":[285],"220":[120],"222":[510],"227":[340],"228":[365],"229":[390],"230":[415],"231":[440],"232":[465],"233":[310,490],"234":[515],"238":[511],"249":[335],"259":[65],"260":[90],"261":[115],"262":[140],"263":[165],"264":[190],"265":[215,360],"266":[240],"267":[265]},
    "words": [
      ["CONFORMITY", "Correspondence in form or appearance", 14, 4, "down"],
      ["CURATOR", "The custodian of a collection (as a museum or library)", 7, 10, "across"],
      ["DEPLETION", "The act of decreasing something markedly", 12, 4, "down"],
      ["SERPENT", "Limbless scaly elongate reptile", 8, 7, "across"],
      ["BRUSHED", "Touched lightly in passing", 5, 5, "across"],
      ["LABORER", "Someone who works with their hands", 6, 2, "down"],
      ["GLIMPSE", "A brief or incomplete view", 4, 3, "across"],
      ["NUTRIENT", "Any substance that can be metabolized by an animal to give energy and build tissue", 9, 8, "down"],
      ["CUCUMBER", "A long green vegetable often sliced into salads", 2, 14, "across"],
      ["RELOCATED", "Settled in a new location", 2, 16, "across"],
      ["INFERIOR", "One of lesser rank or station or quality", 1, 12, "across"],
      ["GRADIENT", "A graded change in the magnitude of some physical quantity or dimension", 0, 8, "across"],
      ["ASPHALT", "A dark bituminous substance found in natural beds and as residue from petroleum distillation", 3, 3, "down"],
      ["OVERWEIGHT", "The property of excessive fatness", 1, 0, "down"]
    ]
  },
  {
    "category": "hard", "id": "hard-06", "title": "Hidden in Plain Sight", "width": 16, "height": 17,
    "legacyCells": {"29":[64],"45":[101],"52":[276],"53":[269,277],"54":[278],"55":[279],"56":[280],"57":[281],"58":[282],"61":[138],"69":[306],"77":[175],"85":[42,343],"86":[79],"87":[116],"88":[153],"89":[190],"90":[227],"91":[264],"92":[301],"93":[212,338],"101":[380],"109":[249],"115":[207],"117":[417],"119":[266],"125":[286],"129":[129,382],"130":[383],"131":[244,384],"132":[385],"133":[386,454],"134":[387],"135":[267,388],"136":[389],"138":[163],"141":[323],"145":[166],"147":[281],"149":[491],"151":[268],"154":[200],"156":[155],"161":[203],"163":[318],"166":[46],"167":[83,269],"168":[120],"169":[157],"170":[194,237],"171":[231],"172":[156,268],"175":[266],"177":[240],"179":[355],"183":[270],"186":[274],"188":[157],"191":[303],"193":[277],"195":[392],"198":[110],"199":[147,271],"200":[184],"201":[221],"202":[258,311],"203":[295],"204":[158,332],"205":[369],"206":[406],"207":[340,443],"209":[314],"211":[429],"215":[272],"218":[348],"220":[159],"223":[377],"225":[351],"227":[466],"234":[385],"236":[160],"239":[414],"241":[388],"246":[234],"247":[271],"248":[308],"249":[345],"250":[382,422],"251":[419],"252":[161,456],"255":[451],"266":[459],"271":[488]},
    "words": [
      ["METHANE", "A colorless odorless gas used as a fuel", 12, 8, "down"],
      ["DAYTIME", "The time after sunrise and before sunset while it is light outside", 5, 10, "across"],
      ["WHISTLE", "Produce a high note by blowing through pursed lips", 5, 15, "across"],
      ["ETIQUETTE", "Rules governing socially acceptable behavior", 10, 7, "down"],
      ["BREATHE", "Draw air into, and expel out of, the lungs", 7, 6, "down"],
      ["THROUGHPUT", "Output relative to input", 5, 12, "across"],
      ["BATHING", "Immersing the body in water or sunshine", 15, 9, "down"],
      ["TERTIARY", "Coming next after the second and just before the fourth in position", 0, 8, "across"],
      ["TEENAGER", "Someone between thirteen and nineteen years old", 1, 7, "down"],
      ["ORNAMENT", "Something used to beautify", 3, 6, "down"],
      ["ACCLAIM", "Clap one's hands or shout after performances to indicate approval", 5, 2, "down"],
      ["CARVING", "Removing parts from hard material to create a desired pattern or shape", 3, 3, "across"],
      ["CLIPBOARD", "A small writing board with a clip at the top for holding papers", 4, 5, "across"],
      ["SPEEDWAY", "Road where high speed driving is allowed", 13, 0, "down"]
    ]
  },
  {
    "category": "hard", "id": "hard-07", "title": "A Taller Order", "width": 15, "height": 18,
    "legacyCells": {"24":[98],"26":[404],"35":[170],"36":[186,322],"37":[202],"38":[218],"39":[99,234],"40":[250],"41":[266,420],"49":[181],"51":[323],"54":[100],"56":[436],"64":[182],"66":[324],"69":[101],"71":[452],"77":[293],"79":[183],"81":[325],"84":[102],"86":[468],"88":[450],"92":[294],"94":[184],"96":[326],"98":[417],"99":[103,418],"100":[419],"101":[420,484],"102":[421],"103":[422,451],"104":[423],"107":[295],"109":[185],"111":[327],"114":[104],"116":[500],"118":[452],"122":[296],"124":[186],"126":[328],"129":[105],"133":[453],"136":[293],"137":[297,309],"138":[325],"139":[187,341],"140":[357],"141":[329,373],"142":[389],"148":[454],"152":[298],"154":[188],"159":[283],"163":[455],"167":[299],"170":[237],"171":[253],"172":[269],"173":[285],"174":[299,301],"175":[317],"176":[333],"177":[349],"178":[365,456],"179":[381],"189":[315],"193":[457],"196":[562],"197":[563],"198":[564],"199":[565],"200":[566],"201":[567],"202":[568],"203":[569],"204":[331,570],"205":[571],"219":[347],"226":[290],"227":[306],"228":[322],"229":[338],"230":[354],"231":[370],"232":[386],"233":[402],"234":[363,418],"249":[379],"258":[443],"259":[459],"260":[475],"261":[491],"262":[507],"263":[523],"264":[395,539],"265":[555],"266":[571]},
    "words": [
      ["AMBITION", "A strong drive for success", 6, 1, "down"],
      ["PAIRING", "The act of grouping things or people in pairs", 0, 9, "across"],
      ["BACKWARD", "Directed or facing toward the back or rear", 4, 2, "down"],
      ["PROPANE", "Colorless gas found in natural gas and petroleum", 2, 4, "down"],
      ["CAPSULE", "A pill in the form of a small rounded gelatinous container with medicine inside", 4, 2, "across"],
      ["DECODER", "The kind of intellectual who converts messages from a code to plain text", 11, 0, "down"],
      ["BULLYING", "The act of intimidating a weaker person to make them do something", 9, 0, "down"],
      ["FIREFLY", "An insect that flashes light", 7, 6, "across"],
      ["FLOODING", "A technique used in behavior therapy", 13, 4, "down"],
      ["RHINESTONE", "An imitation diamond made from rock crystal or glass or paste", 4, 11, "across"],
      ["AEROBICS", "Exercise that increases the need for oxygen", 9, 9, "down"],
      ["COMPETITOR", "The contestant you hope to defeat", 0, 13, "across"],
      ["SPAGHETTI", "Pasta made in long, thin strands", 0, 15, "across"],
      ["DISPENSER", "A container so designed that the contents can be used in prescribed amounts", 2, 17, "across"]
    ]
  },
  {
    "category": "hard", "id": "hard-08", "title": "On the Tip of the Tongue", "width": 17, "height": 18,
    "legacyCells": {"24":[26,40],"25":[27],"26":[28],"27":[29],"28":[30],"29":[31],"30":[32],"31":[33],"32":[34],"33":[35],"41":[62],"50":[57],"52":[253],"53":[254],"54":[255],"55":[78,256],"56":[257],"57":[258],"58":[84,259],"59":[260],"67":[79],"72":[79],"75":[106],"77":[187],"78":[209],"79":[231],"80":[253],"81":[275],"82":[297],"83":[319],"84":[101,341],"89":[80],"92":[128],"101":[123],"104":[249],"105":[271],"106":[81,293],"107":[315],"108":[337],"109":[150,359],"110":[381],"111":[403],"116":[295],"118":[145],"123":[82],"126":[172],"129":[38],"130":[60],"131":[82],"132":[104],"133":[126,296],"134":[148],"135":[167,170],"138":[385],"140":[83],"150":[297],"155":[247,407],"156":[269],"157":[84,291],"158":[313],"159":[335],"160":[357],"161":[379],"162":[401],"167":[298],"169":[112],"172":[429],"184":[299],"186":[134],"188":[93],"189":[94,451],"190":[95],"191":[96],"192":[97],"193":[98],"194":[99],"201":[300],"203":[156],"206":[473],"212":[367],"213":[389],"214":[411],"215":[433],"216":[455],"217":[477],"218":[301,499],"219":[521],"220":[178,543],"223":[495],"237":[200],"240":[517],"254":[222],"256":[409],"257":[410,539],"258":[411],"259":[412],"260":[413],"261":[414],"262":[415],"263":[416],"264":[417],"271":[244],"288":[266],"305":[288]},
    "words": [
      ["SUCCESSION", "A following of one thing after another in time", 6, 1, "across"],
      ["NOTEPAD", "A pad of paper for keeping notes", 16, 0, "down"],
      ["KINDRED", "Group of people related by blood or marriage", 9, 7, "across"],
      ["PERSUADE", "Win approval or support for", 8, 4, "across"],
      ["SOLICIT", "Make amorous advances towards", 7, 0, "down"],
      ["MEANTIME", "The time between one event, process, or period and another", 1, 6, "across"],
      ["SIDEWALK", "Walk consisting of a paved area for pedestrians", 0, 3, "across"],
      ["ETHANOL", "The intoxicating agent in fermented and distilled liquors", 4, 2, "down"],
      ["ROLLOVER", "The act of changing the institution that invests your pension plan without incurring a tax penalty", 1, 9, "across"],
      ["GRANDPA", "An informal name for your father's or mother's father", 14, 5, "down"],
      ["COOPERATE", "Work together on a common enterprise of project", 7, 12, "across"],
      ["BREAKOUT", "An escape from jail", 2, 7, "down"],
      ["MASTERY", "Great skillfulness and knowledge of some subject or activity", 0, 11, "across"],
      ["STORYLINE", "The plot of a book or play or film", 0, 15, "across"],
      ["DAVENPORT", "A small decorative writing desk", 16, 8, "down"]
    ]
  },
  {
    "category": "hard", "id": "hard-09", "title": "A Test of Words", "width": 17, "height": 18,
    "legacyCells": {"29":[533],"33":[358],"41":[674],"42":[675],"43":[676],"44":[677],"45":[678],"46":[554,679],"47":[680],"48":[681],"49":[682],"50":[359,683],"63":[575],"67":[360],"69":[36],"74":[487],"75":[488,547],"76":[489],"77":[490],"78":[491],"79":[492],"80":[493,596],"81":[494],"84":[361],"86":[57],"92":[548],"97":[617],"99":[27],"101":[362],"103":[78],"107":[317],"109":[549],"114":[638],"116":[28],"118":[363],"120":[99],"122":[107],"124":[318],"126":[550],"129":[409],"131":[659],"133":[29],"135":[364],"137":[120],"139":[108],"141":[319],"143":[551],"146":[430],"148":[680],"150":[30],"152":[365],"154":[141],"156":[109],"158":[67,320],"159":[88],"160":[109,552],"161":[130],"162":[151],"163":[172,451],"164":[193],"167":[31],"169":[366],"171":[162],"173":[110],"175":[321],"177":[553],"180":[472],"182":[276],"184":[32],"188":[183],"190":[111],"192":[322],"194":[554],"197":[493],"199":[277],"201":[33],"205":[204],"207":[112],"209":[323],"211":[555],"214":[514],"216":[278],"218":[34],"222":[225,240],"223":[261],"224":[113,282],"225":[303],"226":[324],"227":[345],"228":[366,556],"231":[535],"233":[279],"235":[35],"241":[114],"243":[325],"245":[557],"247":[71],"248":[92,556],"249":[113],"250":[134,280],"251":[155],"252":[36,176],"253":[197],"267":[281],"275":[80],"276":[101],"277":[122],"278":[143],"279":[164],"280":[185],"281":[206],"282":[227],"283":[248],"284":[269,282],"285":[290],"301":[283]},
    "words": [
      ["ARTICULATED", "Consisting of segments held together by joints", 7, 3, "down"],
      ["FOUNDRY", "Factory where metal castings are produced", 4, 9, "across"],
      ["PERCEIVE", "To become aware of through the senses", 10, 6, "down"],
      ["CRAFTSMAN", "A professional whose work is consistently of high quality", 5, 5, "down"],
      ["LINKAGE", "A mechanical system of rods or springs or pivots that transmits power or motion", 0, 13, "across"],
      ["RECIPROCAL", "Hybridization involving a pair of crosses that reverse the sexes associated with each genotype", 1, 3, "down"],
      ["SOUNDING", "Appearing to be as specified", 3, 6, "down"],
      ["MAKEOVER", "A complete reconstruction and renovation of something", 5, 4, "across"],
      ["SENSORY", "Of a nerve fiber or impulse originating outside and passing toward the central nervous system", 8, 14, "across"],
      ["WATERCOLOR", "A water-base paint (with water-soluble pigments)", 14, 4, "down"],
      ["WAVEFORM", "The shape of a wave illustrated graphically by plotting the values of the period quantity against time", 12, 0, "down"],
      ["BACKGAMMON", "A board game for two players", 6, 2, "across"],
      ["INTERVENE", "Get involved, so as to alter or hinder an action, or through force or threat of force", 16, 0, "down"],
      ["TYROSINE", "An amino acid found in most proteins", 12, 9, "down"],
      ["DEVASTATING", "Wreaking or capable of wreaking complete destruction", 2, 16, "across"]
    ]
  },
  {
    "category": "hard", "id": "hard-10", "title": "The Final Stretch", "width": 16, "height": 18,
    "legacyCells": {"19":[288],"21":[104],"26":[433],"28":[551],"35":[318],"37":[105],"39":[605],"40":[606],"41":[607],"42":[434,608],"43":[609],"44":[552,610],"45":[611],"46":[612],"51":[348],"53":[106],"58":[435],"60":[553],"63":[344],"67":[378],"69":[107],"71":[301],"72":[302],"73":[303],"74":[304,436],"75":[305],"76":[306,554],"77":[307],"78":[308],"79":[309,345],"83":[408],"85":[108],"90":[437],"92":[555],"95":[346],"99":[438],"101":[109],"106":[438],"108":[556],"111":[347],"115":[50,468],"116":[80],"117":[110],"118":[140],"119":[170],"120":[200],"121":[230],"122":[260,439],"124":[557],"127":[348],"129":[211],"131":[498],"133":[111],"143":[349],"145":[241],"149":[112],"155":[455],"159":[350],"161":[271],"165":[113],"167":[445],"168":[475],"169":[505],"170":[535],"171":[485,565],"172":[595],"173":[625],"174":[655],"175":[351,685],"177":[301],"180":[457],"187":[515],"193":[331],"196":[487],"198":[429],"199":[459],"200":[489],"201":[519],"202":[549],"203":[545,579],"204":[609],"205":[639],"206":[669],"209":[361],"212":[517],"219":[575],"225":[391],"227":[200],"228":[201,547],"229":[202],"230":[203],"231":[204],"232":[205],"233":[206],"234":[207],"235":[208,605],"236":[209],"241":[421],"244":[577],"251":[635],"257":[124,451],"258":[154],"259":[184],"260":[214,607],"261":[244],"262":[274],"263":[304],"264":[334],"265":[364],"266":[394],"273":[481],"276":[637]},
    "words": [
      ["OVERLAND", "Traveling or passing over land", 6, 2, "across"],
      ["DARLING", "A special loved one", 12, 0, "down"],
      ["FREEWAY", "A broad highway designed for high-speed traffic", 10, 0, "down"],
      ["FACEPLATE", "A protective covering for the front of a machine or device (as a door lock or computer component)", 6, 4, "across"],
      ["ZEPPELIN", "A large rigid dirigible designed to carry passengers or bombs", 15, 2, "down"],
      ["IMITATION", "Something copied or derived from an original", 6, 10, "across"],
      ["SCRUTINY", "The act of examining something closely (as for mistakes)", 2, 7, "across"],
      ["EQUESTRIAN", "A man skilled in equitation", 5, 0, "down"],
      ["OVERCAST", "The state of the sky when it is covered by clouds", 3, 0, "down"],
      ["JACKPOT", "The cumulative amount involved in a game (such as poker)", 11, 8, "down"],
      ["SPRINKLER", "Mechanical device that attaches to a garden hose for watering lawn or garden", 5, 12, "across"],
      ["IRRITATION", "The psychological state of being irritated or annoyed", 2, 14, "across"],
      ["ACCRUED", "Periodically accumulated over time", 4, 10, "down"],
      ["SWEETHEART", "A person loved by another person", 0, 16, "across"],
      ["USEFULNESS", "The quality of being of practical use", 1, 7, "down"]
    ]
  },
  {
    "category": "hard", "id": "hard-11", "title": "Beyond the Obvious", "width": 17, "height": 18,
    "legacyCells": {"33":[115],"50":[142],"52":[314],"53":[341],"54":[368],"55":[395],"56":[422],"57":[449],"58":[476],"59":[503],"60":[241,530],"61":[557],"67":[169],"77":[268],"82":[148],"84":[196],"94":[295],"99":[149],"101":[223],"103":[527],"104":[298,528],"105":[529],"106":[530],"107":[531],"108":[532],"109":[533],"111":[322,370],"112":[371],"113":[372],"114":[373],"115":[374],"116":[150,375],"117":[376],"118":[250,377],"121":[325],"128":[349],"133":[151],"135":[277],"138":[352],"140":[80,171],"141":[198],"142":[225],"143":[252],"144":[279],"145":[306,376],"146":[333],"147":[360],"150":[152],"152":[304],"155":[379],"157":[107],"162":[403],"167":[153],"169":[331],"172":[406,425],"173":[452],"174":[134,479],"175":[506],"176":[533],"177":[560],"178":[223,587],"179":[430,614],"181":[44],"184":[154],"189":[433],"191":[161],"195":[224],"198":[71],"201":[155],"206":[460],"208":[188],"212":[225],"215":[98],"223":[487],"225":[215],"227":[127],"228":[154],"229":[181,226],"230":[208],"231":[235],"232":[125,262],"233":[289],"240":[514],"242":[242],"246":[227],"249":[152],"261":[317],"262":[318],"263":[228,319],"264":[320],"265":[321],"266":[179,322],"267":[323],"280":[229],"283":[206],"291":[235],"292":[236],"293":[237],"294":[238],"295":[239],"296":[240],"297":[230,241],"298":[242],"300":[233]},
    "words": [
      ["FOREHEAD", "The part of the face above the eyes", 11, 9, "down"],
      ["CLIPPER", "A fast sailing ship used in former times", 5, 13, "across"],
      ["GLITTER", "The quality of shining with a bright reflected light", 5, 15, "across"],
      ["OBLIVION", "The state of being disregarded or forgotten", 8, 9, "down"],
      ["MUTATION", "A change or alteration in form or qualities", 1, 10, "across"],
      ["PAVEMENT", "The paved surface of a thoroughfare", 1, 17, "across"],
      ["HOTSPOT", "A place of political unrest and potential violence", 4, 7, "down"],
      ["HELPLESS", "Lacking in or deprived of strength or power", 3, 8, "across"],
      ["INCUMBENT", "The official who holds an office", 2, 5, "down"],
      ["PIANIST", "A person who plays the piano", 0, 6, "across"],
      ["NINETEEN", "The cardinal number that is the sum of eighteen and one", 9, 2, "down"],
      ["MISLEADING", "Designed to deceive or mislead either deliberately or inadvertently", 0, 3, "across"],
      ["EFFECTED", "Settled securely and unconditionally", 8, 6, "across"],
      ["NUTSHELL", "The shell around the kernel of a nut", 14, 3, "down"],
      ["CUSTODIAN", "One having charge of buildings or grounds or animals", 16, 0, "down"]
    ]
  },
  {
    "category": "hard", "id": "hard-12", "title": "A Precise Word", "width": 15, "height": 18,
    "legacyCells": {"19":[226],"20":[227],"21":[228],"22":[229],"23":[230],"24":[231],"25":[232],"26":[233,338],"27":[234],"41":[363],"50":[531],"51":[556],"52":[581],"53":[606],"54":[631],"55":[656],"56":[388,681],"57":[706],"71":[413],"83":[367],"86":[438],"95":[293],"96":[318],"97":[343],"98":[368],"99":[393],"100":[418],"101":[443,463],"102":[468],"113":[369],"116":[488],"123":[36],"128":[370],"131":[513],"134":[298],"138":[61],"140":[526],"141":[515,527],"142":[528],"143":[371,529],"144":[530],"145":[454,531],"146":[532,538],"149":[323],"151":[652],"153":[86],"156":[540],"158":[372],"160":[479],"162":[635],"164":[348],"166":[653],"168":[111],"171":[565],"173":[373],"175":[504],"177":[636],"179":[373],"181":[654],"183":[136],"186":[590],"188":[374],"190":[529],"192":[637],"194":[398],"196":[583,655],"197":[608],"198":[161,633],"199":[658],"200":[683],"201":[615,708],"202":[733],"205":[554],"207":[638],"209":[423],"211":[656],"213":[186],"216":[640],"220":[579],"222":[639],"224":[448],"226":[657],"228":[211],"231":[665],"233":[602],"234":[603],"235":[604],"236":[605],"237":[606,640],"238":[607],"239":[473,608],"241":[658],"243":[236],"246":[690],"252":[641],"254":[498],"256":[659],"262":[377],"263":[402],"264":[427],"265":[452],"266":[477],"267":[502,642],"268":[527],"269":[523,552]},
    "words": [
      ["DOWNSTREAM", "In the direction of a stream's current", 14, 7, "down"],
      ["FERTILE", "Bearing in abundance especially offspring", 7, 15, "across"],
      ["SULPHUR", "An abundant tasteless odorless multivalent nonmetallic element", 10, 8, "down"],
      ["CAFFEINE", "A bitter alkaloid found in coffee and tea that is responsible for their stimulating effects", 12, 9, "down"],
      ["COLISEUM", "An oval large stadium with tiers of seats", 6, 17, "across"],
      ["OUTPOST", "A station in a remote or sparsely populated location", 4, 9, "across"],
      ["UPSTAIRS", "The part of a building above the ground floor", 6, 8, "down"],
      ["SWEEPING", "The act of cleaning with a broom", 8, 4, "down"],
      ["SHOWTIME", "The time at which something is supposed to begin", 4, 6, "across"],
      ["ENDOWMENT", "Natural abilities or qualities", 11, 0, "down"],
      ["SOLITUDE", "A state of social isolation", 4, 3, "across"],
      ["HAMBURGER", "A sandwich consisting of a fried cake of minced beef served on a bun, often with other ingredients", 3, 1, "across"],
      ["GETAWAY", "The attribute of being capable of rapid acceleration", 0, 13, "across"],
      ["SINGULAR", "The form of a word that is used to denote a singleton", 1, 9, "down"],
      ["IMPORTING", "The commercial activity of buying and bringing in goods from a foreign country", 3, 7, "down"]
    ]
  },
  {
    "category": "hard", "id": "hard-13", "title": "The Long Game", "width": 17, "height": 17,
    "legacyCells": {"19":[111],"20":[112],"21":[113],"22":[114],"23":[115],"24":[116,308],"25":[117],"26":[118],"27":[100,119],"30":[198],"41":[332],"44":[124],"47":[199],"52":[318],"53":[319],"54":[320],"55":[321],"56":[322],"57":[323],"58":[324,356],"59":[325],"61":[148],"64":[200],"67":[46],"75":[380],"78":[172],"81":[201],"84":[70],"88":[67],"92":[404],"94":[106],"95":[130,196],"96":[154],"97":[178],"98":[202],"99":[226],"100":[250],"101":[94,274],"103":[58],"104":[59],"105":[60,91],"106":[61],"107":[62],"108":[63],"109":[64,428],"110":[65],"112":[220],"115":[203],"118":[118],"122":[115],"126":[452],"129":[244],"132":[204],"135":[142],"139":[139],"152":[166],"154":[36],"155":[60],"156":[84,163],"157":[108],"158":[132],"159":[156],"160":[180],"161":[204],"163":[426],"167":[393],"169":[190],"173":[187],"180":[450],"184":[394],"186":[214],"190":[211],"195":[271],"196":[272],"197":[273,474],"198":[274],"199":[275],"200":[276],"201":[277,395],"202":[278],"203":[238,279],"205":[253],"206":[277],"207":[235,301],"208":[325],"209":[349],"210":[373],"211":[397],"214":[498],"218":[396],"220":[262],"231":[522],"235":[397],"248":[546],"252":[398],"265":[570],"269":[399],"274":[25],"275":[26],"276":[27],"277":[28],"278":[29],"279":[30],"280":[31],"281":[32],"282":[33,594],"286":[400]},
    "words": [
      ["REVERSAL", "A change from one state to the opposite state", 0, 3, "across"],
      ["BLAZING", "A strong flame that burns brightly", 7, 0, "down"],
      ["GROOMING", "Activity leading to skilled behavior", 0, 6, "across"],
      ["STEAMBOAT", "A boat propelled by a steam engine", 1, 1, "across"],
      ["TRILOGY", "A set of three literary or dramatic works related in subject or theme", 10, 0, "down"],
      ["COMPRESS", "Make more compact by or as if by pressing", 3, 4, "down"],
      ["DISLIKE", "An inclination to withhold approval from some person or group", 0, 12, "across"],
      ["SORORITY", "A social club for female undergraduates", 0, 9, "across"],
      ["FOOTNOTE", "A printed note placed below the text on a printed page", 8, 5, "across"],
      ["LATENCY", "The time that elapses between a stimulus and the response to it", 13, 0, "down"],
      ["OCEANFRONT", "Land bordering an ocean", 16, 2, "down"],
      ["INVERSION", "The layer of air near the earth is cooler than an overlying layer", 7, 11, "across"],
      ["EPILEPSY", "A disorder of the central nervous system characterized by loss of consciousness and convulsions", 14, 8, "down"],
      ["CAVALIER", "A gallant or courtly gentleman", 10, 8, "down"],
      ["ESTIMATOR", "An expert at calculation (or at operating calculating machines)", 1, 16, "across"]
    ]
  },
  {
    "category": "letter", "id": "letter-s", "title": "Starts With S", "width": 16, "height": 17,
    "legacyCells": {"17":[210,302],"18":[211],"19":[212],"20":[213],"21":[214],"22":[215],"23":[216],"24":[217,354],"26":[193],"33":[321],"40":[355],"42":[212],"45":[313],"49":[340],"51":[182,286],"52":[305],"53":[324],"54":[343],"55":[362],"56":[356,381],"58":[231],"61":[314],"65":[359],"67":[183],"70":[344],"72":[357],"74":[250],"77":[315],"81":[378],"83":[184],"86":[345],"88":[358],"90":[269],"93":[316],"97":[397],"99":[185],"101":[27],"102":[46,346],"103":[65],"104":[84,359],"105":[103],"106":[122,288],"107":[141],"108":[160],"109":[179,317],"115":[186],"118":[347],"122":[307],"125":[318],"131":[187,217],"132":[236],"133":[255],"134":[274,348],"135":[293],"138":[326],"147":[188],"150":[349],"152":[219,259],"153":[238],"154":[257,345],"155":[276],"156":[295],"157":[314],"159":[27],"166":[350],"168":[260],"175":[28],"183":[79],"184":[80,261],"185":[81],"186":[82],"187":[83],"188":[84],"189":[85],"190":[86],"191":[29,87],"200":[262],"207":[30],"212":[187],"213":[206],"214":[225],"215":[244],"216":[263],"217":[282],"223":[31],"232":[264],"239":[32],"255":[33],"271":[34]},
    "words": [
      ["SPECTRUM", "Range of colors seen in a rainbow", 6, 2, "down"],
      ["SCARF", "Fabric worn around the neck", 2, 8, "across"],
      ["SEASON", "Spring or winter, for example", 2, 3, "across"],
      ["SUNRISE", "Morning appearance of the Sun", 3, 2, "down"],
      ["SANDAL", "Open shoe held on by straps", 8, 0, "down"],
      ["SCISSORS", "Tool with two pivoting blades", 0, 1, "across"],
      ["SAILOR", "Crew member on a ship", 1, 0, "down"],
      ["SCULPTURE", "Three-dimensional artwork", 4, 6, "across"],
      ["SHIVER", "Tremble from cold", 13, 1, "down"],
      ["SIGNATURE", "Your name written in your own hand", 10, 0, "down"],
      ["SKETCH", "Rough drawing", 7, 9, "across"],
      ["SHADOW", "Dark shape cast when light is blocked", 8, 8, "down"],
      ["SALMON", "Fish famous for swimming upstream to spawn", 3, 13, "across"],
      ["SATELLITE", "Object in orbit around a larger one", 6, 11, "across"],
      ["SEEDLING", "A young plant grown from a seed", 15, 8, "down"]
    ]
  },
  {
    "category": "letter", "id": "letter-c", "title": "Starts With C", "width": 16, "height": 16,
    "legacyCells": {"29":[49],"40":[146],"41":[147],"42":[148],"43":[149,282],"44":[150],"45":[67,151],"46":[152],"59":[283],"61":[85],"70":[155,293],"71":[311],"72":[293,329],"73":[347],"74":[365],"75":[284,383],"77":[103],"86":[173],"88":[294],"91":[285],"93":[121],"99":[149],"102":[191],"104":[295],"107":[286],"109":[139],"115":[167],"118":[209],"120":[296],"123":[287],"125":[157],"127":[219],"131":[185,226],"132":[244],"133":[262],"134":[227,280],"135":[298],"136":[297,316],"143":[237],"147":[203],"152":[298],"159":[255],"163":[221],"166":[155],"170":[189],"175":[273],"177":[335],"178":[336],"179":[239,337],"180":[338],"181":[339],"182":[156,340],"186":[190],"191":[291],"193":[353],"198":[157],"200":[22],"201":[23],"202":[24,191],"203":[25],"204":[26],"205":[27],"206":[28],"207":[29,309],"209":[371],"214":[158],"218":[192],"223":[327],"225":[389],"227":[22],"228":[40],"229":[58],"230":[76,159],"231":[94],"232":[112],"233":[130],"234":[148,193],"239":[345],"241":[407],"246":[160],"250":[194]},
    "words": [
      ["CACTUS", "Spiny plant adapted to dry conditions", 5, 4, "across"],
      ["CANOE", "Narrow boat moved by paddle", 6, 3, "down"],
      ["CAVIAR", "Salted fish eggs served as a delicacy", 8, 3, "down"],
      ["CAMERA", "Device that takes photographs", 2, 8, "across"],
      ["COCOON", "Silk casing made by some insect larvae", 3, 5, "down"],
      ["CASTLE", "Fortified residence with towers", 11, 1, "down"],
      ["CANDLE", "Wax cylinder with a wick", 0, 11, "across"],
      ["CIRCUIT", "Closed path for an electric current", 7, 2, "across"],
      ["CITADEL", "Fortress protecting a city", 13, 0, "down"],
      ["CELERY", "Crunchy vegetable with long ribbed stalks", 6, 9, "down"],
      ["CORRIDOR", "Long passage connecting rooms", 2, 14, "across"],
      ["CANARY", "Yellow songbird once used in mines", 10, 9, "down"],
      ["COMET", "Icy body that can develop a tail near the Sun", 1, 10, "down"],
      ["CINNAMON", "Spice made from aromatic tree bark", 7, 12, "across"],
      ["CLARINET", "Single-reed woodwind instrument", 15, 6, "down"]
    ]
  },
  {
    "category": "letter", "id": "letter-b", "title": "Starts With B", "width": 13, "height": 16,
    "legacyCells": {"17":[492],"18":[493],"19":[494],"20":[397,495],"21":[496],"22":[497],"23":[498],"24":[499],"33":[425],"46":[453],"48":[541],"56":[484],"57":[485],"58":[486],"59":[481,487],"60":[488],"61":[489,542],"62":[490],"72":[509],"74":[543],"79":[326],"80":[354],"81":[382],"82":[410],"83":[438],"84":[466],"85":[494,537],"87":[544],"90":[142],"100":[545],"103":[170],"110":[366],"111":[394],"112":[422],"113":[450,546],"114":[478],"115":[506],"116":[198,534],"119":[288],"121":[127],"129":[226],"131":[374],"132":[316,375],"133":[376],"134":[128,377],"135":[378],"138":[154],"142":[254],"145":[344],"147":[129],"151":[182],"153":[458],"155":[282],"158":[372],"160":[130],"163":[424],"164":[210,425],"165":[426],"166":[427,486],"167":[428],"168":[310,429],"170":[296],"171":[324,400],"172":[352],"173":[131,380],"174":[408],"177":[238],"179":[514],"184":[428],"186":[132],"190":[266],"192":[542],"198":[505],"199":[133,506],"200":[507],"201":[508],"202":[509],"203":[294,510],"205":[570]},
    "words": [
      ["BADGER", "Burrowing mammal with stripes on its face", 2, 8, "down"],
      ["BENCH", "Long seat for more than one person", 0, 13, "across"],
      ["BASIL", "Fragrant herb used in pesto", 0, 10, "across"],
      ["BICYCLE", "Two-wheeled vehicle powered by pedals", 4, 8, "down"],
      ["BEAVER", "Rodent known for building dams", 2, 15, "across"],
      ["BEAKER", "Laboratory cup with a pouring lip", 8, 9, "down"],
      ["BAKERY", "Shop that makes and sells bread", 6, 12, "across"],
      ["BERET", "Round, flat cap without a brim", 10, 10, "down"],
      ["BATTERY", "Portable source of electrical power", 12, 5, "down"],
      ["BLANKET", "Warm covering used on a bed", 5, 8, "across"],
      ["BEACON", "Signal light used as a guide", 9, 2, "down"],
      ["BLENDER", "Kitchen appliance that purées food", 3, 4, "across"],
      ["BANNER", "Long sign often hung above a street", 7, 0, "down"],
      ["BOULDER", "Large rounded rock", 0, 6, "across"],
      ["BARBECUE", "Meal cooked outdoors over a grill", 3, 1, "across"]
    ]
  },
  {
    "category": "theme", "id": "ocean", "title": "Under the Sea", "width": 15, "height": 15,
    "legacyCells": {"19":[30],"23":[145],"24":[146],"25":[147],"26":[148,219],"32":[179],"34":[49],"36":[30],"41":[220],"47":[180],"49":[68],"51":[31],"56":[221],"59":[372],"62":[181],"64":[87],"66":[32],"71":[222],"74":[373],"77":[182,332],"78":[93,333],"79":[106,334],"80":[335],"81":[33,336],"82":[337],"83":[338],"86":[223],"89":[374],"91":[68],"93":[112],"96":[34],"101":[224],"104":[375],"106":[69],"108":[131],"110":[182],"112":[105,294],"113":[295],"114":[296],"115":[297],"116":[225,298],"117":[299],"118":[300],"119":[301,376],"121":[65,70],"122":[84],"123":[103,150],"124":[122],"125":[141,201],"126":[160],"127":[106,179],"131":[226],"134":[377],"136":[71],"138":[169],"140":[220],"142":[107],"149":[378],"151":[72],"157":[108],"164":[379],"166":[73,108],"167":[127],"168":[146],"169":[165],"172":[109],"187":[110],"196":[186],"197":[205],"198":[224],"199":[243],"200":[262],"201":[281],"202":[111,300],"217":[112]},
    "words": [
      ["ESTUARY", "Where a river mixes with seawater", 1, 5, "across"],
      ["TIDE", "Regular rise and fall of sea level", 2, 1, "down"],
      ["CORAL", "Tiny marine animal that can build reefs", 6, 1, "down"],
      ["COAST", "Land along the sea", 4, 0, "down"],
      ["SHARK", "Predatory fish with a skeleton of cartilage", 3, 4, "down"],
      ["CURRENT", "Steady flow of ocean water", 0, 8, "across"],
      ["EEL", "Long, snake-shaped fish", 5, 6, "down"],
      ["ANCHOR", "Heavy device that holds a vessel in place", 1, 5, "down"],
      ["REEF", "Ridge of rock or coral near the surface", 0, 11, "across"],
      ["STARFISH", "Sea creature often shaped like a five-pointed star", 7, 6, "down"],
      ["OCTOPUS", "Eight-armed marine mollusk", 0, 13, "across"],
      ["SEAHORSE", "Small fish with a curled tail and horse-shaped head", 6, 7, "across"],
      ["MACKEREL", "Oily fish often marked with wavy stripes", 14, 2, "down"],
      ["PLANKTON", "Organisms that drift in water", 11, 0, "down"],
      ["KELP", "Large brown seaweed", 7, 1, "across"]
    ]
  },
  {
    "category": "theme", "id": "night-sky", "title": "The Night Sky", "width": 14, "height": 16,
    "legacyCells": {"16":[155],"23":[67],"30":[156],"37":[68],"44":[157],"46":[246],"49":[78],"51":[69],"58":[158],"60":[247],"62":[282],"63":[79,283],"64":[284],"65":[70,285],"66":[286],"67":[188,287],"72":[159],"74":[248],"77":[80],"79":[71],"81":[206],"85":[142],"86":[160],"87":[178],"88":[196,249],"89":[214],"91":[81],"95":[224],"97":[244],"100":[161],"102":[250],"105":[82],"109":[242],"111":[262],"113":[222],"115":[49,104],"116":[122,251],"117":[140],"118":[158],"119":[83,176],"123":[260],"125":[280],"127":[240],"129":[67],"137":[278],"139":[298],"141":[258],"143":[85],"145":[237],"151":[296],"153":[316],"155":[181,276],"156":[182],"157":[103,183],"158":[184],"159":[185,238],"160":[186],"165":[314],"167":[334],"169":[294],"173":[239],"176":[233],"177":[251],"178":[269],"179":[287,332],"180":[305],"181":[323,352],"183":[312],"187":[240],"197":[330],"201":[241],"213":[47],"214":[65],"215":[83,242],"216":[101],"217":[119]},
    "words": [
      ["JUPITER", "Largest planet in our solar system", 2, 0, "down"],
      ["VENUS", "Planet sometimes called the Morning Star", 0, 6, "across"],
      ["NEBULA", "Cloud of dust and gas in space", 4, 2, "down"],
      ["NADIR", "Point in the sky opposite the zenith", 2, 8, "across"],
      ["PULSAR", "Rotating neutron star that sends out regular pulses", 7, 2, "down"],
      ["NOVA", "Sudden brightening caused by an eruption on a white dwarf", 3, 7, "down"],
      ["CRATER", "Bowl-shaped hollow left by an impact", 0, 11, "across"],
      ["MERCURY", "Planet closest to the Sun", 1, 7, "down"],
      ["METEOR", "Streak of light from debris entering an atmosphere", 5, 9, "down"],
      ["EARTH", "Our home planet", 2, 15, "across"],
      ["AURORA", "Natural light display near Earth's poles", 5, 4, "across"],
      ["ANDROMEDA", "Nearest large galaxy to the Milky Way", 11, 3, "down"],
      ["ORION", "Constellation with a prominent three-star belt", 9, 0, "down"],
      ["GALAXY", "Vast system of stars held together by gravity", 7, 12, "across"],
      ["GRAVITY", "Force that keeps planets in orbit", 13, 5, "down"]
    ]
  },
  {
    "category": "theme", "id": "rail-journeys", "title": "Rail Journeys", "width": 16, "height": 17,
    "legacyCells": {"29":[186],"35":[137],"42":[60,328],"43":[61],"44":[62],"45":[63,210],"46":[64],"49":[230],"50":[254],"51":[138,278],"52":[302],"53":[326],"54":[350],"55":[374],"56":[398],"58":[329],"61":[234],"63":[641],"67":[139],"74":[330],"77":[258],"79":[642],"83":[140],"87":[593],"90":[331],"93":[282],"95":[643],"99":[141],"103":[594],"105":[280],"106":[281,332],"107":[282],"108":[283],"109":[284,306],"110":[285],"111":[286,644],"114":[37],"115":[61,142],"116":[85],"117":[109],"118":[133],"119":[157,595],"120":[181],"122":[333],"125":[330],"127":[645],"131":[143],"135":[596],"143":[646],"149":[448],"151":[597],"153":[494],"154":[495],"155":[496],"156":[451,497],"157":[498],"158":[499],"159":[500,647],"161":[546],"162":[570],"163":[594],"164":[618],"165":[449,642],"166":[666],"167":[598,690],"172":[475],"181":[450],"183":[39,599],"184":[63],"185":[87],"186":[111],"187":[135],"188":[159,499],"189":[183],"190":[207],"191":[231],"197":[451],"204":[523],"213":[452],"220":[547],"229":[453],"245":[441,454],"246":[465],"247":[489],"248":[513],"249":[537],"250":[561],"251":[585],"252":[609],"253":[633],"254":[657],"261":[455]},
    "words": [
      ["BOGIE", "Wheeled frame supporting a rail vehicle, in British usage", 9, 2, "across"],
      ["BOXCAR", "Enclosed freight car with sliding side doors", 10, 1, "down"],
      ["FIREBOX", "Chamber in a steam locomotive where fuel burns", 13, 0, "down"],
      ["CABOOSE", "Crew car once attached to the rear of a freight train", 8, 6, "across"],
      ["SLEEPER", "Railway car with beds for passengers", 15, 2, "down"],
      ["FLATCAR", "Rail vehicle with an open, level deck and no sides", 8, 9, "across"],
      ["TRACK", "Pair of rails along which a train runs", 12, 8, "down"],
      ["TIMETABLE", "List of planned departure and arrival times", 6, 11, "across"],
      ["CULVERT", "Drainage passage beneath a railway embankment", 7, 4, "down"],
      ["GONDOLA", "Open-topped freight car with fixed sides", 1, 7, "across"],
      ["SANDBOX", "Locomotive container that supplies grit for better traction", 3, 1, "down"],
      ["DRAISINE", "Small rail vehicle used for inspection or maintenance", 0, 3, "across"],
      ["COUPLER", "Device linking two rail vehicles together", 0, 10, "across"],
      ["PLATFORM", "Raised area where passengers board", 5, 8, "down"],
      ["ROUNDHOUSE", "Fan-shaped building used to shelter locomotives", 4, 15, "across"]
    ]
  }
];

# Examples

First start off with:
```js
const genshindb = require('genshin-db');
```

## Table of Contents

- [genshindb.characters(query[, opts])](#genshindbcharactersquery-opts)
- [genshindb.talents(query[, opts])](#genshindbtalentsquery-opts)
- [genshindb.constellations(query[, opts])](#genshindbconstellationsquery-opts)
- [genshindb.weapons(query[, opts])](#genshindbweaponsquery-opts)
- [genshindb.weaponmaterialtypes(query[, opts])](#genshindbweaponmaterialtypesquery-opts)
- [genshindb.talentmaterialtypes(query[, opts])](#genshindbtalentmaterialtypesquery-opts)
- [genshindb.artifacts(query[, opts])](#genshindbartifactsquery-opts)
- [genshindb.recipes(query[, opts])](#genshindbrecipesquery-opts)
- [genshindb.elements(query[, opts])](#genshindbelementsquery-opts)
- [genshindb.rarity(query[, opts])](#genshindbrarityquery-opts)

## genshindb.characters(query[, opts])]

<details>
<summary>genshindb.characters('<b>names', { matchCategories: true }</b>)</summary>

```js
[
  'Aether',    'Albedo',    'Amber',
  'Barbara',   'Beidou',    'Bennett',
  'Chongyun',  'Diluc',     'Diona',
  'Fischl',    'Ganyu',     'Hu Tao',
  'Jean',      'Kaeya',     'Keqing',
  'Klee',      'Lisa',      'Lumine',
  'Mona',      'Ningguang', 'Noelle',
  'Qiqi',      'Razor',     'Rosaria',
  'Sucrose',   'Tartaglia', 'Venti',
  'Xiangling', 'Xiao',      'Xingqiu',
  'Xinyan',    'Zhongli'
]
```

</details>
<details>
<summary>genshindb.characters('<b>ganyu'</b>)</summary>

```js
{
  name: 'Ganyu',
  title: 'Plenilune Gaze',
  description: 'The secretary at Yuehai Pavilion. The blood of the qilin, an illuminated beast, flows within her veins.',
  rarity: '5',
  element: 'Cryo',
  weapontype: 'Bow',
  substat: 'CRIT DMG',
  gender: 'Female',
  body: 'GIRL',
  association: 'LIYUE',
  region: 'Liyue',
  affiliation: 'Yuehai Pavilion',
  birthdaymmdd: '12/2',
  birthday: 'December 2',
  constellation: 'Sinae Unicornis',
  cv: {
    english: 'Jennifer Losi',
    chinese: '林簌',
    japanese: '上田麗奈',
    korean: '김선혜'
  },
  talentmaterialtype: 'Diligence',
  url: 'https://genshin-impact.fandom.com/wiki/Ganyu',
  images: {
    image: 'https://static.wikia.nocookie.net/gensin-impact/images/0/0a/Character_Ganyu_Thumb.png',
    card: 'https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png',
    portrait: 'https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Character_Ganyu_Portrait.png',
    icon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png',
    sideicon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Ganyu.png',
    cover1: 'https://uploadstatic-sea.mihoyo.com/contentweb/20210105/2021010519275372324.png',
    cover2: 'https://uploadstatic-sea.mihoyo.com/contentweb/20210105/2021010519280045054.png'
  },
  stats: [Function (anonymous)]
}
```

</details>
<details>
<summary>genshindb.characters('<b>amber', { resultLanguage: 'JP' }</b>)</summary>

```js
{
  name: 'アンバー',
  title: '飛行チャンピオン',
  description: '元気満々な女の子、騎士団で最も優秀で、最後の偵察騎士である。',
  rarity: '4',
  element: '炎',
  weapontype: '弓',
  substat: '攻撃力',
  gender: '女',
  body: 'GIRL',
  association: 'MONDSTADT',
  region: 'Mondstadt',
  affiliation: '西風騎士団',
  birthdaymmdd: '8/10',
  birthday: '8月10日',
  constellation: '小兎座',
  cv: {
    english: 'Kelly Baskin',
    chinese: '蔡书瑾',
    japanese: '石見舞菜香',
    korean: '김연우'
  },
  talentmaterialtype: '',
  images: {
    image: 'https://static.wikia.nocookie.net/gensin-impact/images/c/c6/Character_Amber_Thumb.png',
    card: 'https://static.wikia.nocookie.net/gensin-impact/images/2/26/Character_Amber_Card.jpg',
    portrait: 'https://static.wikia.nocookie.net/gensin-impact/images/0/00/Character_Amber_Portrait.png',
    icon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ambor.png',
    sideicon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Ambor.png',
    cover1: 'https://uploadstatic-sea.mihoyo.com/contentweb/20191009/2019100914372396510.png',
    cover2: 'https://uploadstatic-sea.mihoyo.com/contentweb/20191009/2019100914390892929.png'
  },
  stats: [Function (anonymous)]
}
```

</details>
<details>
<summary>genshindb.characters('<b>アンバー', { queryLanguages: 'Japanese', resultLanguage: 'Spanish' }</b>)</summary>

```js
{
  name: 'Amber',
  title: 'la Campeona de Vuelo',
  description: 'Siempre enérgica y llena de vida, Amber es la mejor exploradora de los Caballeros de Favonius, aunque también es la única...',
  rarity: '4',
  element: 'Pyro',
  weapontype: 'Arco',
  substat: 'ATQ',
  gender: 'Femenino',
  body: 'GIRL',
  association: 'MONDSTADT',
  region: 'Mondstadt',
  affiliation: 'Caballeros de Favonius',
  birthdaymmdd: '8/10',
  birthday: '10 de agosto',
  constellation: 'Lepus Minor',
  cv: {
    english: 'Kelly Baskin',
    chinese: '蔡书瑾',
    japanese: '石見舞菜香',
    korean: '김연우'
  },
  talentmaterialtype: '',
  images: {
    image: 'https://static.wikia.nocookie.net/gensin-impact/images/c/c6/Character_Amber_Thumb.png',
    card: 'https://static.wikia.nocookie.net/gensin-impact/images/2/26/Character_Amber_Card.jpg',
    portrait: 'https://static.wikia.nocookie.net/gensin-impact/images/0/00/Character_Amber_Portrait.png',
    icon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ambor.png',
    sideicon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Ambor.png',
    cover1: 'https://uploadstatic-sea.mihoyo.com/contentweb/20191009/2019100914372396510.png',
    cover2: 'https://uploadstatic-sea.mihoyo.com/contentweb/20191009/2019100914390892929.png'
  },
  stats: [Function (anonymous)]
}
```

</details>
<details>
<summary>genshindb.characters('<b>childe', { matchAliases: true }</b>)</summary>

```js
{
  name: 'Tartaglia',
  title: 'Childe',
  description: 'No. 11 of The Harbingers, also known as "Childe." His name is highly feared on the battlefield.',
  rarity: '5',
  element: 'Hydro',
  weapontype: 'Bow',
  substat: 'Hydro DMG Bonus',
  gender: 'Male',
  body: 'MALE',
  association: 'FATUI',
  region: 'Snezhnaya',
  affiliation: 'Fatui',
  birthdaymmdd: '7/20',
  birthday: 'July 20',
  constellation: 'Monoceros Caeli',
  cv: {
    english: 'Griffin Burns',
    chinese: '鱼冻',
    japanese: '木村良平',
    korean: '남도형'
  },
  talentmaterialtype: 'Freedom',
  url: 'https://genshin-impact.fandom.com/wiki/Tartaglia',
  images: {
    image: 'https://static.wikia.nocookie.net/gensin-impact/images/f/fb/Character_Childe_Thumb.png',
    card: 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png',
    portrait: 'https://static.wikia.nocookie.net/gensin-impact/images/3/3a/Character_Tartaglia_Portrait.png',
    icon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Tartaglia.png',
    sideicon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Tartaglia.png',
    cover1: 'https://uploadstatic-sea.mihoyo.com/contentweb/20201103/2020110321160453386.png',
    cover2: 'https://uploadstatic-sea.mihoyo.com/contentweb/20201103/2020110321234137061.png'
  },
  stats: [Function (anonymous)]
}
```

</details>
<details>
<summary>genshindb.characters('<b>carmen', { matchCategories: true }</b>)</summary>

```js
{
  name: 'Venti',
  title: 'Windborne Bard',
  description: "One of the many bards of Mondstadt, who freely wanders the city's streets and alleys.",
  rarity: '5',
  element: 'Anemo',
  weapontype: 'Bow',
  substat: 'Energy Recharge',
  gender: 'Male',
  body: 'BOY',
  association: 'MONDSTADT',
  region: 'Mondstadt',
  affiliation: 'Mondstadt',
  birthdaymmdd: '6/16',
  birthday: 'June 16',
  constellation: 'Carmen Dei',
  cv: {
    english: 'Erika Harlacher',
    chinese: '喵酱',
    japanese: '村瀬歩',
    korean: '정유정'
  },
  talentmaterialtype: 'Ballad',
  url: 'https://genshin-impact.fandom.com/wiki/Venti',
  images: {
    image: 'https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Venti_Thumb.png',
    card: 'https://static.wikia.nocookie.net/gensin-impact/images/7/76/Character_Venti_Card.jpg',
    portrait: 'https://static.wikia.nocookie.net/gensin-impact/images/c/cf/Character_Venti_Portrait.png',
    icon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png',
    sideicon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Venti.png',
    cover1: 'https://uploadstatic-sea.mihoyo.com/contentweb/20191122/2019112210305833310.png',
    cover2: 'https://uploadstatic-sea.mihoyo.com/contentweb/20191122/2019112211143037621.png'
  },
  stats: [Function (anonymous)]
}
```

</details>
<details>
<summary>genshindb.characters('<b>december', { matchCategories: true }</b>)</summary>

```js
[ 'Ganyu', 'Zhongli' ]
```

</details>
<details>
<summary>genshindb.characters('<b>pyro', { matchCategories: true }</b>)</summary>

```js
[
  'Amber',
  'Bennett',
  'Diluc',
  'Hu Tao',
  'Klee',
  'Xiangling',
  'Xinyan'
]
```

</details>
<details>
<summary>genshindb.characters('<b>geo dmg', { matchCategories: true }</b>)</summary>

```js
[ 'Albedo', 'Ningguang', 'Zhongli' ]
```

</details>
<details>
<summary>genshindb.characters('<b>liyue', { matchCategories: true }</b>)</summary>

```js
[
  'Beidou', 'Chongyun',
  'Ganyu',  'Hu Tao',
  'Keqing', 'Ningguang',
  'Qiqi',   'Xiangling',
  'Xiao',   'Xingqiu',
  'Xinyan', 'Zhongli'
]
```

</details>
<details>
<summary>genshindb.characters('<b>sword', { matchCategories: true }</b>)</summary>

```js
[
  'Aether',  'Albedo',
  'Bennett', 'Jean',
  'Kaeya',   'Keqing',
  'Lumine',  'Qiqi',
  'Xingqiu'
]
```

</details>
<details>
<summary>genshindb.characters('<b>ballad', { matchCategories: true }</b>)</summary>

```js
[ 'Albedo', 'Fischl', 'Kaeya', 'Lisa', 'Venti' ]
```

</details>
<details>
<summary>genshindb.characters('<b>klee'</b>)<b>.stats(90)</b></summary>

```js
{
  level: 90,
  ascension: 6,
  hp: 10286.565419930499,
  attack: 310.93189668962077,
  defense: 614.8434950278315,
  specialized: 0.2879999876022339
}
```

</details>
<details>
<summary>genshindb.characters('<b>klee'</b>)<b>.stats(80)</b></summary>

```js
{
  level: 80,
  ascension: 5,
  hp: 9075.60273520241,
  attack: 274.32835675104525,
  defense: 542.4622838181458,
  specialized: 0.2160000056028366
}
```

</details>
<details>
<summary>genshindb.characters('<b>klee'</b>)<b>.stats(80, '+')</b></summary>

```js
{
  level: 80,
  ascension: 6,
  hp: 9563.45283285866,
  attack: 289.0738706670609,
  defense: 571.6222874802552,
  specialized: 0.2879999876022339
}
```

</details>

## genshindb.talents(query[, opts])]

<details>
<summary>genshindb.talents('<b>ninguang'</b>)</summary>

```js
{
  name: 'Ningguang',
  combat1: {
    name: 'Normal Attack: Sparkling Scatter',
    image: '',
    info: '**Normal Attack**\n' +
      'Shoots gems that deal Geo DMG.\n' +
      'Upon hit, this grants Ningguang 1 Star Jade.\n' +
      '\n' +
      '**Charged Attack**\n' +
      'Consumes a certain amount of stamina to fire off a giant gem that deals Geo DMG.\n' +
      'If Ningguang has any Star Jades, unleashing a Charged Attack will cause the Star Jades to be fired at the enemy as well, dealing additional DMG.\n' +
      '\n' +
      '**Plunging Attack**\n' +
      'Gathering the might of Geo, Ningguang plunges towards the ground from mid-air, damaging all opponents in her path. Deals AoE Geo DMG upon impact with the ground.',
    attributes: ''
  },
  combat2: {
    name: 'Jade Screen',
    image: '',
    info: 'Ningguang creates a Jade Screen out of gold, obsidian and her great opulence, dealing AoE Geo DMG.\n' +
      '\n' +
      '**Jade Screen**\n' +
      "·Blocks opponents' projectiles.\n" +
      "·Endurance scales based on Ningguang's Max HP.\n" +
      '\n' +
      'Jade Screen is considered a Geo Construct and can be used to block certain attacks, but cannot be climbed. Only one Jade Screen may exist at any one time.',
    description: 'The canvas of stars is written upon this jade screen.',
    attributes: ''
  },
  combat3: {
    name: 'Starshatter',
    image: '',
    info: 'Gathering a great number of gems, Ningguang scatters them all at once, sending homing projectiles at her opponents that deal massive Geo DMG.\n' +
      'If Starshatter is cast when a Jade Screen is nearby, the Jade Screen will fire additional gem projectiles at the same time.',
    description: 'Stars shatter. Silence falls.',
    attributes: ''
  },
  passive1: {
    name: 'Backup Plan',
    image: '',
    info: 'When Ningguang is in possession of Star Jades, her Charged Attack does not consume Stamina.'
  },
  passive2: {
    name: 'Strategic Reserve',
    image: '',
    info: 'A character that passes through the **Jade Screen** will gain a 12% Geo DMG Bonus for 10s.'
  },
  passive3: {
    name: 'Trove of Marvelous Treasures',
    image: '',
    info: 'Displays the location of nearby **ore veins** (Iron Ore, White Iron Ore, Crystal Ore, Magical Crystal Ore, and Starsilver) on the mini-map.'
  },
  images: {
    combat1: '',
    combat2: '',
    combatsp: '',
    combat3: '',
    passive1: '',
    passive2: '',
    passive3: ''
  }
}
```

</details>
<details>
<summary>genshindb.talents('<b>klee'</b>)<b>.passive3</b></summary>

```js
{
  name: 'All Of My Treasures!',
  image: '',
  info: 'Displays the location of nearby **resources unique to Mondstadt** on the mini-map.'
}
```

</details>
<details>
<summary>genshindb.talents('<b>mona'</b>)<b>.combatsp</b></summary>

```js
{
  name: 'Illusory Torrent',
  image: '',
  info: '**Alternate Sprint**\n' +
    "Mona cloaks herself within the water's flow, consuming Stamina to move rapidly.\n" +
    '\n' +
    'When under the effect of Illusory Torrent, Mona can move at high speed on water.\n' +
    'Applies the Wet status to nearby opponents when she reappears.',
  description: "This is something that Mona can do, but her teacher cannot. Well, but it's not as if her teacher would pursue any matter concerning Hydro Visions anyway...",
  attributes: ''
}
```

</details>

## genshindb.constellations(query[, opts])]

<details>
<summary>genshindb.constellations('<b>amber'</b>)</summary>

```js
{
  name: 'Amber',
  c1: {
    name: 'One Arrow to Rule Them All',
    effect: "Fires 2 arrows per **Aimed Shot**. The second arrow deals 20% of the first arrow's DMG."
  },
  c2: {
    name: 'Bunny Triggered',
    effect: "Baron Bunny, new and improved! Hitting Baron Bunny's foot with a fully-charged Aimed Shot manually detonates it.\n" +
      'Explosion via manual detonation deals 200% additional DMG.'
  },
  c3: {
    name: 'It Burns!',
    effect: 'Increases the Level of **Fiery Rain** by 3.\nMaximum upgrade level is 15.'
  },
  c4: {
    name: "It's Not Just Any Doll...",
    effect: "Decreases **Explosive Puppet**'s CD by 20%. Adds 1 additional charge."
  },
  c5: {
    name: "It's Baron Bunny!",
    effect: 'Increases the Level of **Explosive Puppet** by 3.\n' +
      'Maximum upgrade level is 15.'
  },
  c6: {
    name: 'Wildfire',
    effect: "**Fiery Rain** increases all party members' Movement SPD by 15% and ATK by 15% for 10s."
  },
  images: {
    c1: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/constellation_icon/UI_Talent_S_Ambor_01.png',
    c2: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/constellation_icon/UI_Talent_S_Ambor_02.png',
    c3: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/constellation_icon/UI_Talent_U_Ambor_02.png',
    c4: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/constellation_icon/UI_Talent_S_Ambor_03.png',
    c5: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/constellation_icon/UI_Talent_U_Ambor_01.png',
    c6: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/constellation_icon/UI_Talent_S_Ambor_04.png'
  }
}
```

</details>
<details>
<summary>genshindb.constellations('<b>childe'</b>)<b>.c3</b></summary>

```js
{
  name: 'Abyssal Mayhem: Vortex of Turmoil',
  effect: 'Increases the Level of **Foul Legacy: Raging Tide** by 3.\n' +
    'Maximum upgrade level is 15.'
}
```

</details>

## genshindb.weapons(query[, opts])]

<details>
<summary>genshindb.weapons('<b>lost prayers'</b>)</summary>

```js
{
  name: 'Lost Prayer to the Sacred Winds',
  description: 'An educational tome written by anonymous early inhabitants who worshiped the wind. It has been blessed by the wind for its faithfulness and influence over the millennia.',
  weapontype: 'Catalyst',
  rarity: '5',
  baseatk: 46,
  substat: 'CRIT Rate',
  subvalue: '7.2',
  effectname: 'Boundless Blessing',
  effect: 'Increases Movement SPD by 10%. When in battle, gain a {0} Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.',
  r1: [ '8%' ],
  r2: [ '10%' ],
  r3: [ '12%' ],
  r4: [ '14%' ],
  r5: [ '16%' ],
  weaponmaterialtype: 'Dandelion Gladiator',
  url: 'https://genshin-impact.fandom.com/wiki/Lost_Prayer_to_the_Sacred_Winds',
  images: {
    image: 'https://static.wikia.nocookie.net/gensin-impact/images/9/98/Weapon_Lost_Prayer_to_the_Sacred_Winds.png',
    icon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_EquipIcon_Catalyst_Fourwinds.png',
    awakenicon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_EquipIcon_Catalyst_Fourwinds_Awaken.png'
  }
}
```

</details>
<details>
<summary>genshindb.weapons('<b>decarabian', { matchCategories: true }</b>)</summary>

```js
[
  "Apprentice's Notes",
  'Aquila Favonia',
  'Cool Steel',
  'Dull Blade',
  'Favonius Codex',
  'Favonius Sword',
  'Ferrous Shadow',
  'Magic Guide',
  'Pocket Grimoire',
  'Raven Bow',
  'Royal Grimoire',
  'Royal Longsword',
  'Silver Sword',
  'Snow-Tombed Starsilver',
  'The Bell',
  'The Stringless',
  'The Viridescent Hunt'
]
```

</details>

## genshindb.weaponmaterialtypes(query[, opts])]

<details>
<summary>genshindb.weaponmaterialtypes('<b>chains'</b>)</summary>

```js
{
  name: 'Dandelion Gladiator',
  '2starname': 'Fetters of the Dandelion Gladiator',
  '3starname': 'Chains of the Dandelion Gladiator',
  '4starname': 'Shackles of the Dandelion Gladiator',
  '5starname': 'Dream of the Dandelion Gladiator',
  day: [ 'Wednesday', 'Saturday', 'Sunday' ],
  location: 'Wolvendom',
  region: 'Mondstadt',
  domainofforgery: 'Cecilia Garden',
  images: undefined
}
```

</details>
<details>
<summary>genshindb.weaponmaterialtypes('<b>fri', { matchCategories: true }</b>)</summary>

```js
[ 'Boreal Wolf', 'Mist Veiled Elixir' ]
```

</details>

## genshindb.talentmaterialtypes(query[, opts])]

<details>
<summary>genshindb.talentmaterialtypes('<b>ballad'</b>)</summary>

```js
{
  name: 'Ballad',
  '2starname': 'Teachings of "Ballad"',
  '3starname': 'Guide of "Ballad"',
  '4starname': 'Philosophies of "Ballad"',
  day: [ 'Wednesday', 'Saturday', 'Sunday' ],
  location: 'Springvale',
  region: 'Mondstadt',
  domainofmastery: 'Forsaken Rift',
  images: undefined
}
```

</details>
<details>
<summary>genshindb.talentmaterialtypes('<b>satur', { matchCategories: true }</b>)</summary>

```js
[ 'Ballad', 'Gold' ]
```

</details>

## genshindb.artifacts(query[, opts])]

<details>
<summary>genshindb.artifacts('<b>flame'</b>)</summary>

```js
{
  name: 'Crimson Witch of Flames',
  rarity: [ '4', '5' ],
  '2pc': 'Pyro DMG Bonus +15%',
  '4pc': 'Increases Overloaded and Burning DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using Elemental Skill increases the 2-Piece Set Bonus by 50% of its starting value for 10s. Max 3 stacks.',
  flower: {
    name: "Witch's Flower of Blaze",
    relictype: 'Flower of Life',
    description: 'A flower touched by the witch who once dreamt of burning away all the demons in the world. The anonymous flames affectionately caress the hands of those who touch it.'
  },
  plume: {
    name: "Witch's Ever-Burning Plume",
    relictype: 'Plume of Death',
    description: 'A bird feather touched by the witch who once dreamt of burning away all the demons in the world. Its eternal flame burns hot.'
  },
  sands: {
    name: "Witch's End Time",
    relictype: 'Sands of Eon',
    description: 'A timepiece worn by the witch who dreamt of burning away all the demons in the world. The years the witch dedicated to the flames flow within.'
  },
  goblet: {
    name: "Witch's Heart Flames",
    relictype: 'Goblet of Eonothem',
    description: 'A flame-spitting urn left behind by the Crimson Witch of Flames, who once dreamt of burning away all the demons in the world. The fire in the urn burns eternally, as did its former master.'
  },
  circlet: {
    name: "Witch's Scorching Hat",
    relictype: 'Circlet of Logos',
    description: 'A hat once worn by the witch who dreamt of burning away all of the demons in the world. The large brim blocked her sight.'
  },
  images: {
    flower: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15006_4.png',
    plume: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15006_2.png',
    sands: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15006_5.png',
    goblet: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15006_1.png',
    circlet: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15006_3.png'
  }
}
```

</details>
<details>
<summary>genshindb.artifacts('<b>5', { matchCategories: true }</b>)</summary>

```js
[
  'Archaic Petra',
  'Blizzard Strayer',
  'Bloodstained Chivalry',
  'Crimson Witch of Flames',
  "Gladiator's Finale",
  'Heart of Depth',
  'Lavawalker',
  'Maiden Beloved',
  'Noblesse Oblige',
  'Retracing Bolide',
  'Thundering Fury',
  'Thundersoother',
  'Viridescent Venerer',
  "Wanderer's Troupe"
]
```

</details>
<details>
<summary>genshindb.artifacts('<b>noblesse'</b>)<b>['2pc']</b></summary>

```js
'Elemental Burst DMG +20%'
```

</details>

## genshindb.recipes(query[, opts])]

<details>
<summary>genshindb.recipes('<b>temptation'</b>)</summary>

```js
{
  name: "Adeptus' Temptation",
  rarity: '5',
  foodrecipetype: 'Warrior',
  effect: "Increases all party members' ATK by 260-372 and CRIT Rate by 8-12% for 300s.",
  description: 'A complex, famous type of Liyue cuisine, in which specially selected ingredients are submerged and slowly bowled in soup stock. The recipe scribbled from memory alone was enough to urge the adepti to once again return to the world of men.',
  buffs: [ 'ATK', 'CRIT Rate %' ],
  images: {
    image: 'https://static.wikia.nocookie.net/gensin-impact/images/5/5e/Item_Adeptus%27_Temptation.png'
  },
  ingredients: [ 'Ham x4', 'Crab x3', 'Shrimp Meat x3', 'Matsutake x3' ],
  source: `Chest at the Adeptus' Abode above Qingyun Peak, Liyue after completing "3 Divine Birds" mini quest.`
}
```

</details>
<details>
<summary>genshindb.recipes('<b>4', { matchCategories: true }</b>)</summary>

```js
[ 'Golden Crab', 'Jade Parcels', 'Moon Pie', 'Tianshu Meat' ]
```

</details>
<details>
<summary>genshindb.recipes('<b>warrior', { matchCategories: true }</b>)</summary>

```js
[
  "Adeptus' Temptation",
  "Adventurer's Breakfast Sandwich",
  'Almond Tofu',
  'Cold Cut Platter',
  'Come and Get It',
  'Der Weisheit Letzter Schluss (Life)',
  'Die Heilige Sinfonie',
  'Fried Radish Balls',
  'Jade Parcels',
  'Jueyun Chili Chicken',
  'Jueyun Guoba',
  'No Tomorrow',
  '"Once Upon a Time in Mondstadt"',
  `"Pile 'Em Up"`,
  'Qingce Stir Fry',
  "Rockin' Riffin' Chicken!",
  'Satisfying Salad',
  'Sautéed Matsutake',
  'Tianshu Meat'
]
```

</details>
<details>
<summary>genshindb.recipes('<b>cabbage', { matchCategories: true }</b>)</summary>

```js
[
  'Crab, Ham & Veggie Bake',
  'Der Weisheit Letzter Schluss (Life)',
  'Invigorating Pizza',
  'Jade Parcels',
  'Mushroom Pizza',
  'Northern Smoked Chicken',
  'Nutritious Meal (V.593)',
  'Qingce Stir Fry',
  'Satisfying Salad'
]
```

</details>
<details>
<summary>genshindb.recipes('<b>atK', { matchCategories: true }</b>)</summary>

```js
[
  "Adeptus' Temptation",
  "Adventurer's Breakfast Sandwich",
  'Almond Tofu',
  'Fried Radish Balls',
  'Jade Parcels',
  'Qingce Stir Fry',
  'Sautéed Matsutake'
]
```

</details>
<details>
<summary>genshindb.recipes('<b>diluc'</b>)</summary>

```js
{
  name: '"Once Upon a Time in Mondstadt"',
  rarity: '3',
  foodrecipetype: 'Warrior',
  effect: "Increases all party members' CRIT Rate by 20% and CRIT DMG by 20% for 300s.",
  description: "Diluc's specialty. Feast your eyes and then your stomach upon this delicacy as the soft ribs melt in your mouth. Who knew Diluc was able to cook this well?",
  buffs: [ 'CRIT Rate %', 'CRIT DMG %' ],
  images: {
    image: 'https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Item_%22Once_Upon_a_Time_in_Mondstadt%22.png'
  },
  ingredients: [ 'Raw Meat x3', 'Potato x3', 'Small Lamp Grass x1', 'Cheese x1' ],
  source: `Diluc's specialty dish from cooking "Pile 'Em Up".`,
  base: `"Pile 'Em Up"`,
  cook: 'Diluc'
}
```

</details>

## genshindb.elements(query[, opts])]


## genshindb.rarity(query[, opts])]


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
- [genshindb.materials(query[, opts])](#genshindbmaterialsquery-opts)
- [genshindb.artifacts(query[, opts])](#genshindbartifactsquery-opts)
- [genshindb.foods(query[, opts])](#genshindbfoodsquery-opts)
- [genshindb.domains(query[, opts])](#genshindbdomainsquery-opts)
- [genshindb.enemies(query[, opts])](#genshindbenemiesquery-opts)
- [genshindb.outfits(query[, opts])](#genshindboutfitsquery-opts)
- [genshindb.windgliders(query[, opts])](#genshindbwindglidersquery-opts)
- [genshindb.animals(query[, opts])](#genshindbanimalsquery-opts)
- [genshindb.namecards(query[, opts])](#genshindbnamecardsquery-opts)
- [genshindb.geographies(query[, opts])](#genshindbgeographiesquery-opts)
- [genshindb.adventureranks(query[, opts])](#genshindbadventureranksquery-opts)
- [genshindb.elements(query[, opts])](#genshindbelementsquery-opts)
- [genshindb.rarity(query[, opts])](#genshindbrarityquery-opts)

## genshindb.characters(query[, opts])]

<details>
<summary>genshindb.characters('<b>names', { matchCategories: true }</b>)</summary>

```js
[
  'Aether',         'Albedo',           'Alhaitham',
  'Aloy',           'Amber',            'Arataki Itto',
  'Baizhu',         'Barbara',          'Beidou',
  'Bennett',        'Candace',          'Chongyun',
  'Collei',         'Cyno',             'Dehya',
  'Diluc',          'Diona',            'Dori',
  'Eula',           'Faruzan',          'Fischl',
  'Ganyu',          'Gorou',            'Hu Tao',
  'Jean',           'Kaedehara Kazuha', 'Kaeya',
  'Kamisato Ayaka', 'Kamisato Ayato',   'Kaveh',
  'Keqing',         'Klee',             'Kujou Sara',
  'Kuki Shinobu',   'Layla',            'Lisa',
  'Lumine',         'Mika',             'Mona',
  'Nahida',         'Nilou',            'Ningguang',
  'Noelle',         'Qiqi',             'Raiden Shogun',
  'Razor',          'Rosaria',          'Sangonomiya Kokomi',
  'Sayu',           'Shenhe',           'Shikanoin Heizou',
  'Sucrose',        'Tartaglia',        'Thoma',
  'Tighnari',       'Venti',            'Wanderer',
  'Xiangling',      'Xiao',             'Xingqiu',
  'Xinyan',         'Yae Miko',         'Yanfei',
  'Yaoyao',         'Yelan',            'Yoimiya',
  'Yun Jin',        'Zhongli'
]
```

</details>
<details>
<summary>genshindb.characters('<b>ganyu'</b>)</summary>

```js
{
  name: 'Ganyu',
  fullname: 'Ganyu',
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
    korean: 'Kim Seon-hye'
  },
  costs: {
    ascend1: [
      { name: 'Mora', count: 20000 },
      { name: 'Shivada Jade Sliver', count: 1 },
      { name: 'Qingxin', count: 3 },
      { name: 'Whopperflower Nectar', count: 3 }
    ],
    ascend2: [
      { name: 'Mora', count: 40000 },
      { name: 'Shivada Jade Fragment', count: 3 },
      { name: 'Hoarfrost Core', count: 2 },
      { name: 'Qingxin', count: 10 },
      { name: 'Whopperflower Nectar', count: 15 }
    ],
    ascend3: [
      { name: 'Mora', count: 60000 },
      { name: 'Shivada Jade Fragment', count: 6 },
      { name: 'Hoarfrost Core', count: 4 },
      { name: 'Qingxin', count: 20 },
      { name: 'Shimmering Nectar', count: 12 }
    ],
    ascend4: [
      { name: 'Mora', count: 80000 },
      { name: 'Shivada Jade Chunk', count: 3 },
      { name: 'Hoarfrost Core', count: 8 },
      { name: 'Qingxin', count: 30 },
      { name: 'Shimmering Nectar', count: 18 }
    ],
    ascend5: [
      { name: 'Mora', count: 100000 },
      { name: 'Shivada Jade Chunk', count: 6 },
      { name: 'Hoarfrost Core', count: 12 },
      { name: 'Qingxin', count: 45 },
      { name: 'Energy Nectar', count: 12 }
    ],
    ascend6: [
      { name: 'Mora', count: 120000 },
      { name: 'Shivada Jade Gemstone', count: 6 },
      { name: 'Hoarfrost Core', count: 20 },
      { name: 'Qingxin', count: 60 },
      { name: 'Energy Nectar', count: 24 }
    ]
  },
  images: {
    card: 'https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png',
    portrait: 'https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Character_Ganyu_Portrait.png',
    icon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png',
    sideicon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Ganyu.png',
    cover1: 'https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/1ae0d0aaad9ee9b55652ea7ec67f0465_3602224572622981451.png',
    cover2: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210105/2021010519280045054.png',
    'hoyolab-avatar': 'https://img-os-static.hoyolab.com/communityWeb/upload/4af4adf192a35db2dd76d9718acc7bc8.png',
    nameicon: 'UI_AvatarIcon_Ganyu',
    nameiconcard: 'UI_AvatarIcon_Ganyu_Card',
    namegachasplash: 'UI_Gacha_AvatarImg_Ganyu',
    namegachaslice: 'UI_Gacha_AvatarIcon_Ganyu',
    namesideicon: 'UI_AvatarIcon_Side_Ganyu'
  },
  url: { fandom: 'https://genshin-impact.fandom.com/wiki/Ganyu' },
  stats: [Function (anonymous)],
  version: '1.2'
}
```

</details>
<details>
<summary>genshindb.characters('<b>ayaka'</b>)<b>.costs</b></summary>

```js
{
  ascend1: [
    { name: 'Mora', count: 20000 },
    { name: 'Shivada Jade Sliver', count: 1 },
    { name: 'Sakura Bloom', count: 3 },
    { name: 'Old Handguard', count: 3 }
  ],
  ascend2: [
    { name: 'Mora', count: 40000 },
    { name: 'Shivada Jade Fragment', count: 3 },
    { name: 'Perpetual Heart', count: 2 },
    { name: 'Sakura Bloom', count: 10 },
    { name: 'Old Handguard', count: 15 }
  ],
  ascend3: [
    { name: 'Mora', count: 60000 },
    { name: 'Shivada Jade Fragment', count: 6 },
    { name: 'Perpetual Heart', count: 4 },
    { name: 'Sakura Bloom', count: 20 },
    { name: 'Kageuchi Handguard', count: 12 }
  ],
  ascend4: [
    { name: 'Mora', count: 80000 },
    { name: 'Shivada Jade Chunk', count: 3 },
    { name: 'Perpetual Heart', count: 8 },
    { name: 'Sakura Bloom', count: 30 },
    { name: 'Kageuchi Handguard', count: 18 }
  ],
  ascend5: [
    { name: 'Mora', count: 100000 },
    { name: 'Shivada Jade Chunk', count: 6 },
    { name: 'Perpetual Heart', count: 12 },
    { name: 'Sakura Bloom', count: 45 },
    { name: 'Famed Handguard', count: 12 }
  ],
  ascend6: [
    { name: 'Mora', count: 120000 },
    { name: 'Shivada Jade Gemstone', count: 6 },
    { name: 'Perpetual Heart', count: 20 },
    { name: 'Sakura Bloom', count: 60 },
    { name: 'Famed Handguard', count: 24 }
  ]
}
```

</details>
<details>
<summary>genshindb.characters('<b>amber', { resultLanguage: 'JP' }</b>)</summary>

```js
{
  name: 'アンバー',
  fullname: 'アンバー',
  title: '飛行チャンピオン',
  description: '元気満々な女の子、騎士団で最も優秀で、最後の偵察騎士である。',
  rarity: '4',
  element: '炎',
  weapontype: '弓',
  substat: '攻撃力',
  gender: '女',
  body: 'GIRL',
  association: 'MONDSTADT',
  region: 'モンド',
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
  costs: {
    ascend1: [
      { name: 'モラ', count: 20000 },
      { name: '炎願のアゲート·砕屑', count: 1 },
      { name: 'イグサ', count: 3 },
      { name: '牢固な矢先', count: 3 }
    ],
    ascend2: [
      { name: 'モラ', count: 40000 },
      { name: '炎願のアゲート·欠片', count: 3 },
      { name: '常燃の火種', count: 2 },
      { name: 'イグサ', count: 10 },
      { name: '牢固な矢先', count: 15 }
    ],
    ascend3: [
      { name: 'モラ', count: 60000 },
      { name: '炎願のアゲート·欠片', count: 6 },
      { name: '常燃の火種', count: 4 },
      { name: 'イグサ', count: 20 },
      { name: '鋭利な矢先', count: 12 }
    ],
    ascend4: [
      { name: 'モラ', count: 80000 },
      { name: '炎願のアゲート·塊', count: 3 },
      { name: '常燃の火種', count: 8 },
      { name: 'イグサ', count: 30 },
      { name: '鋭利な矢先', count: 18 }
    ],
    ascend5: [
      { name: 'モラ', count: 100000 },
      { name: '炎願のアゲート·塊', count: 6 },
      { name: '常燃の火種', count: 12 },
      { name: 'イグサ', count: 45 },
      { name: '歴戦の矢先', count: 12 }
    ],
    ascend6: [
      { name: 'モラ', count: 120000 },
      { name: '炎願のアゲート', count: 6 },
      { name: '常燃の火種', count: 20 },
      { name: 'イグサ', count: 60 },
      { name: '歴戦の矢先', count: 24 }
    ]
  },
  images: {
    card: 'https://static.wikia.nocookie.net/gensin-impact/images/2/26/Character_Amber_Card.jpg',
    portrait: 'https://static.wikia.nocookie.net/gensin-impact/images/0/00/Character_Amber_Portrait.png',
    icon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ambor.png',
    sideicon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Ambor.png',
    cover1: 'https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/6f0ef40157e95b0d59455c12f4d3f270_6966278935690800707.png',
    cover2: 'https://webstatic.hoyoverse.com/upload/contentweb/2022/06/28/4f598572016e3177da5d4256fe9c1f5e_8765525983470991811.png',
    'hoyolab-avatar': 'https://img-os-static.hoyolab.com/communityWeb/upload/b7c1e4d14fdaac060eb86e3ad09bbf78.png',
    nameicon: 'UI_AvatarIcon_Ambor',
    nameiconcard: 'UI_AvatarIcon_Ambor_Card',
    namegachasplash: 'UI_Gacha_AvatarImg_Ambor',
    namegachaslice: 'UI_Gacha_AvatarIcon_Ambor',
    namesideicon: 'UI_AvatarIcon_Side_Ambor'
  },
  url: { fandom: 'https://genshin-impact.fandom.com/wiki/Amber' },
  stats: [Function (anonymous)],
  version: '1.0'
}
```

</details>
<details>
<summary>genshindb.characters('<b>アンバー', { queryLanguages: 'Japanese', resultLanguage: 'Spanish' }</b>)</summary>

```js
{
  name: 'Amber',
  fullname: 'Amber',
  title: 'La Campeona de Vuelo',
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
    korean: 'Kim Yeon-woo'
  },
  costs: {
    ascend1: [
      { name: 'Mora', count: 20000 },
      { name: 'Pedacito de ágata agnidus', count: 1 },
      { name: 'Lucetta', count: 3 },
      { name: 'Flecha robusta', count: 3 }
    ],
    ascend2: [
      { name: 'Mora', count: 40000 },
      { name: 'Fragmento de ágata agnidus', count: 3 },
      { name: 'Semilla de fuego eterno', count: 2 },
      { name: 'Lucetta', count: 10 },
      { name: 'Flecha robusta', count: 15 }
    ],
    ascend3: [
      { name: 'Mora', count: 60000 },
      { name: 'Fragmento de ágata agnidus', count: 6 },
      { name: 'Semilla de fuego eterno', count: 4 },
      { name: 'Lucetta', count: 20 },
      { name: 'Flecha afilada', count: 12 }
    ],
    ascend4: [
      { name: 'Mora', count: 80000 },
      { name: 'Trozo de ágata agnidus', count: 3 },
      { name: 'Semilla de fuego eterno', count: 8 },
      { name: 'Lucetta', count: 30 },
      { name: 'Flecha afilada', count: 18 }
    ],
    ascend5: [
      { name: 'Mora', count: 100000 },
      { name: 'Trozo de ágata agnidus', count: 6 },
      { name: 'Semilla de fuego eterno', count: 12 },
      { name: 'Lucetta', count: 45 },
      { name: 'Flecha veterana', count: 12 }
    ],
    ascend6: [
      { name: 'Mora', count: 120000 },
      { name: 'Ágata agnidus', count: 6 },
      { name: 'Semilla de fuego eterno', count: 20 },
      { name: 'Lucetta', count: 60 },
      { name: 'Flecha veterana', count: 24 }
    ]
  },
  images: {
    card: 'https://static.wikia.nocookie.net/gensin-impact/images/2/26/Character_Amber_Card.jpg',
    portrait: 'https://static.wikia.nocookie.net/gensin-impact/images/0/00/Character_Amber_Portrait.png',
    icon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ambor.png',
    sideicon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Ambor.png',
    cover1: 'https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/6f0ef40157e95b0d59455c12f4d3f270_6966278935690800707.png',
    cover2: 'https://webstatic.hoyoverse.com/upload/contentweb/2022/06/28/4f598572016e3177da5d4256fe9c1f5e_8765525983470991811.png',
    'hoyolab-avatar': 'https://img-os-static.hoyolab.com/communityWeb/upload/b7c1e4d14fdaac060eb86e3ad09bbf78.png',
    nameicon: 'UI_AvatarIcon_Ambor',
    nameiconcard: 'UI_AvatarIcon_Ambor_Card',
    namegachasplash: 'UI_Gacha_AvatarImg_Ambor',
    namegachaslice: 'UI_Gacha_AvatarIcon_Ambor',
    namesideicon: 'UI_AvatarIcon_Side_Ambor'
  },
  url: { fandom: 'https://genshin-impact.fandom.com/wiki/Amber' },
  stats: [Function (anonymous)],
  version: '1.0'
}
```

</details>
<details>
<summary>genshindb.characters('<b>childe', { matchAliases: true }</b>)</summary>

```js
{
  name: 'Tartaglia',
  fullname: 'Tartaglia',
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
    korean: 'Nam Do-hyeong'
  },
  costs: {
    ascend1: [
      { name: 'Mora', count: 20000 },
      { name: 'Varunada Lazurite Sliver', count: 1 },
      { name: 'Starconch', count: 3 },
      { name: "Recruit's Insignia", count: 3 }
    ],
    ascend2: [
      { name: 'Mora', count: 40000 },
      { name: 'Varunada Lazurite Fragment', count: 3 },
      { name: 'Cleansing Heart', count: 2 },
      { name: 'Starconch', count: 10 },
      { name: "Recruit's Insignia", count: 15 }
    ],
    ascend3: [
      { name: 'Mora', count: 60000 },
      { name: 'Varunada Lazurite Fragment', count: 6 },
      { name: 'Cleansing Heart', count: 4 },
      { name: 'Starconch', count: 20 },
      { name: "Sergeant's Insignia", count: 12 }
    ],
    ascend4: [
      { name: 'Mora', count: 80000 },
      { name: 'Varunada Lazurite Chunk', count: 3 },
      { name: 'Cleansing Heart', count: 8 },
      { name: 'Starconch', count: 30 },
      { name: "Sergeant's Insignia", count: 18 }
    ],
    ascend5: [
      { name: 'Mora', count: 100000 },
      { name: 'Varunada Lazurite Chunk', count: 6 },
      { name: 'Cleansing Heart', count: 12 },
      { name: 'Starconch', count: 45 },
      { name: "Lieutenant's Insignia", count: 12 }
    ],
    ascend6: [
      { name: 'Mora', count: 120000 },
      { name: 'Varunada Lazurite Gemstone', count: 6 },
      { name: 'Cleansing Heart', count: 20 },
      { name: 'Starconch', count: 60 },
      { name: "Lieutenant's Insignia", count: 24 }
    ]
  },
  images: {
    card: 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png',
    portrait: 'https://static.wikia.nocookie.net/gensin-impact/images/3/3a/Character_Tartaglia_Portrait.png',
    icon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Tartaglia.png',
    sideicon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Tartaglia.png',
    cover1: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20201103/2020110321160453386.png',
    cover2: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20201103/2020110321234137061.png',
    'hoyolab-avatar': 'https://img-os-static.hoyolab.com/communityWeb/upload/34ebaeb164a8b447dbe52afaae3e1f63.png',
    nameicon: 'UI_AvatarIcon_Tartaglia',
    nameiconcard: 'UI_AvatarIcon_Tartaglia_Card',
    namegachasplash: 'UI_Gacha_AvatarImg_Tartaglia',
    namegachaslice: 'UI_Gacha_AvatarIcon_Tartaglia',
    namesideicon: 'UI_AvatarIcon_Side_Tartaglia'
  },
  url: { fandom: 'https://genshin-impact.fandom.com/wiki/Tartaglia' },
  stats: [Function (anonymous)],
  version: '1.1'
}
```

</details>
<details>
<summary>genshindb.characters('<b>carmen', { matchAliases: true }</b>)</summary>

```js
{
  name: 'Venti',
  fullname: 'Venti',
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
    korean: 'Jung Yoo-jung'
  },
  costs: {
    ascend1: [
      { name: 'Mora', count: 20000 },
      { name: 'Vayuda Turquoise Sliver', count: 1 },
      { name: 'Cecilia', count: 3 },
      { name: 'Slime Condensate', count: 3 }
    ],
    ascend2: [
      { name: 'Mora', count: 40000 },
      { name: 'Vayuda Turquoise Fragment', count: 3 },
      { name: 'Hurricane Seed', count: 2 },
      { name: 'Cecilia', count: 10 },
      { name: 'Slime Condensate', count: 15 }
    ],
    ascend3: [
      { name: 'Mora', count: 60000 },
      { name: 'Vayuda Turquoise Fragment', count: 6 },
      { name: 'Hurricane Seed', count: 4 },
      { name: 'Cecilia', count: 20 },
      { name: 'Slime Secretions', count: 12 }
    ],
    ascend4: [
      { name: 'Mora', count: 80000 },
      { name: 'Vayuda Turquoise Chunk', count: 3 },
      { name: 'Hurricane Seed', count: 8 },
      { name: 'Cecilia', count: 30 },
      { name: 'Slime Secretions', count: 18 }
    ],
    ascend5: [
      { name: 'Mora', count: 100000 },
      { name: 'Vayuda Turquoise Chunk', count: 6 },
      { name: 'Hurricane Seed', count: 12 },
      { name: 'Cecilia', count: 45 },
      { name: 'Slime Concentrate', count: 12 }
    ],
    ascend6: [
      { name: 'Mora', count: 120000 },
      { name: 'Vayuda Turquoise Gemstone', count: 6 },
      { name: 'Hurricane Seed', count: 20 },
      { name: 'Cecilia', count: 60 },
      { name: 'Slime Concentrate', count: 24 }
    ]
  },
  images: {
    card: 'https://static.wikia.nocookie.net/gensin-impact/images/7/76/Character_Venti_Card.jpg',
    portrait: 'https://static.wikia.nocookie.net/gensin-impact/images/c/cf/Character_Venti_Portrait.png',
    icon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png',
    sideicon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Venti.png',
    cover1: 'https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/965e940e6caafe8fbd4bf0e17653000b_4508958090491775485.png',
    cover2: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20191122/2019112211143037621.png',
    'hoyolab-avatar': 'https://img-os-static.hoyolab.com/communityWeb/upload/f42e16fca94650e2e932c093de92ae54.png',
    nameicon: 'UI_AvatarIcon_Venti',
    nameiconcard: 'UI_AvatarIcon_Venti_Card',
    namegachasplash: 'UI_Gacha_AvatarImg_Venti',
    namegachaslice: 'UI_Gacha_AvatarIcon_Venti',
    namesideicon: 'UI_AvatarIcon_Side_Venti'
  },
  url: { fandom: 'https://genshin-impact.fandom.com/wiki/Venti' },
  stats: [Function (anonymous)],
  version: '1.0'
}
```

</details>
<details>
<summary>genshindb.characters('<b>arrowhead', { matchCategories: true }</b>)</summary>

```js
[ 'Amber', 'Collei', 'Diona', 'Fischl' ]
```

</details>
<details>
<summary>genshindb.characters('<b>arrow', { dumpResult: true, matchCategories: true, resultLanguage: 'jp' }</b>)</summary>

```js
{
  query: 'arrow',
  folder: 'characters',
  match: 'Firm Arrowhead',
  matchfolder: 'characters',
  matchtype: 'categories',
  options: {
    dumpResult: true,
    matchNames: true,
    matchAltNames: true,
    matchAliases: false,
    matchCategories: true,
    verboseCategories: false,
    queryLanguages: [ 'English' ],
    resultLanguage: 'Japanese'
  },
  filename: [ 'amber', 'collei', 'diona', 'fischl' ],
  result: [ 'アンバー', 'コレイ', 'ディオナ', 'フィッシュル' ]
}
```

</details>
<details>
<summary>genshindb.characters('<b>december', { matchCategories: true }</b>)</summary>

```js
[ 'Dori', 'Ganyu', 'Layla', 'Nilou', 'Tighnari', 'Zhongli' ]
```

</details>
<details>
<summary>genshindb.characters('<b>pyro', { matchCategories: true }</b>)</summary>

```js
[
  'Amber',   'Bennett',
  'Dehya',   'Diluc',
  'Hu Tao',  'Klee',
  'Thoma',   'Xiangling',
  'Xinyan',  'Yanfei',
  'Yoimiya'
]
```

</details>
<details>
<summary>genshindb.characters('<b>geo dmg', { matchCategories: true }</b>)</summary>

```js
[ 'Albedo', 'Gorou', 'Ningguang', 'Zhongli' ]
```

</details>
<details>
<summary>genshindb.characters('<b>liyue', { matchCategories: true }</b>)</summary>

```js
[
  'Baizhu',    'Beidou',
  'Chongyun',  'Ganyu',
  'Hu Tao',    'Keqing',
  'Ningguang', 'Qiqi',
  'Shenhe',    'Xiangling',
  'Xiao',      'Xingqiu',
  'Xinyan',    'Yanfei',
  'Yaoyao',    'Yelan',
  'Yun Jin',   'Zhongli'
]
```

</details>
<details>
<summary>genshindb.characters('<b>sword', { matchCategories: true }</b>)</summary>

```js
[
  'Aether',         'Albedo',
  'Alhaitham',      'Bennett',
  'Jean',           'Kaedehara Kazuha',
  'Kaeya',          'Kamisato Ayaka',
  'Kamisato Ayato', 'Keqing',
  'Kuki Shinobu',   'Layla',
  'Lumine',         'Nilou',
  'Qiqi',           'Xingqiu'
]
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
<details>
<summary>genshindb.characters('<b>aether'</b>)<b>.stats(12)</b></summary>

```js
{
  level: 12,
  ascension: 0,
  hp: 1739.6972508560866,
  attack: 33.97766494134521,
  defense: 109.18529665203096,
  specialized: 0
}
```

</details>

## genshindb.talents(query[, opts])]

<details>
<summary>genshindb.talents('<b>names', { matchCategories: true }</b>)</summary>

```js
[
  'Albedo',             'Alhaitham',          'Aloy',
  'Amber',              'Arataki Itto',       'Baizhu',
  'Barbara',            'Beidou',             'Bennett',
  'Candace',            'Chongyun',           'Collei',
  'Cyno',               'Dehya',              'Diluc',
  'Diona',              'Dori',               'Eula',
  'Faruzan',            'Fischl',             'Ganyu',
  'Gorou',              'Hu Tao',             'Jean',
  'Kaedehara Kazuha',   'Kaeya',              'Kamisato Ayaka',
  'Kamisato Ayato',     'Kaveh',              'Keqing',
  'Klee',               'Kujou Sara',         'Kuki Shinobu',
  'Layla',              'Lisa',               'Mika',
  'Mona',               'Nahida',             'Nilou',
  'Ningguang',          'Noelle',             'Qiqi',
  'Raiden Shogun',      'Razor',              'Rosaria',
  'Sangonomiya Kokomi', 'Sayu',               'Shenhe',
  'Shikanoin Heizou',   'Sucrose',            'Tartaglia',
  'Thoma',              'Tighnari',           'Traveler (Anemo)',
  'Traveler (Dendro)',  'Traveler (Electro)', 'Traveler (Geo)',
  'Venti',              'Wanderer',           'Xiangling',
  'Xiao',               'Xingqiu',            'Xinyan',
  'Yae Miko',           'Yanfei',             'Yaoyao',
  'Yelan',              'Yoimiya',            'Yun Jin',
  'Zhongli'
]
```

</details>
<details>
<summary>genshindb.talents('<b>ninguang'</b>)</summary>

```js
{
  name: 'Ningguang',
  combat1: {
    name: 'Normal Attack: Sparkling Scatter',
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
    attributes: {
      labels: [
        'Normal Attack DMG|{param1:F1P}',
        'Charged Attack DMG|{param2:P}',
        'DMG per Star Jade|{param3:F1P}',
        'Charged Attack Stamina Cost|{param4:F1}',
        'Plunge DMG|{param5:F1P}',
        'Low/High Plunge DMG|{param6:P}/{param7:P}'
      ],
      parameters: {
        param1: [
          0.2800000011920929,
          0.3009999990463257,
          0.32199999690055847,
          0.3499999940395355,
          0.3709999918937683,
          0.3919999897480011,
          0.41999998688697815,
          0.4480000138282776,
          0.47600001096725464,
          0.5040000081062317,
          0.5331199765205383,
          0.5712000131607056,
          0.609279990196228,
          0.6473600268363953,
          0.6854400038719177
        ],
        param2: [
          1.7408000230789185,  1.871359944343567,
           2.001919984817505, 2.1760001182556152,
          2.3065600395202637,  2.437119960784912,
          2.6112000942230225, 2.7852799892425537,
           2.959359884262085, 3.1334400177001953,
          3.3144829273223877,  3.551232099533081,
          3.7879810333251953,  4.024730205535889,
           4.261477947235107
        ],
        param3: [
          0.4959999918937683, 0.5332000255584717,
          0.5703999996185303, 0.6200000047683716,
          0.6571999788284302, 0.6944000124931335,
          0.7440000176429749, 0.7936000227928162,
          0.8432000279426575,  0.892799973487854,
           0.944383978843689, 1.0118399858474731,
          1.0792959928512573, 1.1467519998550415,
          1.2142080068588257
        ],
        param4: [
          50, 50, 50, 50, 50, 50,
          50, 50, 50, 50, 50, 50,
          50, 50, 50
        ],
        param5: [
          0.5682880282402039, 0.6145439743995667,
          0.6607999801635742, 0.7268800139427185,
          0.7731360197067261, 0.8259999752044678,
           0.898688018321991, 0.9713760018348694,
          1.0440640449523926,   1.12336003780365,
          1.2026560306549072, 1.2819520235061646,
          1.3612480163574219, 1.4405440092086792,
          1.5198400020599365
        ],
        param6: [
           1.136335015296936,  1.228827953338623,
          1.3213200569152832, 1.4534519910812378,
          1.5459439754486084, 1.6516499519348145,
          1.7969950437545776, 1.9423400163650513,
           2.087686061859131,  2.246243953704834,
           2.404802083969116, 2.5633609294891357,
           2.721919059753418, 2.8804779052734375,
          3.0390360355377197
        ],
        param7: [
          1.4193439483642578,  1.534872055053711,
          1.6504000425338745,  1.815440058708191,
          1.9309680461883545,  2.062999963760376,
            2.24454402923584, 2.4260880947113037,
          2.6076319217681885,    2.8056800365448,
           3.003727912902832, 3.2017760276794434,
          3.3998239040374756,  3.597872018814087,
           3.795919895172119
        ]
      }
    }
  },
  combat2: {
    name: 'Jade Screen',
    info: 'Ningguang creates a Jade Screen out of gold, obsidian and her great opulence, dealing AoE Geo DMG.\n' +
      '\n' +
      '**Jade Screen**\n' +
      "·Blocks opponents' projectiles.\n" +
      "·Endurance scales based on Ningguang's Max HP.\n" +
      '\n' +
      'Jade Screen is considered a Geo Construct and can be used to block certain attacks, but cannot be climbed. Only one Jade Screen may exist at any one time.',
    description: 'The canvas of stars is written upon this jade screen.',
    attributes: {
      labels: [
        'Inherited HP|{param3:F1P}',
        'Skill DMG|{param2:P}',
        'CD|{param4:F1}s'
      ],
      parameters: {
        param1: [
          -0.49900001287460327,
          -0.4690000116825104,
          -0.4390000104904175,
          -0.4000000059604645,
          -0.3700000047683716,
          -0.3400000035762787,
          -0.3009999990463257,
          -0.2619999945163727,
          -0.22300000488758087,
          -0.18400000035762787,
          -0.14499999582767487,
          -0.10599999874830246,
          -0.06700000166893005,
          -0.02800000086426735,
          0.010999999940395355
        ],
        param2: [
           2.303999900817871,  2.476799964904785,
           2.649600028991699,  2.880000114440918,
           3.052799940109253,  3.225600004196167,
          3.4560000896453857, 3.6863999366760254,
           3.916800022125244,  4.147200107574463,
           4.377600193023682,  4.607999801635742,
           4.895999908447266,  5.184000015258789,
          5.4720001220703125
        ],
        param3: [
          0.5009999871253967,  0.531000018119812,
          0.5609999895095825, 0.6000000238418579,
          0.6299999952316284, 0.6600000262260437,
          0.6990000009536743, 0.7379999756813049,
          0.7770000100135803, 0.8159999847412109,
          0.8550000190734863, 0.8939999938011169,
          0.9330000281333923,  0.972000002861023,
          1.0110000371932983
        ],
        param4: [
          12, 12, 12, 12, 12, 12,
          12, 12, 12, 12, 12, 12,
          12, 12, 12
        ]
      }
    }
  },
  combat3: {
    name: 'Starshatter',
    info: 'Gathering a great number of gems, Ningguang scatters them all at once, sending homing projectiles at her opponents that deal massive Geo DMG.\n' +
      'If Starshatter is cast when a Jade Screen is nearby, the Jade Screen will fire additional gem projectiles at the same time.',
    description: 'Stars shatter. Silence falls.',
    attributes: {
      labels: [
        'DMG Per Gem|{param1:F1P}',
        'CD|{param2:F1}s',
        'Energy Cost|{param3:I}'
      ],
      parameters: {
        param1: [
          0.8695999979972839,
          0.9348199963569641,
          1.000040054321289,
          1.0870000123977661,
          1.1522200107574463,
          1.2174400091171265,
          1.3043999671936035,
          1.3913600444793701,
          1.4783200025558472,
          1.5652799606323242,
          1.6522400379180908,
          1.7391999959945679,
          1.8479000329971313,
          1.9565999507904053,
          2.0652999877929688
        ],
        param2: [
          12, 12, 12, 12, 12, 12,
          12, 12, 12, 12, 12, 12,
          12, 12, 12
        ],
        param3: [
          40, 40, 40, 40, 40, 40,
          40, 40, 40, 40, 40, 40,
          40, 40, 40
        ]
      }
    }
  },
  passive1: {
    name: 'Backup Plan',
    info: 'When Ningguang is in possession of Star Jades, her Charged Attack does not consume Stamina.'
  },
  passive2: {
    name: 'Strategic Reserve',
    info: 'A character that passes through the **Jade Screen** will gain a 12% Geo DMG Bonus for 10s.'
  },
  passive3: {
    name: 'Trove of Marvelous Treasures',
    info: 'Displays the location of nearby **ore veins used in forging** on the mini-map.'
  },
  costs: {
    lvl2: [
      { name: 'Mora', count: 12500 },
      { name: 'Teachings of Prosperity', count: 3 },
      { name: "Recruit's Insignia", count: 6 }
    ],
    lvl3: [
      { name: 'Mora', count: 17500 },
      { name: 'Guide to Prosperity', count: 2 },
      { name: "Sergeant's Insignia", count: 3 }
    ],
    lvl4: [
      { name: 'Mora', count: 25000 },
      { name: 'Guide to Prosperity', count: 4 },
      { name: "Sergeant's Insignia", count: 4 }
    ],
    lvl5: [
      { name: 'Mora', count: 30000 },
      { name: 'Guide to Prosperity', count: 6 },
      { name: "Sergeant's Insignia", count: 6 }
    ],
    lvl6: [
      { name: 'Mora', count: 37500 },
      { name: 'Guide to Prosperity', count: 9 },
      { name: "Sergeant's Insignia", count: 9 }
    ],
    lvl7: [
      { name: 'Mora', count: 120000 },
      { name: 'Philosophies of Prosperity', count: 4 },
      { name: "Lieutenant's Insignia", count: 4 },
      { name: 'Spirit Locket of Boreas', count: 1 }
    ],
    lvl8: [
      { name: 'Mora', count: 260000 },
      { name: 'Philosophies of Prosperity', count: 6 },
      { name: "Lieutenant's Insignia", count: 6 },
      { name: 'Spirit Locket of Boreas', count: 1 }
    ],
    lvl9: [
      { name: 'Mora', count: 450000 },
      { name: 'Philosophies of Prosperity', count: 12 },
      { name: "Lieutenant's Insignia", count: 9 },
      { name: 'Spirit Locket of Boreas', count: 2 }
    ],
    lvl10: [
      { name: 'Mora', count: 700000 },
      { name: 'Philosophies of Prosperity', count: 16 },
      { name: "Lieutenant's Insignia", count: 12 },
      { name: 'Spirit Locket of Boreas', count: 2 },
      { name: 'Crown of Insight', count: 1 }
    ]
  },
  images: {
    combat1: 'Skill_A_Catalyst_MD',
    combat2: 'Skill_S_Ningguang_01',
    combat3: 'Skill_E_Ningguang_01_HD',
    passive1: 'UI_Talent_S_Ningguang_02',
    passive2: 'UI_Talent_S_Ningguang_06',
    passive3: 'UI_Talent_Collect_Ore'
  },
  version: '1.0'
}
```

</details>
<details>
<summary>genshindb.talents('<b>ningguang'</b>)<b>.costs</b></summary>

```js
{
  lvl2: [
    { name: 'Mora', count: 12500 },
    { name: 'Teachings of Prosperity', count: 3 },
    { name: "Recruit's Insignia", count: 6 }
  ],
  lvl3: [
    { name: 'Mora', count: 17500 },
    { name: 'Guide to Prosperity', count: 2 },
    { name: "Sergeant's Insignia", count: 3 }
  ],
  lvl4: [
    { name: 'Mora', count: 25000 },
    { name: 'Guide to Prosperity', count: 4 },
    { name: "Sergeant's Insignia", count: 4 }
  ],
  lvl5: [
    { name: 'Mora', count: 30000 },
    { name: 'Guide to Prosperity', count: 6 },
    { name: "Sergeant's Insignia", count: 6 }
  ],
  lvl6: [
    { name: 'Mora', count: 37500 },
    { name: 'Guide to Prosperity', count: 9 },
    { name: "Sergeant's Insignia", count: 9 }
  ],
  lvl7: [
    { name: 'Mora', count: 120000 },
    { name: 'Philosophies of Prosperity', count: 4 },
    { name: "Lieutenant's Insignia", count: 4 },
    { name: 'Spirit Locket of Boreas', count: 1 }
  ],
  lvl8: [
    { name: 'Mora', count: 260000 },
    { name: 'Philosophies of Prosperity', count: 6 },
    { name: "Lieutenant's Insignia", count: 6 },
    { name: 'Spirit Locket of Boreas', count: 1 }
  ],
  lvl9: [
    { name: 'Mora', count: 450000 },
    { name: 'Philosophies of Prosperity', count: 12 },
    { name: "Lieutenant's Insignia", count: 9 },
    { name: 'Spirit Locket of Boreas', count: 2 }
  ],
  lvl10: [
    { name: 'Mora', count: 700000 },
    { name: 'Philosophies of Prosperity', count: 16 },
    { name: "Lieutenant's Insignia", count: 12 },
    { name: 'Spirit Locket of Boreas', count: 2 },
    { name: 'Crown of Insight', count: 1 }
  ]
}
```

</details>
<details>
<summary>genshindb.talents('<b>klee'</b>)<b>.passive3</b></summary>

```js
{
  name: 'All Of My Treasures!',
  info: 'Displays the location of nearby **resources unique to Mondstadt** on the mini-map.'
}
```

</details>
<details>
<summary>genshindb.talents('<b>mona'</b>)<b>.combat1</b></summary>

```js
{
  name: 'Normal Attack: Ripple of Fate',
  info: '**Normal Attack**\n' +
    'Performs up to 4 water splash attacks that deal Hydro DMG.\n' +
    '\n' +
    '**Charged Attack**\n' +
    'Consumes a certain amount of Stamina to deal AoE Hydro DMG after a short casting time.\n' +
    '\n' +
    '**Plunging Attack**\n' +
    'Gathering the might of Hydro, Mona plunges towards the ground from mid-air, damaging all opponents in her path. Deals AoE Hydro DMG upon impact with the ground.',
  attributes: {
    labels: [
      '1-Hit DMG|{param1:F1P}',
      '2-Hit DMG|{param2:F1P}',
      '3-Hit DMG|{param3:F1P}',
      '4-Hit DMG|{param4:F1P}',
      'Charged Attack DMG|{param5:P}',
      'Charged Attack Stamina Cost|{param6:F1}',
      'Plunge DMG|{param7:F1P}',
      'Low/High Plunge DMG|{param8:P}/{param9:P}'
    ],
    parameters: {
      param1: [
        0.37599998712539673,
        0.4041999876499176,
        0.4323999881744385,
        0.4699999988079071,
        0.498199999332428,
        0.5264000296592712,
        0.5640000104904175,
        0.6015999913215637,
        0.63919997215271,
        0.676800012588501,
        0.7143999934196472,
        0.7519999742507935,
        0.7990000247955322,
        0.8460000157356262,
        0.8930000066757202
      ],
      param2: [
        0.36000001430511475,
        0.3869999945163727,
        0.414000004529953,
        0.44999998807907104,
        0.47699999809265137,
        0.5040000081062317,
        0.5400000214576721,
        0.5759999752044678,
        0.6119999885559082,
        0.6480000019073486,
        0.6840000152587891,
        0.7200000286102295,
        0.7649999856948853,
        0.8100000023841858,
        0.8550000190734863
      ],
      param3: [
        0.4480000138282776,
        0.48159998655319214,
        0.5152000188827515,
        0.5600000023841858,
        0.5935999751091003,
        0.6272000074386597,
        0.671999990940094,
        0.7167999744415283,
        0.7616000175476074,
        0.8064000010490417,
        0.8511999845504761,
        0.8960000276565552,
        0.9520000219345093,
        1.0080000162124634,
        1.0640000104904175
      ],
      param4: [
        0.5616000294685364, 0.6037200093269348,
        0.6458399891853333, 0.7020000219345093,
        0.7441200017929077, 0.7862399816513062,
        0.8424000144004822, 0.8985599875450134,
        0.9547200202941895, 1.0108799934387207,
         1.067039966583252, 1.1232000589370728,
        1.1934000253677368, 1.2635999917984009,
         1.333799958229065
      ],
      param5: [
        1.4972000122070312, 1.6094900369644165,
        1.7217799425125122,  1.871500015258789,
        1.9837900400161743, 2.0960800647735596,
         2.245800018310547,  2.395519971847534,
        2.5452399253845215,  2.694960117340088,
        2.8506689071655273,  3.054287910461426,
         3.257906913757324, 3.4615259170532227,
        3.6651461124420166
      ],
      param6: [
        50, 50, 50, 50, 50, 50,
        50, 50, 50, 50, 50, 50,
        50, 50, 50
      ],
      param7: [
        0.5682880282402039, 0.6145439743995667,
        0.6607999801635742, 0.7268800139427185,
        0.7731360197067261, 0.8259999752044678,
         0.898688018321991, 0.9713760018348694,
        1.0440640449523926,   1.12336003780365,
        1.2026560306549072, 1.2819520235061646,
        1.3612480163574219, 1.4405440092086792,
        1.5198400020599365
      ],
      param8: [
         1.136335015296936,  1.228827953338623,
        1.3213200569152832, 1.4534519910812378,
        1.5459439754486084, 1.6516499519348145,
        1.7969950437545776, 1.9423400163650513,
         2.087686061859131,  2.246243953704834,
         2.404802083969116, 2.5633609294891357,
         2.721919059753418, 2.8804779052734375,
        3.0390360355377197
      ],
      param9: [
        1.4193439483642578,  1.534872055053711,
        1.6504000425338745,  1.815440058708191,
        1.9309680461883545,  2.062999963760376,
          2.24454402923584, 2.4260880947113037,
        2.6076319217681885,    2.8056800365448,
         3.003727912902832, 3.2017760276794434,
        3.3998239040374756,  3.597872018814087,
         3.795919895172119
      ]
    }
  }
}
```

</details>
<details>
<summary>genshindb.talents('<b>mona'</b>)<b>.combat2</b></summary>

```js
{
  name: 'Mirror Reflection of Doom',
  info: 'Creates an illusory Phantom of Fate from coalesced waterspouts.\n' +
    '\n' +
    '**Phantom**\n' +
    'Has the following special properties:\n' +
    '·Continuously taunts nearby opponents, attracting their fire.\n' +
    '·Continuously deals Hydro DMG to nearby opponents.\n' +
    '·When its duration expires, the Phantom explodes, dealing AoE Hydro DMG.\n' +
    '\n' +
    '**Hold**\n' +
    'Utilizes water currents to move backwards swiftly before conjuring a Phantom.\n' +
    '\n' +
    'Only one Phantom created by Mirror Reflection of Doom can exist at any time.',
  description: 'Skilled astrologers have always dreamed of using a phantom facsimile of themselves to ward off imminent ill fate, but Mona must be the first to make such a mockery of it in all of Teyvat.',
  attributes: {
    labels: [
      'DoT|{param1:F1P}',
      'Explosion DMG|{param2:P}',
      'CD|{param5:F1}s'
    ],
    parameters: {
      param1: [
        0.3199999928474426,
        0.3440000116825104,
        0.36800000071525574,
        0.4000000059604645,
        0.42399999499320984,
        0.4480000138282776,
        0.47999998927116394,
        0.5120000243186951,
        0.5440000295639038,
        0.5759999752044678,
        0.6079999804496765,
        0.6399999856948853,
        0.6800000071525574,
        0.7200000286102295,
        0.7599999904632568
      ],
      param2: [
        1.3279999494552612, 1.4276000261306763,
        1.5271999835968018,  1.659999966621399,
         1.759600043296814, 1.8592000007629395,
        1.9919999837875366,  2.124799966812134,
        2.2576000690460205,  2.390399932861328,
         2.523200035095215, 2.6559998989105225,
         2.822000026702881,   2.98799991607666,
        3.1540000438690186
      ],
      param5: [
        12, 12, 12, 12, 12, 12,
        12, 12, 12, 12, 12, 12,
        12, 12, 12
      ]
    }
  }
}
```

</details>
<details>
<summary>genshindb.talents('<b>mona'</b>)<b>.combatsp</b></summary>

```js
{
  name: 'Illusory Torrent',
  info: '**Alternate Sprint**\n' +
    "Mona cloaks herself within the water's flow, consuming Stamina to move rapidly.\n" +
    '\n' +
    'When under the effect of Illusory Torrent, Mona can move at high speed on water.\n' +
    'Applies the Wet status to nearby opponents when she reappears.',
  description: "This is something that Mona can do, but her teacher cannot. Well, but it's not as if her teacher would pursue any matter concerning Hydro Visions anyway...",
  attributes: {
    labels: [
      'Activation Stamina Consumption|{param1:F2}',
      'Stamina Drain|{param2:F2}/s'
    ],
    parameters: { param1: [ 10 ], param2: [ 15 ] }
  }
}
```

</details>
<details>
<summary>genshindb.talents('<b>mona'</b>)<b>.combat3</b></summary>

```js
{
  name: 'Stellaris Phantasm',
  info: 'Mona summons the sparkling waves and creates a reflection of the starry sky, applying the Illusory Bubble status to opponents in a large AoE.\n' +
    '\n' +
    '**Illusory Bubble**\n' +
    'Traps opponents inside a pocket of destiny and also makes them Wet. Renders weaker opponents immobile.\n' +
    'When an opponent affected by Illusory Bubble sustains DMG, it has the following effects:\n' +
    '·Applies an Omen to the opponent, which gives a DMG Bonus, also increasing the DMG of the attack that causes it.\n' +
    '·Removes the Illusory Bubble, dealing Hydro DMG in the process.\n' +
    '\n' +
    '**Omen**\n' +
    'During its duration, increases DMG taken by opponents.',
  description: 'It was from the time that gods first traced the lights in the heavens with their eyes that the notion of "fate" was born.',
  attributes: {
    labels: [
      'Illusory Bubble Duration|{param1:F1}s',
      'Illusory Bubble Explosion DMG|{param2:P}',
      'DMG Bonus|{param10:P}',
      'Omen Duration|{param4:F1}s',
      'CD|{param5:F1}s',
      'Energy Cost|{param6:I}'
    ],
    parameters: {
      param1: [
        8, 8, 8, 8, 8, 8,
        8, 8, 8, 8, 8, 8,
        8, 8, 8
      ],
      param2: [
         4.423999786376953, 4.755799770355225,
         5.087600231170654,  5.53000020980835,
         5.861800193786621, 6.193600177764893,
         6.636000156402588, 7.078400135040283,
        7.5208001136779785, 7.963200092315674,
         8.405599594116211, 8.847999572753906,
         9.401000022888184, 9.954000473022461,
        10.506999969482422
      ],
      param3: [
        -0.41999998688697815,
        -0.4399999976158142,
        -0.46000000834465027,
        -0.47999998927116394,
        -0.5,
        -0.5199999809265137,
        -0.5400000214576721,
        -0.5600000023841858,
        -0.5799999833106995,
        -0.6000000238418579,
        -0.6000000238418579,
        -0.6000000238418579,
        -0.6000000238418579,
        -0.6000000238418579,
        -0.6000000238418579
      ],
      param4: [
        4, 4, 4, 4.5, 4.5, 4.5,
        5, 5, 5,   5,   5,   5,
        5, 5, 5
      ],
      param5: [
        15, 15, 15, 15, 15, 15,
        15, 15, 15, 15, 15, 15,
        15, 15, 15
      ],
      param6: [
        60, 60, 60, 60, 60, 60,
        60, 60, 60, 60, 60, 60,
        60, 60, 60
      ],
      param10: [
        0.41999998688697815,  0.4399999976158142,
        0.46000000834465027, 0.47999998927116394,
                        0.5,  0.5199999809265137,
         0.5400000214576721,  0.5600000023841858,
         0.5799999833106995,  0.6000000238418579,
         0.6000000238418579,  0.6000000238418579,
         0.6000000238418579,  0.6000000238418579,
         0.6000000238418579
      ]
    }
  }
}
```

</details>
<details>
<summary>genshindb.talents('<b>ballad', { matchCategories: true }</b>)</summary>

```js
[
  'Albedo',
  'Fischl',
  'Kaeya',
  'Lisa',
  'Mika',
  'Rosaria',
  'Traveler (Anemo)',
  'Venti'
]
```

</details>
<details>
<summary>genshindb.talents('<b>dvalin sigh', { matchCategories: true }</b>)</summary>

```js
[ 'Amber', 'Beidou', 'Chongyun', 'Traveler (Anemo)' ]
```

</details>
<details>
<summary>genshindb.talents('<b>arrowhead', { matchCategories: true }</b>)</summary>

```js
[ 'Amber', 'Collei', 'Diona', 'Fischl', 'Traveler (Geo)' ]
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
    c6: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/constellation_icon/UI_Talent_S_Ambor_04.png',
    constellation: 'Eff_UI_Talent_Ambor'
  },
  version: '1.0'
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
<details>
<summary>genshindb.constellations('<b>traveler geo'</b>)</summary>

```js
{
  name: 'Traveler (Geo)',
  c1: {
    name: 'Invincible Stonewall',
    effect: 'Party members within the radius of **Wake of Earth** have their CRIT Rate increased by 10% and have increased resistance against interruption.'
  },
  c2: {
    name: 'Rockcore Meltdown',
    effect: 'When the meteorite created by **Starfell Sword** is destroyed, it will also explode, dealing additional AoE Geo DMG equal to the amount of damage dealt by Starfell Sword.'
  },
  c3: {
    name: 'Will of the Rock',
    effect: 'Increases the Level of **Wake of Earth** by 3.\n' +
      'Maximum upgrade level is 15.'
  },
  c4: {
    name: 'Reaction Force',
    effect: 'The shockwave triggered by **Wake of Earth** regenerates 5 Energy for every opponent hit.\n' +
      'A maximum of 25 Energy can be regenerated in this manner at any one time.'
  },
  c5: {
    name: 'Meteorite Impact',
    effect: 'Increases the Level of **Starfell Sword** by 3.\n' +
      'Maximum upgrade level is 15.'
  },
  c6: {
    name: 'Everlasting Boulder',
    effect: 'The barrier created by **Wake of Earth** lasts 5s longer.\n' +
      'The meteorite created by **Starfell Sword** lasts 10s longer.'
  },
  images: {
    c1: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/constellation_icon/UI_Talent_S_PlayerRock_01.png',
    c2: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/constellation_icon/UI_Talent_S_PlayerRock_02.png',
    c3: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/constellation_icon/UI_Talent_U_PlayerRock_02.png',
    c4: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/constellation_icon/UI_Talent_S_PlayerRock_03.png',
    c5: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/constellation_icon/UI_Talent_U_PlayerRock_01.png',
    c6: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/constellation_icon/UI_Talent_S_PlayerRock_04.png',
    constellation: 'Eff_UI_Talent_PlayerBoy_Rock',
    constellation2: 'Eff_UI_Talent_PlayerGirl_Rock'
  },
  version: '1.0'
}
```

</details>

## genshindb.weapons(query[, opts])]

<details>
<summary>genshindb.weapons('<b>names', { matchCategories: true }</b>)</summary>

```js
[
  'Akuoumaru',
  'Alley Hunter',
  'Amenoma Kageuchi',
  "Amos' Bow",
  "Apprentice's Notes",
  'Aqua Simulacra',
  'Aquila Favonia',
  'A Thousand Floating Dreams',
  'Beacon of the Reed Sea',
  "Beginner's Protector",
  'Blackcliff Agate',
  'Blackcliff Longsword',
  'Blackcliff Pole',
  'Blackcliff Slasher',
  'Blackcliff Warbow',
  'Black Tassel',
  'Bloodtainted Greatsword',
  'Calamity Queller',
  'Cinnabar Spindle',
  'Compound Bow',
  'Cool Steel',
  'Crescent Pike',
  'Dark Iron Sword',
  'Deathmatch',
  'Debate Club',
  'Dodoco Tales',
  "Dragon's Bane",
  'Dragonspine Spear',
  'Dull Blade',
  'Elegy for the End',
  'Emerald Orb',
  'End of the Line',
  'Engulfing Lightning',
  'Everlasting Moonglow',
  'Eye of Perception',
  'Fading Twilight',
  'Favonius Codex',
  'Favonius Greatsword',
  'Favonius Lance',
  'Favonius Sword',
  'Favonius Warbow',
  'Ferrous Shadow',
  'Festering Desire',
  'Fillet Blade',
  'Forest Regalia',
  'Freedom-Sworn',
  'Frostbearer',
  'Fruit of Fulfillment',
  'Hakushin Ring',
  'Halberd',
  'Hamayumi',
  'Haran Geppaku Futsu',
  'Harbinger of Dawn',
  "Hunter's Bow",
  "Hunter's Path",
  'Iron Point',
  'Iron Sting',
  "Jadefall's Splendor",
  'Kagotsurube Isshin',
  "Kagura's Verity",
  'Katsuragikiri Nagamasa',
  'Key of Khaj-Nisut',
  "King's Squire",
  'Kitain Cross Spear',
  'Light of Foliar Incision',
  "Lion's Roar",
  'Lithic Blade',
  'Lithic Spear',
  'Lost Prayer to the Sacred Winds',
  'Luxurious Sea-Lord',
  'Magic Guide',
  'Mailed Flower',
  'Makhaira Aquamarine',
  'Mappa Mare',
  'Memory of Dust',
  'Messenger',
  'Missive Windspear',
  'Mistsplitter Reforged',
  'Mitternachts Waltz',
  'Moonpiercer',
  "Mouun's Moon",
  'Oathsworn Eye',
  "Old Merc's Pal",
  'Otherworldly Story',
  'Pocket Grimoire',
  'Polar Star',
  'Predator',
  'Primordial Jade Cutter',
  'Primordial Jade Winged-Spear',
  'Prized Isshin Blade',
  'Prized Isshin Blade',
  'Prized Isshin Blade',
  'Prototype Amber',
  'Prototype Archaic',
  'Prototype Crescent',
  'Prototype Rancour',
  'Prototype Starglitter',
  'Rainslasher',
  'Raven Bow',
  'Recurve Bow',
  ... 57 more items
]
```

</details>
<details>
<summary>genshindb.weapons('<b>lost prayers'</b>)</summary>

```js
{
  name: 'Lost Prayer to the Sacred Winds',
  description: 'An educational tome written by anonymous early inhabitants who worshiped the wind. It has been blessed by the wind for its faithfulness and influence over the millennia.',
  weapontype: 'Catalyst',
  rarity: '5',
  story: 'Scriptures of the ancient winds, passed from generation to generation among the observers of ritual in service of the Anemo Archon.\n' +
    'Countless hands have touched the now-yellowing pages of this book, though any prints they left have since been carried away by the wind.\n' +
    '\n' +
    'In the era when the Storm Lord reigned from his tower up high, desperate appeals filled the scriptures.\n' +
    'Then, in the era when the sands of snow thawed, the joy of the sprouting greenery flooded the pages.\n' +
    '\n' +
    'In the days of yore, when the ruling aristocracy pulled at puppet strings to control the masses,\n' +
    'The scriptures in the hands of slaves told of their envy and their desire for the thousand winds.\n' +
    '\n' +
    'The people of Mondstadt lived, endured, fought, rejoiced, and enjoyed freedom.\n' +
    'As the precious years passed, the scriptures grew thicker and heavier.\n' +
    '\n' +
    'When Mondstadt was born anew, and the Church finally unshackled,\n' +
    'The scriptures of the winds could bear no longer being confined to a shelf,\n' +
    "And so the book took flight, left the Church's treasury, and was gone.\n" +
    'Like the winds of Mondstadt, and like the people of Mondstadt,\n' +
    'It belonged to freedom and the winds.\n' +
    '\n' +
    'The elegant handwriting on the title page reads:\n' +
    '\n' +
    'Children of the Anemo Archon, heed these words:\n' +
    'From the winds we have come, and with the winds we shall go.\n' +
    'Never, ever grieve for me.\n' +
    "'Tis but my flesh and bones which rest in the soil:\n" +
    'My soul has become one with the thousand winds.\n' +
    '\n' +
    'When flowers bloom, when leaves sway,\n' +
    'That is me who sings the songs of freedom, of the winds.',
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
  costs: {
    ascend1: [
      { name: 'Mora', count: 10000 },
      { name: 'Fetters of the Dandelion Gladiator', count: 5 },
      { name: 'Chaos Device', count: 5 },
      { name: 'Slime Condensate', count: 3 }
    ],
    ascend2: [
      { name: 'Mora', count: 20000 },
      { name: 'Chains of the Dandelion Gladiator', count: 5 },
      { name: 'Chaos Device', count: 18 },
      { name: 'Slime Condensate', count: 12 }
    ],
    ascend3: [
      { name: 'Mora', count: 30000 },
      { name: 'Chains of the Dandelion Gladiator', count: 9 },
      { name: 'Chaos Circuit', count: 9 },
      { name: 'Slime Secretions', count: 9 }
    ],
    ascend4: [
      { name: 'Mora', count: 45000 },
      { name: 'Shackles of the Dandelion Gladiator', count: 5 },
      { name: 'Chaos Circuit', count: 18 },
      { name: 'Slime Secretions', count: 14 }
    ],
    ascend5: [
      { name: 'Mora', count: 55000 },
      { name: 'Shackles of the Dandelion Gladiator', count: 9 },
      { name: 'Chaos Core', count: 14 },
      { name: 'Slime Concentrate', count: 9 }
    ],
    ascend6: [
      { name: 'Mora', count: 65000 },
      { name: 'Dream of the Dandelion Gladiator', count: 6 },
      { name: 'Chaos Core', count: 27 },
      { name: 'Slime Concentrate', count: 18 }
    ]
  },
  images: {
    nameicon: 'UI_EquipIcon_Catalyst_Fourwinds',
    namegacha: 'UI_Gacha_EquipIcon_Catalyst_Fourwinds',
    icon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_EquipIcon_Catalyst_Fourwinds.png',
    nameawakenicon: 'UI_EquipIcon_Catalyst_Fourwinds_Awaken',
    awakenicon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_EquipIcon_Catalyst_Fourwinds_Awaken.png'
  },
  url: {
    fandom: 'https://genshin-impact.fandom.com/wiki/Lost_Prayer_to_the_Sacred_Winds'
  },
  stats: [Function (anonymous)],
  version: '1.0'
}
```

</details>
<details>
<summary>genshindb.weapons('<b>staff homa'</b>)<b>.costs</b></summary>

```js
{
  ascend1: [
    { name: 'Mora', count: 10000 },
    { name: 'Grain of Aerosiderite', count: 5 },
    { name: 'Dead Ley Line Branch', count: 5 },
    { name: 'Slime Condensate', count: 3 }
  ],
  ascend2: [
    { name: 'Mora', count: 20000 },
    { name: 'Piece of Aerosiderite', count: 5 },
    { name: 'Dead Ley Line Branch', count: 18 },
    { name: 'Slime Condensate', count: 12 }
  ],
  ascend3: [
    { name: 'Mora', count: 30000 },
    { name: 'Piece of Aerosiderite', count: 9 },
    { name: 'Dead Ley Line Leaves', count: 9 },
    { name: 'Slime Secretions', count: 9 }
  ],
  ascend4: [
    { name: 'Mora', count: 45000 },
    { name: 'Bit of Aerosiderite', count: 5 },
    { name: 'Dead Ley Line Leaves', count: 18 },
    { name: 'Slime Secretions', count: 14 }
  ],
  ascend5: [
    { name: 'Mora', count: 55000 },
    { name: 'Bit of Aerosiderite', count: 9 },
    { name: 'Ley Line Sprout', count: 14 },
    { name: 'Slime Concentrate', count: 9 }
  ],
  ascend6: [
    { name: 'Mora', count: 65000 },
    { name: 'Chunk of Aerosiderite', count: 6 },
    { name: 'Ley Line Sprout', count: 27 },
    { name: 'Slime Concentrate', count: 18 }
  ]
}
```

</details>
<details>
<summary>genshindb.weapons('<b>iron point'</b>)<b>.costs</b></summary>

```js
{
  ascend1: [
    { name: 'Mora', count: 5000 },
    { name: 'Fetters of the Dandelion Gladiator', count: 1 },
    { name: 'Chaos Device', count: 1 },
    { name: 'Divining Scroll', count: 1 }
  ],
  ascend2: [
    { name: 'Mora', count: 5000 },
    { name: 'Chains of the Dandelion Gladiator', count: 1 },
    { name: 'Chaos Device', count: 5 },
    { name: 'Divining Scroll', count: 4 }
  ],
  ascend3: [
    { name: 'Mora', count: 10000 },
    { name: 'Chains of the Dandelion Gladiator', count: 3 },
    { name: 'Chaos Circuit', count: 3 },
    { name: 'Sealed Scroll', count: 3 }
  ],
  ascend4: [
    { name: 'Mora', count: 15000 },
    { name: 'Shackles of the Dandelion Gladiator', count: 1 },
    { name: 'Chaos Circuit', count: 5 },
    { name: 'Sealed Scroll', count: 4 }
  ]
}
```

</details>
<details>
<summary>genshindb.weapons('<b>decarabian', { matchCategories: true }</b>)</summary>

```js
[
  "Apprentice's Notes",   'Aquila Favonia',
  'Cinnabar Spindle',     'Cool Steel',
  'Dull Blade',           'Favonius Codex',
  'Favonius Sword',       'Ferrous Shadow',
  'Magic Guide',          'Mitternachts Waltz',
  'Pocket Grimoire',      'Raven Bow',
  'Royal Grimoire',       'Royal Longsword',
  'Silver Sword',         'Snow-Tombed Starsilver',
  'Song of Broken Pines', 'The Alley Flash',
  'The Bell',             'The Stringless',
  'The Viridescent Hunt'
]
```

</details>
<details>
<summary>genshindb.weapons('<b>slime condensate', { matchCategories: true }</b>)</summary>

```js
[
  'Alley Hunter',
  "Amos' Bow",
  'Favonius Lance',
  'Harbinger of Dawn',
  'Lost Prayer to the Sacred Winds',
  'Luxurious Sea-Lord',
  'Magic Guide',
  'Mappa Mare',
  'Missive Windspear',
  "Old Merc's Pal",
  'Royal Greatsword',
  'Sacrificial Bow',
  "Sharpshooter's Oath",
  'Skyward Blade',
  'Skyward Pride',
  'Snow-Tombed Starsilver',
  'Staff of Homa',
  'The Black Sword',
  'The Flute',
  'Waster Greatsword',
  'White Iron Greatsword'
]
```

</details>
<details>
<summary>genshindb.weapons('<b>dull blade'</b>)<b>.stats(49)</b></summary>

```js
{ level: 49, ascension: 2, attack: 127.972232961788, specialized: 0 }
```

</details>
<details>
<summary>genshindb.weapons('<b>sac sword'</b>)<b>.stats(80, '+')</b></summary>

```js
{
  level: 80,
  ascension: 6,
  attack: 426.5607374033825,
  specialized: 0.5586652674078749
}
```

</details>
<details>
<summary>genshindb.weapons('<b>wolf grave'</b>)<b>.stats(90)</b></summary>

```js
{
  level: 90,
  ascension: 6,
  attack: 608.074622109998,
  specialized: 0.49615199803817234
}
```

</details>

## genshindb.materials(query[, opts])]

<details>
<summary>genshindb.materials('<b>ballad'</b>)</summary>

```js
{
  name: 'Guide to Ballad',
  description: 'Talent Level-Up material.\n' +
    'Poetry is the soul of the land of the wind.\n' +
    'Poetry is the manifestations of the will to encourage. In the dark days, the gales in the streets and alleyways whisper words of fury, like the battle drums, like the low rumbling before the storm.',
  sortorder: 2519,
  rarity: '3',
  category: 'AVATAR_MATERIAL',
  materialtype: 'Character Talent Material',
  dropdomain: 'Domain of Mastery: Realm of Slumber',
  daysofweek: [ 'Wednesday', 'Saturday', 'Sunday' ],
  source: [ 'Crafted' ],
  images: {
    redirect: 'https://genshin-impact.fandom.com/wiki/Special:Redirect/file/Item_Guide_to_Ballad.png',
    fandom: 'https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Item_Guide_to_Ballad.png',
    nameicon: 'UI_ItemIcon_104308'
  },
  url: { fandom: 'https://genshin-impact.fandom.com/wiki/Guide_to_Ballad' },
  version: ''
}
```

</details>
<details>
<summary>genshindb.materials('<b>talent material', { matchCategories: true }</b>)</summary>

```js
[
  'Crown of Insight',
  'Guide to Admonition',
  'Guide to Ballad',
  'Guide to Diligence',
  'Guide to Elegance',
  'Guide to Freedom',
  'Guide to Gold',
  'Guide to Ingenuity',
  'Guide to Light',
  'Guide to Praxis',
  'Guide to Prosperity',
  'Guide to Resistance',
  'Guide to Transience',
  'Philosophies of Admonition',
  'Philosophies of Ballad',
  'Philosophies of Diligence',
  'Philosophies of Elegance',
  'Philosophies of Freedom',
  'Philosophies of Gold',
  'Philosophies of Ingenuity',
  'Philosophies of Light',
  'Philosophies of Praxis',
  'Philosophies of Prosperity',
  'Philosophies of Resistance',
  'Philosophies of Transience',
  'Teachings of Admonition',
  'Teachings of Ballad',
  'Teachings of Diligence',
  'Teachings of Elegance',
  'Teachings of Freedom',
  'Teachings of Gold',
  'Teachings of Ingenuity',
  'Teachings of Light',
  'Teachings of Praxis',
  'Teachings of Prosperity',
  'Teachings of Resistance',
  'Teachings of Transience'
]
```

</details>
<details>
<summary>genshindb.materials('<b>fish', { matchNames: false, matchCategories: true }</b>)</summary>

```js
[
  'Abiding Angelfish',
  'Aizen Medaka',
  'Akai Maou',
  'Betta',
  'Bitter Pufferfish',
  'Brown Shirakodai',
  'Crystalfish',
  'Dawncatcher',
  'Divda Ray',
  'Formalo Ray',
  'Glaze Medaka',
  'Golden Koi',
  'Halcyon Jade Axe Marlin',
  'Lazurite Axe Marlin',
  'Lunged Stickleback',
  'Medaka',
  'Peach of the Deep Waves',
  'Pufferfish',
  'Purple Shirakodai',
  'Raimei Angelfish',
  'Rusty Koi',
  'Sandstorm Angler',
  'Snowstrider',
  'Sunset Cloud Angler',
  'Sweet-Flower Medaka',
  'Tea-Colored Shirakodai',
  'True Fruit Angler',
  'Venomspine Fish'
]
```

</details>
<details>
<summary>genshindb.materials('<b>weapon material', { matchCategories: true, verboseCategories: true }</b>)<b>.filter(ele => ele.rarity === "2").map(ele => ele.name)</b></summary>

```js
[
  "Boreal Wolf's Milk Tooth",
  'Copper Talisman of the Forest Dew',
  'Coral Branch of a Distant Sea',
  'Echo of Scorching Might',
  'Fetters of the Dandelion Gladiator',
  'Grain of Aerosiderite',
  'Luminous Sands from Guyun',
  'Mask of the Wicked Lieutenant',
  'Mist Veiled Lead Elixir',
  "Narukami's Wisdom",
  "Oasis Garden's Reminiscence",
  "Tile of Decarabian's Tower"
]
```

</details>
<details>
<summary>genshindb.materials('<b>dvalin sigh'</b>)</summary>

```js
{
  name: "Dvalin's Sigh",
  description: 'A bit of power taken from the whirlwinds evoked by the Dragon of the East.\n' +
    'Beautiful and transparent, both trade winds and tornadoes will work in his name. The winds move as his companion, his voice, and his freedom.\n' +
    'His enemies are the thousands who stand against the wind.',
  sortorder: 2435,
  rarity: '5',
  category: 'AVATAR_MATERIAL',
  materialtype: 'Character Level-Up Material',
  source: [ 'Lv. 70+ Stormterror Challenge Reward' ],
  images: {
    redirect: "https://genshin-impact.fandom.com/wiki/Special:Redirect/file/Item_Dvalin's_Sigh.png",
    fandom: 'https://static.wikia.nocookie.net/gensin-impact/images/0/07/Item_Dvalin%27s_Sigh.png',
    nameicon: 'UI_ItemIcon_113005'
  },
  url: { fandom: "https://genshin-impact.fandom.com/wiki/Dvalin's_Sigh" },
  version: ''
}
```

</details>
<details>
<summary>genshindb.materials('<b>iron'</b>)</summary>

```js
{
  name: 'Iron Chunk',
  description: 'This iron chunk can be turned into a multitude of handy items in the hands of a skilled craftsman.',
  sortorder: 2168,
  category: 'EXCHANGE',
  materialtype: 'Forging Ore',
  source: [ 'Found in the wild' ],
  images: {
    redirect: 'https://genshin-impact.fandom.com/wiki/Special:Redirect/file/Item_Iron_Chunk.png',
    fandom: 'https://static.wikia.nocookie.net/gensin-impact/images/f/f0/Item_Iron_Chunk.png',
    nameicon: 'UI_ItemIcon_101001'
  },
  url: { fandom: 'https://genshin-impact.fandom.com/wiki/Iron_Chunk' },
  version: ''
}
```

</details>
<details>
<summary>genshindb.materials('<b>monday', { matchCategories: true }</b>)</summary>

```js
[
  'Copper Talisman of the Forest Dew',
  'Coral Branch of a Distant Sea',
  "Debris of Decarabian's City",
  'Divine Body from Guyun',
  "Fragment of Decarabian's Epic",
  'Golden Branch of a Distant Sea',
  'Golden Talisman of the Forest Dew',
  'Guide to Admonition',
  'Guide to Freedom',
  'Guide to Prosperity',
  'Guide to Transience',
  'Iron Talisman of the Forest Dew',
  'Jade Branch of a Distant Sea',
  'Jeweled Branch of a Distant Sea',
  'Luminous Sands from Guyun',
  'Lustrous Stone from Guyun',
  'Philosophies of Admonition',
  'Philosophies of Freedom',
  'Philosophies of Prosperity',
  'Philosophies of Transience',
  'Relic from Guyun',
  "Scattered Piece of Decarabian's Dream",
  'Silver Talisman of the Forest Dew',
  'Teachings of Admonition',
  'Teachings of Freedom',
  'Teachings of Prosperity',
  'Teachings of Transience',
  "Tile of Decarabian's Tower"
]
```

</details>
<details>
<summary>genshindb.materials('<b>ingredient', { matchCategories: true }</b>)</summary>

```js
[
  'Ajilenakh Nut',   'Almond',       'Bacon',
  'Bamboo Shoot',    'Berry',        'Bird Egg',
  'Butter',          'Cabbage',      'Carrot',
  'Cheese',          'Chilled Meat', 'Coffee Beans',
  'Crab',            'Crab Roe',     'Cream',
  'Dried Fish',      'Eel Meat',     'Fish',
  'Flour',           'Fowl',         'Glabrous Beans',
  'Ham',             'Harra Fruit',  'Jam',
  'Lavender Melon',  'Lotus Head',   'Matsutake',
  'Milk',            'Mint',         'Mushroom',
  'Mysterious Meat', 'Onion',        'Pepper',
  'Pinecone',        'Potato',       'Radish',
  'Raw Meat',        'Rice',         'Salt',
  'Sausage',         'Seagrass',     'Shrimp Meat',
  'Silver Lotus',    'Smoked Fish',  'Smoked Fowl',
  'Snapdragon',      'Spice',        'Sugar',
  'Sumeru Rose',     'Sweet Flower', 'Tofu',
  'Tomato',          'Wheat',        'Zaytun Peach'
]
```

</details>
<details>
<summary>genshindb.materials('<b>liyue', { matchCategories: true }</b>)</summary>

```js
[
  'Cor Lapis',
  'Glaze Lily',
  'Jueyun Chili',
  'Noctilucous Jade',
  'Qingxin',
  'Silk Flower',
  'Starconch',
  'Violetgrass'
]
```

</details>

## genshindb.artifacts(query[, opts])]

<details>
<summary>genshindb.artifacts('<b>flame'</b>)</summary>

```js
{
  name: 'Pale Flame',
  rarity: [ '4', '5' ],
  '2pc': 'Physical DMG is increased by 25%.',
  '4pc': 'When an Elemental Skill hits an opponent, ATK is increased by 9% for 7s. This effect stacks up to 2 times and can be triggered once every 0.3s. Once 2 stacks are reached, the 2-set effect is increased by 100%.',
  flower: {
    name: 'Stainless Bloom',
    relictype: 'Flower of Life',
    description: 'A hard, blue artificial flower. Its petals shall never wither, nor shall its colors fade.',
    story: '"You astound me. You have but a human body, and yet you carry such a power within you."\n' +
      '"You claim that you have no tears left to cry, no blood left to shed, but surely this is because you have filled yourself with fire..."\n' +
      '"Though your body has long been covered in scars, fierce flames are all that now may flow, like molten iron, from your eyes and your wounds."\n' +
      '"But we appear to have gotten off-topic. I followed the trail of smoke and tracked you down because I wish to strike a deal with you..."\n' +
      '"Let the flames that now devour you be extinguished by the grace of Her Majesty. What say you?"\n' +
      '\n' +
      'The first Fatuus gave power to a young woman in whom the flame of life had all but died,\n' +
      'And in her wild imagination, she saw the line that lay between the corrupt past and a stainless future...\n' +
      '\n' +
      '"I understand. Then, let glacial ice take the place of my erased past and extinguish these undying flames."\n' +
      '"Let the darkness of corruption, the pain of the world, and the humans, beasts, and the sin they carry all be purified by silent ice."\n' +
      '\n' +
      'But despite this, a pure white flame continued to burn within her heart...\n' +
      '\n' +
      '"We share the same goal, you, your Tsaritsa, and I."\n' +
      '"Cleanse the sources of distortion in this world: short-sighted, ignorant gods and the darkness and corruption of the Abyss."\n' +
      '"Good. I will do whatever it takes to become an effective instrument in the advancement of our common cause."\n' +
      '"For even if I dress in pure white from head to toe, the ashes of the dead that have long left their stain on every inch of my being can never be cleansed."'
  },
  plume: {
    name: "Wise Doctor's Pinion",
    relictype: 'Plume of Death',
    description: 'An ominous pinion with edges of unsurpassed keenness. Perhaps it represents an unnaturally uninhibited nature.',
    story: '"A human is nothing more than a machine of a certain level of complexity."\n' +
      'Thus declared the youth from his lectern in the seedbed of wisdom.\n' +
      'If one were to disassemble a part of this machine and make enhancements to it,\n' +
      'Its performance could be greatly amplified.\n' +
      'With or without a Vision, and irrespective of their physique or combat skills,\n' +
      '"Enhanced humans" would surely display strength far beyond the average.\n' +
      '\n' +
      'Despite the risk of being denounced as a heretic and permanently cast from the circle of the wise,\n' +
      'The youth candidly jotted down these thoughts in the margins of his research notes:\n' +
      'I. As anticipated, no research breakthroughs are possible, given the working style of the Akademiya.\n' +
      'II. Nevertheless, being expelled would be a loss. One needs an environment conducive to research.\n' +
      '\n' +
      'Following a trail of rumors of heresy, the first of the Fatui tracked him down...\n' +
      '\n' +
      '"Merely an enhanced human? If your great nation can furnish me with sufficient resources and ample time, I could even manufacture that which you would call a god. What say you?"\n' +
      'In the desert that shone bright like liquid gold, he inquired of the Snezhnayan diplomat:\n' +
      '"Will you treat me like the Akademiya did? Will you call me a monster, a madman?"\n' +
      '"Or will you treat me as my hometown did, and chase me away with pitchforks and clubs...?"\n' +
      '\n' +
      'However...\n' +
      '"Good. Then, we are now in partnership."\n' +
      '"As for the matter of your title — what do you say to this..."\n' +
      'Taken completely by surprise by the sheer irony of the title he was given, the young man burst into hysterical laughter.'
  },
  sands: {
    name: 'Moment of Cessation',
    relictype: 'Sands of Eon',
    description: 'A pocket watch with a cover that cannot be opened. Yet it ticks and tocks away, following the inexorable flow of time.',
    story: "Money is the lifeblood of the world, and the pathways along which it flows are the world's arteries.\n" +
      'Then, the center of the world is a heart made of gold.\n' +
      '\n' +
      'He was not one of the favored, and could only pursue worldly power.\n' +
      'But though money ought to mean nothing to the gods,\n' +
      'They held it firmly within their grasp nonetheless, along with the countless other forms of power that they wielded.\n' +
      '\n' +
      'Perhaps he lusted for money because he had once been destitute,\n' +
      'Or perhaps the fact that the gods had never looked upon him with favor ignited a burning desire for resistance inside him...\n' +
      '\n' +
      '"The people of the land from which these coins hail revere contracts above all else."\n' +
      '"In the name of money, I shall respect the contract between us..."\n' +
      '"We shall, by whatever means necessary, become the heart that pumps money around the world."\n' +
      '"And, when the moment comes, that heart shall cease beating by our will alone."'
  },
  goblet: {
    name: 'Surpassing Cup',
    relictype: 'Goblet of Eonothem',
    description: 'An intricately-made cup. Its appearance betrays nothing of its age to an observer.',
    story: 'He was born with a face fairer than any other,\n' +
      'Destined to a long life and a hollow will.\n' +
      '\n' +
      'He was a transcendent being, divinely created, but he was cast aside like worthless dross.\n' +
      'Yet, due to an error that cannot be known, he roused himself from slumber,\n' +
      'And began to wander the mortal realm.\n' +
      '\n' +
      'Before the Fatui found him, he had drifted for countless years\n' +
      'And in that time, this is what his experience had taught him:\n' +
      '\n' +
      `"I am a 'human' who surpasses all others."\n` +
      `"Even the gods daren't meddle in my fate."\n` +
      '"Neither mortal nor god, nor fate itself, is qualified to be my judge."\n' +
      '"I am free to choose how I wish to spend the remainder of my days."\n' +
      '\n' +
      '"Since these mask-wearing people are so fun to be around..."\n' +
      `"I think I'll become one of them."`
  },
  circlet: {
    name: 'Mocking Mask',
    relictype: 'Circlet of Logos',
    description: "A mask that covers the face, hiding one's expression from others.",
    story: "Since the stain of my compatriots' blood cannot be cleansed, I shall become The Jester, who laughs in the face of fate.\n" +
      'Since my level of learning could not compare with the sages, I failed to earn the favor of the previous ruler.\n' +
      'So too did I fail to stop them from tearing away the veil of sin, ushering in a tide of divine wrath, destruction, and foolishness...\n' +
      'Then I shall become instead a fool, a Fatuus, and devote myself to Her Majesty, who understands my pain...\n' +
      '\n' +
      'My name is Pierro, The Jester. Please listen to the words I have to say:\n' +
      '\n' +
      'Proud Fatui comrades, I know your hearts harbor both the fires of rage and the cold of eternal winter.\n' +
      'Each one of us has borne witness to the absurd callousness of the foundational principles of this world.\n' +
      'So, let us don our masks in mockery of the world as we go forth and rewrite the rules of destiny.'
  },
  images: {
    flower: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15018_4.png',
    plume: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15018_2.png',
    sands: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15018_5.png',
    goblet: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15018_1.png',
    circlet: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15018_3.png',
    nameflower: 'UI_RelicIcon_15018_4',
    nameplume: 'UI_RelicIcon_15018_2',
    namesands: 'UI_RelicIcon_15018_5',
    namegoblet: 'UI_RelicIcon_15018_1',
    namecirclet: 'UI_RelicIcon_15018_3'
  },
  url: { fandom: 'https://genshin-impact.fandom.com/wiki/Pale_Flame' },
  version: '1.5'
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
  'Deepwood Memories',
  'Desert Pavilion Chronicle',
  'Echoes of an Offering',
  'Emblem of Severed Fate',
  'Flower of Paradise Lost',
  'Gilded Dreams',
  "Gladiator's Finale",
  'Heart of Depth',
  'Husk of Opulent Dreams',
  'Lavawalker',
  'Maiden Beloved',
  'Noblesse Oblige',
  "Nymph's Dream",
  'Ocean-Hued Clam',
  'Pale Flame',
  'Retracing Bolide',
  "Shimenawa's Reminiscence",
  'Tenacity of the Millelith',
  'Thundering Fury',
  'Thundersoother',
  'Vermillion Hereafter',
  'Viridescent Venerer',
  "Vourukasha's Glow",
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

## genshindb.foods(query[, opts])]

<details>
<summary>genshindb.foods('<b>temptation'</b>)</summary>

```js
{
  name: "Adeptus' Temptation",
  rarity: '5',
  foodtype: 'NORMAL',
  foodfilter: 'ATK-Boosting Dish',
  foodcategory: 'Atk_Add',
  effect: "Increases all party members' ATK by 260–372 and CRIT Rate by 8–12% for 300s.\n" +
    'In Co-Op Mode, this effect only applies to your own character(s).',
  description: 'A complex, famous type of Liyue cuisine, in which specially selected ingredients are submerged and slowly boiled in soup stock. The recipe scribbled from memory alone was enough to urge the adepti to once again return to the world of men.',
  suspicious: {
    effect: "Increases all party members' ATK by 260 and CRIT Rate by 8% for 300s. In Co-Op Mode, this effect only applies to your own character(s).",
    description: "A complex, famous type of Liyue cuisine. Without having mastered the art of simmering, the resulting stew-like dish has a salty, fishy taste. But, just considering the costly ingredients will be enough to keep you going until the pot's empty."
  },
  normal: {
    effect: "Increases all party members' ATK by 316 and CRIT Rate by 10% for 300s. In Co-Op Mode, this effect only applies to your own character(s).",
    description: 'A complex, famous type of Liyue cuisine, in which specially selected ingredients are submerged and slowly boiled in soup stock. The recipe scribbled from memory alone was enough to urge the adepti to once again return to the world of men.'
  },
  delicious: {
    effect: "Increases all party members' ATK by 372 and CRIT Rate by 12% for 300s. In Co-Op Mode, this effect only applies to your own character(s).",
    description: "A complex, famous type of Liyue cuisine. This dish is a rare and exquisite mix of both land and sea, combining countless delicious delicacies in one flavor-filled pot. Each mouthful is a moment to remember — it's even irresistible enough to entice the adepti down from their celestial abode."
  },
  ingredients: [
    { name: 'Ham', count: 4 },
    { name: 'Crab', count: 3 },
    { name: 'Shrimp Meat', count: 3 },
    { name: 'Matsutake', count: 3 }
  ],
  images: { nameicon: 'UI_ItemIcon_108123' },
  url: {
    fandom: "https://genshin-impact.fandom.com/wiki/Adeptus'_Temptation"
  },
  version: '1.0'
}
```

</details>
<details>
<summary>genshindb.foods('<b>4', { matchCategories: true }</b>)</summary>

```js
[
  'Biryani',
  'Bountiful Year',
  'Butter Crab',
  'Chicken Tofu Pudding',
  'Chili-Mince Cornbread Buns',
  'Golden Crab',
  'Golden Fried Chicken',
  'Jade Parcels',
  "Meat Lovers' Mushroom Pizza",
  'Moon Pie',
  'Sashimi Platter',
  'Stormcrest Pie',
  'Super Magnificent Pizza',
  'Tandoori Roast Chicken',
  'Tianshu Meat'
]
```

</details>
<details>
<summary>genshindb.foods('<b>def', { matchCategories: true }</b>)</summary>

```js
[
  'A Prize Catch',
  'Biryani',
  'Butter Crab',
  'Calla Lily Seafood Soup',
  'Candied Ajilenakh Nut',
  'Chili-Mince Cornbread Buns',
  'Dew-Dipped Shrimp',
  "Fisherman's Toast",
  'Fish-Flavored Toast',
  "Forest Watcher's Choice",
  'Fruits of the Festival',
  'Gilded Tajine',
  'Golden Crab',
  'Goldflame Tajine',
  'Halvamazd',
  'Heat-Quelling Soup',
  'Jade Fruit Soup',
  'Jewelry Soup',
  'Lotus Flower Crisp',
  'Minty Fruit Tea',
  'Moon Pie',
  'Mushroom Hodgepodge',
  'Quiet Elegance',
  'Rice Cake Soup',
  'Sakura Shrimp Crackers',
  'Sakura Tempura',
  'Shimi Chazuke',
  'Stir-Fried Shrimp',
  'Stormcrest Pie',
  'Sunshine Sprat',
  'Triple-Layered Consommé',
  'Unagi Chazuke',
  'Wakatakeni',
  'Woodland Dream'
]
```

</details>
<details>
<summary>genshindb.foods('<b>cabbage', { matchCategories: true }</b>)</summary>

```js
[
  'Chili-Mince Cornbread Buns',
  'Crab, Ham & Veggie Bake',
  'Der Weisheit Letzter Schluss (Life)',
  'Golden Chicken Burger',
  'Invigorating Pizza',
  'Jade Parcels',
  'Katsu Sandwich',
  'Mixed Yakisoba',
  'Mushroom Pizza',
  'Northern Smoked Chicken',
  'Nutritious Meal (V.593)',
  'Qingce Household Dish',
  'Qingce Stir Fry',
  'Satisfying Salad',
  'The Only Truth',
  'Way of the Strong'
]
```

</details>
<details>
<summary>genshindb.foods('<b>diluc', { matchAliases: true }</b>)</summary>

```js
{
  name: '"Once Upon a Time in Mondstadt"',
  rarity: '3',
  foodtype: 'SPECIALTY',
  foodfilter: 'ATK-Boosting Dish',
  foodcategory: 'Atk_CritRate',
  effect: "Increases all party members' CRIT Rate by 20% and CRIT DMG by 20% for 300s. In Co-Op Mode, this effect only applies to your own character(s)",
  description: "Diluc's specialty. Feast your eyes and then your stomach upon this delicacy as the soft ribs melt in your mouth. Who knew Diluc was able to cook this well?",
  basedish: `"Pile 'Em Up"`,
  character: 'Diluc',
  ingredients: [
    { name: 'Raw Meat', count: 3 },
    { name: 'Potato', count: 3 },
    { name: 'Small Lamp Grass', count: 1 },
    { name: 'Cheese', count: 1 }
  ],
  images: { nameicon: 'UI_ItemIcon_108058' },
  url: {
    fandom: 'https://genshin-impact.fandom.com/wiki/"Once_Upon_a_Time_in_Mondstadt"'
  },
  version: '1.0'
}
```

</details>

## genshindb.domains(query[, opts])]

<details>
<summary>genshindb.domains('<b>flame'</b>)</summary>

```js
{
  name: 'Domain of Mastery: Altar of Flames I',
  region: 'Liyue',
  domainentrance: 'Taishan Mansion',
  domaintype: 'Talent Level-Up Material',
  description: 'A massive amount of Pyro energy is coursing through this scorching ancient sacrificial altar.\n' +
    'You will get scorched by merely being here.\n' +
    'You shall earn Talent level-up materials, if — and only if — you can pass the trial.',
  recommendedlevel: 38,
  recommendedelements: [ 'Hydro', 'Cryo', 'Electro' ],
  daysofweek: [ 'Monday', 'Thursday', 'Sunday' ],
  unlockrank: 1,
  rewardpreview: [
    { name: 'Adventure EXP', count: 100 },
    { name: 'Mora', count: 1575 },
    { name: 'Companionship EXP', count: 15 },
    { name: 'Teachings of Prosperity' }
  ],
  disorder: [
    'Your character will be periodically inflicted with Smoldering Flames, causing you to take Pyro DMG until the inflicted Pyro element is removed.'
  ],
  monsterlist: [ 'Pyro Slime', 'Large Pyro Slime', 'Pyro Abyss Mage' ],
  images: { namepic: 'UI_DungeonPic_Fire' },
  version: ''
}
```

</details>
<details>
<summary>genshindb.domains('<b>cecilia garden', { matchCategories: true }</b>)</summary>

```js
[
  'Domain of Forgery: City of Reflections I',
  'Domain of Forgery: City of Reflections II',
  'Domain of Forgery: City of Reflections III',
  'Domain of Forgery: City of Reflections IV',
  'Domain of Forgery: Ruins of Thirsting Capital I',
  'Domain of Forgery: Ruins of Thirsting Capital II',
  'Domain of Forgery: Ruins of Thirsting Capital III',
  'Domain of Forgery: Ruins of Thirsting Capital IV',
  'Domain of Forgery: Submerged Valley I',
  'Domain of Forgery: Submerged Valley II',
  'Domain of Forgery: Submerged Valley III',
  'Domain of Forgery: Submerged Valley IV'
]
```

</details>
<details>
<summary>genshindb.domains('<b>inazuma', { matchCategories: true }</b>)</summary>

```js
[
  'Domain of Blessing: Autumn Hunt I',
  'Domain of Blessing: Autumn Hunt II',
  'Domain of Blessing: Autumn Hunt III',
  'Domain of Blessing: Autumn Hunt IV',
  'Domain of Blessing: Necropolis I',
  'Domain of Blessing: Necropolis II',
  'Domain of Blessing: Necropolis III',
  'Domain of Blessing: Necropolis IV',
  'Domain of Forgery: Altar of Sands I',
  'Domain of Forgery: Altar of Sands II',
  'Domain of Forgery: Altar of Sands III',
  'Domain of Forgery: Altar of Sands IV',
  'Domain of Forgery: Sand Burial I',
  'Domain of Forgery: Sand Burial II',
  'Domain of Forgery: Sand Burial III',
  'Domain of Forgery: Sand Burial IV',
  'Domain of Forgery: Sunken Sands I',
  'Domain of Forgery: Sunken Sands II',
  'Domain of Forgery: Sunken Sands III',
  'Domain of Forgery: Sunken Sands IV',
  'Domain of Mastery: Reign of Violet I',
  'Domain of Mastery: Reign of Violet II',
  'Domain of Mastery: Reign of Violet III',
  'Domain of Mastery: Reign of Violet IV',
  'Domain of Mastery: Thundering Valley I',
  'Domain of Mastery: Thundering Valley II',
  'Domain of Mastery: Thundering Valley III',
  'Domain of Mastery: Thundering Valley IV',
  'Domain of Mastery: Vine-Infested Ruins I',
  'Domain of Mastery: Vine-Infested Ruins II',
  'Domain of Mastery: Vine-Infested Ruins III',
  'Domain of Mastery: Vine-Infested Ruins IV'
]
```

</details>
<details>
<summary>genshindb.domains('<b>anemo', { matchCategories: true }</b>)</summary>

```js
[
  'Domain of Blessing: Desert Citadel I',
  'Domain of Blessing: Desert Citadel II',
  'Domain of Blessing: Desert Citadel III',
  'Domain of Blessing: Desert Citadel IV',
  'Domain of Blessing: Elegiac Rime I',
  'Domain of Blessing: Elegiac Rime II',
  'Domain of Blessing: Elegiac Rime III',
  'Domain of Blessing: Elegiac Rime IV',
  'Domain of Blessing: Machine Nest I',
  'Domain of Blessing: Machine Nest II',
  'Domain of Blessing: Machine Nest III',
  'Domain of Blessing: Machine Nest IV'
]
```

</details>
<details>
<summary>genshindb.domains('<b>artifact', { matchCategories: true }</b>)</summary>

```js
[
  'Domain of Blessing: Autumn Hunt I',
  'Domain of Blessing: Autumn Hunt II',
  'Domain of Blessing: Autumn Hunt III',
  'Domain of Blessing: Autumn Hunt IV',
  'Domain of Blessing: Dance of Steel I',
  'Domain of Blessing: Dance of Steel II',
  'Domain of Blessing: Dance of Steel III',
  'Domain of Blessing: Dance of Steel IV',
  'Domain of Blessing: Dance of Steel V',
  'Domain of Blessing: Desert Citadel I',
  'Domain of Blessing: Desert Citadel II',
  'Domain of Blessing: Desert Citadel III',
  'Domain of Blessing: Desert Citadel IV',
  'Domain of Blessing: Elegiac Rime I',
  'Domain of Blessing: Elegiac Rime II',
  'Domain of Blessing: Elegiac Rime III',
  'Domain of Blessing: Elegiac Rime IV',
  'Domain of Blessing: Fires of Purification I',
  'Domain of Blessing: Fires of Purification II',
  'Domain of Blessing: Fires of Purification III',
  'Domain of Blessing: Fires of Purification IV',
  'Domain of Blessing: Fires of Purification V',
  'Domain of Blessing: Fires of Purification VI',
  'Domain of Blessing: Forsaken Rampart I',
  'Domain of Blessing: Forsaken Rampart II',
  'Domain of Blessing: Forsaken Rampart III',
  'Domain of Blessing: Forsaken Rampart IV',
  'Domain of Blessing: Frost I',
  'Domain of Blessing: Frost II',
  'Domain of Blessing: Frost III',
  'Domain of Blessing: Frost IV',
  'Domain of Blessing: Machine Nest I',
  'Domain of Blessing: Machine Nest II',
  'Domain of Blessing: Machine Nest III',
  'Domain of Blessing: Machine Nest IV',
  'Domain of Blessing: Necropolis I',
  'Domain of Blessing: Necropolis II',
  'Domain of Blessing: Necropolis III',
  'Domain of Blessing: Necropolis IV',
  'Domain of Blessing: Seven Senses I',
  'Domain of Blessing: Seven Senses II',
  'Domain of Blessing: Seven Senses III',
  'Domain of Blessing: Seven Senses IV',
  'Domain of Blessing: Spring I',
  'Domain of Blessing: Spring II',
  'Domain of Blessing: Spring III',
  'Domain of Blessing: Spring IV',
  'Domain of Blessing: Spring V',
  'Domain of Blessing: Spring VI',
  'Domain of Blessing: Stone Chamber I',
  'Domain of Blessing: Stone Chamber II',
  'Domain of Blessing: Stone Chamber III',
  'Domain of Blessing: Unyielding I',
  'Domain of Blessing: Unyielding II',
  'Domain of Blessing: Unyielding III',
  'Domain of Blessing: Unyielding IV'
]
```

</details>
<details>
<summary>genshindb.domains('<b>wednesday', { matchCategories: true }</b>)</summary>

```js
[
  'Domain of Forgery: Leading Karma I',
  'Domain of Forgery: Leading Karma II',
  'Domain of Forgery: Leading Karma III',
  'Domain of Forgery: Leading Karma IV',
  'Domain of Forgery: Ruins of Thirsting Capital I',
  'Domain of Forgery: Ruins of Thirsting Capital II',
  'Domain of Forgery: Ruins of Thirsting Capital III',
  'Domain of Forgery: Ruins of Thirsting Capital IV',
  'Domain of Forgery: Sand Burial I',
  'Domain of Forgery: Sand Burial II',
  'Domain of Forgery: Sand Burial III',
  'Domain of Forgery: Sand Burial IV',
  'Domain of Forgery: Trial Grounds of Thunder I',
  'Domain of Forgery: Trial Grounds of Thunder II',
  'Domain of Forgery: Trial Grounds of Thunder III',
  'Domain of Forgery: Trial Grounds of Thunder IV',
  'Domain of Mastery: Basket of Discipline I',
  'Domain of Mastery: Basket of Discipline II',
  'Domain of Mastery: Basket of Discipline III',
  'Domain of Mastery: Basket of Discipline IV',
  'Domain of Mastery: Circle of Embers I',
  'Domain of Mastery: Circle of Embers II',
  'Domain of Mastery: Circle of Embers III',
  'Domain of Mastery: Circle of Embers IV',
  'Domain of Mastery: Realm of Slumber I',
  'Domain of Mastery: Realm of Slumber II',
  'Domain of Mastery: Realm of Slumber III',
  'Domain of Mastery: Realm of Slumber IV',
  'Domain of Mastery: Vine-Infested Ruins I',
  'Domain of Mastery: Vine-Infested Ruins II',
  'Domain of Mastery: Vine-Infested Ruins III',
  'Domain of Mastery: Vine-Infested Ruins IV'
]
```

</details>
<details>
<summary>genshindb.domains('<b>fatui pyro agent', { matchCategories: true }</b>)</summary>

```js
[
  'Domain of Blessing: Dance of Steel II',
  'Domain of Blessing: Dance of Steel III',
  'Domain of Blessing: Dance of Steel IV',
  'Domain of Blessing: Dance of Steel V',
  'Domain of Mastery: Altar of Flames IV',
  'Domain of Mastery: Circle of Embers IV',
  'Domain of Mastery: Heart of the Flames IV'
]
```

</details>

## genshindb.enemies(query[, opts])]

<details>
<summary>genshindb.enemies('<b>large electro slime'</b>)</summary>

```js
{
  name: 'Large Electro Slime',
  specialname: 'Rolling Elemental',
  enemytype: 'COMMON',
  category: 'Elemental Lifeforms',
  description: 'A monster created by the coalescing of Electro dispersed throughout nature.\n' +
    'Due to the abundant Electro within its form, it will deliver an electric shock to its surroundings from time to time. At present, some have attempted to harness this energy to aid in production activities. Perhaps some new science will be born from this...?',
  investigation: {
    name: 'Slime',
    category: 'Easy',
    description: "A pudgy elemental life form.\\nIt's said that desserts made from slimes of different elements will have incredibly distinctive flavors."
  },
  rewardpreview: [
    { name: 'Mora' },
    { name: 'Slime Condensate', count: 0.6723 },
    { name: 'Slime Secretions', count: 0.1792 },
    { name: 'Slime Concentrate', count: 0.0448 }
  ],
  images: { nameicon: 'UI_MonsterIcon_Slime_Electric_03' },
  stats: [Function (anonymous)],
  version: ''
}
```

</details>
<details>
<summary>genshindb.enemies('<b>boss', { matchCategories: true }</b>)</summary>

```js
[
  'Aeonblight Drake',
  'Algorithm of Semi-Intransient Matrix of Overseer Network',
  'Anemo Hypostasis',
  'Azhdaha',
  'Bolteater Bathysmal Vishap',
  'Childe',
  'Cryo Hypostasis',
  'Cryo Regisvine',
  'Dendro Hypostasis',
  'Electro Hypostasis',
  'Electro Regisvine',
  'Geo Hypostasis',
  'Golden Wolflord',
  "Guardian of Apep's Oasis",
  'Hydro Hypostasis',
  'Iniquitous Baptist',
  'Jadeplume Terrorshroom',
  'La Signora',
  'Lupus Boreas, Dominator of Wolves',
  'Magatsu Mitake Narukami no Mikoto',
  'Maguu Kenki',
  'Oceanid',
  'Perpetual Mechanical Array',
  'Primo Geovishap',
  'Pyro Hypostasis',
  'Pyro Regisvine',
  'Rimebiter Bathysmal Vishap',
  'Ruin Serpent',
  'Setekh Wenut',
  'Shouki no Kami, the Prodigal',
  'Stormterror',
  'Thunder Manifestation'
]
```

</details>

## genshindb.outfits(query[, opts])]

<details>
<summary>genshindb.outfits('<b>outrider'</b>)</summary>

```js
{
  name: '100% Outrider',
  description: "Amber's outfit. This is a more formal — but no less cool — version of the Outrider's uniform!",
  isdefault: false,
  character: 'Amber',
  source: [],
  images: {
    namecard: 'UI_AvatarIcon_AmborCostumeWic_Card',
    nameicon: 'UI_AvatarIcon_AmborCostumeWic',
    namesplash: 'UI_Costume_AmborCostumeWic',
    namesideicon: 'UI_AvatarIcon_Side_AmborCostumeWic'
  },
  url: { modelviewer: '' },
  version: '2.5'
}
```

</details>
<details>
<summary>genshindb.outfits('<b>jean', { matchCategories: true }</b>)</summary>

```js
[ 'Favonian Devotion', "Gunnhildr's Legacy", 'Sea Breeze Dandelion' ]
```

</details>

## genshindb.windgliders(query[, opts])]

<details>
<summary>genshindb.windgliders('<b>storm'</b>)</summary>

```js
{
  name: 'Wings of the Stormstrider',
  description: "A stylized wind glider gifted to you as a mark of Inazuma's acknowledgment and recognition.",
  rarity: '4',
  story: `"'Tengu' — well, apart from the Yougou Tengu, who have a long lineage indeed, this also refers to those who are agile and whose movements are hard to fathom. You see, the tengu have wings, right?"\n` +
    'You have a hard time believing those words at first.\n' +
    '\n' +
    `"The 'tengu' are first and foremost ones who have received great divine endowment to fly freely in the skies. You have ridden the wind and clouds over ridges and rooftops throughout Inazuma, and it would be too humble a comparison to name you equal to a crow or a falcon."\n` +
    `"There were once people who praised and imitated the tengu, calling themselves the 'Tengu-kin.' They sat high on top of the Tenshukaku roof, on top of great trees, and on top of the sacred torii gates, making raucous fun of the crowd and bureaucrats below. They even caused a great commotion by tossing books into the Tenshukaku, completely ignoring the authority of the shrine and Shogunate."\n` +
    '"What a carefree bunch. Later, these people were grabbed by the real tengu and were taught a good lesson."\n' +
    `"Ah, naturally, you need not worry about such legends, because you're a law-abiding citizen who abides by our public morals and customs, right?"\n` +
    'You elect not to comment on your own habit of casting a shadow over the houses of Inazuma with your wind glider, or your climbing of many a high stone wall.\n' +
    '\n' +
    `"Also, the title of 'tengu' can be used to describe unrivaled swordsmen. Other than the major schools that can trace their lineage directly from Narukami, flashes in the pan such as the Mistsplitter and the Meikyou Shisui Art, and schools that have lasted till the present like the Iwakura Art also exist. The Iwakura secret blade technique, one they did not teach to ordinary pupils, is the Tengu Sweeper. They say that this blade traces a strange arc, and can triumph even over the highly-skilled Yougou Tengu. I believe that your own abilities require little additional praise in that regard."\n` +
    `"Lastly, 'tengu' often have mastery in the manipulation of Anemo and Electro. Legend has it that there is a relic passed down between the Yougou Tengu from generation to generation — the 'Galestorm Fan.' It is said that its front side can call forth Anemo, and the reverse side can summon Electro. And since you can use both Anemo and Electro, you definitely count as a tengu! By the way, the fan is just a trick. Normally, to keep themselves from being found out, a tengu that can summon Anemo usually pairs up with another that can wield Electro when they go out."\n` +
    'Sara, who is standing off to the side, looks even more awkward than you at this exchange.\n' +
    '\n' +
    '"For your contributions to Inazuma, the Grand Shrine would now like to award you with this wind glider."\n' +
    "So that's where tengu wings originated from, huh?\n" +
    'Noticing your doubtful gaze, Sara immediately responds:\n' +
    '"Of course not!"',
  sortorder: 140008,
  source: [ 'Reward for reaching a certain Reputation Level in Inazuma' ],
  images: {
    nameicon: 'UI_FlycloakIcon_Thunderclap',
    namegacha: 'UI_Gacha_FlycloakIcon_Thunderclap'
  },
  version: '2.0'
}
```

</details>

## genshindb.animals(query[, opts])]

<details>
<summary>genshindb.animals('<b>shiba'</b>)</summary>

```js
{
  name: 'Shiba',
  description: "Humanity's best friend!\n" +
    'Legend has it that the Inazuma Shogun once greatly adored this canine breed, and they spread across the once-booming trade routes to become one of the most well-loved pets in the seven nations. Gentle, loyal, and intelligent, they are especially good at guard duty and being companions. Some say that there are still mysterious ninjas in Inazuma who train these dogs to become "ninja dogs."',
  category: 'Beasts',
  counttype: 'NONE',
  sortorder: 11014,
  images: { nameicon: 'UI_AnimalIcon_DogPrick_02' },
  version: '1.0'
}
```

</details>
<details>
<summary>genshindb.animals('<b>birds', { matchCategories: true }</b>)</summary>

```js
[
  'Azure Crane',        'Black King Pigeon',
  'Brightcrown Pigeon', 'Brownwing Falcon',
  'Crimson Finch',      'Crimsonflank Pigeon',
  'Crow',               'Dusk Bird',
  'Emerald Duck',       'Emerald Finch',
  'Golden Finch',       'Graywing Pigeon',
  'Lapis Glede',        'Red Vulture',
  'Sacred Ibis',        'Scarletbeak Duck',
  'Silkwhite Falcon',   'Snow Finch',
  'Umbertail Falcon',   'Violet Ibis',
  'White Pigeon'
]
```

</details>
<details>
<summary>genshindb.animals('<b>true', { matchNames: false, matchCategories: true }</b>)</summary>

```js
[
  'Adorned Unagi',      'Anemo Crystalfly',    'Black King Pigeon',
  'Blue Frog',          'Blue Horned Lizard',  'Bluethunder Weasel',
  'Boot Weasel',        'Brightcrown Pigeon',  'Coral Butterfly',
  'Crimson Finch',      'Crimsonflank Pigeon', 'Crimson Fox',
  'Crow',               'Cryo Crystalfly',     'Deep Sea Unagi',
  'Dendro Crystalfly',  'Desert Fox',          'Dusk Bird',
  'Electro Crystalfly', 'Emerald Finch',       'Forest Tree Frog',
  'Frog',               'General Crab',        'Geo Crystalfly',
  'Golden Crab',        'Golden Finch',        'Golden Loach',
  'Gray Snow Cat',      'Graywing Pigeon',     'Green Horned Lizard',
  'Kitsune',            'Lucklight Fly',       'Marrow Lizard',
  'Masked Weasel',      'Mud Frog',            'Ocean Crab',
  'Pale Red Crab',      'Quicksand Eel',       'Red-Finned Unagi',
  'Red Horned Lizard',  'Red Tailed Lizard',   'Red-Tailed Weasel',
  'Sacred Ibis',        'Sapphire',            'Scarab',
  'Shroomboar',         'Snowboar',            'Snow Finch',
  'Snow Fox',           'Snow Weasel',         'Squirrel',
  'Sun Crab',           'Sunny Loach',         'Sunset Loach',
  'Violet Ibis',        'White Pigeon'
]
```

</details>

## genshindb.namecards(query[, opts])]

<details>
<summary>genshindb.namecards('<b>klee'</b>)</summary>

```js
{
  name: 'Klee: Explosive',
  description: 'Namecard style.\n' +
    "Klee's lucky explosive — can you tell if it's Jumpy Dumpty or Dodoco? (Hint: Look carefully at the tail...)",
  sortorder: 210004,
  source: [ 'Reward for reaching Friendship 10 with Klee' ],
  images: {
    nameicon: 'UI_NameCardIcon_Klee',
    namebanner: 'UI_NameCardPic_Klee_Alpha',
    namebackground: 'UI_NameCardPic_Klee_P'
  },
  version: ''
}
```

</details>

## genshindb.geographies(query[, opts])]

<details>
<summary>genshindb.geographies('<b>library'</b>)</summary>

```js
{
  name: 'Knights of Favonius - Library',
  area: 'Mondstadt',
  description: 'The library with the most books in all the northern lands. Other than those collected in the restricted section, all the books here are open for public reading.',
  region: 'Mondstadt',
  sortorder: 7,
  images: { nameimage: 'UI_Codex_Scenery_MDtushuguan' },
  version: ''
}
```

</details>
<details>
<summary>genshindb.geographies('<b>liyue', { matchCategories: true }</b>)</summary>

```js
[
  'A Drop in the Ocean',
  'A Home in the Hills',
  'Beyond the Chasm',
  'Chihu Rock',
  'Crystal Fragment',
  'Dunyu Ruins',
  'Feiyun Slope',
  'Marsh of Rustling Reeds',
  'Mist-Veiled Stone Forest',
  'Moonlit Tree',
  'Mouth of the Great Mine',
  'Nine Pillars of Peace',
  "Qingxu's Forsaken Tower",
  'Ruins of Guili',
  'The Ancient Battlefield of Fuao Vale',
  'The Blocked Path',
  'The Court of Pillars',
  "The Great Mushroom's Place",
  'The Inverted City',
  'The Underground Mines',
  'Underground Waterway',
  "View from The Chasm's Surface",
  "Vigilant Guardians' Vantage Point",
  'Weeping Garden',
  'Where Merchants Flock And All Ships Dock',
  'Where Mountains Peak Beyond the Clouds',
  'Yujing Terrace'
]
```

</details>

## genshindb.adventureranks(query[, opts])]

<details>
<summary>genshindb.adventureranks('<b>20'</b>)</summary>

```js
{
  name: '20',
  exp: 2825,
  unlockdescription: 'World Level increased to Lv. 1;Monster and Boss levels increased;Reward drops upgraded\n' +
    'Max Adventure Rank increased to 25',
  reward: [
    { name: 'Primogem', count: 75, type: 'MATERIAL' },
    { name: 'Acquaint Fate', count: 1, type: 'MATERIAL' },
    { name: 'Fragile Resin', count: 1, type: 'MATERIAL' },
    { name: 'Fine Enhancement Ore', count: 5, type: 'MATERIAL' },
    { name: "Adventurer's Experience", count: 5, type: 'MATERIAL' }
  ],
  version: ''
}
```

</details>
<details>
<summary>genshindb.adventureranks('<b>60'</b>)</summary>

```js
{
  name: '60',
  unlockdescription: '',
  reward: [
    { name: 'Primogem', count: 150, type: 'MATERIAL' },
    { name: 'Acquaint Fate', count: 3, type: 'MATERIAL' },
    { name: 'Fragile Resin', count: 2, type: 'MATERIAL' },
    { name: 'Mystic Enhancement Ore', count: 30, type: 'MATERIAL' },
    { name: "Hero's Wit", count: 21, type: 'MATERIAL' }
  ],
  version: ''
}
```

</details>

## genshindb.elements(query[, opts])]


## genshindb.rarity(query[, opts])]


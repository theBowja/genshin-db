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
- [genshindb.emojis(query[, opts])](#genshindbemojisquery-opts)
- [genshindb.voiceovers(query[, opts])](#genshindbvoiceoversquery-opts)
- [genshindb.elements(query[, opts])](#genshindbelementsquery-opts)
- [genshindb.rarity(query[, opts])](#genshindbrarityquery-opts)

## genshindb.characters(query[, opts])]

<details>
<summary>genshindb.characters('<b>names', { matchCategories: true }</b>)</summary>

```js
[
  'Aether',           'Aino',           'Albedo',
  'Alhaitham',        'Aloy',           'Amber',
  'Arataki Itto',     'Arlecchino',     'Baizhu',
  'Barbara',          'Beidou',         'Bennett',
  'Candace',          'Charlotte',      'Chasca',
  'Chevreuse',        'Chiori',         'Chongyun',
  'Citlali',          'Clorinde',       'Collei',
  'Cyno',             'Dahlia',         'Dehya',
  'Diluc',            'Diona',          'Dori',
  'Emilie',           'Escoffier',      'Eula',
  'Faruzan',          'Fischl',         'Flins',
  'Freminet',         'Furina',         'Gaming',
  'Ganyu',            'Gorou',          'Hu Tao',
  'Iansan',           'Ifa',            'Ineffa',
  'Jean',             'Kachina',        'Kaedehara Kazuha',
  'Kaeya',            'Kamisato Ayaka', 'Kamisato Ayato',
  'Kaveh',            'Keqing',         'Kinich',
  'Kirara',           'Klee',           'Kujou Sara',
  'Kuki Shinobu',     'Lan Yan',        'Lauma',
  'Layla',            'Lisa',           'Lumine',
  'Lynette',          'Lyney',          'Mavuika',
  'Mika',             'Mona',           'Mualani',
  'Nahida',           'Navia',          'Neuvillette',
  'Nilou',            'Ningguang',      'Noelle',
  'Ororon',           'Qiqi',           'Raiden Shogun',
  'Razor',            'Rosaria',        'Sangonomiya Kokomi',
  'Sayu',             'Sethos',         'Shenhe',
  'Shikanoin Heizou', 'Sigewinne',      'Skirk',
  'Sucrose',          'Tartaglia',      'Thoma',
  'Tighnari',         'Varesa',         'Venti',
  'Wanderer',         'Wriothesley',    'Xiangling',
  'Xianyun',          'Xiao',           'Xilonen',
  'Xingqiu',          'Xinyan',         'Yae Miko',
  'Yanfei',
  ... 6 more items
]
```

</details>
<details>
<summary>genshindb.characters('<b>ganyu'</b>)</summary>

```js
{
  id: 10000037,
  name: 'Ganyu',
  title: 'Plenilune Gaze',
  description: 'The secretary at Yuehai Pavilion. The blood of the qilin, an illuminated beast, flows within her veins.',
  weaponType: 'WEAPON_BOW',
  weaponText: 'Bow',
  bodyType: 'BODY_GIRL',
  gender: 'Female',
  qualityType: 'QUALITY_ORANGE',
  rarity: 5,
  birthdaymmdd: '12/2',
  birthday: 'December 2',
  elementType: 'ELEMENT_CRYO',
  elementText: 'Cryo',
  affiliation: 'Yuehai Pavilion',
  associationType: 'ASSOC_LIYUE',
  region: 'Liyue',
  substatType: 'FIGHT_PROP_CRITICAL_HURT',
  substatText: 'CRIT DMG',
  constellation: 'Sinae Unicornis',
  cv: {
    english: 'Jennifer Losi',
    chinese: '林簌',
    japanese: '上田麗奈',
    korean: 'Kim Seon-hye'
  },
  costs: {
    ascend1: [
      { id: 202, name: 'Mora', count: 20000 },
      { id: 104161, name: 'Shivada Jade Sliver', count: 1 },
      { id: 100031, name: 'Qingxin', count: 3 },
      { id: 112038, name: 'Whopperflower Nectar', count: 3 }
    ],
    ascend2: [
      { id: 202, name: 'Mora', count: 40000 },
      { id: 104162, name: 'Shivada Jade Fragment', count: 3 },
      { id: 113010, name: 'Hoarfrost Core', count: 2 },
      { id: 100031, name: 'Qingxin', count: 10 },
      { id: 112038, name: 'Whopperflower Nectar', count: 15 }
    ],
    ascend3: [
      { id: 202, name: 'Mora', count: 60000 },
      { id: 104162, name: 'Shivada Jade Fragment', count: 6 },
      { id: 113010, name: 'Hoarfrost Core', count: 4 },
      { id: 100031, name: 'Qingxin', count: 20 },
      { id: 112039, name: 'Shimmering Nectar', count: 12 }
    ],
    ascend4: [
      { id: 202, name: 'Mora', count: 80000 },
      { id: 104163, name: 'Shivada Jade Chunk', count: 3 },
      { id: 113010, name: 'Hoarfrost Core', count: 8 },
      { id: 100031, name: 'Qingxin', count: 30 },
      { id: 112039, name: 'Shimmering Nectar', count: 18 }
    ],
    ascend5: [
      { id: 202, name: 'Mora', count: 100000 },
      { id: 104163, name: 'Shivada Jade Chunk', count: 6 },
      { id: 113010, name: 'Hoarfrost Core', count: 12 },
      { id: 100031, name: 'Qingxin', count: 45 },
      { id: 112040, name: 'Energy Nectar', count: 12 }
    ],
    ascend6: [
      { id: 202, name: 'Mora', count: 120000 },
      { id: 104164, name: 'Shivada Jade Gemstone', count: 6 },
      { id: 113010, name: 'Hoarfrost Core', count: 20 },
      { id: 100031, name: 'Qingxin', count: 60 },
      { id: 112040, name: 'Energy Nectar', count: 24 }
    ]
  },
  images: {
    card: 'https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png',
    portrait: 'https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Character_Ganyu_Portrait.png',
    cover1: 'https://act-webstatic.hoyoverse.com/upload/contentweb/2022/07/22/1ae0d0aaad9ee9b55652ea7ec67f0465_3602224572622981451.png',
    cover2: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210105/2021010519280045054.png',
    'hoyolab-avatar': 'https://img-os-static.hoyolab.com/communityWeb/upload/4af4adf192a35db2dd76d9718acc7bc8.png',
    filename_icon: 'UI_AvatarIcon_Ganyu',
    filename_iconCard: 'UI_AvatarIcon_Ganyu_Card',
    filename_sideIcon: 'UI_AvatarIcon_Side_Ganyu',
    filename_gachaSplash: 'UI_Gacha_AvatarImg_Ganyu',
    filename_gachaSlice: 'UI_Gacha_AvatarIcon_Ganyu',
    mihoyo_icon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png',
    mihoyo_sideIcon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Ganyu.png'
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
    { id: 202, name: 'Mora', count: 20000 },
    { id: 104161, name: 'Shivada Jade Sliver', count: 1 },
    { id: 101202, name: 'Sakura Bloom', count: 3 },
    { id: 112044, name: 'Old Handguard', count: 3 }
  ],
  ascend2: [
    { id: 202, name: 'Mora', count: 40000 },
    { id: 104162, name: 'Shivada Jade Fragment', count: 3 },
    { id: 113023, name: 'Perpetual Heart', count: 2 },
    { id: 101202, name: 'Sakura Bloom', count: 10 },
    { id: 112044, name: 'Old Handguard', count: 15 }
  ],
  ascend3: [
    { id: 202, name: 'Mora', count: 60000 },
    { id: 104162, name: 'Shivada Jade Fragment', count: 6 },
    { id: 113023, name: 'Perpetual Heart', count: 4 },
    { id: 101202, name: 'Sakura Bloom', count: 20 },
    { id: 112045, name: 'Kageuchi Handguard', count: 12 }
  ],
  ascend4: [
    { id: 202, name: 'Mora', count: 80000 },
    { id: 104163, name: 'Shivada Jade Chunk', count: 3 },
    { id: 113023, name: 'Perpetual Heart', count: 8 },
    { id: 101202, name: 'Sakura Bloom', count: 30 },
    { id: 112045, name: 'Kageuchi Handguard', count: 18 }
  ],
  ascend5: [
    { id: 202, name: 'Mora', count: 100000 },
    { id: 104163, name: 'Shivada Jade Chunk', count: 6 },
    { id: 113023, name: 'Perpetual Heart', count: 12 },
    { id: 101202, name: 'Sakura Bloom', count: 45 },
    { id: 112046, name: 'Famed Handguard', count: 12 }
  ],
  ascend6: [
    { id: 202, name: 'Mora', count: 120000 },
    { id: 104164, name: 'Shivada Jade Gemstone', count: 6 },
    { id: 113023, name: 'Perpetual Heart', count: 20 },
    { id: 101202, name: 'Sakura Bloom', count: 60 },
    { id: 112046, name: 'Famed Handguard', count: 24 }
  ]
}
```

</details>
<details>
<summary>genshindb.characters('<b>amber', { resultLanguage: 'JP' }</b>)</summary>

```js
{
  id: 10000021,
  name: 'アンバー',
  title: '飛行チャンピオン',
  description: '元気満々な女の子、騎士団で最も優秀で、最後の偵察騎士である。',
  weaponType: 'WEAPON_BOW',
  weaponText: '弓',
  bodyType: 'BODY_GIRL',
  gender: '女',
  qualityType: 'QUALITY_PURPLE',
  rarity: 4,
  birthdaymmdd: '8/10',
  birthday: '8月10日',
  elementType: 'ELEMENT_PYRO',
  elementText: '炎',
  affiliation: '西風騎士団',
  associationType: 'ASSOC_MONDSTADT',
  region: 'モンド',
  substatType: 'FIGHT_PROP_ATTACK_PERCENT',
  substatText: '攻撃力',
  constellation: '小兎座',
  cv: {
    english: 'Kelly Baskin',
    chinese: '蔡书瑾',
    japanese: '石見舞菜香',
    korean: '김연우'
  },
  costs: {
    ascend1: [
      { id: 202, name: 'モラ', count: 20000 },
      { id: 104111, name: '炎願のアゲート·砕屑', count: 1 },
      { id: 100055, name: 'イグサ', count: 3 },
      { id: 112011, name: '牢固な矢先', count: 3 }
    ],
    ascend2: [
      { id: 202, name: 'モラ', count: 40000 },
      { id: 104112, name: '炎願のアゲート·欠片', count: 3 },
      { id: 113011, name: '常燃の火種', count: 2 },
      { id: 100055, name: 'イグサ', count: 10 },
      { id: 112011, name: '牢固な矢先', count: 15 }
    ],
    ascend3: [
      { id: 202, name: 'モラ', count: 60000 },
      { id: 104112, name: '炎願のアゲート·欠片', count: 6 },
      { id: 113011, name: '常燃の火種', count: 4 },
      { id: 100055, name: 'イグサ', count: 20 },
      { id: 112012, name: '鋭利な矢先', count: 12 }
    ],
    ascend4: [
      { id: 202, name: 'モラ', count: 80000 },
      { id: 104113, name: '炎願のアゲート·塊', count: 3 },
      { id: 113011, name: '常燃の火種', count: 8 },
      { id: 100055, name: 'イグサ', count: 30 },
      { id: 112012, name: '鋭利な矢先', count: 18 }
    ],
    ascend5: [
      { id: 202, name: 'モラ', count: 100000 },
      { id: 104113, name: '炎願のアゲート·塊', count: 6 },
      { id: 113011, name: '常燃の火種', count: 12 },
      { id: 100055, name: 'イグサ', count: 45 },
      { id: 112013, name: '歴戦の矢先', count: 12 }
    ],
    ascend6: [
      { id: 202, name: 'モラ', count: 120000 },
      { id: 104114, name: '炎願のアゲート', count: 6 },
      { id: 113011, name: '常燃の火種', count: 20 },
      { id: 100055, name: 'イグサ', count: 60 },
      { id: 112013, name: '歴戦の矢先', count: 24 }
    ]
  },
  images: {
    card: 'https://static.wikia.nocookie.net/gensin-impact/images/2/26/Character_Amber_Card.jpg',
    portrait: 'https://static.wikia.nocookie.net/gensin-impact/images/0/00/Character_Amber_Portrait.png',
    cover1: 'https://act-webstatic.hoyoverse.com/upload/contentweb/2022/07/22/6f0ef40157e95b0d59455c12f4d3f270_6966278935690800707.png',
    cover2: 'https://act-webstatic.hoyoverse.com/upload/contentweb/2022/06/28/4f598572016e3177da5d4256fe9c1f5e_8765525983470991811.png',
    'hoyolab-avatar': 'https://img-os-static.hoyolab.com/communityWeb/upload/b7c1e4d14fdaac060eb86e3ad09bbf78.png',
    filename_icon: 'UI_AvatarIcon_Ambor',
    filename_iconCard: 'UI_AvatarIcon_Ambor_Card',
    filename_sideIcon: 'UI_AvatarIcon_Side_Ambor',
    filename_gachaSplash: 'UI_Gacha_AvatarImg_Ambor',
    filename_gachaSlice: 'UI_Gacha_AvatarIcon_Ambor',
    mihoyo_icon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ambor.png',
    mihoyo_sideIcon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Ambor.png'
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
  id: 10000021,
  name: 'Amber',
  title: 'La Campeona de Vuelo',
  description: 'Siempre enérgica y llena de vida, Amber es la mejor exploradora de los Caballeros de Favonius, aunque también es la única...',
  weaponType: 'WEAPON_BOW',
  weaponText: 'Arco',
  bodyType: 'BODY_GIRL',
  gender: 'Femenino',
  qualityType: 'QUALITY_PURPLE',
  rarity: 4,
  birthdaymmdd: '8/10',
  birthday: '10 de agosto',
  elementType: 'ELEMENT_PYRO',
  elementText: 'Pyro',
  affiliation: 'Caballeros de Favonius',
  associationType: 'ASSOC_MONDSTADT',
  region: 'Mondstadt',
  substatType: 'FIGHT_PROP_ATTACK_PERCENT',
  substatText: 'ATQ',
  constellation: 'Lepus Minor',
  cv: {
    english: 'Kelly Baskin',
    chinese: '蔡书瑾',
    japanese: '石見舞菜香',
    korean: 'Kim Yeon-woo'
  },
  costs: {
    ascend1: [
      { id: 202, name: 'Mora', count: 20000 },
      { id: 104111, name: 'Pedacito de ágata agnidus', count: 1 },
      { id: 100055, name: 'Lucetta', count: 3 },
      { id: 112011, name: 'Flecha robusta', count: 3 }
    ],
    ascend2: [
      { id: 202, name: 'Mora', count: 40000 },
      { id: 104112, name: 'Fragmento de ágata agnidus', count: 3 },
      { id: 113011, name: 'Semilla de fuego eterno', count: 2 },
      { id: 100055, name: 'Lucetta', count: 10 },
      { id: 112011, name: 'Flecha robusta', count: 15 }
    ],
    ascend3: [
      { id: 202, name: 'Mora', count: 60000 },
      { id: 104112, name: 'Fragmento de ágata agnidus', count: 6 },
      { id: 113011, name: 'Semilla de fuego eterno', count: 4 },
      { id: 100055, name: 'Lucetta', count: 20 },
      { id: 112012, name: 'Flecha afilada', count: 12 }
    ],
    ascend4: [
      { id: 202, name: 'Mora', count: 80000 },
      { id: 104113, name: 'Trozo de ágata agnidus', count: 3 },
      { id: 113011, name: 'Semilla de fuego eterno', count: 8 },
      { id: 100055, name: 'Lucetta', count: 30 },
      { id: 112012, name: 'Flecha afilada', count: 18 }
    ],
    ascend5: [
      { id: 202, name: 'Mora', count: 100000 },
      { id: 104113, name: 'Trozo de ágata agnidus', count: 6 },
      { id: 113011, name: 'Semilla de fuego eterno', count: 12 },
      { id: 100055, name: 'Lucetta', count: 45 },
      { id: 112013, name: 'Flecha veterana', count: 12 }
    ],
    ascend6: [
      { id: 202, name: 'Mora', count: 120000 },
      { id: 104114, name: 'Ágata agnidus', count: 6 },
      { id: 113011, name: 'Semilla de fuego eterno', count: 20 },
      { id: 100055, name: 'Lucetta', count: 60 },
      { id: 112013, name: 'Flecha veterana', count: 24 }
    ]
  },
  images: {
    card: 'https://static.wikia.nocookie.net/gensin-impact/images/2/26/Character_Amber_Card.jpg',
    portrait: 'https://static.wikia.nocookie.net/gensin-impact/images/0/00/Character_Amber_Portrait.png',
    cover1: 'https://act-webstatic.hoyoverse.com/upload/contentweb/2022/07/22/6f0ef40157e95b0d59455c12f4d3f270_6966278935690800707.png',
    cover2: 'https://act-webstatic.hoyoverse.com/upload/contentweb/2022/06/28/4f598572016e3177da5d4256fe9c1f5e_8765525983470991811.png',
    'hoyolab-avatar': 'https://img-os-static.hoyolab.com/communityWeb/upload/b7c1e4d14fdaac060eb86e3ad09bbf78.png',
    filename_icon: 'UI_AvatarIcon_Ambor',
    filename_iconCard: 'UI_AvatarIcon_Ambor_Card',
    filename_sideIcon: 'UI_AvatarIcon_Side_Ambor',
    filename_gachaSplash: 'UI_Gacha_AvatarImg_Ambor',
    filename_gachaSlice: 'UI_Gacha_AvatarIcon_Ambor',
    mihoyo_icon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ambor.png',
    mihoyo_sideIcon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Ambor.png'
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
  id: 10000033,
  name: 'Tartaglia',
  title: 'Childe',
  description: 'No. 11 of The Harbingers, also known as "Childe." His name is highly feared on the battlefield.',
  weaponType: 'WEAPON_BOW',
  weaponText: 'Bow',
  bodyType: 'BODY_MALE',
  gender: 'Male',
  qualityType: 'QUALITY_ORANGE',
  rarity: 5,
  birthdaymmdd: '7/20',
  birthday: 'July 20',
  elementType: 'ELEMENT_HYDRO',
  elementText: 'Hydro',
  affiliation: 'Fatui',
  associationType: 'ASSOC_FATUI',
  region: 'Snezhnaya',
  substatType: 'FIGHT_PROP_WATER_ADD_HURT',
  substatText: 'Hydro DMG Bonus',
  constellation: 'Monoceros Caeli',
  cv: {
    english: 'Griffin Burns',
    chinese: '鱼冻',
    japanese: '木村良平',
    korean: 'Nam Do-hyeong'
  },
  costs: {
    ascend1: [
      { id: 202, name: 'Mora', count: 20000 },
      { id: 104121, name: 'Varunada Lazurite Sliver', count: 1 },
      { id: 100033, name: 'Starconch', count: 3 },
      { id: 112032, name: "Recruit's Insignia", count: 3 }
    ],
    ascend2: [
      { id: 202, name: 'Mora', count: 40000 },
      { id: 104122, name: 'Varunada Lazurite Fragment', count: 3 },
      { id: 113012, name: 'Cleansing Heart', count: 2 },
      { id: 100033, name: 'Starconch', count: 10 },
      { id: 112032, name: "Recruit's Insignia", count: 15 }
    ],
    ascend3: [
      { id: 202, name: 'Mora', count: 60000 },
      { id: 104122, name: 'Varunada Lazurite Fragment', count: 6 },
      { id: 113012, name: 'Cleansing Heart', count: 4 },
      { id: 100033, name: 'Starconch', count: 20 },
      { id: 112033, name: "Sergeant's Insignia", count: 12 }
    ],
    ascend4: [
      { id: 202, name: 'Mora', count: 80000 },
      { id: 104123, name: 'Varunada Lazurite Chunk', count: 3 },
      { id: 113012, name: 'Cleansing Heart', count: 8 },
      { id: 100033, name: 'Starconch', count: 30 },
      { id: 112033, name: "Sergeant's Insignia", count: 18 }
    ],
    ascend5: [
      { id: 202, name: 'Mora', count: 100000 },
      { id: 104123, name: 'Varunada Lazurite Chunk', count: 6 },
      { id: 113012, name: 'Cleansing Heart', count: 12 },
      { id: 100033, name: 'Starconch', count: 45 },
      { id: 112034, name: "Lieutenant's Insignia", count: 12 }
    ],
    ascend6: [
      { id: 202, name: 'Mora', count: 120000 },
      { id: 104124, name: 'Varunada Lazurite Gemstone', count: 6 },
      { id: 113012, name: 'Cleansing Heart', count: 20 },
      { id: 100033, name: 'Starconch', count: 60 },
      { id: 112034, name: "Lieutenant's Insignia", count: 24 }
    ]
  },
  images: {
    card: 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png',
    portrait: 'https://static.wikia.nocookie.net/gensin-impact/images/3/3a/Character_Tartaglia_Portrait.png',
    cover1: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20201103/2020110321160453386.png',
    cover2: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20201103/2020110321234137061.png',
    'hoyolab-avatar': 'https://img-os-static.hoyolab.com/communityWeb/upload/34ebaeb164a8b447dbe52afaae3e1f63.png',
    filename_icon: 'UI_AvatarIcon_Tartaglia',
    filename_iconCard: 'UI_AvatarIcon_Tartaglia_Card',
    filename_sideIcon: 'UI_AvatarIcon_Side_Tartaglia',
    filename_gachaSplash: 'UI_Gacha_AvatarImg_Tartaglia',
    filename_gachaSlice: 'UI_Gacha_AvatarIcon_Tartaglia',
    mihoyo_icon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Tartaglia.png',
    mihoyo_sideIcon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Tartaglia.png'
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
  id: 10000022,
  name: 'Venti',
  title: 'Windborne Bard',
  description: "One of the many bards of Mondstadt, who freely wanders the city's streets and alleys.",
  weaponType: 'WEAPON_BOW',
  weaponText: 'Bow',
  bodyType: 'BODY_BOY',
  gender: 'Male',
  qualityType: 'QUALITY_ORANGE',
  rarity: 5,
  birthdaymmdd: '6/16',
  birthday: 'June 16',
  elementType: 'ELEMENT_ANEMO',
  elementText: 'Anemo',
  affiliation: 'Mondstadt',
  associationType: 'ASSOC_MONDSTADT',
  region: 'Mondstadt',
  substatType: 'FIGHT_PROP_CHARGE_EFFICIENCY',
  substatText: 'Energy Recharge',
  constellation: 'Carmen Dei',
  cv: {
    english: 'Erika Harlacher',
    chinese: '喵酱',
    japanese: '村瀬歩',
    korean: 'Jung Yoo-jung'
  },
  costs: {
    ascend1: [
      { id: 202, name: 'Mora', count: 20000 },
      { id: 104151, name: 'Vayuda Turquoise Sliver', count: 1 },
      { id: 100023, name: 'Cecilia', count: 3 },
      { id: 112002, name: 'Slime Condensate', count: 3 }
    ],
    ascend2: [
      { id: 202, name: 'Mora', count: 40000 },
      { id: 104152, name: 'Vayuda Turquoise Fragment', count: 3 },
      { id: 113001, name: 'Hurricane Seed', count: 2 },
      { id: 100023, name: 'Cecilia', count: 10 },
      { id: 112002, name: 'Slime Condensate', count: 15 }
    ],
    ascend3: [
      { id: 202, name: 'Mora', count: 60000 },
      { id: 104152, name: 'Vayuda Turquoise Fragment', count: 6 },
      { id: 113001, name: 'Hurricane Seed', count: 4 },
      { id: 100023, name: 'Cecilia', count: 20 },
      { id: 112003, name: 'Slime Secretions', count: 12 }
    ],
    ascend4: [
      { id: 202, name: 'Mora', count: 80000 },
      { id: 104153, name: 'Vayuda Turquoise Chunk', count: 3 },
      { id: 113001, name: 'Hurricane Seed', count: 8 },
      { id: 100023, name: 'Cecilia', count: 30 },
      { id: 112003, name: 'Slime Secretions', count: 18 }
    ],
    ascend5: [
      { id: 202, name: 'Mora', count: 100000 },
      { id: 104153, name: 'Vayuda Turquoise Chunk', count: 6 },
      { id: 113001, name: 'Hurricane Seed', count: 12 },
      { id: 100023, name: 'Cecilia', count: 45 },
      { id: 112004, name: 'Slime Concentrate', count: 12 }
    ],
    ascend6: [
      { id: 202, name: 'Mora', count: 120000 },
      { id: 104154, name: 'Vayuda Turquoise Gemstone', count: 6 },
      { id: 113001, name: 'Hurricane Seed', count: 20 },
      { id: 100023, name: 'Cecilia', count: 60 },
      { id: 112004, name: 'Slime Concentrate', count: 24 }
    ]
  },
  images: {
    card: 'https://static.wikia.nocookie.net/gensin-impact/images/7/76/Character_Venti_Card.jpg',
    portrait: 'https://static.wikia.nocookie.net/gensin-impact/images/c/cf/Character_Venti_Portrait.png',
    cover1: 'https://act-webstatic.hoyoverse.com/upload/contentweb/2022/07/22/965e940e6caafe8fbd4bf0e17653000b_4508958090491775485.png',
    cover2: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20191122/2019112211143037621.png',
    'hoyolab-avatar': 'https://img-os-static.hoyolab.com/communityWeb/upload/f42e16fca94650e2e932c093de92ae54.png',
    filename_icon: 'UI_AvatarIcon_Venti',
    filename_iconCard: 'UI_AvatarIcon_Venti_Card',
    filename_sideIcon: 'UI_AvatarIcon_Side_Venti',
    filename_gachaSplash: 'UI_Gacha_AvatarImg_Venti',
    filename_gachaSlice: 'UI_Gacha_AvatarIcon_Venti',
    mihoyo_icon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png',
    mihoyo_sideIcon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Venti.png'
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
[ 'Amber', 'Collei', 'Dahlia', 'Diona', 'Fischl' ]
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
    resultLanguage: 'Japanese',
    v4Props: false,
    v4PropsOnly: false
  },
  filename: [ 'amber', 'collei', 'dahlia', 'diona', 'fischl' ],
  result: [ 'アンバー', 'コレイ', 'ダリア', 'ディオナ', 'フィッシュル' ]
}
```

</details>
<details>
<summary>genshindb.characters('<b>december', { matchCategories: true }</b>)</summary>

```js
[
  'Chasca',  'Dori',
  'Gaming',  'Ganyu',
  'Layla',   'Neuvillette',
  'Nilou',   'Tighnari',
  'Zhongli'
]
```

</details>
<details>
<summary>genshindb.characters('<b>pyro', { matchCategories: true }</b>)</summary>

```js
[
  'Amber',     'Arlecchino',
  'Bennett',   'Chevreuse',
  'Dehya',     'Diluc',
  'Gaming',    'Hu Tao',
  'Klee',      'Lyney',
  'Mavuika',   'Thoma',
  'Xiangling', 'Xinyan',
  'Yanfei',    'Yoimiya'
]
```

</details>
<details>
<summary>genshindb.characters('<b>liyue', { matchCategories: true }</b>)</summary>

```js
[
  'Baizhu',  'Beidou',  'Chongyun',
  'Gaming',  'Ganyu',   'Hu Tao',
  'Keqing',  'Lan Yan', 'Ningguang',
  'Qiqi',    'Shenhe',  'Xiangling',
  'Xianyun', 'Xiao',    'Xingqiu',
  'Xinyan',  'Yanfei',  'Yaoyao',
  'Yelan',   'Yun Jin', 'Zhongli'
]
```

</details>
<details>
<summary>genshindb.characters('<b>sword', { matchCategories: true }</b>)</summary>

```js
[
  'Aether',         'Albedo',
  'Alhaitham',      'Bennett',
  'Chiori',         'Clorinde',
  'Dahlia',         'Furina',
  'Jean',           'Kaedehara Kazuha',
  'Kaeya',          'Kamisato Ayaka',
  'Kamisato Ayato', 'Keqing',
  'Kirara',         'Kuki Shinobu',
  'Layla',          'Lumine',
  'Lynette',        'Nilou',
  'Qiqi',           'Skirk',
  'Xilonen',        'Xingqiu'
]
```

</details>
<details>
<summary>genshindb.characters('<b>klee'</b>)<b>.stats(90)</b></summary>

```js
{
  level: 90,
  ascension: 6,
  hp: 10286.5650232,
  attack: 310.931894,
  defense: 614.843496,
  specialized: 0.288
}
```

</details>
<details>
<summary>genshindb.characters('<b>klee'</b>)<b>.stats(80)</b></summary>

```js
{
  level: 80,
  ascension: 5,
  hp: 9075.6026368,
  attack: 274.32836599999996,
  defense: 542.462304,
  specialized: 0.216
}
```

</details>
<details>
<summary>genshindb.characters('<b>klee'</b>)<b>.stats(80, '+')</b></summary>

```js
{
  level: 80,
  ascension: 6,
  hp: 9563.452736800002,
  attack: 289.073876,
  defense: 571.622304,
  specialized: 0.288
}
```

</details>
<details>
<summary>genshindb.characters('<b>aether'</b>)<b>.stats(12)</b></summary>

```js
{
  level: 12,
  ascension: 0,
  hp: 1739.697228,
  attack: 33.977664,
  defense: 109.1853,
  specialized: 0
}
```

</details>
<details>
<summary>genshindb.characters('<b>furina'</b>)<b>.stats(95)</b></summary>

```js
{
  level: 95,
  ascension: 6,
  hp: 15850.780750000002,
  attack: 271.4059676,
  defense: 720.23234925,
  specialized: 0.242
}
```

</details>

## genshindb.talents(query[, opts])]

<details>
<summary>genshindb.talents('<b>names', { matchCategories: true }</b>)</summary>

```js
[
  'Aino',               'Albedo',            'Alhaitham',
  'Aloy',               'Amber',             'Arataki Itto',
  'Arlecchino',         'Baizhu',            'Barbara',
  'Beidou',             'Bennett',           'Candace',
  'Charlotte',          'Chasca',            'Chevreuse',
  'Chiori',             'Chongyun',          'Citlali',
  'Clorinde',           'Collei',            'Cyno',
  'Dahlia',             'Dehya',             'Diluc',
  'Diona',              'Dori',              'Emilie',
  'Escoffier',          'Eula',              'Faruzan',
  'Fischl',             'Flins',             'Freminet',
  'Furina',             'Gaming',            'Ganyu',
  'Gorou',              'Hu Tao',            'Iansan',
  'Ifa',                'Ineffa',            'Jean',
  'Kachina',            'Kaedehara Kazuha',  'Kaeya',
  'Kamisato Ayaka',     'Kamisato Ayato',    'Kaveh',
  'Keqing',             'Kinich',            'Kirara',
  'Klee',               'Kujou Sara',        'Kuki Shinobu',
  'Lan Yan',            'Lauma',             'Layla',
  'Lisa',               'Lynette',           'Lyney',
  'Mavuika',            'Mika',              'Mona',
  'Mualani',            'Nahida',            'Navia',
  'Neuvillette',        'Nilou',             'Ningguang',
  'Noelle',             'Ororon',            'Qiqi',
  'Raiden Shogun',      'Razor',             'Rosaria',
  'Sangonomiya Kokomi', 'Sayu',              'Sethos',
  'Shenhe',             'Shikanoin Heizou',  'Sigewinne',
  'Skirk',              'Sucrose',           'Tartaglia',
  'Thoma',              'Tighnari',          'Traveler (Anemo)',
  'Traveler (Cryo)',    'Traveler (Dendro)', 'Traveler (Electro)',
  'Traveler (Geo)',     'Traveler (Hydro)',  'Traveler (Pyro)',
  'Varesa',             'Venti',             'Wanderer',
  'Wriothesley',        'Xiangling',         'Xianyun',
  'Xiao',
  ... 11 more items
]
```

</details>
<details>
<summary>genshindb.talents('<b>ninguang'</b>)</summary>

```js
{
  id: 2701,
  name: 'Ningguang',
  combat1: {
    name: 'Sparkling Scatter',
    descriptionRaw: '<color=#FFD780FF>Normal Attack</color>\n' +
      'Shoots gems that deal <color=#FFE699FF>Geo DMG</color>.\n' +
      'Upon hit, this grants Ningguang 1 Star Jade.\n' +
      '\n' +
      '<color=#FFD780FF>Charged Attack</color>\n' +
      'Consumes a certain amount of stamina to fire off a giant gem that deals <color=#FFE699FF>Geo DMG</color>.\n' +
      'If Ningguang has any Star Jades, unleashing a Charged Attack will cause the Star Jades to be fired at the enemy as well, dealing additional DMG.\n' +
      '\n' +
      '<color=#FFD780FF>Plunging Attack</color>\n' +
      'Gathering the might of Geo, Ningguang plunges towards the ground from mid-air, damaging all opponents in her path. Deals <color=#FFE699FF>AoE Geo DMG</color> upon impact with the ground.',
    description: 'Normal Attack\n' +
      'Shoots gems that deal Geo DMG.\n' +
      'Upon hit, this grants Ningguang 1 Star Jade.\n' +
      '\n' +
      'Charged Attack\n' +
      'Consumes a certain amount of stamina to fire off a giant gem that deals Geo DMG.\n' +
      'If Ningguang has any Star Jades, unleashing a Charged Attack will cause the Star Jades to be fired at the enemy as well, dealing additional DMG.\n' +
      '\n' +
      'Plunging Attack\n' +
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
             0.28,   0.301,   0.322,
             0.35,   0.371,   0.392,
             0.42,   0.448,   0.476,
            0.504, 0.53312,  0.5712,
          0.60928, 0.64736, 0.68544
        ],
        param2: [
            1.7408,  1.87136,  2.00192,
             2.176,  2.30656,  2.43712,
            2.6112,  2.78528,  2.95936,
           3.13344, 3.314483, 3.551232,
          3.787981,  4.02473, 4.261478
        ],
        param3: [
             0.496,   0.5332,   0.5704,
              0.62,   0.6572,   0.6944,
             0.744,   0.7936,   0.8432,
            0.8928, 0.944384,  1.01184,
          1.079296, 1.146752, 1.214208
        ],
        param4: [
          50, 50, 50, 50, 50, 50,
          50, 50, 50, 50, 50, 50,
          50, 50, 50
        ],
        param5: [
          0.568288, 0.614544,
            0.6608,  0.72688,
          0.773136,    0.826,
          0.898688, 0.971376,
          1.044064,  1.12336,
          1.202656, 1.281952,
          1.361248, 1.440544,
           1.51984
        ],
        param6: [
          1.136335, 1.228828,
           1.32132, 1.453452,
          1.545944,  1.65165,
          1.796995,  1.94234,
          2.087686, 2.246244,
          2.404802, 2.563361,
          2.721919, 2.880478,
          3.039036
        ],
        param7: [
          1.419344, 1.534872,
            1.6504,  1.81544,
          1.930968,    2.063,
          2.244544, 2.426088,
          2.607632,  2.80568,
          3.003728, 3.201776,
          3.399824, 3.597872,
           3.79592
        ]
      }
    }
  },
  combat2: {
    name: 'Jade Screen',
    descriptionRaw: 'Ningguang creates a Jade Screen out of gold, obsidian, and her great opulence, dealing <color=#FFE699FF>AoE Geo DMG</color>.\n' +
      '\n' +
      '<color=#FFD780FF>Jade Screen</color>\n' +
      "·Blocks opponents' projectiles.\n" +
      "·Endurance scales based on Ningguang's Max HP.\n" +
      '\n' +
      'Jade Screen is considered a <color=#FFE699FF>Geo Construct</color> and can be used to block certain attacks, but cannot be climbed. Only one Jade Screen may exist at any one time.\n' +
      '\n' +
      '<i>The canvas of stars is written upon this jade screen.</i>',
    description: 'Ningguang creates a Jade Screen out of gold, obsidian, and her great opulence, dealing AoE Geo DMG.\n' +
      '\n' +
      'Jade Screen\n' +
      "·Blocks opponents' projectiles.\n" +
      "·Endurance scales based on Ningguang's Max HP.\n" +
      '\n' +
      'Jade Screen is considered a Geo Construct and can be used to block certain attacks, but cannot be climbed. Only one Jade Screen may exist at any one time.',
    flavorText: 'The canvas of stars is written upon this jade screen.',
    attributes: {
      labels: [
        'Inherited HP|{param3:F1P}',
        'Skill DMG|{param2:P}',
        'CD|{param4:F1}s'
      ],
      parameters: {
        param1: [
          -0.499, -0.469, -0.439,
            -0.4,  -0.37,  -0.34,
          -0.301, -0.262, -0.223,
          -0.184, -0.145, -0.106,
          -0.067, -0.028,  0.011
        ],
        param2: [
           2.304, 2.4768, 2.6496,
            2.88, 3.0528, 3.2256,
           3.456, 3.6864, 3.9168,
          4.1472, 4.3776,  4.608,
           4.896,  5.184,  5.472
        ],
        param3: [
          0.501, 0.531, 0.561,
            0.6,  0.63,  0.66,
          0.699, 0.738, 0.777,
          0.816, 0.855, 0.894,
          0.933, 0.972, 1.011
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
    descriptionRaw: 'Gathering a great number of gems, Ningguang scatters them all at once, sending homing projectiles at her opponents that deal massive <color=#FFE699FF>Geo DMG</color>.\n' +
      'If Starshatter is cast when a Jade Screen is nearby, the Jade Screen will fire additional gem projectiles at the same time.\n' +
      '\n' +
      '<i>Stars shatter. Silence falls.</i>',
    description: 'Gathering a great number of gems, Ningguang scatters them all at once, sending homing projectiles at her opponents that deal massive Geo DMG.\n' +
      'If Starshatter is cast when a Jade Screen is nearby, the Jade Screen will fire additional gem projectiles at the same time.',
    flavorText: 'Stars shatter. Silence falls.',
    attributes: {
      labels: [
        'DMG Per Gem|{param1:F1P}',
        'CD|{param2:F1}s',
        'Energy Cost|{param3:I}'
      ],
      parameters: {
        param1: [
           0.8696, 0.93482, 1.00004,
            1.087, 1.15222, 1.21744,
           1.3044, 1.39136, 1.47832,
          1.56528, 1.65224,  1.7392,
           1.8479,  1.9566,  2.0653
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
    descriptionRaw: 'When Ningguang is in possession of Star Jades, her Charged Attack does not consume Stamina.',
    description: 'When Ningguang is in possession of Star Jades, her Charged Attack does not consume Stamina.'
  },
  passive2: {
    name: 'Strategic Reserve',
    descriptionRaw: 'A character that passes through the <color=#FFD780FF>Jade Screen</color> will gain a 12% <color=#FFE699FF>Geo DMG Bonus</color> for 10s.',
    description: 'A character that passes through the Jade Screen will gain a 12% Geo DMG Bonus for 10s.'
  },
  passive3: {
    name: 'Trove of Marvelous Treasures',
    descriptionRaw: 'Displays the location of nearby <color=#FFD780FF>ore veins used in forging</color> on the mini-map.',
    description: 'Displays the location of nearby ore veins used in forging on the mini-map.'
  },
  costs: {
    lvl2: [
      { id: 202, name: 'Mora', count: 12500 },
      { id: 104310, name: 'Teachings of Prosperity', count: 3 },
      { id: 112032, name: "Recruit's Insignia", count: 6 }
    ],
    lvl3: [
      { id: 202, name: 'Mora', count: 17500 },
      { id: 104311, name: 'Guide to Prosperity', count: 2 },
      { id: 112033, name: "Sergeant's Insignia", count: 3 }
    ],
    lvl4: [
      { id: 202, name: 'Mora', count: 25000 },
      { id: 104311, name: 'Guide to Prosperity', count: 4 },
      { id: 112033, name: "Sergeant's Insignia", count: 4 }
    ],
    lvl5: [
      { id: 202, name: 'Mora', count: 30000 },
      { id: 104311, name: 'Guide to Prosperity', count: 6 },
      { id: 112033, name: "Sergeant's Insignia", count: 6 }
    ],
    lvl6: [
      { id: 202, name: 'Mora', count: 37500 },
      { id: 104311, name: 'Guide to Prosperity', count: 9 },
      { id: 112033, name: "Sergeant's Insignia", count: 9 }
    ],
    lvl7: [
      { id: 202, name: 'Mora', count: 120000 },
      { id: 104312, name: 'Philosophies of Prosperity', count: 4 },
      { id: 112034, name: "Lieutenant's Insignia", count: 4 },
      { id: 113008, name: 'Spirit Locket of Boreas', count: 1 }
    ],
    lvl8: [
      { id: 202, name: 'Mora', count: 260000 },
      { id: 104312, name: 'Philosophies of Prosperity', count: 6 },
      { id: 112034, name: "Lieutenant's Insignia", count: 6 },
      { id: 113008, name: 'Spirit Locket of Boreas', count: 1 }
    ],
    lvl9: [
      { id: 202, name: 'Mora', count: 450000 },
      { id: 104312, name: 'Philosophies of Prosperity', count: 12 },
      { id: 112034, name: "Lieutenant's Insignia", count: 9 },
      { id: 113008, name: 'Spirit Locket of Boreas', count: 2 }
    ],
    lvl10: [
      { id: 202, name: 'Mora', count: 700000 },
      { id: 104312, name: 'Philosophies of Prosperity', count: 16 },
      { id: 112034, name: "Lieutenant's Insignia", count: 12 },
      { id: 113008, name: 'Spirit Locket of Boreas', count: 2 },
      { id: 104319, name: 'Crown of Insight', count: 1 }
    ]
  },
  images: {
    filename_combat1: 'Skill_A_Catalyst_MD',
    filename_combat2: 'Skill_S_Ningguang_01',
    filename_combat3: 'Skill_E_Ningguang_01_HD',
    filename_passive1: 'UI_Talent_S_Ningguang_02',
    filename_passive2: 'UI_Talent_S_Ningguang_06',
    filename_passive3: 'UI_Talent_Collect_Ore'
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
    { id: 202, name: 'Mora', count: 12500 },
    { id: 104310, name: 'Teachings of Prosperity', count: 3 },
    { id: 112032, name: "Recruit's Insignia", count: 6 }
  ],
  lvl3: [
    { id: 202, name: 'Mora', count: 17500 },
    { id: 104311, name: 'Guide to Prosperity', count: 2 },
    { id: 112033, name: "Sergeant's Insignia", count: 3 }
  ],
  lvl4: [
    { id: 202, name: 'Mora', count: 25000 },
    { id: 104311, name: 'Guide to Prosperity', count: 4 },
    { id: 112033, name: "Sergeant's Insignia", count: 4 }
  ],
  lvl5: [
    { id: 202, name: 'Mora', count: 30000 },
    { id: 104311, name: 'Guide to Prosperity', count: 6 },
    { id: 112033, name: "Sergeant's Insignia", count: 6 }
  ],
  lvl6: [
    { id: 202, name: 'Mora', count: 37500 },
    { id: 104311, name: 'Guide to Prosperity', count: 9 },
    { id: 112033, name: "Sergeant's Insignia", count: 9 }
  ],
  lvl7: [
    { id: 202, name: 'Mora', count: 120000 },
    { id: 104312, name: 'Philosophies of Prosperity', count: 4 },
    { id: 112034, name: "Lieutenant's Insignia", count: 4 },
    { id: 113008, name: 'Spirit Locket of Boreas', count: 1 }
  ],
  lvl8: [
    { id: 202, name: 'Mora', count: 260000 },
    { id: 104312, name: 'Philosophies of Prosperity', count: 6 },
    { id: 112034, name: "Lieutenant's Insignia", count: 6 },
    { id: 113008, name: 'Spirit Locket of Boreas', count: 1 }
  ],
  lvl9: [
    { id: 202, name: 'Mora', count: 450000 },
    { id: 104312, name: 'Philosophies of Prosperity', count: 12 },
    { id: 112034, name: "Lieutenant's Insignia", count: 9 },
    { id: 113008, name: 'Spirit Locket of Boreas', count: 2 }
  ],
  lvl10: [
    { id: 202, name: 'Mora', count: 700000 },
    { id: 104312, name: 'Philosophies of Prosperity', count: 16 },
    { id: 112034, name: "Lieutenant's Insignia", count: 12 },
    { id: 113008, name: 'Spirit Locket of Boreas', count: 2 },
    { id: 104319, name: 'Crown of Insight', count: 1 }
  ]
}
```

</details>
<details>
<summary>genshindb.talents('<b>klee'</b>)<b>.passive3</b></summary>

```js
{
  name: 'All Of My Treasures!',
  descriptionRaw: 'Displays the location of nearby <color=#FFD780FF>resources unique to Mondstadt</color> on the mini-map.',
  description: 'Displays the location of nearby resources unique to Mondstadt on the mini-map.'
}
```

</details>
<details>
<summary>genshindb.talents('<b>mona'</b>)<b>.combat1</b></summary>

```js
{
  name: 'Ripple of Fate',
  descriptionRaw: '<color=#FFD780FF>Normal Attack</color>\n' +
    'Performs up to 4 water splash attacks that deal <color=#80C0FFFF>Hydro DMG</color>.\n' +
    '\n' +
    '<color=#FFD780FF>Charged Attack</color>\n' +
    'Consumes a certain amount of Stamina to deal <color=#80C0FFFF>AoE Hydro DMG</color> after a short casting time.\n' +
    '\n' +
    '<color=#FFD780FF>Plunging Attack</color>\n' +
    'Gathering the might of Hydro, Mona plunges towards the ground from mid-air, damaging all opponents in her path. Deals <color=#80C0FFFF>AoE Hydro DMG</color> upon impact with the ground.',
  description: 'Normal Attack\n' +
    'Performs up to 4 water splash attacks that deal Hydro DMG.\n' +
    '\n' +
    'Charged Attack\n' +
    'Consumes a certain amount of Stamina to deal AoE Hydro DMG after a short casting time.\n' +
    '\n' +
    'Plunging Attack\n' +
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
         0.376, 0.4042, 0.4324,
          0.47, 0.4982, 0.5264,
         0.564, 0.6016, 0.6392,
        0.6768, 0.7144,  0.752,
         0.799,  0.846,  0.893
      ],
      param2: [
         0.36, 0.387, 0.414,
         0.45, 0.477, 0.504,
         0.54, 0.576, 0.612,
        0.648, 0.684,  0.72,
        0.765,  0.81, 0.855
      ],
      param3: [
         0.448, 0.4816, 0.5152,
          0.56, 0.5936, 0.6272,
         0.672, 0.7168, 0.7616,
        0.8064, 0.8512,  0.896,
         0.952,  1.008,  1.064
      ],
      param4: [
         0.5616, 0.60372, 0.64584,
          0.702, 0.74412, 0.78624,
         0.8424, 0.89856, 0.95472,
        1.01088, 1.06704,  1.1232,
         1.1934,  1.2636,  1.3338
      ],
      param5: [
          1.4972,  1.60949,
         1.72178,   1.8715,
         1.98379,  2.09608,
          2.2458,  2.39552,
         2.54524,  2.69496,
        2.850669, 3.054288,
        3.257907, 3.461526,
        3.665146
      ],
      param6: [
        50, 50, 50, 50, 50, 50,
        50, 50, 50, 50, 50, 50,
        50, 50, 50
      ],
      param7: [
        0.568288, 0.614544,
          0.6608,  0.72688,
        0.773136,    0.826,
        0.898688, 0.971376,
        1.044064,  1.12336,
        1.202656, 1.281952,
        1.361248, 1.440544,
         1.51984
      ],
      param8: [
        1.136335, 1.228828,
         1.32132, 1.453452,
        1.545944,  1.65165,
        1.796995,  1.94234,
        2.087686, 2.246244,
        2.404802, 2.563361,
        2.721919, 2.880478,
        3.039036
      ],
      param9: [
        1.419344, 1.534872,
          1.6504,  1.81544,
        1.930968,    2.063,
        2.244544, 2.426088,
        2.607632,  2.80568,
        3.003728, 3.201776,
        3.399824, 3.597872,
         3.79592
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
  descriptionRaw: 'Creates an illusory Phantom of Fate from coalesced waterspouts.\n' +
    '\n' +
    '<color=#FFD780FF>Phantom</color>\n' +
    'Has the following special properties:\n' +
    '·Continuously taunts nearby opponents, attracting their fire.\n' +
    '·Continuously deals <color=#80C0FFFF>Hydro DMG</color> to nearby opponents.\n' +
    '·When its duration expires, the Phantom explodes, dealing <color=#80C0FFFF>AoE Hydro DMG</color>.\n' +
    '\n' +
    '<color=#FFD780FF>Hold</color>\n' +
    'Utilizes water currents to move backwards swiftly before conjuring a Phantom.\n' +
    '\n' +
    'Only one Phantom created by Mirror Reflection of Doom can exist at any time.\n' +
    '\n' +
    '<i>Skilled astrologers have always dreamed of using a phantom facsimile of themselves to ward off imminent ill fate, but Mona must be the first to make such a mockery of it in all of Teyvat.</i>',
  description: 'Creates an illusory Phantom of Fate from coalesced waterspouts.\n' +
    '\n' +
    'Phantom\n' +
    'Has the following special properties:\n' +
    '·Continuously taunts nearby opponents, attracting their fire.\n' +
    '·Continuously deals Hydro DMG to nearby opponents.\n' +
    '·When its duration expires, the Phantom explodes, dealing AoE Hydro DMG.\n' +
    '\n' +
    'Hold\n' +
    'Utilizes water currents to move backwards swiftly before conjuring a Phantom.\n' +
    '\n' +
    'Only one Phantom created by Mirror Reflection of Doom can exist at any time.',
  flavorText: 'Skilled astrologers have always dreamed of using a phantom facsimile of themselves to ward off imminent ill fate, but Mona must be the first to make such a mockery of it in all of Teyvat.',
  attributes: {
    labels: [
      'DoT|{param1:F1P}',
      'Explosion DMG|{param2:P}',
      'CD|{param5:F1}s'
    ],
    parameters: {
      param1: [
         0.32, 0.344, 0.368,
          0.4, 0.424, 0.448,
         0.48, 0.512, 0.544,
        0.576, 0.608,  0.64,
         0.68,  0.72,  0.76
      ],
      param2: [
         1.328, 1.4276, 1.5272,
          1.66, 1.7596, 1.8592,
         1.992, 2.1248, 2.2576,
        2.3904, 2.5232,  2.656,
         2.822,  2.988,  3.154
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
  descriptionRaw: '<color=#FFD780FF>Alternate Sprint</color>\n' +
    "Mona cloaks herself within the water's flow, consuming Stamina to move rapidly.\n" +
    '\n' +
    'When under the effect of Illusory Torrent, Mona can move at high speed on water.\n' +
    'Applies the <color=#80C0FFFF>Wet</color> status to nearby opponents when she reappears.\n' +
    '\n' +
    "<i>This is something that Mona can do, but her teacher cannot. Well, but it's not as if her teacher would pursue any matter concerning Hydro Visions anyway...</i>",
  description: 'Alternate Sprint\n' +
    "Mona cloaks herself within the water's flow, consuming Stamina to move rapidly.\n" +
    '\n' +
    'When under the effect of Illusory Torrent, Mona can move at high speed on water.\n' +
    'Applies the Wet status to nearby opponents when she reappears.',
  flavorText: "This is something that Mona can do, but her teacher cannot. Well, but it's not as if her teacher would pursue any matter concerning Hydro Visions anyway...",
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
  descriptionRaw: 'Mona summons the sparkling waves and creates a reflection of the starry sky, applying the Illusory Bubble status to opponents in a large AoE.\n' +
    '\n' +
    '<color=#FFD780FF>Illusory Bubble</color>\n' +
    'Traps opponents inside a pocket of destiny and also makes them <color=#80C0FFFF>Wet</color>. Renders weaker opponents immobile.\n' +
    'When an opponent affected by Illusory Bubble sustains DMG, it has the following effects:\n' +
    '·Applies an Omen to the opponent, which gives a DMG Bonus, also increasing the DMG of the attack that causes it.\n' +
    '·Removes the Illusory Bubble, dealing <color=#80C0FFFF>Hydro</color> DMG in the process.\n' +
    '\n' +
    '<color=#FFD780FF>Omen</color>\n' +
    'During its duration, increases DMG taken by opponents.\n' +
    '\n' +
    '<i>It was from the time that gods first traced the lights in the heavens with their eyes that the notion of "fate" was born.</i>',
  description: 'Mona summons the sparkling waves and creates a reflection of the starry sky, applying the Illusory Bubble status to opponents in a large AoE.\n' +
    '\n' +
    'Illusory Bubble\n' +
    'Traps opponents inside a pocket of destiny and also makes them Wet. Renders weaker opponents immobile.\n' +
    'When an opponent affected by Illusory Bubble sustains DMG, it has the following effects:\n' +
    '·Applies an Omen to the opponent, which gives a DMG Bonus, also increasing the DMG of the attack that causes it.\n' +
    '·Removes the Illusory Bubble, dealing Hydro DMG in the process.\n' +
    '\n' +
    'Omen\n' +
    'During its duration, increases DMG taken by opponents.',
  flavorText: 'It was from the time that gods first traced the lights in the heavens with their eyes that the notion of "fate" was born.',
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
         4.424, 4.7558, 5.0876,
          5.53, 5.8618, 6.1936,
         6.636, 7.0784, 7.5208,
        7.9632, 8.4056,  8.848,
         9.401,  9.954, 10.507
      ],
      param3: [
        -0.42, -0.44, -0.46,
        -0.48,  -0.5, -0.52,
        -0.54, -0.56, -0.58,
         -0.6,  -0.6,  -0.6,
         -0.6,  -0.6,  -0.6
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
        0.42, 0.44, 0.46, 0.48,
         0.5, 0.52, 0.54, 0.56,
        0.58,  0.6,  0.6,  0.6,
         0.6,  0.6,  0.6
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
  'Dahlia',
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
[ 'Amber', 'Collei', 'Dahlia', 'Diona', 'Fischl', 'Traveler (Geo)' ]
```

</details>

## genshindb.constellations(query[, opts])]

<details>
<summary>genshindb.constellations('<b>amber'</b>)</summary>

```js
{
  id: 2101,
  name: 'Amber',
  c1: {
    name: 'One Arrow to Rule Them All',
    descriptionRaw: "Fires 2 arrows per <color=#FFD780FF>Aimed Shot</color>. The second arrow deals 20% of the first arrow's DMG.",
    description: "Fires 2 arrows per Aimed Shot. The second arrow deals 20% of the first arrow's DMG."
  },
  c2: {
    name: 'Bunny Triggered',
    descriptionRaw: "Baron Bunny, new and improved! Hitting Baron Bunny's foot with a fully-charged Aimed Shot manually detonates it.\n" +
      'Explosion via manual detonation deals 200% additional DMG.',
    description: "Baron Bunny, new and improved! Hitting Baron Bunny's foot with a fully-charged Aimed Shot manually detonates it.\n" +
      'Explosion via manual detonation deals 200% additional DMG.'
  },
  c3: {
    name: 'It Burns!',
    descriptionRaw: 'Increases the Level of <color=#FFD780FF>Fiery Rain</color> by 3.\n' +
      'Maximum upgrade level is 15.',
    description: 'Increases the Level of Fiery Rain by 3.\nMaximum upgrade level is 15.'
  },
  c4: {
    name: "It's Not Just Any Doll...",
    descriptionRaw: "Decreases <color=#FFD780FF>Explosive Puppet</color>'s CD by 20%. Adds 1 additional charge.",
    description: "Decreases Explosive Puppet's CD by 20%. Adds 1 additional charge."
  },
  c5: {
    name: "It's Baron Bunny!",
    descriptionRaw: 'Increases the Level of <color=#FFD780FF>Explosive Puppet</color> by 3.\n' +
      'Maximum upgrade level is 15.',
    description: 'Increases the Level of Explosive Puppet by 3.\n' +
      'Maximum upgrade level is 15.'
  },
  c6: {
    name: 'Wildfire',
    descriptionRaw: "<color=#FFD780FF>Fiery Rain</color> increases all party members' Movement SPD by 15% and ATK by 15% for 10s.",
    description: "Fiery Rain increases all party members' Movement SPD by 15% and ATK by 15% for 10s."
  },
  images: {
    filename_c1: 'UI_Talent_S_Ambor_01',
    filename_c2: 'UI_Talent_S_Ambor_02',
    filename_c3: 'UI_Talent_U_Ambor_02',
    filename_c4: 'UI_Talent_S_Ambor_03',
    filename_c5: 'UI_Talent_U_Ambor_01',
    filename_c6: 'UI_Talent_S_Ambor_04',
    filename_constellation: 'Eff_UI_Talent_Ambor'
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
  descriptionRaw: 'Increases the Level of <color=#FFD780FF>Foul Legacy: Raging Tide</color> by 3.\n' +
    'Maximum upgrade level is 15.',
  description: 'Increases the Level of Foul Legacy: Raging Tide by 3.\n' +
    'Maximum upgrade level is 15.'
}
```

</details>
<details>
<summary>genshindb.constellations('<b>traveler geo'</b>)</summary>

```js
{
  id: 706,
  name: 'Traveler (Geo)',
  c1: {
    name: 'Invincible Stonewall',
    descriptionRaw: 'Party members within the radius of <color=#FFD780FF>Wake of Earth</color> have their CRIT Rate increased by 10% and have increased resistance against interruption.',
    description: 'Party members within the radius of Wake of Earth have their CRIT Rate increased by 10% and have increased resistance against interruption.'
  },
  c2: {
    name: 'Rockcore Meltdown',
    descriptionRaw: 'When the meteorite created by <color=#FFD780FF>Starfell Sword</color> is destroyed, it will also explode, dealing additional <color=#FFE699FF>AoE Geo DMG</color> equal to the amount of damage dealt by Starfell Sword.',
    description: 'When the meteorite created by Starfell Sword is destroyed, it will also explode, dealing additional AoE Geo DMG equal to the amount of damage dealt by Starfell Sword.'
  },
  c3: {
    name: 'Will of the Rock',
    descriptionRaw: 'Increases the Level of <color=#FFD780FF>Wake of Earth</color> by 3.\n' +
      'Maximum upgrade level is 15.',
    description: 'Increases the Level of Wake of Earth by 3.\nMaximum upgrade level is 15.'
  },
  c4: {
    name: 'Reaction Force',
    descriptionRaw: 'The shockwave triggered by <color=#FFD780FF>Wake of Earth</color> regenerates 5 Energy for every opponent hit.\n' +
      'A maximum of 25 Energy can be regenerated in this manner at any one time.',
    description: 'The shockwave triggered by Wake of Earth regenerates 5 Energy for every opponent hit.\n' +
      'A maximum of 25 Energy can be regenerated in this manner at any one time.'
  },
  c5: {
    name: 'Meteorite Impact',
    descriptionRaw: 'Increases the Level of <color=#FFD780FF>Starfell Sword</color> by 3.\n' +
      'Maximum upgrade level is 15.',
    description: 'Increases the Level of Starfell Sword by 3.\nMaximum upgrade level is 15.'
  },
  c6: {
    name: 'Everlasting Boulder',
    descriptionRaw: 'The barrier created by <color=#FFD780FF>Wake of Earth</color> lasts 5s longer.\n' +
      'The meteorite created by <color=#FFD780FF>Starfell Sword</color> lasts 10s longer.',
    description: 'The barrier created by Wake of Earth lasts 5s longer.\n' +
      'The meteorite created by Starfell Sword lasts 10s longer.'
  },
  images: {
    constellation2: 'Eff_UI_Talent_PlayerGirl_Rock',
    filename_c1: 'UI_Talent_S_PlayerRock_01',
    filename_c2: 'UI_Talent_S_PlayerRock_02',
    filename_c3: 'UI_Talent_U_PlayerRock_02',
    filename_c4: 'UI_Talent_S_PlayerRock_03',
    filename_c5: 'UI_Talent_U_PlayerRock_01',
    filename_c6: 'UI_Talent_S_PlayerRock_04',
    filename_constellation: 'Eff_UI_Talent_PlayerBoy_Rock',
    filename_constellation2: 'Eff_UI_Talent_PlayerGirl_Rock'
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
  'Absolution',
  'Akuoumaru',
  'Alley Hunter',
  'Amenoma Kageuchi',
  "Amos' Bow",
  "Apprentice's Notes",
  'Aqua Simulacra',
  'Aquila Favonia',
  'Ash-Graven Drinking Horn',
  "Astral Vulture's Crimson Plumage",
  'A Thousand Blazing Suns',
  'A Thousand Floating Dreams',
  'Azurelight',
  'Ballad of the Boundless Blue',
  'Ballad of the Fjords',
  'Beacon of the Reed Sea',
  "Beginner's Protector",
  'Blackcliff Agate',
  'Blackcliff Longsword',
  'Blackcliff Pole',
  'Blackcliff Slasher',
  'Blackcliff Warbow',
  'Blackmarrow Lantern',
  'Black Tassel',
  'Bloodsoaked Ruins',
  'Bloodtainted Greatsword',
  'Calamity of Eshu',
  'Calamity Queller',
  'Cashflow Supervision',
  'Chain Breaker',
  'Cinnabar Spindle',
  'Cloudforged',
  'Compound Bow',
  'Cool Steel',
  "Crane's Echoing Call",
  'Crescent Pike',
  "Crimson Moon's Semblance",
  'Dark Iron Sword',
  'Deathmatch',
  'Debate Club',
  'Dialogues of the Desert Sages',
  'Dodoco Tales',
  "Dragon's Bane",
  'Dragonspine Spear',
  'Dull Blade',
  'Earth Shaker',
  'Elegy for the End',
  'Emerald Orb',
  'End of the Line',
  'Engulfing Lightning',
  'Etherlight Spindlelute',
  'Everlasting Moonglow',
  'Eye of Perception',
  'Fading Twilight',
  'Fang of the Mountain King',
  'Favonius Codex',
  'Favonius Greatsword',
  'Favonius Lance',
  'Favonius Sword',
  'Favonius Warbow',
  'Ferrous Shadow',
  'Festering Desire',
  'Fillet Blade',
  'Finale of the Deep',
  'Flame-Forged Insight',
  'Fleuve Cendre Ferryman',
  'Flower-Wreathed Feathers',
  'Flowing Purity',
  'Flute of Ezpitzal',
  'Footprint of the Rainbow',
  'Forest Regalia',
  'Fractured Halo',
  'Freedom-Sworn',
  'Frostbearer',
  'Fruitful Hook',
  'Fruit of Fulfillment',
  'Hakushin Ring',
  'Halberd',
  'Hamayumi',
  'Haran Geppaku Futsu',
  'Harbinger of Dawn',
  "Hunter's Bow",
  "Hunter's Path",
  'Ibis Piercer',
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
  'Lumidouce Elegy',
  'Luxurious Sea-Lord',
  ... 124 more items
]
```

</details>
<details>
<summary>genshindb.weapons('<b>lost prayers'</b>)</summary>

```js
{
  id: 14502,
  name: 'Lost Prayer to the Sacred Winds',
  description: 'An educational tome written by anonymous early inhabitants who worshiped the wind. It has been blessed by the wind for its faithfulness and influence over the millennia.',
  descriptionRaw: 'An educational tome written by anonymous early inhabitants who worshiped the wind. It has been blessed by the wind for its faithfulness and influence over the millennia.',
  weaponType: 'WEAPON_CATALYST',
  weaponText: 'Catalyst',
  rarity: 5,
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
  baseAtkValue: 45.9364,
  mainStatType: 'FIGHT_PROP_CRITICAL',
  mainStatText: 'CRIT Rate',
  baseStatText: '7.2%',
  effectName: 'Boundless Blessing',
  effectTemplateRaw: 'Increases Movement SPD by 10%. When in battle, gain a <color=#99FFFFFF>{0}</color> Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.',
  r1: {
    description: 'Increases Movement SPD by 10%. When in battle, gain an 8% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.',
    values: [ '8%' ]
  },
  r2: {
    description: 'Increases Movement SPD by 10%. When in battle, earn a 10% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.',
    values: [ '10%' ]
  },
  r3: {
    description: 'Increases Movement SPD by 10%. When in battle, gain a 12% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.',
    values: [ '12%' ]
  },
  r4: {
    description: 'Increases Movement SPD by 10%. When in battle, gain a 14% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.',
    values: [ '14%' ]
  },
  r5: {
    description: 'Increases Movement SPD by 10%. When in battle, gain a 16% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.',
    values: [ '16%' ]
  },
  costs: {
    ascend1: [
      { id: 202, name: 'Mora', count: 10000 },
      {
        id: 114009,
        name: 'Fetters of the Dandelion Gladiator',
        count: 5
      },
      { id: 112023, name: 'Chaos Device', count: 5 },
      { id: 112002, name: 'Slime Condensate', count: 3 }
    ],
    ascend2: [
      { id: 202, name: 'Mora', count: 20000 },
      {
        id: 114010,
        name: 'Chains of the Dandelion Gladiator',
        count: 5
      },
      { id: 112023, name: 'Chaos Device', count: 18 },
      { id: 112002, name: 'Slime Condensate', count: 12 }
    ],
    ascend3: [
      { id: 202, name: 'Mora', count: 30000 },
      {
        id: 114010,
        name: 'Chains of the Dandelion Gladiator',
        count: 9
      },
      { id: 112024, name: 'Chaos Circuit', count: 9 },
      { id: 112003, name: 'Slime Secretions', count: 9 }
    ],
    ascend4: [
      { id: 202, name: 'Mora', count: 45000 },
      {
        id: 114011,
        name: 'Shackles of the Dandelion Gladiator',
        count: 5
      },
      { id: 112024, name: 'Chaos Circuit', count: 18 },
      { id: 112003, name: 'Slime Secretions', count: 14 }
    ],
    ascend5: [
      { id: 202, name: 'Mora', count: 55000 },
      {
        id: 114011,
        name: 'Shackles of the Dandelion Gladiator',
        count: 9
      },
      { id: 112025, name: 'Chaos Core', count: 14 },
      { id: 112004, name: 'Slime Concentrate', count: 9 }
    ],
    ascend6: [
      { id: 202, name: 'Mora', count: 65000 },
      {
        id: 114012,
        name: 'Dream of the Dandelion Gladiator',
        count: 6
      },
      { id: 112025, name: 'Chaos Core', count: 27 },
      { id: 112004, name: 'Slime Concentrate', count: 18 }
    ]
  },
  images: {
    icon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_EquipIcon_Catalyst_Fourwinds.png',
    awakenicon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_EquipIcon_Catalyst_Fourwinds_Awaken.png',
    filename_icon: 'UI_EquipIcon_Catalyst_Fourwinds',
    filename_awakenIcon: 'UI_EquipIcon_Catalyst_Fourwinds_Awaken',
    filename_gacha: 'UI_Gacha_EquipIcon_Catalyst_Fourwinds',
    mihoyo_icon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_EquipIcon_Catalyst_Fourwinds.png',
    mihoyo_awakenIcon: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_EquipIcon_Catalyst_Fourwinds_Awaken.png'
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
    { id: 202, name: 'Mora', count: 10000 },
    { id: 114021, name: 'Grain of Aerosiderite', count: 5 },
    { id: 112020, name: 'Dead Ley Line Branch', count: 5 },
    { id: 112002, name: 'Slime Condensate', count: 3 }
  ],
  ascend2: [
    { id: 202, name: 'Mora', count: 20000 },
    { id: 114022, name: 'Piece of Aerosiderite', count: 5 },
    { id: 112020, name: 'Dead Ley Line Branch', count: 18 },
    { id: 112002, name: 'Slime Condensate', count: 12 }
  ],
  ascend3: [
    { id: 202, name: 'Mora', count: 30000 },
    { id: 114022, name: 'Piece of Aerosiderite', count: 9 },
    { id: 112021, name: 'Dead Ley Line Leaves', count: 9 },
    { id: 112003, name: 'Slime Secretions', count: 9 }
  ],
  ascend4: [
    { id: 202, name: 'Mora', count: 45000 },
    { id: 114023, name: 'Bit of Aerosiderite', count: 5 },
    { id: 112021, name: 'Dead Ley Line Leaves', count: 18 },
    { id: 112003, name: 'Slime Secretions', count: 14 }
  ],
  ascend5: [
    { id: 202, name: 'Mora', count: 55000 },
    { id: 114023, name: 'Bit of Aerosiderite', count: 9 },
    { id: 112022, name: 'Ley Line Sprout', count: 14 },
    { id: 112004, name: 'Slime Concentrate', count: 9 }
  ],
  ascend6: [
    { id: 202, name: 'Mora', count: 65000 },
    { id: 114024, name: 'Chunk of Aerosiderite', count: 6 },
    { id: 112022, name: 'Ley Line Sprout', count: 27 },
    { id: 112004, name: 'Slime Concentrate', count: 18 }
  ]
}
```

</details>
<details>
<summary>genshindb.weapons('<b>iron point'</b>)<b>.costs</b></summary>

```js
{
  ascend1: [
    { id: 202, name: 'Mora', count: 5000 },
    {
      id: 114009,
      name: 'Fetters of the Dandelion Gladiator',
      count: 1
    },
    { id: 112023, name: 'Chaos Device', count: 1 },
    { id: 112008, name: 'Divining Scroll', count: 1 }
  ],
  ascend2: [
    { id: 202, name: 'Mora', count: 5000 },
    { id: 114010, name: 'Chains of the Dandelion Gladiator', count: 1 },
    { id: 112023, name: 'Chaos Device', count: 5 },
    { id: 112008, name: 'Divining Scroll', count: 4 }
  ],
  ascend3: [
    { id: 202, name: 'Mora', count: 10000 },
    { id: 114010, name: 'Chains of the Dandelion Gladiator', count: 3 },
    { id: 112024, name: 'Chaos Circuit', count: 3 },
    { id: 112009, name: 'Sealed Scroll', count: 3 }
  ],
  ascend4: [
    { id: 202, name: 'Mora', count: 15000 },
    {
      id: 114011,
      name: 'Shackles of the Dandelion Gladiator',
      count: 1
    },
    { id: 112024, name: 'Chaos Circuit', count: 5 },
    { id: 112009, name: 'Sealed Scroll', count: 4 }
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
  'The Viridescent Hunt', 'Wolf-Fang'
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
  'Talking Stick',
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
{ level: 49, ascension: 2, attack: 127.972235, specialized: 0 }
```

</details>
<details>
<summary>genshindb.weapons('<b>sac sword'</b>)<b>.stats(80, '+')</b></summary>

```js
{
  level: 80,
  ascension: 6,
  attack: 426.5607258,
  specialized: 0.5586652700000001
}
```

</details>
<details>
<summary>genshindb.weapons('<b>wolf grave'</b>)<b>.stats(90)</b></summary>

```js
{
  level: 90,
  ascension: 6,
  attack: 608.0745972,
  specialized: 0.49615200000000004
}
```

</details>

## genshindb.materials(query[, opts])]

<details>
<summary>genshindb.materials('<b>ballad'</b>)</summary>

```js
{
  id: 104308,
  name: 'Guide to Ballad',
  rarity: 3,
  sortRank: 13103,
  description: 'Talent Level-Up material.\n' +
    'Poetry is the soul of the land of the wind.\n' +
    'Poetry is the manifestations of the will to encourage. In the dark days, the gales in the streets and alleyways whisper words of fury, like the battle drums, like the low rumbling before the storm.',
  category: 'AVATAR_MATERIAL',
  typeText: 'Character Talent Material',
  dropDomainId: 4231,
  dropDomainName: 'Domain of Mastery: Realm of Slumber',
  daysOfWeek: [ 'Wednesday', 'Saturday', 'Sunday' ],
  sources: [ 'Placeholder - Craftable Amount: {0}' ],
  images: { filename_icon: 'UI_ItemIcon_104308' },
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
  'Guide to Conflict',
  'Guide to Contention',
  'Guide to Diligence',
  'Guide to Elegance',
  'Guide to Elysium',
  'Guide to Equity',
  'Guide to Freedom',
  'Guide to Gold',
  'Guide to Ingenuity',
  'Guide to Justice',
  'Guide to Kindling',
  'Guide to Light',
  'Guide to Moonlight',
  'Guide to Order',
  'Guide to Praxis',
  'Guide to Prosperity',
  'Guide to Resistance',
  'Guide to Transience',
  'Guide to Vagrancy',
  'Philosophies of Admonition',
  'Philosophies of Ballad',
  'Philosophies of Conflict',
  'Philosophies of Contention',
  'Philosophies of Diligence',
  'Philosophies of Elegance',
  'Philosophies of Elysium',
  'Philosophies of Equity',
  'Philosophies of Freedom',
  'Philosophies of Gold',
  'Philosophies of Ingenuity',
  'Philosophies of Justice',
  'Philosophies of Kindling',
  'Philosophies of Light',
  'Philosophies of Moonlight',
  'Philosophies of Order',
  'Philosophies of Praxis',
  'Philosophies of Prosperity',
  'Philosophies of Resistance',
  'Philosophies of Transience',
  'Philosophies of Vagrancy',
  'Teachings of Admonition',
  'Teachings of Ballad',
  'Teachings of Conflict',
  'Teachings of Contention',
  'Teachings of Diligence',
  'Teachings of Elegance',
  'Teachings of Elysium',
  'Teachings of Equity',
  'Teachings of Freedom',
  'Teachings of Gold',
  'Teachings of Ingenuity',
  'Teachings of Justice',
  'Teachings of Kindling',
  'Teachings of Light',
  'Teachings of Moonlight',
  'Teachings of Order',
  'Teachings of Praxis',
  'Teachings of Prosperity',
  'Teachings of Resistance',
  'Teachings of Transience',
  'Teachings of Vagrancy'
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
  'Azuregaze Crystal-Eye',
  'Betta',
  'Bitter Pufferfish',
  'Blazing Axehead Fish',
  'Blazing Heartfeather Bass',
  'Brown Shirakodai',
  'Common Axehead Fish',
  'Crystalfish',
  'Dawncatcher',
  'Divda Ray',
  'Diving Rapidfighting Fish',
  'Dusk Sunfish',
  'Floral Rapidfighting Fish',
  'Formalo Ray',
  'Frosted Axehead Fish',
  'Glaze Medaka',
  'Golden Koi',
  'Greenwave Sunfish',
  'Halcyon Jade Axe Marlin',
  'Jade Heartfeather Bass',
  'Lazurite Axe Marlin',
  'Lunged Stickleback',
  'Magma Rapidfighting Fish',
  'Maintenance Mek: Gold Leader',
  'Maintenance Mek: Initial Configuration',
  'Maintenance Mek: Platinum Collection',
  'Maintenance Mek: Situation Controller',
  'Maintenance Mek: Water Body Cleaner',
  'Medaka',
  'Neon Mauler Shark',
  'Nightgaze Crystal-Eye',
  'Peach of the Deep Waves',
  'Phony Phlogiston Unihornfish',
  'Pseudoshark Unihornfish',
  'Pufferfish',
  'Purple Shirakodai',
  'Raimei Angelfish',
  'Rippling Heartfeather Bass',
  'Rusty Koi',
  'Sandstorm Angler',
  'Secret Source Scout Sweeper',
  'Snowstrider',
  'Streaming Axe Marlin',
  'Sunset Cloud Angler',
  'Sweet-Flower Medaka',
  'Tea-Colored Shirakodai',
  'True Fruit Angler',
  'Veggie Mauler Shark',
  'Venomspine Fish'
]
```

</details>
<details>
<summary>genshindb.materials('<b>weapon material', { matchCategories: true, verboseCategories: true }</b>)<b>.filter(ele => ele.rarity === "2").map(ele => ele.name)</b></summary>

```js
[]
```

</details>
<details>
<summary>genshindb.materials('<b>dvalin sigh'</b>)</summary>

```js
{
  id: 113005,
  name: "Dvalin's Sigh",
  rarity: 5,
  sortRank: 11101,
  description: 'A bit of power taken from the whirlwinds evoked by the Dragon of the East.\n' +
    'Beautiful and transparent, both trade winds and tornadoes will work in his name. The winds move as his companion, his voice, and his freedom.\n' +
    'His enemies are the thousands who stand against the wind.',
  category: 'AVATAR_MATERIAL',
  typeText: 'Character Level-Up Material',
  sources: [
    'Lv. 70+ Stormterror Challenge Reward',
    'Obtained from the Crafting Bench Conversion Tab'
  ],
  images: { filename_icon: 'UI_ItemIcon_113005' },
  version: ''
}
```

</details>
<details>
<summary>genshindb.materials('<b>iron'</b>)</summary>

```js
{
  id: 101001,
  name: 'Iron Chunk',
  sortRank: 301,
  description: 'This iron chunk can be turned into a multitude of handy items in the hands of a skilled craftsman.',
  category: 'EXCHANGE',
  typeText: 'Forging Ore',
  sources: [ 'Found in the wild' ],
  images: { filename_icon: 'UI_ItemIcon_101001' },
  version: ''
}
```

</details>
<details>
<summary>genshindb.materials('<b>monday', { matchCategories: true }</b>)</summary>

```js
[
  'Artful Device Fragment',
  'Artful Device Inheritance',
  'Artful Device Replica',
  'Artful Device Wish',
  "Blazing Sacrificial Heart's Hesitance",
  "Blazing Sacrificial Heart's Resolve",
  "Blazing Sacrificial Heart's Splendor",
  "Blazing Sacrificial Heart's Terror",
  'Chapter of an Ancient Chord',
  'Copper Talisman of the Forest Dew',
  'Coral Branch of a Distant Sea',
  "Debris of Decarabian's City",
  'Divine Body from Guyun',
  'Echo of an Ancient Chord',
  'Fragment of an Ancient Chord',
  "Fragment of Decarabian's Epic",
  'Golden Branch of a Distant Sea',
  'Golden Talisman of the Forest Dew',
  'Guide to Admonition',
  'Guide to Contention',
  'Guide to Equity',
  'Guide to Freedom',
  'Guide to Moonlight',
  'Guide to Prosperity',
  'Guide to Transience',
  'Iron Talisman of the Forest Dew',
  'Jade Branch of a Distant Sea',
  'Jeweled Branch of a Distant Sea',
  'Luminous Sands from Guyun',
  'Lustrous Stone from Guyun',
  'Movement of an Ancient Chord',
  'Philosophies of Admonition',
  'Philosophies of Contention',
  'Philosophies of Equity',
  'Philosophies of Freedom',
  'Philosophies of Moonlight',
  'Philosophies of Prosperity',
  'Philosophies of Transience',
  'Relic from Guyun',
  "Scattered Piece of Decarabian's Dream",
  'Silver Talisman of the Forest Dew',
  'Teachings of Admonition',
  'Teachings of Contention',
  'Teachings of Equity',
  'Teachings of Freedom',
  'Teachings of Moonlight',
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
  'Ajilenakh Nut',   'Almond',       'Bacon',           'Bamboo Shoot',
  'Berry',           'Bird Egg',     'Butter',          'Cabbage',
  'Carrot',          'Cheese',       'Chenyu Adeptea',  'Chilled Meat',
  'Coffee Beans',    'Crab',         'Crab Roe',        'Cream',
  'Dried Fish',      'Eel Meat',     'Fermented Juice', 'Fish',
  'Flour',           'Fowl',         'Glabrous Beans',  'Grainfruit',
  'Ham',             'Harra Fruit',  'Jam',             'Lakkaberry',
  'Lavender Melon',  'Lotus Head',   'Marcotte',        'Matsutake',
  'Midsommar Berry', 'Milk',         'Mint',            'Mushroom',
  'Mysterious Meat', 'Onion',        'Pepper',          'Pinecone',
  'Potato',          'Radish',       'Raw Meat',        'Red Berryshroom',
  'Rice',            'Rye',          'Rye Flour',       'Salt',
  'Sausage',         'Seagrass',     'Shrimp Meat',     'Silver Lotus',
  'Smetana',         'Smoked Fish',  'Smoked Fowl',     'Snapdragon',
  'Spice',           'Spinel Fruit', 'Sugar',           'Sumeru Rose',
  'Sweet Flower',    'Tidalga',      'Tofu',            'Tomato',
  'Wheat',           'Zaytun Peach'
]
```

</details>
<details>
<summary>genshindb.materials('<b>liyue', { matchCategories: true }</b>)</summary>

```js
[
  'Clearwater Jade',
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
  id: 15018,
  rarityList: [ 4, 5 ],
  name: 'Pale Flame',
  effect2Pc: 'Physical DMG is increased by 25%.',
  effect4Pc: 'When an Elemental Skill hits an opponent, ATK is increased by 9% for 7s. This effect stacks up to 2 times and can be triggered once every 0.3s. Once 2 stacks are reached, the 2-set effect is increased by 100%.',
  flower: {
    name: 'Stainless Bloom',
    relicType: 'EQUIP_BRACER',
    relicText: 'Flower of Life',
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
    relicType: 'EQUIP_NECKLACE',
    relicText: 'Plume of Death',
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
    relicType: 'EQUIP_SHOES',
    relicText: 'Sands of Eon',
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
    relicType: 'EQUIP_RING',
    relicText: 'Goblet of Eonothem',
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
    relicType: 'EQUIP_DRESS',
    relicText: 'Circlet of Logos',
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
    filename_flower: 'UI_RelicIcon_15018_4',
    filename_plume: 'UI_RelicIcon_15018_2',
    filename_sands: 'UI_RelicIcon_15018_5',
    filename_goblet: 'UI_RelicIcon_15018_1',
    filename_circlet: 'UI_RelicIcon_15018_3',
    mihoyo_flower: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15018_4.png',
    mihoyo_plume: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15018_2.png',
    mihoyo_sands: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15018_5.png',
    mihoyo_goblet: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15018_1.png',
    mihoyo_circlet: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15018_3.png'
  },
  version: '1.5'
}
```

</details>

## genshindb.foods(query[, opts])]

<details>
<summary>genshindb.foods('<b>temptation'</b>)</summary>

```js
{
  id: 5101,
  name: "Adeptus' Temptation",
  rarity: 5,
  foodtype: 'NORMAL',
  filterType: 'COOK_FOOD_ATTACK',
  filterText: 'ATK-Boosting Dish',
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
    { id: 110005, name: 'Ham', count: 4 },
    { id: 100073, name: 'Crab', count: 3 },
    { id: 100093, name: 'Shrimp Meat', count: 3 },
    { id: 100063, name: 'Matsutake', count: 3 }
  ],
  images: {
    filename_buff: 'UI_Buff_Item_Atk_Add',
    filename_icon: 'UI_ItemIcon_108123'
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
  'Blubbercream',
  'Bountiful Year',
  'Butter Crab',
  'Candy Shells',
  'Chicken Tofu Pudding',
  'Chili-Mince Cornbread Buns',
  'Drunken Plums in Snow',
  'Eight-Treasure Duck',
  'Fontinalia Mousse',
  'Gateau Debord: Magnifique',
  'Glittering Gemstones',
  'Golden Apple Pastry',
  'Golden Crab',
  'Golden Fried Chicken',
  'Haggis',
  "Harvest's Boon",
  "Hot Spring O'Clock",
  'Jade Parcels',
  "Meat-Lover's Feast",
  "Meat Lovers' Mushroom Pizza",
  'Mini Asha Pockets',
  'Moon Pie',
  'Mystique Soup',
  'Petit Gateau Debord: Revised Version',
  'Puff Pops',
  'Sashimi Platter',
  'Sing Your Heart Out',
  'Stormcrest Pie',
  'Super Magnificent Pizza',
  'Tandoori Roast Chicken',
  "Thick-Cut Duelist's Burger",
  'Tianshu Meat',
  'Vessie Chicken'
]
```

</details>
<details>
<summary>genshindb.foods('<b>def', { matchCategories: true }</b>)</summary>

```js
[
  'A Leisurely Sip',
  'A Prize Catch',
  'Biryani',
  'Blubbercream',
  'Borderland Crispbread',
  'Bubblemilk Pie',
  'Butter Crab',
  'Calla Lily Seafood Soup',
  'Candied Ajilenakh Nut',
  'Candy Shells',
  'Cassoulet',
  'Cheesy Crab Hotpot',
  'Chili-Mince Cornbread Buns',
  'Conch Madeleine',
  'Dew-Dipped Shrimp',
  'Drunken Plums in Snow',
  'Eight-Treasure Duck',
  'Emotional Support',
  "Feast-O's",
  "Fisherman's Toast",
  'Fish-Flavored Toast',
  'Fontainian Foie Gras',
  'Fontainian Onion Soup',
  "Forest Watcher's Choice",
  'Fried Shrimp Beanballs',
  'Fruits of the Festival',
  'Gilded Tajine',
  'Golden Crab',
  'Goldflame Tajine',
  'Grainfruit Wrap',
  'Guhua Fish & Lamb Soup',
  'Haggis',
  'Halvamazd',
  'Heat-Quelling Soup',
  'Jade Fruit Soup',
  'Jewelry Soup',
  'Lakkaberry Krumkakes',
  'La Lettre a Focalors',
  'Lotus Flower Crisp',
  'Minty Fruit Tea',
  'Moon Pie',
  'Mushroom Hodgepodge',
  'Pass the Luck',
  '"Pour la Justice"',
  'Quiet Elegance',
  'Rice Cake Soup',
  'Right at Home',
  'Sakura Shrimp Crackers',
  'Sakura Tempura',
  'Shimi Chazuke',
  'Shrimp Bisque',
  "Sin: The Kind that Doesn't Need to be Dealt With",
  'Stir-Fried Shrimp',
  'Stormcrest Pie',
  'Sunshine Sprat',
  'The Palace Jewels',
  'Thunderclap Slash!',
  'Triple-Layered Consommé',
  'Unagi Chazuke',
  'Wakatakeni',
  'Woodland Dream',
  'Xocoatl'
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
  'Grainfruit Meat Soup',
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
  id: 10000016,
  name: '"Once Upon a Time in Mondstadt"',
  rarity: 3,
  foodtype: 'SPECIALTY',
  filterType: 'COOK_FOOD_ATTACK',
  filterText: 'ATK-Boosting Dish',
  effect: "Increases all party members' CRIT Rate by 20% and CRIT DMG by 20% for 300s. In Co-Op Mode, this effect only applies to your own character(s).",
  description: "Diluc's specialty. Feast your eyes and then your stomach upon this delicacy as the soft ribs melt in your mouth. Who knew Diluc was able to cook this well?",
  baseDishId: 3008,
  baseDishName: `"Pile 'Em Up"`,
  characterId: 10000016,
  characterName: 'Diluc',
  ingredients: [
    { id: 100061, name: 'Raw Meat', count: 3 },
    { id: 100080, name: 'Potato', count: 3 },
    { id: 100055, name: 'Small Lamp Grass', count: 1 },
    { id: 110009, name: 'Cheese', count: 1 }
  ],
  images: {
    filename_buff: 'UI_Buff_Item_Atk_CritRate',
    filename_icon: 'UI_ItemIcon_108058'
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
  id: 5254,
  name: 'Domain of Mastery: Altar of Flames I',
  regionId: 2,
  regionName: 'Liyue',
  entranceId: 46,
  entranceName: 'Taishan Mansion',
  domainType: 'UI_ABYSSUS_AVATAR_PROUD',
  domainText: 'Talent Level-Up Material',
  description: 'A massive amount of Pyro energy is coursing through this scorching ancient sacrificial altar.\n' +
    'You will get scorched by merely being here.\n' +
    'You shall earn Talent level-up materials, if — and only if — you can pass the trial.',
  recommendedLevel: 38,
  recommendedElements: [ 'Hydro', 'Cryo', 'Electro' ],
  daysOfWeek: [ 'Monday', 'Thursday', 'Sunday' ],
  unlockRank: 25,
  rewardPreview: [
    { id: 102, name: 'Adventure EXP', count: 100 },
    { id: 202, name: 'Mora', count: 1575 },
    { id: 105, name: 'Companionship EXP', count: 15 },
    { id: 104310, name: 'Teachings of Prosperity' }
  ],
  disorder: [
    'Your character will be periodically inflicted with Smoldering Flames, causing you to take Pyro DMG until the inflicted Pyro element is removed.'
  ],
  monsterList: [
    { id: 20011201, name: 'Pyro Slime' },
    { id: 20011301, name: 'Large Pyro Slime' }
  ],
  images: { filename_image: 'UI_DungeonPic_Fire' },
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
  'Domain of Blessing: Deepfire Construct I',
  'Domain of Blessing: Deepfire Construct II',
  'Domain of Blessing: Deepfire Construct III',
  'Domain of Blessing: Deepfire Construct IV',
  'Domain of Blessing: Desert Citadel I',
  'Domain of Blessing: Desert Citadel II',
  'Domain of Blessing: Desert Citadel III',
  'Domain of Blessing: Desert Citadel IV',
  'Domain of Blessing: Harmony I',
  'Domain of Blessing: Harmony II',
  'Domain of Blessing: Harmony III',
  'Domain of Blessing: Harmony IV',
  'Domain of Blessing: Machine Nest I',
  'Domain of Blessing: Machine Nest II',
  'Domain of Blessing: Machine Nest III',
  'Domain of Blessing: Machine Nest IV',
  'Domain of Blessing: The Burning Gauntlet I',
  'Domain of Blessing: The Burning Gauntlet II',
  'Domain of Blessing: The Burning Gauntlet III',
  'Domain of Forgery: Artisanship I',
  'Domain of Forgery: Artisanship II',
  'Domain of Forgery: Artisanship III',
  'Domain of Forgery: Artisanship IV',
  'Domain of Forgery: Attentive Observation I',
  'Domain of Forgery: Attentive Observation II',
  'Domain of Forgery: Attentive Observation III',
  'Domain of Forgery: Curious Contraptions I',
  'Domain of Forgery: Curious Contraptions II',
  'Domain of Forgery: Curious Contraptions III',
  'Domain of Forgery: Curious Contraptions IV',
  'Domain of Forgery: Estimation I',
  'Domain of Forgery: Estimation II',
  'Domain of Forgery: Estimation III',
  'Domain of Forgery: Robotic Ruse I',
  'Domain of Forgery: Robotic Ruse II',
  'Domain of Forgery: Robotic Ruse III',
  'Domain of Forgery: Robotic Ruse IV',
  'Domain of Forgery: Scrying Shadows I',
  'Domain of Forgery: Scrying Shadows II',
  'Domain of Forgery: Scrying Shadows III',
  'Domain of Mastery: Myriad Illusions I',
  'Domain of Mastery: Myriad Illusions II',
  'Domain of Mastery: Myriad Illusions III',
  'Domain of Mastery: Return I',
  'Domain of Mastery: Return II',
  'Domain of Mastery: Return III',
  'Domain of Mastery: Sublime Turning I',
  'Domain of Mastery: Sublime Turning II',
  'Domain of Mastery: Sublime Turning III'
]
```

</details>
<details>
<summary>genshindb.domains('<b>relic', { matchCategories: true }</b>)</summary>

```js
[
  'Domain of Forgery: Thundercloud Altar III',
  'Domain of Forgery: Thundercloud Altar IV'
]
```

</details>
<details>
<summary>genshindb.domains('<b>wednesday', { matchCategories: true }</b>)</summary>

```js
[
  'Domain of Forgery: Curious Contraptions I',
  'Domain of Forgery: Curious Contraptions II',
  'Domain of Forgery: Curious Contraptions III',
  'Domain of Forgery: Curious Contraptions IV',
  'Domain of Forgery: Estimation I',
  'Domain of Forgery: Estimation II',
  'Domain of Forgery: Estimation III',
  'Domain of Forgery: Estimation IV',
  'Domain of Forgery: Leading Karma I',
  'Domain of Forgery: Leading Karma II',
  'Domain of Forgery: Leading Karma III',
  'Domain of Forgery: Leading Karma IV',
  'Domain of Forgery: Lunar Oblation I',
  'Domain of Forgery: Lunar Oblation II',
  'Domain of Forgery: Lunar Oblation III',
  'Domain of Forgery: Lunar Oblation IV',
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
  'Domain of Mastery: Chiming Recitation I',
  'Domain of Mastery: Chiming Recitation II',
  'Domain of Mastery: Chiming Recitation III',
  'Domain of Mastery: Chiming Recitation IV',
  'Domain of Mastery: Circle of Embers I',
  'Domain of Mastery: Circle of Embers II',
  'Domain of Mastery: Circle of Embers III',
  'Domain of Mastery: Circle of Embers IV',
  'Domain of Mastery: Overturned Roost I',
  'Domain of Mastery: Overturned Roost II',
  'Domain of Mastery: Overturned Roost III',
  'Domain of Mastery: Overturned Roost IV',
  'Domain of Mastery: Realm of Slumber I',
  'Domain of Mastery: Realm of Slumber II',
  'Domain of Mastery: Realm of Slumber III',
  'Domain of Mastery: Realm of Slumber IV',
  'Domain of Mastery: Return I',
  'Domain of Mastery: Return II',
  'Domain of Mastery: Return III',
  'Domain of Mastery: Return IV',
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
  'Domain of Forgery: Artisanship III',
  'Domain of Forgery: Artisanship IV',
  'Domain of Forgery: City of Reflections IV',
  'Domain of Forgery: Curious Contraptions III',
  'Domain of Forgery: Curious Contraptions IV',
  'Domain of Forgery: Robotic Ruse III',
  'Domain of Forgery: Robotic Ruse IV',
  'Domain of Forgery: Ruins of Thirsting Capital IV',
  'Domain of Forgery: Submerged Valley IV',
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
  id: 20010601,
  monsterId: 20010601,
  name: 'Large Electro Slime',
  specialNames: [ 'Rolling Elemental' ],
  monsterType: 'MONSTER_ORDINARY',
  enemyType: 'NORMAL',
  categoryType: 'CODEX_SUBTYPE_ELEMENTAL',
  categoryText: 'Elemental Lifeforms',
  description: 'A monster created by the coalescing of Electro dispersed throughout nature.\n' +
    'Due to the abundant Electro within its form, it will deliver an electric shock to its surroundings from time to time. At present, some have attempted to harness this energy to aid in production activities. Perhaps some new science will be born from this...?',
  investigation: {
    investigationId: 20,
    name: 'Slime',
    categoryType: 'Common',
    categoryText: 'Easy',
    description: "A pudgy elemental life form.\\nIt's said that desserts made from slimes of different elements will have incredibly distinctive flavors."
  },
  rewardPreview: [
    { id: 202, name: 'Mora' },
    { id: 112004, name: 'Slime Concentrate', count: 0.0448 },
    { id: 112003, name: 'Slime Secretions', count: 0.1792 },
    { id: 112002, name: 'Slime Condensate', count: 0.6723 }
  ],
  images: {
    filename_icon: 'UI_MonsterIcon_Slime_Electric_03',
    filename_investigationIcon: 'UI_MonsterIcon_Slime_Water_03'
  },
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
  'All-Devouring Narwhal',
  'Anemo Hypostasis',
  'Azhdaha',
  'Bolteater Bathysmal Vishap',
  'Childe',
  'Cryo Hypostasis',
  'Cryo Regisvine',
  'Dendro Hypostasis',
  'Electro Hypostasis',
  'Electro Regisvine',
  'Emperor of Fire and Iron',
  'Experimental Field Generator',
  'Geo Hypostasis',
  'Gluttonous Yumkasaur Mountain King',
  'Golden Wolflord',
  'Goldflame Qucusaur Tyrant',
  "Guardian of Apep's Oasis",
  'Hydro Hypostasis',
  'Hydro Tulpa',
  'Icewind Suite',
  'Iniquitous Baptist',
  'Jadeplume Terrorshroom',
  'Knuckle Duckle',
  'La Signora',
  'Lava Dragon Statue',
  'Legatus Golem',
  'Lord of Eroded Primal Fire',
  'Lupus Boreas, Dominator of Wolves',
  'Magatsu Mitake Narukami no Mikoto',
  'Maguu Kenki',
  'Millennial Pearl Seahorse',
  'Oceanid',
  'Perpetual Mechanical Array',
  'Primo Geovishap',
  'Pyro Hypostasis',
  'Pyro Regisvine',
  'Radiant Moonfly',
  'Rimebiter Bathysmal Vishap',
  'Ruin Serpent',
  'Secret Source Automaton: Configuration Device',
  'Secret Source Automaton: Overseer Device',
  'Setekh Wenut',
  'Shouki no Kami, the Prodigal',
  'Solitary Suanni',
  'Stormterror',
  'Tenebrous Papilla: Type I',
  'The Game Before the Gate',
  'The Knave',
  'Thunder Manifestation',
  'Wayward Hermetic Spiritspeaker'
]
```

</details>

## genshindb.outfits(query[, opts])]

<details>
<summary>genshindb.outfits('<b>outrider'</b>)</summary>

```js
{
  id: 202101,
  name: '100% Outrider',
  description: "Amber's outfit. This is a more formal — but no less cool — version of the Outrider's uniform!",
  isDefault: false,
  characterId: 10000021,
  characterName: 'Amber',
  source: [],
  images: {
    filename_card: 'UI_AvatarIcon_AmborCostumeWic_Card',
    filename_icon: 'UI_AvatarIcon_AmborCostumeWic',
    filename_splash: 'UI_Costume_AmborCostumeWic',
    filename_sideIcon: 'UI_AvatarIcon_Side_AmborCostumeWic',
    filename_iconCircle: 'UI_AvatarIcon_AmborCostumeWic_Circle'
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
  id: 140008,
  name: 'Wings of the Stormstrider',
  description: "A stylized wind glider gifted to you as a mark of Inazuma's acknowledgment and recognition.",
  rarity: 4,
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
  source: [ 'Reward for reaching a certain Reputation Level in Inazuma' ],
  images: {
    filename_icon: 'UI_FlycloakIcon_Thunderclap',
    filename_gacha: 'UI_Gacha_FlycloakIcon_Thunderclap'
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
  id: 28020403,
  name: 'Shiba',
  description: "Humanity's best friend!\n" +
    'Legend has it that the Inazuma Shogun once greatly adored this canine breed, and they spread across the once-booming trade routes to become one of the most well-loved pets in the seven nations. Gentle, loyal, and intelligent, they are especially good at guard duty and being companions. Some say that there are still mysterious ninjas in Inazuma who train these dogs to become "ninja dogs."',
  categoryType: 'SUBTYPE_ANIMAL',
  categoryText: 'Beasts',
  countType: 'COUNT_TYPE_NONE',
  sortOrder: 11015,
  images: { filename_icon: 'UI_AnimalIcon_DogPrick_02' },
  version: '1.0'
}
```

</details>
<details>
<summary>genshindb.animals('<b>bird', { matchCategories: true }</b>)</summary>

```js
{
  id: 28030313,
  name: 'Dusk Bird',
  description: 'A bird that lives in the jungles of Sumeru. Its vivid colors make it much-beloved. After being domesticated, it can be used as a courier for messages.\n' +
    'It is said that the Dusk Bird once possessed significant intellect and could learn human speech, even comprehending the written word.',
  categoryType: 'SUBTYPE_AVIARY',
  categoryText: 'Birds',
  countType: 'COUNT_TYPE_CAPTURE',
  sortOrder: 10025,
  images: { filename_icon: 'UI_AnimalIcon_Pigeon_Beak' },
  version: '3.0'
}
```

</details>
<details>
<summary>genshindb.animals('<b>true', { matchNames: false, matchCategories: true }</b>)</summary>

```js
[
  'Adorned Unagi',
  'Alpaca',
  'Amber Hunting Hound',
  'Ancient Red-Mane Boar',
  'Ancient Scarlet-Plume Finch',
  'Anemo Crystalfly',
  'Atapetra Conch',
  'Black King Pigeon',
  'Bluecrown Finch',
  'Blue Frog',
  'Blue Horned Lizard',
  'Bluethunder Weasel',
  'Blunthorn Rhino',
  'Boot Weasel',
  'Brightcrown Pigeon',
  'Brown Deer',
  'Burgundy Umbrellafinch',
  'Cacaua Goat',
  'Capybara',
  'Chestnut Goat',
  'Chestnut Hunting Hound',
  'Chic Badger',
  'Coral Butterfly',
  'Crimson Finch',
  'Crimsonflank Pigeon',
  'Crimson Fox',
  'Crow',
  'Cryo Crystalfly',
  'Darkwing Goose',
  'Deep Sea Unagi',
  'Dendro Crystalfly',
  'Desert Fox',
  'Dualblaze Longplume Ibis',
  'Dusk Bird',
  'Dusky Goat',
  'Electro Crystalfly',
  'Emerald Finch',
  'Flatcrest Fulmar',
  'Flowcurrent Bird',
  'Fluff-Fleece Goat',
  'Flying Squirrel',
  'Forest Tree Frog',
  'Frog',
  'General Crab',
  'Geo Crystalfly',
  'Glittergray Hunting Hound',
  'Golden Crab',
  'Golden Finch',
  'Golden Loach',
  'Gray Snow Cat',
  'Graywing Pigeon',
  'Green Horned Lizard',
  'Halberd-Crest Bird',
  'Hydro Crystalfly',
  'Kitsune',
  'Lucklight Fly',
  'Magenta Fantail Pigeon',
  'Malachitin Lumibug',
  'Marrow Lizard',
  'Masked Weasel',
  'Mud Frog',
  'Ocean Crab',
  'Pale Red Crab',
  'Puffin',
  'Pyro Crystalfly',
  'Quicksand Eel',
  'Redbill Pelican',
  'Redcrown Finch',
  'Red-Finned Unagi',
  'Red Flamingo',
  'Red Horned Lizard',
  'Red Tailed Lizard',
  'Red-Tailed Weasel',
  'Rock Crab',
  'Sacred Ibis',
  'Sapphire',
  'Scarab',
  'Shroomboar',
  'Slate Umbrellafinch',
  'Snowboar',
  'Snow Finch',
  'Snow Fox',
  'Snow Weasel',
  'Snow-Winged Goose',
  'Squirrel',
  'Subdetection Unit',
  'Sun Crab',
  'Sunny Loach',
  'Sunset Loach',
  'Thick-Feathered Ruffed Pheasant',
  'Violetgold Angler Gull',
  'Violet Ibis',
  'Viridian Fantail Pigeon',
  'White Pigeon'
]
```

</details>

## genshindb.namecards(query[, opts])]

<details>
<summary>genshindb.namecards('<b>klee'</b>)</summary>

```js
{
  id: 210004,
  name: 'Klee: Explosive',
  description: 'Namecard style.\n' +
    "Klee's lucky explosive — can you tell if it's Jumpy Dumpty or Dodoco? (Hint: Look carefully at the tail...)",
  sortOrder: 210004,
  source: [ 'Reward for reaching Friendship 10 with Klee' ],
  images: {
    filename_icon: 'UI_NameCardIcon_Klee',
    filename_banner: 'UI_NameCardPic_Klee_Alpha',
    filename_background: 'UI_NameCardPic_Klee_P'
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
  id: 70100003,
  name: 'Knights of Favonius - Library',
  areaId: 1102,
  areaName: 'Mondstadt',
  description: 'The library with the most books in all the northern lands. Other than those collected in the restricted section, all the books here are open for public reading.',
  regionId: 1,
  regionName: 'Mondstadt',
  sortOrder: 7,
  images: { filename_image: 'UI_Codex_Scenery_MDtushuguan' },
  version: ''
}
```

</details>
<details>
<summary>genshindb.geographies('<b>liyue', { matchCategories: true }</b>)</summary>

```js
[
  "Adeptus's Realm of Repose",
  'A Drop in the Ocean',
  'A Home in the Hills',
  'Ancient Pact',
  'Beyond the Chasm',
  "Bishui's Twilight Luster",
  'Chihu Rock',
  'Chiwang Peak',
  'Clarion Echo',
  'Clear Skies Over Xuanlian',
  'Crystal Fragment',
  'Desolate Foothill Shrines',
  'Dunyu Ruins',
  'Feiyun Slope',
  'Guhua Sword-Washing Pool',
  'Herb-Housing Hall',
  'Jade Court in Chenyu',
  'Jade Elegy of Bishui',
  'Marsh of Rustling Reeds',
  'Mist-Veiled Stone Forest',
  'Moonlit Tree',
  'Mouth of the Great Mine',
  'Nine Pillars of Peace',
  'Past Glories of Wangshan',
  "Qingxu's Forsaken Tower",
  'Ruins of Guili',
  'The Ancient Battlefield of Fuao Vale',
  'The Blocked Path',
  'The Blossoming Warmth of Qiaoying Sunlight',
  'The Clouds Cascade Around the Wharf',
  'The Court of Pillars',
  "The Great Mushroom's Place",
  'The Inverted City',
  'The Underground Mines',
  'Trails of Laixin',
  'Underground Waterway',
  'Valley of Vibrant Butterflies',
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
  id: 20,
  name: '20',
  exp: 2825,
  unlockDescription: 'World Level increased to Lv. 1;Monster and Boss levels increased;Reward drops upgraded\n' +
    'Max Adventure Rank increased to 25',
  reward: [
    { id: 201, name: 'Primogem', count: 75, type: 'MATERIAL' },
    { id: 224, name: 'Acquaint Fate', count: 1, type: 'MATERIAL' },
    { id: 107009, name: 'Fragile Resin', count: 1, type: 'MATERIAL' },
    {
      id: 104012,
      name: 'Fine Enhancement Ore',
      count: 5,
      type: 'MATERIAL'
    },
    {
      id: 104002,
      name: "Adventurer's Experience",
      count: 5,
      type: 'MATERIAL'
    }
  ],
  version: ''
}
```

</details>
<details>
<summary>genshindb.adventureranks('<b>60'</b>)</summary>

```js
{
  id: 60,
  name: '60',
  exp: 0,
  unlockDescription: '',
  reward: [
    { id: 201, name: 'Primogem', count: 150, type: 'MATERIAL' },
    { id: 224, name: 'Acquaint Fate', count: 3, type: 'MATERIAL' },
    { id: 107009, name: 'Fragile Resin', count: 2, type: 'MATERIAL' },
    {
      id: 104013,
      name: 'Mystic Enhancement Ore',
      count: 30,
      type: 'MATERIAL'
    },
    { id: 104003, name: "Hero's Wit", count: 21, type: 'MATERIAL' }
  ],
  version: ''
}
```

</details>

## genshindb.emojis(query[, opts])]

<details>
<summary>genshindb.emojis('<b>oh'</b>)</summary>

```js
{
  id: 2011,
  name: 'Oh!',
  dupealias: 'Oh! 1',
  setId: 2,
  sortOrder: 27,
  images: { filename_icon: 'UI_EmotionIcon27' },
  version: ''
}
```

</details>

## genshindb.voiceovers(query[, opts])]

<details>
<summary>genshindb.voiceovers('<b>ayaka'</b>)</summary>

```js
{
  id: 10000002,
  name: 'Kamisato Ayaka',
  friendLines: [
    {
      voicelineId: 3100,
      title: 'Hello',
      voicelineType: '1000',
      description: 'Master of Inazuma Kamisato Art Tachi Jutsu — Kamisato Ayaka, present!\n' +
        'Delighted to make your acquaintance.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_draw_appear'
    },
    {
      voicelineId: 3101,
      title: 'Chat: Stability',
      voicelineType: '1101',
      description: 'I only wish life could be as leisurely as this a little more often... How greedy of me.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_character_idle_01'
    },
    {
      voicelineId: 3102,
      title: 'Chat: Sword',
      voicelineType: '1102',
      description: 'A blade is like a tea-leaf. Only those who sample it many times can appreciate its true qualities.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_character_idle_02'
    },
    {
      voicelineId: 3103,
      title: 'Chat: Zoning Out',
      voicelineType: '1103',
      description: "So this is a day in the life of the Traveler... Hehe, I'm learning more about you all the time.",
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_character_idle_03'
    },
    {
      voicelineId: 3104,
      title: 'Chat: Famous Sword',
      voicelineType: '1104',
      description: 'A blade embraces its duty as a jeweler cherishes their gems.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_character_idle_04'
    },
    {
      voicelineId: 3105,
      title: 'When It Rains',
      voicelineType: '1201',
      description: 'Come with me, let us find shelter from the rain.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_weather_heavyRain_01'
    },
    {
      voicelineId: 3106,
      title: 'When Thunder Strikes',
      voicelineType: '1202',
      description: 'Her Excellency... What is she trying to communicate?',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_weather_thunder_01'
    },
    {
      voicelineId: 3107,
      title: 'When It Snows',
      voicelineType: '1205',
      description: '"Snow that once adorned the world in silver, thaws to reveal the gleam of the fruit upon frost-laden branches." *sigh* How picturesque! Only some tea would make this setting more complete.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_weather_snowy_01'
    },
    {
      voicelineId: 3108,
      title: 'When the Sun Is Out',
      voicelineType: '1203',
      description: "There's a pleasant breeze and glorious sunshine... So, where shall we go for a walk?",
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_weather_sunny_01'
    },
    {
      voicelineId: 3109,
      title: "When It's Windy",
      voicelineType: '1204',
      description: "Close your eyes and face the wind... It feels wonderful, doesn't it?",
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_weather_breezy_01'
    },
    {
      voicelineId: 3110,
      title: 'Good Morning',
      voicelineType: '1001',
      description: 'Oh, good morning, Traveler. ...Whenever I see you in the morning, somehow, it makes me feel like... today is going to be a good day.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_dialog_greetingMorning'
    },
    {
      voicelineId: 3111,
      title: 'Good Afternoon',
      voicelineType: '1002',
      description: 'Good afternoon. It is normal to feel drowsy after lunch, might I interest you in a game of Go to stimulate the mind?',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_dialog_greetingNoon'
    },
    {
      voicelineId: 3112,
      title: 'Good Evening',
      voicelineType: '1003',
      description: 'Greetings. An auspicious breeze blows this evening. Tonight will be peaceful.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_dialog_greetingNight'
    },
    {
      voicelineId: 3113,
      title: 'Good Night',
      voicelineType: '1004',
      description: `"Was it one's thoughts that drew him to my dreams? Had I known it a dream, one would not have awakened." Hehe, I love that poem.`,
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_dialog_greetingNight2'
    },
    {
      voicelineId: 3114,
      title: 'About Kamisato Ayaka: Yashiro Commission',
      voicelineType: '2001',
      description: '"Inazuma Shogunate, Yashiro Commission, Kamisato Clan." Widely known as one of the most distinguished clans in all of Inazuma, it is the branch of the Tri-Commission that manages ceremonial and cultural affairs. Since my parents passed, Brother and I assumed responsibility for all clan matters, big and small.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_dialog_idle_01'
    },
    {
      voicelineId: 3115,
      title: 'About Kamisato Ayaka: Position',
      voicelineType: '2004',
      description: 'Many look up to me as the Shirasagi Himegimi and as the daughter of the Kamisato Clan. But the object of their respect has everything to do with my position, and nothing at all to do with me, Ayaka. It makes me think that... maybe, there is only one person I know who is truly able to get close to me...',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_dialog_idle_02',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Friendship Lv. 4',
          conditionType: 'FETTER_COND_FETTER_LEVEL',
          paramList: [ 4 ]
        }
      ]
    },
    {
      voicelineId: 3116,
      title: 'About Kamisato Ayaka: Aspiration',
      voicelineType: '2005',
      description: 'Today, as in the past, I aspire to be somebody whom everyone can trust. But what motivates me is no longer the responsibilities I shoulder, or the expectations of other people. Rather, it is the fact that you are this kind of person, too.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_dialog_idle_03',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Friendship Lv. 6',
          conditionType: 'FETTER_COND_FETTER_LEVEL',
          paramList: [ 6 ]
        }
      ]
    },
    {
      voicelineId: 3117,
      title: 'About Us: Teahouse',
      voicelineType: '2002',
      description: "If you've got time, shall we take a walk to Komore Teahouse? To chat about the art of tea on a pleasant day like this seems like the sophisticated thing to do.",
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_dialog_close1'
    },
    {
      voicelineId: 3118,
      title: 'About Us: Festivals',
      voicelineType: '2003',
      description: 'If I ever have the chance, I would very much like to experience the festivities of another nation with you one day. Though, I will need some guidance on local customs and etiquette, and advice on what gifts to bring... Could I trouble you to give me some guidance?',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_dialog_close2',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Friendship Lv. 6',
          conditionType: 'FETTER_COND_FETTER_LEVEL',
          paramList: [ 6 ]
        },
        {
          unlockText: 'Complete "The Whispers of the Crane and the White Rabbit"',
          conditionType: 'FETTER_COND_FINISH_QUEST',
          paramList: [ 1200804 ]
        }
      ]
    },
    {
      voicelineId: 3119,
      title: 'About the Vision',
      voicelineType: '3001',
      description: 'Visions are a seal of approval for those who are most ambitious. As for my own ambitions, they shall remain private for now. It is nothing more than an insignificant dream.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_dialog_pendant',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Friendship Lv. 4',
          conditionType: 'FETTER_COND_FETTER_LEVEL',
          paramList: [ 4 ]
        }
      ]
    },
    {
      voicelineId: 3120,
      title: 'Something to Share',
      voicelineType: '3002',
      description: 'It is said that "the flavor of Zen is that of tea," and it is also said that "the power of Zen is that of the blade." One might then ask: What does that say about the relationship between tea and the blade?',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_dialog_share'
    },
    {
      voicelineId: 3121,
      title: 'Interesting Things',
      voicelineType: '3003',
      description: "Have you ever noticed the withering sakura tree in the city? For me, there is a beauty to the withering, it brings back fond memories of the spring. Most people don't agree — sakura trees that will never bloom again are removed. But when I look at a tree, all I want is to see it blossom again... just one more time...",
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_pref_gift'
    },
    {
      voicelineId: 3122,
      title: 'About Thoma',
      voicelineType: '4001',
      description: 'Thoma is a dear friend. He always lifts my spirits with his sunny disposition. In a sense, I think of him as another brother, and as a full member of the Kamisato Clan.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_teammate_thoma_01',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Friendship Lv. 4',
          conditionType: 'FETTER_COND_FETTER_LEVEL',
          paramList: [ 4 ]
        }
      ]
    },
    {
      voicelineId: 3123,
      title: 'About Kujou Sara',
      voicelineType: '4002',
      description: 'Kujou Sara of the Tenryou Commission is... not known to smile, and I have had my fair share of disputes with her. She is, however, a loyal servant to Inazuma, there is no question about that.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_teammate_kujouSara_01',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Friendship Lv. 4',
          conditionType: 'FETTER_COND_FETTER_LEVEL',
          paramList: [ 4 ]
        }
      ]
    },
    {
      voicelineId: 3124,
      title: 'About Shikanoin Heizou',
      voicelineType: '4003',
      description: 'Mr. Shikanoin belongs to the Tenryou Commission, just like Miss Kujou. He is very... principled, sometimes even more determinedly so than Miss Kujou. The only thing is, when it comes to the question of which matters should be governed by his principles, I believe only Mr. Shikanoin himself knows the answer...',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_teammate_shikanoinHeizou_01',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Friendship Lv. 4',
          conditionType: 'FETTER_COND_FETTER_LEVEL',
          paramList: [ 4 ]
        }
      ]
    },
    {
      voicelineId: 3125,
      title: 'About Sayu',
      voicelineType: '4007',
      description: "Ah, little Sayu. She hasn't been causing you any trouble lately, has she? Hehe, if you ever notice her slacking off, please let me know.",
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_teammate_sayu_01',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Friendship Lv. 4',
          conditionType: 'FETTER_COND_FETTER_LEVEL',
          paramList: [ 4 ]
        }
      ]
    },
    {
      voicelineId: 3126,
      title: 'About the Raiden Shogun: Guesswork',
      voicelineType: '4008',
      description: 'The Almighty Shogun? It would be improper of me to comment, given that I am one of her subjects. All I will say is that... I think that Her Excellency must get lonely on the road to eternity.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_teammate_raidenShogun_01',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Friendship Lv. 4',
          conditionType: 'FETTER_COND_FETTER_LEVEL',
          paramList: [ 4 ]
        }
      ]
    },
    {
      voicelineId: 3127,
      title: 'About the Raiden Shogun: Standpoint',
      voicelineType: '4009',
      description: "To witness the Musou no Hitotachi and live to tell the tale is quite a remarkable feat. Even though I recognize her as our true deity with the power to change Inazuma's fate at will, if there is conflict between the two of you, then... I shall choose to side with you.",
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_teammate_raidenShogun_02',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Friendship Lv. 6',
          conditionType: 'FETTER_COND_FETTER_LEVEL',
          paramList: [ 6 ]
        },
        {
          unlockText: 'Complete "Omnipresence Over Mortals"',
          conditionType: 'FETTER_COND_FINISH_PARENT_QUEST',
          paramList: [ 2021 ]
        }
      ]
    },
    {
      voicelineId: 3128,
      title: 'About Yae Miko',
      voicelineType: '4004',
      description: "I have always greatly enjoyed working with Guuji Yae. Organizing festival affairs generally takes a lot of effort and doesn't generate much income, but Guuji Yae's events always come off both elegant and profitable.",
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_teammate_yaeMiko_01',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Friendship Lv. 4',
          conditionType: 'FETTER_COND_FETTER_LEVEL',
          paramList: [ 4 ]
        }
      ]
    },
    {
      voicelineId: 3129,
      title: 'About Kamisato Ayato',
      voicelineType: '4005',
      description: "As the head of the Kamisato Clan, brother always has a full schedule of places he needs to be. I do try my best to share his load, but there is no changing the pressure he is subjected to all year round, and the toll it takes upon him. *sigh* If you see him, remind him to take care of himself, for his sister's sake...",
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_teammate_ayato_01',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Friendship Lv. 4',
          conditionType: 'FETTER_COND_FETTER_LEVEL',
          paramList: [ 4 ]
        }
      ]
    },
    {
      voicelineId: 3130,
      title: 'About Yoimiya',
      voicelineType: '4006',
      description: 'The Yashiro Commission and the shrine maidens are responsible for festival affairs, and Yoimiya, as a fireworks expert, knows how to create an atmosphere. So we have become well acquainted with her over the years.\n' +
        'Hmm? Public order and fire prevention? We factor these concerns in well in advance during the planning stage. To deny people the chance to see fireworks simply for these reasons would leave them feeling very disappointed.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_teammate_yoimiya_01',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Friendship Lv. 4',
          conditionType: 'FETTER_COND_FETTER_LEVEL',
          paramList: [ 4 ]
        }
      ]
    },
    {
      voicelineId: 3131,
      title: 'More About Kamisato Ayaka: I',
      voicelineType: '5001',
      description: 'Your request is quite unusual for me. Since I see you as a friend, it would only be fair to be open and honest with you, but if this means sharing secrets of the Kamisato Clan... I would ask that you keep anything I tell you in strict confidence.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_friendship_01',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Complete "Stillness, the Sublimation of Shadow"',
          conditionType: 'FETTER_COND_FINISH_QUEST',
          paramList: [ 200908 ]
        }
      ]
    },
    {
      voicelineId: 3132,
      title: 'More About Kamisato Ayaka: II',
      voicelineType: '5002',
      description: "The Kamisato Clan once suffered a major blow when we failed to protect a swordsmith of national significance. We were harassed by the Fatui, we lost many of our people, and we received a great deal of criticism. It all aged Father greatly, and severely damaged the Kamisato Clan's standing within the Shogunate. Brother has worked tirelessly to reverse the trend since he assumed leadership, but although our clan's position is now restored and the Yashiro Commission is unified once more, we still rely on Brother to make the decisions on all matters of any importance.",
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_friendship_02',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Friendship Lv. 3',
          conditionType: 'FETTER_COND_FETTER_LEVEL',
          paramList: [ 3 ]
        },
        {
          unlockText: 'Complete "Stillness, the Sublimation of Shadow"',
          conditionType: 'FETTER_COND_FINISH_QUEST',
          paramList: [ 200908 ]
        }
      ]
    },
    {
      voicelineId: 3133,
      title: 'More About Kamisato Ayaka: III',
      voicelineType: '5003',
      description: "The art of blade forging taught by the Shogun varies based on astrology, application, materials used, the furnace conditions, individual personalities, and elemental changes. These differences between smiths is what gave rise to the Raiden Gokaden. Swordsmiths capable of forging renowned blades are seen as spiritual personnel with sacred abilities, and as such they should be managed by the Yashiro Commission, which oversees all cultural, artistic, and ceremonial affairs. So naturally, the swordsmith's betrayal is the fault of ineffectual management by the Kamisato Clan.",
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_friendship_03',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Friendship Lv. 4',
          conditionType: 'FETTER_COND_FETTER_LEVEL',
          paramList: [ 4 ]
        },
        {
          unlockText: 'Complete "Stillness, the Sublimation of Shadow"',
          conditionType: 'FETTER_COND_FINISH_QUEST',
          paramList: [ 200908 ]
        }
      ]
    },
    {
      voicelineId: 3134,
      title: 'More About Kamisato Ayaka: IV',
      voicelineType: '5004',
      description: "My mother was the most incredible person. She was always so dignified and elegant, always smiling, no matter what situation she might be facing. She had so much to deal with in the clan on so many levels, but she took it all in stride — it was like nothing could ever faze her. Everything about her was perfect, and I say that without exaggerating. *sigh* But the moment she passed away, I realized... I couldn't hide behind my mother any longer. I wasn't little Ayaka any more.",
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_friendship_04',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Friendship Lv. 5',
          conditionType: 'FETTER_COND_FETTER_LEVEL',
          paramList: [ 5 ]
        },
        {
          unlockText: 'Complete "Stillness, the Sublimation of Shadow"',
          conditionType: 'FETTER_COND_FINISH_QUEST',
          paramList: [ 200908 ]
        }
      ]
    },
    {
      voicelineId: 3135,
      title: 'More About Kamisato Ayaka: V',
      voicelineType: '5005',
      description: 'What I want to say next is perhaps not befitting of a member of the Inazuma Shogunate, Yashiro Commission, Kamisato Clan, but... unless I am mistaken, I trust that you will not take issue with this slight departure from convention on my part...\n' +
        "That is to say... I'm a little tired, may I rest my head on your shoulder? Just for a moment.",
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_friendship_05',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Friendship Lv. 6',
          conditionType: 'FETTER_COND_FETTER_LEVEL',
          paramList: [ 6 ]
        },
        {
          unlockText: 'Complete "Stillness, the Sublimation of Shadow"',
          conditionType: 'FETTER_COND_FINISH_QUEST',
          paramList: [ 200908 ]
        }
      ]
    },
    {
      voicelineId: 3136,
      title: "Kamisato Ayaka's Hobbies",
      voicelineType: '6001',
      description: 'I have great affection for the arts: music, song, poetry, shougi, and dancing. And you?',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_pref_hobby'
    },
    {
      voicelineId: 3137,
      title: "Kamisato Ayaka's Troubles: Concerns",
      voicelineType: '6002',
      description: "Troubles? Well, I mean... that's life, isn't it? There will always be things that don't go one's way. But I do not wish to worry those around me on account of things that are my concern alone... so, it is best if I keep them to myself.",
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_dialog_annoyed_01'
    },
    {
      voicelineId: 3138,
      title: "Kamisato Ayaka's Troubles: Desires",
      voicelineType: '6006',
      description: "Openness is something I find very difficult. I constantly have to remind myself that as a lady of the Kamisato Clan, there are countless people watching and countless expectations to live up to. I must be a model of exemplary conduct at all times. But even so, shouldn't I still follow my dreams? Shouldn't I... share my true feelings with you?",
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_dialog_annoyed_02',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Friendship Lv. 6',
          conditionType: 'FETTER_COND_FETTER_LEVEL',
          paramList: [ 6 ]
        }
      ]
    },
    {
      voicelineId: 3139,
      title: 'Favorite Food',
      voicelineType: '6003',
      description: "I'm fascinated by food from overseas. Though I don't get to try it very often... So, if I had to choose something from Inazuma, then probably... Chazuke. But not when anybody else is watching... So I tell you that in confidence.",
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_pref_foodLike'
    },
    {
      voicelineId: 3140,
      title: 'Least Favorite Food',
      voicelineType: '6004',
      description: 'Though I do not eschew animal fat and organs entirely, they are far from my first choice.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_pref_foodDislike'
    },
    {
      voicelineId: 3168,
      title: 'Receiving a Gift: I',
      voicelineType: '6007',
      description: 'Mmm... Yes, I am truly fortunate...',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_spice_pref_01'
    },
    {
      voicelineId: 3169,
      title: 'Receiving a Gift: II',
      voicelineType: '6008',
      description: 'Thank you for the opportunity to try this dish. I will always savor it.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_spice_normal_01'
    },
    {
      voicelineId: 3170,
      title: 'Receiving a Gift: III',
      voicelineType: '6009',
      description: "Hmm... It's a bit greasy for my taste.",
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_spice_dislike_01'
    },
    {
      voicelineId: 3141,
      title: 'Birthday',
      voicelineType: '7001',
      description: "Come with me! We're not going far away — I promise it won't delay you too much.\n" +
        "I managed to find out when your birthday was well in advance, so I could prepare in good time. Hopefully this wasn't assuming too much, but I guessed you might prefer this to an expensive gift.\n" +
        'In honor of your birthday, please allow me to perform a fan dance for you.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_pref_birthday',
      hasUnlockConditions: true,
      unlockConditions: [
        { conditionType: 'FETTER_COND_PLAYER_BIRTHDAY', paramList: [] }
      ]
    },
    {
      voicelineId: 3142,
      title: 'Feelings About Ascension: Intro',
      voicelineType: '8001',
      description: 'Thank you very much. It has been richly rewarding to learn from you so far, and I believe my skills with the blade can go even further still.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_starUp_01',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Ascension Phase 1',
          conditionType: 'FETTER_COND_AVATAR_PROMOTE_LEVEL',
          paramList: [ 1 ]
        }
      ]
    },
    {
      voicelineId: 3143,
      title: 'Feelings About Ascension: Building Up',
      voicelineType: '8002',
      description: 'Thank you for your guidance. With your assistance, I am gaining a more thorough understanding of my capabilities.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_starUp_02',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Ascension Phase 2',
          conditionType: 'FETTER_COND_AVATAR_PROMOTE_LEVEL',
          paramList: [ 2 ]
        }
      ]
    },
    {
      voicelineId: 3144,
      title: 'Feelings About Ascension: Climax',
      voicelineType: '8003',
      description: 'I feel more competent now than ever before. I even have the time outside my work for the Yashiro Commission to try some new things. Would you like to try one of my home-made snacks? I just learned how to make them recently.',
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_starUp_03',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Ascension Phase 4',
          conditionType: 'FETTER_COND_AVATAR_PROMOTE_LEVEL',
          paramList: [ 4 ]
        }
      ]
    },
    {
      voicelineId: 3145,
      title: 'Feelings About Ascension: Conclusion',
      voicelineType: '8004',
      description: '"Though I cling to that which has given me the strength to hold on, the weight of letting go is ever-foreboding."\n' +
        "My apologies, it should be a happy occasion, and yet it is such a sad phrase that comes to mind. Our time together has been so pleasant that I am fearful of losing what I have gained. I'm sorry, I must compose myself.",
      voicefile: 'VO_friendship/VO_ayaka/vo_ayaka_starUp_04',
      hasUnlockConditions: true,
      unlockConditions: [
        {
          unlockText: 'Unlocks at Ascension Phase 6',
          conditionType: 'FETTER_COND_AVATAR_PROMOTE_LEVEL',
          paramList: [ 6 ]
        }
      ]
    }
  ],
  actionLines: [
    {
      voicelineId: 3146,
      title: 'Elemental Skill: I',
      voicelineType: '100001',
      description: 'Take flight.',
      voicefile: 'VO_gameplay/VO_ayaka/vo_ayaka_battle_skill1_01'
    },
    {
      voicelineId: 3147,
      title: 'Elemental Skill: II',
      voicelineType: '100002',
      description: 'My apologies.',
      voicefile: 'VO_gameplay/VO_ayaka/vo_ayaka_battle_skill1_02'
    },
    {
      voicelineId: 3148,
      title: 'Elemental Skill: III',
      voicelineType: '100003',
      description: 'Whirling snow.',
      voicefile: 'VO_gameplay/VO_ayaka/vo_ayaka_battle_skill1_03'
    },
    {
      voicelineId: 3149,
      title: 'Elemental Burst: I',
      voicelineType: '200001',
      description: 'Embrace the ice.',
      voicefile: 'VO_gameplay/VO_ayaka/vo_ayaka_battle_skill3_01'
    },
    {
      voicelineId: 3150,
      title: 'Elemental Burst: II',
      voicelineType: '200002',
      description: 'Sakura swirl.',
      voicefile: 'VO_gameplay/VO_ayaka/vo_ayaka_battle_skill3_02'
    },
    {
      voicelineId: 3151,
      title: 'Elemental Burst: III',
      voicelineType: '200003',
      description: 'Kamisato Art: Soumetsu!',
      voicefile: 'VO_gameplay/VO_ayaka/vo_ayaka_battle_skill3_03'
    },
    {
      voicelineId: 3152,
      title: 'Opening Treasure Chest: I',
      voicelineType: '300001',
      description: 'Collecting rare and exquisite treasures... Yes, this seems suitably sophisticated.',
      voicefile: 'VO_gameplay/VO_ayaka/vo_ayaka_chest_open_01'
    },
    {
      voicelineId: 3153,
      title: 'Opening Treasure Chest: II',
      voicelineType: '300002',
      description: 'Hehe... Today is a lucky day.',
      voicefile: 'VO_gameplay/VO_ayaka/vo_ayaka_chest_open_02'
    },
    {
      voicelineId: 3154,
      title: 'Opening Treasure Chest: III',
      voicelineType: '300003',
      description: 'I shall treasure this good fortune.',
      voicefile: 'VO_gameplay/VO_ayaka/vo_ayaka_chest_open_03'
    },
    {
      voicelineId: 3155,
      title: 'Low HP: I',
      voicelineType: '410001',
      description: 'I will not stand for this.',
      voicefile: 'VO_gameplay/VO_ayaka/vo_ayaka_life_less30_01'
    },
    {
      voicelineId: 3156,
      title: 'Low HP: II',
      voicelineType: '410002',
      description: 'A worthy opponent...',
      voicefile: 'VO_gameplay/VO_ayaka/vo_ayaka_life_less30_02'
    },
    {
      voicelineId: 3157,
      title: 'Low HP: III',
      voicelineType: '410003',
      description: 'We ought to end this!',
      voicefile: 'VO_gameplay/VO_ayaka/vo_ayaka_life_less30_03'
    },
    {
      voicelineId: 3158,
      title: 'Ally at Low HP: I',
      voicelineType: '400001',
      description: 'Do not overdo it.',
      voicefile: 'VO_gameplay/VO_ayaka/vo_ayaka_life_less30_teammate_01'
    },
    {
      voicelineId: 3159,
      title: 'Ally at Low HP: II',
      voicelineType: '400002',
      description: 'Take care!',
      voicefile: 'VO_gameplay/VO_ayaka/vo_ayaka_life_less30_teammate_02'
    },
    {
      voicelineId: 3160,
      title: 'Fallen: I',
      voicelineType: '500001',
      description: 'Pardon my indiscretion...',
      voicefile: 'VO_gameplay/VO_ayaka/vo_ayaka_life_die_01'
    },
    {
      voicelineId: 3161,
      title: 'Fallen: II',
      voicelineType: '500002',
      description: 'Much remains... unfinished...',
      voicefile: 'VO_gameplay/VO_ayaka/vo_ayaka_life_die_02'
    },
    {
      voicelineId: 3162,
      title: 'Fallen: III',
      voicelineType: '500003',
      description: 'I have dishonored... our clan...',
      voicefile: 'VO_gameplay/VO_ayaka/vo_ayaka_life_die_03'
    },
    {
      voicelineId: 3163,
      title: 'Heavy Hit Taken: I',
      voicelineType: '910001',
      description: 'So rude!',
      voicefile: 'VO_gameplay/VO_ayaka/vo_ayaka_battle_hit_H_01'
    },
    {
      voicelineId: 3164,
      title: 'Heavy Hit Taken: II',
      voicelineType: '910002',
      description: 'Unthinkable...',
      voicefile: 'VO_gameplay/VO_ayaka/vo_ayaka_battle_hit_H_02'
    },
    {
      voicelineId: 3165,
      title: 'Joining Party: I',
      voicelineType: '600001',
      description: 'Kamisato Ayaka, present.',
      voicefile: 'VO_teamJoin/vo_ayaka_teamJoin_01'
    },
    {
      voicelineId: 3166,
      title: 'Joining Party: II',
      voicelineType: '600002',
      description: 'I await your instruction.',
      voicefile: 'VO_teamJoin/vo_ayaka_teamJoin_02'
    },
    {
      voicelineId: 3167,
      title: 'Joining Party: III',
      voicelineType: '600003',
      description: 'A pleasure to be working with you.',
      voicefile: 'VO_teamJoin/vo_ayaka_teamJoin_03'
    }
  ],
  version: {
    '3100': '',
    '3101': '',
    '3102': '',
    '3103': '',
    '3104': '',
    '3105': '',
    '3106': '',
    '3107': '',
    '3108': '',
    '3109': '',
    '3110': '',
    '3111': '',
    '3112': '',
    '3113': '',
    '3114': '',
    '3115': '',
    '3116': '',
    '3117': '',
    '3118': '',
    '3119': '',
    '3120': '',
    '3121': '',
    '3122': '',
    '3123': '',
    '3124': '',
    '3125': '',
    '3126': '',
    '3127': '',
    '3128': '',
    '3129': '',
    '3130': '',
    '3131': '',
    '3132': '',
    '3133': '',
    '3134': '',
    '3135': '',
    '3136': '',
    '3137': '',
    '3138': '',
    '3139': '',
    '3140': '',
    '3141': '',
    '3142': '',
    '3143': '',
    '3144': '',
    '3145': '',
    '3146': '',
    '3147': '',
    '3148': '',
    '3149': '',
    '3150': '',
    '3151': '',
    '3152': '',
    '3153': '',
    '3154': '',
    '3155': '',
    '3156': '',
    '3157': '',
    '3158': '',
    '3159': '',
    '3160': '',
    '3161': '',
    '3162': '',
    '3163': '',
    '3164': '',
    '3165': '',
    '3166': '',
    '3167': '',
    '3168': '',
    '3169': '',
    '3170': ''
  }
}
```

</details>

## genshindb.elements(query[, opts])]


## genshindb.rarity(query[, opts])]


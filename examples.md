# Examples

First start off with:
```js
const genshin = require('genshin-db');
```

## Table of Contents

- [genshin.characters(query[, opts])](#genshincharactersquery-opts)
- [genshin.talents(query[, opts])](#genshintalentsquery-opts)
- [genshin.constellations(query[, opts])](#genshinconstellationsquery-opts)
- [genshin.weapons(query[, opts])](#genshinweaponsquery-opts)
- [genshin.weaponmaterialtypes(query[, opts])](#genshinweaponmaterialtypesquery-opts)
- [genshin.talentmaterialtypes(query[, opts])](#genshintalentmaterialtypesquery-opts)
- [genshin.artifacts(query[, opts])](#genshinartifactsquery-opts)
- [genshin.recipes(query[, opts])](#genshinrecipesquery-opts)
- [genshin.elements(query[, opts])](#genshinelementsquery-opts)
- [genshin.rarity(query[, opts])](#genshinrarityquery-opts)

## genshin.characters(query[, opts])]

<details>
<summary>genshin.characters('<b>amber</b>')</summary>

```js
{
  name: 'Amber',
  titles: [ 'Outrider', 'Champion Glider' ],
  element: 'Pyro',
  weapontype: 'Bow',
  gender: 'Female',
  region: 'Mondstadt',
  rarity: '4',
  birthday: 'August 10',
  constellation: 'Lepus',
  substat: 'ATK%',
  images: {
    image: 'https://static.wikia.nocookie.net/gensin-impact/images/c/c6/Character_Amber_Thumb.png',
    card: 'https://static.wikia.nocookie.net/gensin-impact/images/2/26/Character_Amber_Card.jpg',
    portrait: 'https://static.wikia.nocookie.net/gensin-impact/images/0/00/Character_Amber_Portrait.png'
  },
  cv: {
    english: 'Kelly Baskin',
    japanese: 'Manaka Iwani',
    korean: 'Kim Yeon-woo',
    chinese: 'Tingting Hu'
  },
  affiliation: 'Knights of Favonius',
  description: 'A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius. Her amazing mastery of the glider has made her a three-time winner of the Gliding Championship in Mondstadt. As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.',
  talentmaterialtype: 'Freedom',
  url: 'https://genshin-impact.fandom.com/wiki/Amber'
}
```

</details>
<details>
<summary>genshin.characters('<b>carmen</b>')</summary>

```js
{
  name: 'Venti',
  titles: [ 'Windborne Bard', 'The God of Freedom', 'Tone-Deaf Bar' ],
  element: 'Anemo',
  weapontype: 'Bow',
  gender: 'Male',
  region: 'Mondstadt',
  rarity: '5',
  birthday: 'June 16',
  constellation: 'Carmen Dei',
  substat: 'Energy Recharge%',
  images: {
    image: 'https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Venti_Thumb.png',
    card: 'https://static.wikia.nocookie.net/gensin-impact/images/7/76/Character_Venti_Card.jpg',
    portrait: 'https://static.wikia.nocookie.net/gensin-impact/images/c/cf/Character_Venti_Portrait.png'
  },
  cv: {
    english: 'Erika Harlacher',
    japanese: 'Ayumu Murase',
    korean: 'Jung Yoo-jung',
    chinese: 'Miaojiang'
  },
  affiliation: 'Archons',
  description: "A bard that seems to have arrived on some unknown wind - sometimes sings songs as old as the hills, and other times sings poems fresh and new. Likes apples and lively places, but is not a fan of cheese or anything sticky. When using his Anemo power to control the wind, it often appears as feathers, as he's fond of that which appears light and breezy.",
  talentmaterialtype: 'Ballad',
  url: 'https://genshin-impact.fandom.com/wiki/Venti'
}
```

</details>
<details>
<summary>genshin.characters('<b>december</b>')</summary>

```js
[ 'Ganyu', 'Zhongli' ]
```

</details>
<details>
<summary>genshin.characters('<b>pyro</b>')</summary>

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
<summary>genshin.characters('<b>geo dmg</b>')</summary>

```js
[ 'Albedo', 'Ningguang', 'Zhongli' ]
```

</details>
<details>
<summary>genshin.characters('<b>liyue</b>')</summary>

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
<summary>genshin.characters('<b>sword</b>')</summary>

```js
[
  'Aether', 'Albedo',
  'Jean',   'Kaeya',
  'Keqing', 'Lumine',
  'Qiqi',   'Xingqiu'
]
```

</details>
<details>
<summary>genshin.characters('<b>ballad</b>')</summary>

```js
[ 'Albedo', 'Fischl', 'Kaeya', 'Lisa', 'Venti' ]
```

</details>

## genshin.talents(query[, opts])]

<details>
<summary>genshin.talents('<b>ninguang</b>')</summary>

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
      'Gathering the might of Geo, Ningguang plunges towards the ground from mid-air, damaging all enemies in her path. Deals AoE Geo DMG upon impact with the ground.',
    attributes: ''
  },
  combat2: {
    name: 'Jade Screen',
    image: '',
    info: 'Ningguang creates a Jade Screen out of gold, obsidian and her great opulence, dealing AoE Geo DMG.\n' +
      '\n' +
      '**Jade Screen**\n' +
      '- Blocks enemy projectiles.\n' +
      "- Endurance scales based on Ningguang's Max HP.\n" +
      '\n' +
      'Jade Screen is considered a Geo Construct and can be used to block certain attacks, but cannot be climbed. Only one Jade Screen may exist at any one time.',
    description: 'The canvas of stars is written upon this jade screen.',
    attributes: ''
  },
  combat3: {
    name: 'Starshatter',
    image: '',
    info: 'Gathering a great number of gems, Ningguang scatters them all at once, sending homing projectiles at her enemies that deal massive Geo DMG. If Starshatter is cast when a Jade Screen is nearby, the Jade Screen will fire additional gem projectiles at the same time.',
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
    info: 'A character that passes through the Jade Screen will gain a 12% Geo DMG Bonus for 10s.'
  },
  passive3: {
    name: 'Trove of Marvelous Treasures',
    image: '',
    info: 'Displays the location of nearby ore veins (Iron Ore, White Iron Ore, Crystal Ore, Magical Crystal Ore, and Starsilver) on them mini-map.'
  }
}
```

</details>
<details>
<summary>genshin.talents('<b>klee</b>')<b>.passive3</b></summary>

```js
{
  name: 'All Of My Treasures!',
  image: '',
  info: 'Displays the location of nearby resources unique to Mondstadt on the mini-map.'
}
```

</details>
<details>
<summary>genshin.talents('<b>mona</b>')<b>.combatsp</b></summary>

```js
{
  name: 'Illusory Torrent',
  image: '',
  info: '**Alternate Sprint**\n' +
    "Mona cloaks herself within the water's flow, consuming Stamina to move rapidly.\n" +
    '\n' +
    'When under the effect of Illusory Torrent, Mona can move at high speed on water.\n' +
    'Applies the Wet status to nearby enemies when she reappears.',
  description: "This is something that Mona can do, but her teacher cannot. Well, but it's not as if her teacher would pursue any matter concerning Hydro Visions anyways...",
  attributes: ''
}
```

</details>

## genshin.constellations(query[, opts])]

<details>
<summary>genshin.constellations('<b>amber</b>')</summary>

```js
{
  name: 'Amber',
  c1: {
    name: 'One Arrow to Rule Them All',
    effect: "Fires 2 arrows per Aimed Shot. The second arrow deals 20% of the first arrow's DMG.",
    image: 'https://static.wikia.nocookie.net/gensin-impact/images/c/c9/Constellation_One_Arrow_to_Rule_Them_All.png'
  },
  c2: {
    name: 'Bunny Triggered',
    effect: "Baron Bunny, new and improved! Hitting Baron Bunny's foot with a fully-charged Aimed Shot manually detonates it. Explosion via manual detonation deals 200% additional DMG.",
    image: 'https://static.wikia.nocookie.net/gensin-impact/images/7/75/Constellation_Bunny_Triggered.png'
  },
  c3: {
    name: 'It Burns!',
    effect: 'Increases the Level of Fiery Rain by 3. Maximum upgrade level is 15.',
    image: 'https://static.wikia.nocookie.net/gensin-impact/images/9/93/Constellation_It_Burns%21.png'
  },
  c4: {
    name: "It's Not Just Any Doll...",
    effect: "Decreases Explosive Puppet's CD by 20%. Adds 1 additional charge.",
    image: 'https://static.wikia.nocookie.net/gensin-impact/images/d/d6/Constellation_It%27s_Not_Just_Any_Doll....png'
  },
  c5: {
    name: "It's Baron Bunny!",
    effect: 'Increases the Level of Explosive Puppet by 3. Maximum upgrade level is 15.',
    image: 'https://static.wikia.nocookie.net/gensin-impact/images/9/95/Constellation_It%27s_Baron_Bunny%21.png'
  },
  c6: {
    name: 'Wildfire',
    effect: "Fiery Rain increases all party members' Movement SPD by 15% and ATK by 15% for 10s.",
    image: 'https://static.wikia.nocookie.net/gensin-impact/images/1/1b/Constellation_Wildfire.png'
  }
}
```

</details>
<details>
<summary>genshin.constellations('<b>childe</b>')<b>.c3</b></summary>

```js
{
  name: 'Abyssal Mayhem: Vortex of Turmoil',
  effect: 'Increases the Level of Foul Legacy: Raging Tide by 3. Maximum upgrade level is 15.',
  image: ''
}
```

</details>

## genshin.weapons(query[, opts])]

<details>
<summary>genshin.weapons('<b>lost prayers</b>')</summary>

```js
{
  name: 'Lost Prayer to the Sacred Winds',
  weapontype: 'Catalyst',
  rarity: '5',
  images: {
    image: 'https://static.wikia.nocookie.net/gensin-impact/images/9/98/Weapon_Lost_Prayer_to_the_Sacred_Winds.png'
  },
  baseatk: '46',
  substat: 'CRIT Rate%',
  subvalue: '7.2',
  effectname: 'Boundless Blessing',
  effect: 'Increases Movement SPD by 10%. When in battle, gain an {0}% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.',
  r1: [ '8' ],
  r2: [ '10' ],
  r3: [ '12' ],
  r4: [ '14' ],
  r5: [ '16' ],
  description: 'An educational tome written by anonymous early inhabitants who worshiped the wind. It has been blessed by the wind for its faithfulness and influence over the millennia.',
  weaponmaterialtype: 'Dandelion Gladiator',
  url: 'https://genshin-impact.fandom.com/wiki/Lost_Prayer_to_the_Sacred_Winds'
}
```

</details>
<details>
<summary>genshin.weapons('<b>decarabian</b>')</summary>

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

## genshin.weaponmaterialtypes(query[, opts])]

<details>
<summary>genshin.weaponmaterialtypes('<b>chains</b>')</summary>

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
  domainofforgery: 'Cecilia Garden'
}
```

</details>
<details>
<summary>genshin.weaponmaterialtypes('<b>fri</b>')</summary>

```js
[ 'Boreal Wolf', 'Mist Veiled Elixir' ]
```

</details>

## genshin.talentmaterialtypes(query[, opts])]

<details>
<summary>genshin.talentmaterialtypes('<b>ballad</b>')</summary>

```js
{
  name: 'Ballad',
  '2starname': 'Teachings of "Ballad"',
  '3starname': 'Guide of "Ballad"',
  '4starname': 'Philosophies of "Ballad"',
  day: [ 'Wednesday', 'Saturday', 'Sunday' ],
  location: 'Springvale',
  region: 'Mondstadt',
  domainofmastery: 'Forsaken Rift'
}
```

</details>
<details>
<summary>genshin.talentmaterialtypes('<b>satur</b>')</summary>

```js
[ 'Ballad', 'Gold' ]
```

</details>

## genshin.artifacts(query[, opts])]

<details>
<summary>genshin.artifacts('<b>flame</b>')</summary>

```js
{
  name: 'Crimson Witch of Flames',
  minrarity: '4',
  maxrarity: '5',
  flower: {
    name: "Witch's Flower of Blaze",
    images: {
      image: 'https://static.wikia.nocookie.net/gensin-impact/images/0/0f/Item_Witch%27s_Flower_of_Blaze.png'
    },
    description: 'A flower touched by the witch who once dreamt of burning away all the demons in the world. The anonymous flames affectionately caress the hands of those who touch it.'
  },
  plume: {
    name: "Witch's Ever-Burning Plume",
    images: {
      image: 'https://static.wikia.nocookie.net/gensin-impact/images/b/b3/Item_Witch%27s_Ever-Burning_Plume.png'
    },
    description: 'A bird feather touched by the witch who once dreamt of burning away all the demons in the world. Its eternal flame burns hot.'
  },
  sands: {
    name: "Witch's End Time",
    images: {
      image: 'https://static.wikia.nocookie.net/gensin-impact/images/1/14/Item_Witch%27s_End_Time.png'
    },
    description: 'A timepiece worn by the witch who dreamt of burning away all the demons in the world. The years the witch dedicated to the flames flow within.'
  },
  goblet: {
    name: "Witch's Heart Flames",
    images: {
      image: 'https://static.wikia.nocookie.net/gensin-impact/images/b/ba/Item_Witch%27s_Heart_Flames.png'
    },
    description: 'A flame-spitting urn left behind by the Crimson Witch of Flames, who once dreamt of burning away all the demons in the world. The fire in the urn burns eternally, as did its former master.'
  },
  circlet: {
    name: "Witch's Scorching Hat",
    images: {
      image: 'https://static.wikia.nocookie.net/gensin-impact/images/e/ea/Item_Witch%27s_Scorching_Hat.png'
    },
    description: 'A hat once worn by the witch who dreamt of burning away all the demons in the world. The large brim blocked her sight.'
  },
  '2pc': 'Pyro DMG Bonus +15%',
  '4pc': 'Increases Overloaded and Burning DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using an Elemental Skill increases 2-Piece Set effects by 50% for 10s. Max 3 stacks.',
  drop: {
    '4': [ 'Hidden Palace of Zhou Formula' ],
    '5': [ 'Hidden Palace of Zhou Formula' ]
  }
}
```

</details>

## genshin.recipes(query[, opts])]

<details>
<summary>genshin.recipes('<b>temptation</b>')</summary>

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
<summary>genshin.recipes('<b>4</b>')</summary>

```js
[ 'Golden Crab', 'Jade Parcels', 'Moon Pie', 'Tianshu Meat' ]
```

</details>
<details>
<summary>genshin.recipes('<b>warrior</b>')</summary>

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
<summary>genshin.recipes('<b>cabbage</b>')</summary>

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
<summary>genshin.recipes('<b>atK</b>')</summary>

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
<summary>genshin.recipes('<b>diluc</b>')</summary>

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

## genshin.elements(query[, opts])]


## genshin.rarity(query[, opts])]


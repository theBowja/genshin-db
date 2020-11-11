# Examples

```js
const genshin = require('genshin-db');
```

## Table of Contents

- [genshin.characters(query[, opts])](#genshincharactersquery-opts)
- [genshin.weapons(query[, opts])](#genshinweaponsquery-opts)
- [genshin.weaponmaterialtypes(query[, opts])](#genshinweaponmaterialtypesquery-opts)
- [genshin.talentmaterialtypes(query[, opts])](#genshintalentmaterialtypesquery-opts)
- [genshin.artifacts(query[, opts])](#genshinartifactsquery-opts)
- [genshin.elements(query[, opts])](#genshinelementsquery-opts)
- [genshin.rarity(query[, opts])](#genshinrarityquery-opts)

# genshin.characters(query[, opts])

- [genshin.characters('amber')](#genshincharactersamber)
- [genshin.characters('pyro')](#genshincharacterspyro)
- [genshin.characters('liyue')](#genshincharactersliyue)
- [genshin.characters('sword')](#genshincharacterssword)
- [genshin.characters('ballad')](#genshincharactersballad)

## genshin.characters('amber')

```js
{
    "name": "Amber",
    "titles": [
        "Outrider",
        "Champion Glider"
    ],
    "element": "Pyro",
    "weapontype": "Bow",
    "gender": "Female",
    "region": "Mondstadt",
    "rarity": "4",
    "images": {
        "image": "https://static.wikia.nocookie.net/gensin-impact/images/c/c6/Character_Amber_Thumb.png",
        "card": "https://static.wikia.nocookie.net/gensin-impact/images/2/26/Character_Amber_Card.jpg",
        "potrait": "https://static.wikia.nocookie.net/gensin-impact/images/0/00/Character_Amber_Portrait.png"
    },
    "cv": {
        "japanese": "Manaka Iwani",
        "korean": "Kim Yeon-woo",
        "chinese": "Tingting Hu"
    },
    "affiliation": "Knights of Favonius",
    "description": "A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius. Her amazing mastery of the glider has made her a three-time winner of the Gliding Championship in Mondstadt. As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.",
    "url": "https://genshin-impact.fandom.com/wiki/Amber"
}
```

## genshin.characters('pyro')

```js
[ "Amber", "Bennett", "Diluc", "Klee", "Xiangling" ]
```

## genshin.characters('liyue')

```js
[
  "Beidou",
  "Chongyun",
  "Keqing",
  "Ningguang",
  "Qiqi",
  "Xiangling",
  "Xingqiu"
]
```

## genshin.characters('sword')

```js
[
  "Aether",  "Jean",
  "Kaeya",   "Keqing",
  "Lumine",  "Qiqi",
  "Xingqiu"
]
```

## genshin.characters('ballad')

```js
[ 'Fischl', 'Kaeya', 'Lisa', 'Venti' ]
```


# genshin.weapons(query[, opts])

- [genshin.weapons('lost prayers')](#genshinweaponslost-prayers)
- [genshin.weapons('decarabian')](#genshinweaponsdecarabian)

## genshin.weapons('lost prayers')

```js
{
  name: 'Lost Prayer to the Sacred Winds',
  weapontype: 'Catalyst',
  rarity: '5',
  images: {
    image: 'https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Sacred_A2.png'
  },
  baseatk: '46',
  ability: 'CRIT Rate 7.2%',
  passive: {
    passive_name: 'Boundless Blessing',
    refinement_effect: {
      refine_one: 'Increases Movement SPD by 10%. When in battle, gain an 8% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.',
      refine_two: 'Increases Movement SPD by 10%. When in battle, gain an 10% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.',
      refine_three: 'Increases Movement SPD by 10%. When in battle, gain an 12% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.',
      refine_four: 'Increases Movement SPD by 10%. When in battle, gain an 14% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.',
      refine_five: 'Increases Movement SPD by 10%. When in battle, gain an 16% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.'
    }
  },
  description: 'An educational tome written by anonymous early inhabitants who worshiped the wind. It has been blessed by the wind for its faithfulness and influence over the millennia.',
  weaponmaterialtype: 'Dandelion Gladiator',
  url: 'https://genshin-impact.fandom.com/wiki/Lost_Prayer_to_the_Sacred_Winds'
}
```


## genshin.weapons('decarabian')

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
  'Silver Sword',
  'The Bell',
  'The Stringless',
  'The Viridiscent Hunt'
]
```

# genshin.weaponmaterialtypes(query[, opts])

- [genshin.weaponmaterialtypes('chains')](#genshinweaponmaterialtypeschains)
- [genshin.weaponmaterialtypes('fri')](#genshinweaponmaterialtypesfri)

## genshin.weaponmaterialtypes('chains')

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

## genshin.weaponmaterialtypes('fri')

```js
[ 'Boreal Wolf', 'Mist Veiled Elixir' ]
```

# genshin.talentmaterialtypes(query[, opts])

- [genshin.talentmaterialtypes('ballad')](#genshintalentmaterialtypesballad)
- [genshin.talentmaterialtypes('satur')](#genshintalentmaterialtypessatur)

## genshin.talentmaterialtypes('ballad')

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

## genshin.talentmaterialtypes('satur')

```js
[ 'Ballad', 'Gold' ]
```

# genshin.artifacts(query[, opts])

- [genshin.artifacts('flame')](#genshinartifactsflame)

## genshin.artifacts('flame')

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


# extra

```js
console.log(genshin.elements('anemo'))
```

```json
{
    "name": "Anemo",
    "type": "Wind",
    "color": "#a8f5ce",
    "emoji": "<:Element_Anemo:763984819066634289>",
    "region": "Mondstadt",
    "archon": "Barbatos",
    "theme": "Germany",
    "url": "https://static.wikia.nocookie.net/gensin-impact/images/a/a4/Element_Anemo.png"
}
```

# genshin impact id api

### information is based on the fandom and various others.
### roast my shitty code or contribute here [github.com/LichKing112/gi-id-api](https://github.com/LichKing112/gi-id-api)
> expect slower releases when 1.1 comes out. ;)

<details>
  <summary>click me for character list</summary>

- [x] amber
- [x] barbara
- [x] beidou
- [x] bennett
- [x] chongyun
- [x] diluc
- [x] jean
- [x] fischl
- [x] kaeya
- [x] keqing
- [x] klee
- [x] lisa
- [x] mona
- [x] ningguang
- [x] noelle
- [x] qiqi
- [x] razor
- [x] sucrose
- [x] traveler
- [x] venti
- [x] xiangling
- [x] xingqiu
</details>

<details>
  <summary>click me for elements list</summary>

- [x] anemo
- [x] cryo
- [x] dendro
- [x] electro
- [x] geo
- [x] hydro
- [x] pyro
</details>

<details>
  <summary>click me for weapons list</summary>

- swords
- [x] skywardblade
- [ ] aquilafavonia
- [ ] blackclifflongsword
- [ ] royallongsword
- [ ] thealleyflash
- [ ] favoniussword
- [ ] theblacksword
- [ ] theflute
- [ ] sacrificialsword
- [ ] prototyperancour
- [ ] lionsroar
- [ ] ironsting
- [ ] swordofdescension
- [ ] skyridersword
- [ ] filletblade
- [ ] travelershandysword
- [ ] harbingerofdawn
- [ ] darkironsword
- [ ] coolsteel
- [ ] silversword
- [ ] dullblade

- claymores
- [ ] coming soon

- bows
- [ ] coming soon

- catalysts
- [ ] coming soon

- polearms
- [ ] coming soon

</details>


-------------------------------------

```js
const genshin = require('gi-api-id')
 
console.log(genshin.characters('amber'))
```

```json
{
    "name": "Amber",
    "titles": [
        "Outrider",
        "Champion Glider"
    ],
    "element": "Pyro",
    "weapon": "Bow",
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

or

```js
const genshin = require('gi-api-id')
 
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

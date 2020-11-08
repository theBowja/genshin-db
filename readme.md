# genshin-db

### information is based on version 1.0.1 from the fandom and various others.


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
or
```js
const genshin = require('gi-api-id')
 
console.log(genshin.characters('Pyro'))
```
```json
[ "Amber", "Bennett", "Diluc", "Klee", "Xiangling" ]
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

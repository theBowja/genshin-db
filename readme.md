# genshin impact id api

### information is based on version 1.0.1 from the fandom and various others.
### roast my shitty code or contribute here [github.com/LichKing112/gi-id-api](https://github.com/LichKing112/gi-id-api)


## Todo
- [ ] add support for different language
- [ ] birthdays for characters
- [ ] add skills
- [ ] add talents
- [ ] add constellation
- [ ] add cooking/ingredients
- [ ] add artifacts
- [ ] add domains
- [ ] add materials
- [ ] add potions/consumables before that other npm library finishes it
- [ ] add mobs
- [ ] add achievements
- [ ] add commissions
- [ ] add function to get lists. simple/verbose
- [ ] add scaling calculators
- [ ] move the checklist to wiki or docs folder
- [ ] cleanup readme
- [ ] add fuzzy search support
- [ ] ground pound ur mom
- [ ] fix typo with otherworldly story file name
- [ ] lore???
- [ ] npc???
- [ ] license?
- [ ] pretend to add tests
- [ ] add banner history maybe


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

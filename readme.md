# genshin-db

### Information is from the fandom and various other sources. JSON database with robust searching.

------------------------------------

Flexibly search and get the information of characters, talents, constellations, weapons, weapon material, talent material, artifacts, food recipes.

```js
const genshin = require('genshin-db');
```

I recommend referring to [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples.md) since I didn't really write a detailed readme.

NOTES: every input string to the query parameter will be autocompleted to match possible values. This means doing something like genshin.characters('amb') will give the same results as genshin.characters('amber')

## Table of Contents

- [genshin.setOptions(opts)](#genshinsetoptionsopts)
- [genshin.getOptions()](#genshingetoptions)
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

## genshin.setOptions(opts)

## genshin.getOptions()

## genshin.characters(query[, opts])

Possible inputs for query parameter are:

- all character names
- constellation names
- any birthday month
- all elements
- all substat types
- all weapon types
- all talent level-up material types
- all genders
- all regions
- all rarities
- "names"

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.\
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples.md#genshincharactersquery-opts) to see example inputs and outputs for this function.

## genshin.talents(query[, opts])

Possible inputs for query parameter are:

- all character names

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.\
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples.md#genshintalentsquery-opts) to see example inputs and outputs for this function.

## genshin.constellations(query[, opts])

Possible inputs for query paremter are:

- all character names

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.\
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples.md#genshinconstellationsquery-opts) to see example inputs and outputs for this function.

## genshin.weapons(query[, opts])

Possible inputs for query parameter are:

- all weapon names
- all weapon types
- all rarities
- all weapon ascension material types
- "names"

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.\
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples.md#genshinweaponsquery-opts) to see example inputs and outputs for this function.

## genshin.weaponmaterialtypes(query[, opts])

Possible inputs for query parameter are:

- all weapon ascension material names
- all days of the week
- all regions
- all domains of forgery
- "names"

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.\
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples.md#genshinweaponmaterialtypesquery-opts) to see example inputs and outputs for this function.

## genshin.talentmaterialtypes(query[, opts])

Possible inputs for query parameter are:

- all talent book names
- all days of the week
- all regions
- all domains of mastery
- "names"

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.\
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples.md#genshintalentmaterialtypesquery-opts) to see example inputs and outputs for this function.


## genshin.artifacts(query[, opts])

Possible inputs for query parameter are:

- all artifact set names
- all rarities
- "names"

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.\
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples.md#genshinartifactsquery-opts) to see example inputs and outputs for this function.

## genshin.recipes(query[, opts])

Possible inputs for query parameter are:

- all recipe names
- all rarities
- all recipe types
- all ingredients
- all buffs
- all characters with specialty dishes

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.\
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples.md#genshinrecipesquery-opts) to see example inputs and outputs for this function.

## genshin.elements(query[, opts])

Input the name of an element

## genshin.rarity(query[, opts])

dunno about this

---------------------------

"Robust" makes the description sound cooler doesn't it?

My ambition for this library is to include most of the relevant genshin data so it can be downloaded and used easily with any project. Currently the data is manually entered. I would appreciate it a lot if someone could provide me datamined files of the live version.

## Webpack

If you want to build a webpack just do `npm run build` and it'll appear in the **dist/genshindb.js**. Then you can call all the query functions from above using GenshinDB as the variable. Or you can change the options in **webpack.config.js** to better fit how you want to use it.
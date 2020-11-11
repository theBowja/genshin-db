# genshin-db

### information is from the fandom and various other sources

------------------------------------

Flexibly search and get the information of characters, weapons, weapon material, talent material, artifacts and more.

```js
const genshin = require('genshin-db');
```

Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples.md).

NOTES: every input string to the query parameter will be autocompleted to match possible values. This means doing something like genshin.characters('amb') will give the same results as genshin.characters('amber')

## Table of Contents

- [genshin.setOptions(opts)](#genshinsetoptionsopts)
- [genshin.getOptions()](#genshingetoptions)
- [genshin.characters(query[, opts])](#genshincharactersquery-opts)
- [genshin.weapons(query[, opts])](#genshinweaponsquery-opts)
- [genshin.weaponmaterialtypes(query[, opts])](#genshinweaponmaterialtypesquery-opts)
- [genshin.talentmaterialtypes(query[, opts])](#genshintalentmaterialtypesquery-opts)
- [genshin.artifacts(query[, opts])](#genshinartifactsquery-opts)
- [genshin.elements(query[, opts])](#genshinelementsquery-opts)
- [genshin.rarity(query[, opts])](#genshinrarityquery-opts)

## genshin.setOptions(opts)

## genshin.getOptions()

## genshin.characters(query[, opts])

Possible inputs for query parameter are:

- all character names
- all elements
- all weapon types
- all talent level-up material types
- all genders
- all regions
- all rarities
- "names"

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples.md#genshincharactersquery-opts) to see example inputs and outputs for this function.

## genshin.weapons(query[, opts])

Possible inputs for query parameter are:

- all weapon names
- all weapon types
- all rarities
- all weapon ascension material types
- "names"

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples.md#genshinweaponsquery-opts) to see example inputs and outputs for this function.

## genshin.weaponmaterialtypes(query[, opts])

Possible inputs for query parameter are:

- all weapon ascension material names
- all days of the week
- all regions
- all domains of forgery
- "names"

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples.md#genshinweaponmaterialtypesquery-opts) to see example inputs and outputs for this function.

## genshin.talentmaterialtypes(query[, opts])

Possible inputs for query parameter are:

- all talent book names
- all days of the week
- all regions
- all domains of mastery
- "names"

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples.md#genshintalentmaterialtypesquery-opts) to see example inputs and outputs for this function.


## genshin.artifacts(query[, opts])

Possible inputs for query parameter are:

- all artifact set names
- all rarities
- "names"

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples.md#genshinartifactsquery-opts) to see example inputs and outputs for this function.

## genshin.talents(query[, opts])

TBD

## genshin.elements(query[, opts])

Input the name of an element

## genshin.rarity(query[, opts])

dunno about this

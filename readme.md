# genshin-db

### information is based on version 1.0.1 from the fandom and various others.

------------------------------------

```js
const genshin = require('genshin-db');
```

## Table of Contents

- [genshin.setOptions(opts)](#genshinsetoptionsopts)
- [genshin.getOptions()](#genshingetoptions)
- [genshin.characters(query[, opts])](#genshincharactersquery-opts)
- [genshin.weapons(query[, opts])](#genshinweaponsquery-opts)
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
- all genders
- all regions
- all rarities
- "names"

Check [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.

## genshin.weapons(query[, opts])

Possible inputs for query parameter are:

- all weapon names
- all weapon types
- all rarities
- "names"

Check [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.

## genshin.artifacts(query[, opts])

Possible inputs for query parameter are:

- all artifact set names
- all rarities
- "names"

Check [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.

## genshin.talents(query[, opts])

TBD

## genshin.elements(query[, opts])

Input the name of an element

## genshin.rarity(query[, opts])

dunno about this

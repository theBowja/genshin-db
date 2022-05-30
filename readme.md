# genshin-db

![npm](https://img.shields.io/npm/v/genshin-db)
![npm bundle size](https://img.shields.io/bundlephobia/min/genshin-db)

### Genshin Impact JSON data with a robust searching API! Updated to version 2.7. Sources from the fandom wiki and GenshinData repo.

------------------------------------

Flexibly search and get the information of characters, talents, constellations, weapons, weapon material, talent material, artifacts, food recipes, domains, etc.

All in-game languages are supported for query and result.

Install Node v12 or higher. Install npm. Then install this package into your project with:
```cmd
npm install genshin-db
```

Start with:

```js
const genshindb = require('genshin-db');
```

REFER TO [EXAMPLES.md](https://github.com/theBowja/genshin-db/blob/main/examples/examples.md) since the readme below isn't detailed.

Every query input string will be **autocompleted** to match available values. This means doing something like genshin.characters('amb') will give the same results as genshin.characters('amber'). If there are no results, then **undefined** will be returned.

Data format may change frequently. If you need to know the data format for some specific version of this library, you can go to the github and switch to the tag version you're on. Then go into the data folder and look at the data to find the format. Don't look into the template folder since it isn't up-to-date.

If you need help or have questions, you can talk to me in [my discord](https://discord.gg/utZRUky5Xm).

## Table of Contents

- [Options](#options)
- [Query Functions](#query-functions)
- [Adding Custom Names](#adding-custom-names)
- [Contributing](#contributing)
- [Distributions for Web/Node](#distributions-for-webnode)
- [Typescript](#typescript)
- [Webpack](#webpack)

## Options

- [genshindb.setOptions(opts)](#genshindbsetoptionsopts)
- [genshindb.getOptions()](#genshindbgetoptions)

### genshindb.setOptions(opts)

The following are the **default options** that the library starts off with. If you want to change it, then call `genshindb.setOptions`.

```js
{
    dumpResult: false, // The query result will return an object with the properties: query, folder, match, options, filename, result.
    matchAltNames: true, // Allows the matching of alternate or custom names.
    matchAliases: false, // Allows the matching of aliases. These are searchable fields that returns the data object the query matched in.
    matchCategories: false, // Allows the matching of categories. If true, then returns an array if it matches.
    verboseCategories: false, // Used if a category is matched. If true, then replaces each string name in the array with the data object instead.
    queryLanguages: ["English"], // Array of languages that your query will be searched in.
    resultLanguage: "English" // Output language that you want your results to be in.
}
````

If **matchCategories** is set to true, then the query may match a category like genshindb.characters('Geo'). An array of string names will be returned. If **verboseCategories** is set to true, then an array of objects will be returned instead.

Supported languages options are: ChineseSimplified, ChineseTraditional, English, French, German, Indonesian, Japanese, Korean, Portuguese, Russian, Spanish, Thai, Vietnamese.

### genshindb.getOptions()

## Query Functions

- [genshindb.characters(query[, opts])](#genshindbcharactersquery-opts)
- [genshindb.talents(query[, opts])](#genshindbtalentsquery-opts)
- [genshindb.constellations(query[, opts])](#genshindbconstellationsquery-opts)
- [genshindb.weapons(query[, opts])](#genshindbweaponsquery-opts)
- [genshindb.weaponmaterialtypes(query[, opts])](#genshindbweaponmaterialtypesquery-opts)
- [genshindb.talentmaterialtypes(query[, opts])](#genshindbtalentmaterialtypesquery-opts)
- [genshindb.artifacts(query[, opts])](#genshindbartifactsquery-opts)
- [genshindb.foods(query[, opts])](#genshindbfoodsquery-opts)
- [genshindb.domains(query[, opts])](#genshindbdomainsquery-opts)
- [genshindb.enemies(query[, opts])](#genshindbenemiesquery-opts)
- [genshindb.elements(query[, opts])](#genshindbelementsquery-opts)
- [genshindb.rarity(query[, opts])](#genshindbrarityquery-opts)

### genshindb.characters(query[, opts])

Returns the profile info for characters.

Possible query inputs include: character names, character titles, constellation names, birthday months, elements, substats, weapon types, genders, regions, rarities, and 'name' for the list of all characters. The result also includes a function to calculate the stats of the character at each level.

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.\
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples/examples.md#genshindbcharactersquery-opts) to see example inputs and outputs for this function.

### genshindb.talents(query[, opts])

Returns the combat skills and passive skills for characters.

Possible query inputs include: character names, upgrade materials.

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.\
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples/examples.md#genshindbtalentsquery-opts) to see example inputs and outputs for this function.

### genshindb.constellations(query[, opts])

Returns the constellation information for characters.

Possible query inputs include: character names.

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.\
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples/examples.md#genshindbconstellationsquery-opts) to see example inputs and outputs for this function.

### genshindb.weapons(query[, opts])

Possible inputs for query parameter are:

- all weapon names
- all weapon types
- all rarities
- all weapon ascension material types
- "names"

The result also includes a function to calculate the stats of the weapon at each level.

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.\
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples/examples.md#genshindbweaponsquery-opts) to see example inputs and outputs for this function.

### genshindb.weaponmaterialtypes(query[, opts])

Possible inputs for query parameter are:

- all weapon ascension material names
- all days of the week
- all regions
- all domains of forgery
- "names"

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.\
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples/examples.md#genshindbweaponmaterialtypesquery-opts) to see example inputs and outputs for this function.

### genshindb.talentmaterialtypes(query[, opts])

Possible inputs for query parameter are:

- all talent book names
- all days of the week
- all regions
- all domains of mastery
- "names"

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.\
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples/examples.md#genshindbtalentmaterialtypesquery-opts) to see example inputs and outputs for this function.

### genshindb.materials(query[, opts])

- rarity, type, 'WOOD', ingredient, specialty liyue, domains, days of week, talent books, etc.
- "names"

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.\
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples/examples.md#genshindbmaterialsquery-opts) to see example inputs and outputs for this function.

### genshindb.artifacts(query[, opts])

Possible inputs for query parameter are:

- all artifact set names
- all rarities
- "names"

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.\
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples/examples.md#genshindbartifactsquery-opts) to see example inputs and outputs for this function.

### genshindb.foods(query[, opts])

Possible inputs for query parameter are:

- all recipe names
- all rarities
- all recipe types
- all ingredients
- all buffs
- all characters with specialty dishes

Check out [categories.json](https://github.com/theBowja/genshin-db/blob/main/src/english/categories.json) file to see choices for each category.\
Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples/examples.md#genshindbfoodsquery-opts) to see example inputs and outputs for this function.

### genshindb.domains(query[, opts])

Possible inputs for query parameter are:

- all domain names
- domain entrance names
- domain types
- recommended elements
- days of week

Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples/examples.md#genshindbdomainsquery-opts) to see example inputs and outputs for this function.

### genshindb.enemies(query[, opts])

Possible inputs for query parameter are:

- all enemy names
- enemy type: "COMMON", "ELITE", "BOSS"
- enemy category (found in in-game archive)

Check out [examples.md](https://github.com/theBowja/genshin-db/blob/main/examples/examples.md#genshindbenemiesquery-opts) to see example inputs and outputs for this function.

### genshindb.elements(query[, opts])

Input the name of an element

### genshindb.rarity(query[, opts])

dunno about this

## Adding Custom Names

If you want to add your own search string to return a specific search data, then you can! For example, the following code will allow you to search "Harem King" to retrieve the character data for Aether.

```js
genshindb.addAltName(genshindb.Languages.English, genshindb.Folders.characters, "Harem King", "Aether");
genshindb.characters("harem"); // returns data for Aether
```

These do NOT persist if you restart. If you need these to persist, come into my discord and let's talk about it. :)

### genshindb.addAltName(language, folder, altname, query)

Adds the `altname` as a custom name to reach `query` inside the `language`/`folder` combination.

The enum for available languages is at `genshindb.Languages`. Or look inside [language.js](https://github.com/theBowja/genshin-db/blob/main/src/language.js)  
The enum for available folders is at `genshindb.Folders`. Or look inside [folder.js](https://github.com/theBowja/genshin-db/blob/main/src/folder.js)

`altname` is the custom name you want to add. Autocomplete will be available for this.  
`query` is the name of the data you want to attach your custom name too.  It must be in the language you specified previously.

Returns true or false depending on if your altname was successfully added or not.

### genshindb.removeAltNames(language, folder, altname)

Removes the `altname` from a `language`/`folder` combination.

Returns true or false depending on if your altname was successfully deleted or not.

### genshindb.setAltNameLimits(limit)

limit is an object with the following type:
```js
{
    maxLength?: number, // default is 100
    maxCount?: number // default is 1000
}
```

**maxLength:** You can set the max character length limit for altnames to be added. If your character limit is 5, then altname "Drunk Bard" will not be added when you try to add it.  
**maxCount:** You can also set the max number of custom names allowed. This is to prevent accidents where you run out of memory.

## Notes

Is using JSON as a database a good idea? Probably not. Is MIT License the correct license? Probably not.

## Contributing

The best way to contribute to this project is to write up feature requests in GitHub issues. Also join my discord show me what you've built so I know this is useful to people :)

---------------------------

My ambition for this library is to include most of the relevant genshin data so it can be downloaded and used easily with any project. Credits to GenshinData repo for the datamined files.

If you just want to take the data and use it yourself, you are welcome to do so. All the data is in `src/data`. Minified data is generated in `src/min`. You can use the index in `src/data/index` to map between the data name and file name. The stats for character and weapon levels are calculated in `src/getdata.js`. If you need any help feel free to write an issue or jump into my discord and talk to me directly. I would appreciate it a lot if people showed me the projects they've done with the help of the parsed data.

## Typescript

I made an [index.d.ts file](https://github.com/theBowja/genshin-db/blob/main/index.d.ts). It probably works.

Here's a bunch of examples for typing:

```
characters("names", { matchCategories: true }); // string[]
characters("names", { matchCategories: true, verboseCategories: true }); // Character[]

characters("names"); // Character | undefined
characters("names", { matchCategories: false }); // Character | undefined
characters("foobar"); // Character | undefined
characters("foobar", { matchCategories: false }); // Character | undefined
characters("foobar", { verboseCategories: true }); // Character | undefined

characters("foobar", { matchCategories: true }); // Character | string[] | undefined
characters("foobar", { matchCategories: true, verboseCategories: true }); // Character | Character[] | undefined
```

Please write up an issue if something doesn't work.

## Distributions for Web/Node

If you don't want to use the npm package, then you can take a look at the prebuilt distributions that can be used easily from web or in your Node project. [Read the documentation about it here](https://github.com/theBowja/genshin-db/tree/main/dist).

## Webpack

If for some reason you want to customize genshin-db into your own webpack dist.

First you'll need to clone this repo.

If you want to build a webpack just do `npm run build` and it'll appear in the **dist/genshindb.js**. Then you can call all the query functions from above using genshindb as the variable. Or you can change the options in **webpack.config.js** to better fit how you want to use it.

The distribution will be quite large. More than 15mb. If you wish to reduce the size of this, then you can remove the data for languages you don't need. Simply append a space-separated list of languages that you wish to ONLY include in the webpack.

For example: `npm run build english` will produce a distribution in the dist folder with only the English genshin data.

More examples: `npm run build english chinesesimplified korean japanese`, `npm run build french german`

Available language names can be found in src/language.js file. Or you can scroll up to the setOptions section in this readme.

If you want to specify only specific folders, then you can as well.

For example: `run build english characters weapons` will produce a distribution with only English characters and weapons data.

Available folder names can be found in src/folder.js file.

## Time and Space
Updated 9/8/2021.

genshin-db is around 18mb. If you're serving content, please do not send the entire package to the client. A web page receiving the entire webpack will take some time to load, which does not provide for the best user experience.

My query functions aren't the fastest thing in existence. But it is fast enough that it doesn't really matter. Unless you're running the code on a real potato.

```js
console.time();
for(let i = 0; i < 5000; i++) {
    tmp = genshindb.material('names', { matchCategories:true, verboseCategories:true, queryLanguages:['eng', 'jp', 'ko']} );
}
console.timeEnd();

// default: 1.043s
```

You're likely not gonna have a problem unless you're handling thousands of queries per second with more than one query language enabled. Make an issue if you're actually having problems.

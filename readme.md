# genshin-db

![npm](https://img.shields.io/npm/v/genshin-db)
![npm bundle size](https://img.shields.io/bundlephobia/min/genshin-db)

### Genshin Impact JSON data with a robust searching functions! Updated to version 3.7. Sources from the fandom wiki and GenshinData repo.

------------------------------------

Flexibly search and get the information of characters, talents, constellations, weapons, weapon material, talent material, artifacts, food recipes, domains, etc.

All in-game languages are supported for query and result.

REFER TO [EXAMPLES.md](https://github.com/theBowja/genshin-db/blob/main/examples/examples.md) since the readme below isn't detailed.

This library provides numerous query functions for searching various data folders. Every query input string will be **autocompleted** to match available values. For example genshindb.characters('amb') will return data for 'Amber'. If there are no matches for your query, then **undefined** will be returned.

Data format may change between versions. If you need to know the data format for some specific version of this library, you can go to the github and switch to the tag version you're on. Then go into the data folder and look at the data to find the format. Don't look into the template folder since it isn't up-to-date.

If you need help or have questions, you can talk to me in [my discord](https://discord.gg/utZRUky5Xm).


## Table of Contents

- [Setup](#setup)
    - [Node](#node)
- [Introduction](#introduction)
- [Query Options](#query-options)
- [Query Functions](#query-functions)
- [Adding Custom Names](#adding-custom-names)
- [Adding Custom Data](#adding-custom-data)
- [Contributing](#contributing)
- [Build scripts](#build-scripts)
- [Typescript](#typescript)
- [Webpack](#webpack)

## Setup

There are various ways you can add `genshin-db` to your project. Each has their pros and cons.

### Node

Install this package into your project with:
```cmd
npm install genshin-db@latest
```

Start with:
```js
const genshindb = require('genshin-db');
```

Once a new version of `genshin-db` comes out, you'll have to update using:
```cmd
npm install genshin-db@latest
```

Make sure to check the [releases page](https://github.com/theBowja/genshin-db/releases) for any possible breaking changes between versions.

### Webpack
### distribution
### genshin-db api

## Introduction

Each piece of data is sorted into [folders](https://github.com/theBowja/genshin-db/wiki/Folders) for example `characters` or `talents`. The API used to search these folders are called [query functions](#query-functions). Additionally, [options](#query-options) can be passed into these query functions which can expand the searchable subject or change the return result.

You can retrieve the entire list of data in a folder by passing in `'names'` as the query and add `matchCategories: true` as a query option. For example `genshindb.characters('names', { matchCategories: true });` will return an array of the names (string) of every single character. `verboseCategories: true` can be added to the options in order for it to return an array of data objects instead.

There is a function [genshindb.addData](https://github.com/theBowja/genshin-db/blob/main/src/getdata.js#L281) for adding custom data but there is no documentation for it yet. I plan to simplify this function further later.

## Query Options

Each query function can be augmented by various options.

The following are the **default options** that the library begins with:
```js
{
    dumpResult: false, // The query result will return an object with the properties: { query, folder, match, matchtype, options, filename, result }.
    matchNames: true, // Allows the matching of names.
    matchAltNames: true, // Allows the matching of alternate or custom names.
    matchAliases: false, // Allows the matching of aliases. These are searchable fields that returns the data object the query matched in.
    matchCategories: false, // Allows the matching of categories. If true, then returns an array if it matches.
    verboseCategories: false, // Used if a category is matched. If true, then replaces each string name in the array with the data object instead.
    queryLanguages: ["English"], // Array of languages that your query will be searched in.
    resultLanguage: "English" // Output language that you want your results to be in.
}
    transliterate: false // UNIMPLEMENTED. Allows the English alphabet to be used to match against words/characters in other languages.
````

Check the [Query Option wiki page](https://github.com/theBowja/genshin-db/wiki/Query-Options) for detailed explanation and examples on what each options does.

Supported languages options are: ChineseSimplified, ChineseTraditional, English, French, German, Indonesian, Japanese, Korean, Portuguese, Russian, Spanish, Thai, Vietnamese. [Enum is provided](https://github.com/theBowja/genshin-db/wiki/Languages). For example: `genshindb.Language.English`

### genshindb.setOptions(opts)

Normally if you use query functions, you can pass in options to override the default options once.

If you want to change the default options for subsequent query function calls, then use `genshindb.setOptions`.

Example:
```js
genshindb.setOptions({ queryLanguages: ["English", "Spanish"] });
console.log(genshindb.characters("Éter")); // no need to pass in options as parameter here to use spanish
```

### genshindb.getOptions()

Gets the options that are set. The object returned is cloned and not referenced to the original option.

## Query Functions

Query functions are the primary way to retrieve data.

You can use the general folder search function `genshindb.searchFolder(folder, query[, opts])`
Or the more specific query functions `genshindb.[folder](query[, opts])`

genshindb.achievementgroups(query[, opts]);
genshindb.achievements(query[, opts]);
genshindb.adventureranks(query[, opts]);
genshindb.animals(query[, opts]);
genshindb.artifacts(query[, opts]);
genshindb.characters(query[, opts]);
genshindb.constellations(query[, opts]);
genshindb.crafts(query[, opts]);
genshindb.domains(query[, opts]);
genshindb.elements(query[, opts]);
genshindb.enemies(query[, opts]);
genshindb.foods(query[, opts]);
genshindb.geographies(query[, opts]);
genshindb.materials(query[, opts]);
genshindb.namecards(query[, opts]);
genshindb.outfits(query[, opts]);
genshindb.rarity(query[, opts]);
genshindb.talents(query[, opts]);
genshindb.weapons(query[, opts]);
genshindb.windgliders(query[, opts]);

### Examples

You can find [examples of query function usage in genshin-db here](https://github.com/theBowja/genshin-db/blob/main/examples/examples.md).

### API

There is an API for these query functions. It returns a JSON response if there is a result. Otherwise an empty response for no result.\
The API usually gets updated one or two days after the main package updates.\
Caution: stat functions from characters/enemies are not included. Currently there is no solution for this.

Format:\
`https://genshin-db-api.vercel.app/api/[folder]?query=[query]`

Examples:\
https://genshin-db-api.vercel.app/api/characters?query=hu  
https://genshin-db-api.vercel.app/api/characters?query=hu&matchCategories=true&dumpResult=true&queryLanguages=english,jap

### Interactive App

Web app for trying out genshin-db query functions. Leverages the API above.\
Features: manipulate options, preview JSON results, share generated API links, and preview images.

[GenshinDB Interactive](https://genshindb-ia.netlify.app/)

### Data not included

I don't plan on adding any data related to events.\
If you need events data you can check out these two places:\
https://github.com/Tibowl/HuTao/blob/master/src/data/events.json  
https://api.ambr.top/assets/data/event.json

## Adding Custom Names

If you want to map your own search string to return some existing data, then you can! For example, the following code will allow you to search "Harem King" to retrieve the character data for Aether.

```js
genshindb.addAltName(genshindb.Language.English, genshindb.Folder.characters, "Harem King", "Aether");
genshindb.characters("harem"); // returns data for Aether
```

These do NOT persist if you restart your script.

### genshindb.addAltName(language, folder, altname, query)

Adds the `altname` as a custom name to reach `query` inside the `language`/`folder` combination.

[Available languages](https://github.com/theBowja/genshin-db/wiki/Languages).\
[Available folders](https://github.com/theBowja/genshin-db/wiki/Folders).

`altname` is the custom name you want to add. Query functions will autocomplete against this.\
`query` is the name of the data you want to attach your custom altname to. It must be in the language you specified previously.

Returns true or false depending on if your altname was successfully added or not.

### genshindb.removeAltNames(language, folder, altname)

Removes the `altname` from a `language`/`folder` combination.

Returns true or false depending on if your altname was successfully deleted or not.

### genshindb.setAltNameLimits(limit)

This is a built-in way to limit the kinds of altnames that can be added.

`limit` is an object with the following type:
```js
{
    maxLength?: number, // default is 100
    maxCount?: number // default is 1000
}
```

**maxLength:** You can set the max character length limit for altnames to be added. If your character limit is 5, then altname "Drunk Bard" will not be added when you try to add it.\
**maxCount:** You can also set the max number of custom names allowed. This is to prevent accidents where you run out of memory.

## Licensing

Currently using MIT License but I don't really care. Let me know if you need something more lax or free.

## Build scripts

There are scripts for building your own webpack distribution and gzipped data files.

### Webpack build

This script is for building webpack distributions of genshin-db for use anywhere.

You can find prebuilt distributions at [genshin-db-dist](https://github.com/theBowja/genshin-db-dist) which gets updated after every new genshin-db release.

```
Usage:
  npm run build -- [options]

Options:
  --languages      Space-separated list of languages to include in the data. [default: all]
  --folders        Space-separated list of folder to include in the data. [default: standard]
  --outdir         The directory where this webpack distribution will be outputted, relative to the root of genshin-db. [default: dist]
  --filename       The filename. [default: genshindb.js]
  --libraryname    Global variable from which you can access genshin-db functions. [default: GenshinDb]

Example: This will create a webpack distribution of genshin-db containing only English character data.
  npm run build -- --languages english --folder characters

More examples:
  npm run build -- --languages english chinesesimplified korean japanese
  npm run build -- --languages none --folder none filename:genshindb-nodata.js
  npm run build -- --languages all --folder achievements filename:all-achievements.js --outdir dist/data/scripts
```

The webpack.config is located at [scripts/webpack/webpack.main.config.js](https://github.com/theBowja/genshin-db/blob/main/scripts/webpack/webpack.main.config.js) should you need to make some modifications.

### Minified and gzipped data

This script is for creating data jsons or gzips of the data.

You can find the prebuilt combined standard set of data at [genshin-db-dist/data/standard](https://github.com/theBowja/genshin-db-dist/tree/main/data/standard) which gets updated after every new genshin-db release.

```
Usage
  npm run combineData -- [options]

Options:
  --languages      Space-separated list of languages to include in the data. [default: all]
  --folders        Space-separated list of folder to include in the data. [default: standard]
  --outdir         The directory where the minified json data will be outputted, relative to the root of genshin-db. [default: src/min]
  --gzipfilepath   The absolute filepath where to output the gzipped json data. If provided, the data.min.json file will not be produced. Relative path is relative to scripts/generate.

Example: This will create both the data.min.json and data.min.json.gzip at the folder data/standard.
  npm run combineData -- --outdir data/standard

More examples:
  npm run combineData -- --gzipfilepath D:/Workspace/tmp/data.gzip

```

## Contributing

Currently the best way to contribute to this project is to write up feature requests in GitHub issues. Also join my discord show me what you've built so I know this is useful to people.

---------------------------

My ambition for this library is to include most of the relevant genshin data so it can be downloaded and used easily with any project. Credits to GenshinData repo for the datamined files.

If you just want to take the data and use it yourself, you are welcome to do so. All the data is in `src/data`. Minified data is generated in `src/min`. You can use the index in `src/data/index` to map between the data name and file name. The stats for character and weapon levels are calculated in `src/getdata.js`. If you need any help feel free to write an issue or jump into my discord and talk to me directly. I would appreciate it a lot if people showed me the projects they've done with the help of the parsed data.

## Typescript

I made an [index.d.ts file](https://github.com/theBowja/genshin-db/blob/main/types/index.d.ts). It probably works.

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

## Time and Space

genshin-db is over 50mb or 6mb compressed. If you're serving static content, please do not send the entire package to the client. A web page receiving the entire webpack will take some time to load, which does not provide for the best user experience.

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

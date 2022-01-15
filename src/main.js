const fuzzysort = require('fuzzysort');
//const design = require('./design.json');
const language = require('./language.js');
const Folder = require('./folder.js');
const altnames = require('./altnames.js');
const Options = require('./Options.js');
const { getData, getIndex, addData } = require('./getdata.js');

// object that will be exported
const genshin = {};

// Default options
const baseoptions = new Options(
    false, // dumpResult
    true, // matchNames
    true, // matchAltNames
    false, // matchAliases
    false, // matchCategories
    false, // verboseCategories
    ["English"], // queryLanguages
    "English" // resultLanguage
);


// returns an array of strings used for autocomplete aka fuzzy searching
function buildQueryDict(querylangs, folder, opts) {
    let dict = opts.matchCategories ? ['names'] : [];
    for (const lang of querylangs) {
        const index = getIndex(lang, folder);
        if (index === undefined) continue;
        if (opts.matchNames && index.names)
            dict = dict.concat(Object.keys(index.names));
        if (opts.matchAltNames)
            dict = dict.concat(altnames.getAltNamesList(lang, folder));
        if (opts.matchAliases && index.aliases)
            dict = dict.concat(Object.keys(index.aliases));
        if (opts.matchCategories && index.categories)
            dict = dict.concat(Object.keys(index.categories));
    }
    return dict;
}

function autocomplete(input, dict) {
    let result = fuzzysort.go(input, dict, { limit: 1 })[0];
    return result === undefined ? undefined : result.target;
}

/**
* Gets rid of unnecessary properties.
* @param {object|Options} opts - The library options, see [Valid Options](https://github.com/theBowja/genshin-db/blob/main/)
* @returns {object} - A well-formatted object that matches the same properties as an Option instance
*/
function sanitizeOptions(opts) {
    //Even if opts property is an instance of Options, the type is still 'object'
    if (!opts || typeof opts !== 'object') return;

    let sanOpts = {};
    ['dumpResult', 'matchNames', 'matchAltNames', 'matchAliases', 'matchCategories', 'verboseCategories'].forEach(prop => {
        if (typeof opts[prop] === 'boolean') sanOpts[prop] = opts[prop];
    });
    opts.resultLanguage = language.format(opts.resultLanguage);
    if (opts.resultLanguage !== undefined)
        sanOpts.resultLanguage = opts.resultLanguage;
    opts.queryLanguages = language.format(opts.queryLanguages);
    if (opts.queryLanguages !== undefined)
        sanOpts.queryLanguages = Array.isArray(opts.queryLanguages) ? opts.queryLanguages : [opts.queryLanguages];
    return sanOpts;
}

// TODO: if folder is undefined, search through every folder
function retrieveData(query, folder, opts, getfilename) {
    opts = Object.assign({}, baseoptions, sanitizeOptions(opts));
    let queryMatch = autocomplete("" + query, buildQueryDict(opts.queryLanguages, folder, opts));
    if (queryMatch === undefined) { // no result;
        return opts.dumpResult ? getDump(query, folder, undefined, opts, undefined, undefined) : undefined;
    }

    for (let lang of opts.queryLanguages) {
        let langindex = getIndex(lang, folder);
        if (langindex === undefined) continue;

        // check if queryMatch is in .names
        if (opts.matchNames && langindex.names[queryMatch] !== undefined) {
            const filename = langindex.names[queryMatch];
            if (getfilename) return filename;
            let result = getData(opts.resultLanguage, folder, filename);
            return opts.dumpResult ? getDump(query, folder, queryMatch, opts, filename, result) : result;
        }

        // check if queryMatch is in .altnames
        if (opts.matchAltNames && altnames.getFilename(lang, folder, queryMatch)) {
            const filename = altnames.getFilename(lang, folder, queryMatch);
            if (getfilename) return filename;
            let result = getData(opts.resultLanguage, folder, filename);
            return opts.dumpResult ? getDump(query, folder, queryMatch, opts, filename, result) : result;
        }

        // check if queryMatch is in .aliases
        if (opts.matchAliases && langindex.aliases[queryMatch] !== undefined) {
            const filename = langindex.aliases[queryMatch];
            if (getfilename) return filename;
            let result = getData(opts.resultLanguage, folder, filename);
            return opts.dumpResult ? getDump(query, folder, queryMatch, opts, filename, result) : result;
        }

        // check if queryMatch is in .categories or is 'names'
        if (opts.matchCategories && (langindex.categories[queryMatch] !== undefined || queryMatch === 'names')) {
            let reslangindex = getIndex(opts.resultLanguage, folder);
            if (reslangindex === undefined) return undefined;

            let tmparr = (queryMatch === 'names') ? Object.values(reslangindex.names) : langindex.categories[queryMatch];
            // change the array of filenames into an array of data objects or data names. ignores undefined results if any
            let result = tmparr.reduce((accum, filename) => {
                let res = opts.verboseCategories ? getData(opts.resultLanguage, folder, filename) : reslangindex.namemap[filename];
                if (res !== undefined) accum.push(res);
                return accum;
            }, []);
            return opts.dumpResult ? getDump(query, folder, queryMatch, opts, tmparr, result) : result;
        }
    }
    return opts.dumpResult ? getDump(query, folder, queryMatch, opts, undefined, undefined) : undefined;
}

function getDump(query, folder, match, options, filename, result) {
    return {
        query: query,
        folder: folder,
        match: match,
        options: JSON.parse(JSON.stringify(options)),
        filename: filename !== undefined ? JSON.parse(JSON.stringify(filename)) : filename,
        result: result
    }
}

/**
 * Change default library options
 * @param {object|Options} options - See [default options](https://github.com/theBowja/genshin-db/blob/main/readme.md#genshindbsetoptionsopts) format
 * @returns {void} Nothing
 */
genshin.setOptions = function (options) {
    Object.assign(baseoptions, sanitizeOptions(options));
}

/**
 * @returns {object} - The library's options
 */
genshin.getOptions = function () {
    return JSON.parse(JSON.stringify(baseoptions));
}

/**
 * Get list of possible values for a category property.
 * @param {string} query -
 * @param {string|Folder} - 
 * @param {object|Options} opts - The library options, see [Valid Options](https://github.com/theBowja/genshin-db/blob/main/readme.md#genshindbsetoptionsopts)
 * @returns {array|undefined} - 
 */
genshin.categories = genshin.category = function (query, folder, opts) {
    if (typeof folder !== 'string' || Folder[folder] === undefined) return undefined; // invalid folder
    opts = Object.assign({}, baseoptions, sanitizeOptions(opts));

    const index = getIndex(opts.resultLanguage, folder);
    const queryDict = Object.keys(index.properties);
    if (query === 'names') {
        return queryDict;
    } else {
        let queryMatch = autocomplete("" + query, queryDict);
        if (queryMatch === undefined) return undefined;
        return index.properties[queryMatch];
    }
}

/**
 * Get character(s)' information.
 * @param {string} query - The name of the character, character title, elements, birthday months [, ...] see [possible query inputs for character(s) method](https://github.com/theBowja/genshin-db/blob/main/readme.md#genshindbsetoptionsopts) 
 * @param {object|Options} opts - The library options, see [Valid Options](https://github.com/theBowja/genshin-db/blob/main/readme.md#genshindbsetoptionsopts)
 * @returns {object} - The data found based on the query string and options parameter.
 */
genshin.characters = genshin.character = function (query, opts) {
    return retrieveData(query, Folder.characters, opts);
}

/**
 * Get the data about talent(s) for character(s).
 * @param {string} query - character name or upgrade material.
 * @param {object|Options} opts - The library options, see [Valid Options](https://github.com/theBowja/genshin-db/blob/main/readme.md#genshindbsetoptionsopts)
 * @returns {object} - the combat skills and passive skills for a character(s).
 */
genshin.talents = genshin.talent = function (query, opts) {
    return retrieveData(query, Folder.talents, opts);
}

/**
 * Get data about a weapon(s).
 * 
 * The returned object also includes a method to calculate the stats of the weapon at each level, namely .stats().
 * @param {string} query - Weapon name, type, rarity or ascension material type.
 * @param {object|Options} opts - The library options, see [Valid Options](https://github.com/theBowja/genshin-db/blob/main/readme.md#genshindbsetoptionsopts)
 * @returns {object} The data found based on the query string and options parameter.
 */
genshin.weapons = genshin.weapon = function (query, opts) {
    return retrieveData(query, Folder.weapons, opts);
}

/**
 * Get data about weapon material type(s).
 * @param {string} query - Weapon ascension material name, days of the week, region, or domain of forgery.
 * @param {object|Options} opts - The library options, see [Valid Options](https://github.com/theBowja/genshin-db/blob/main/readme.md#genshindbsetoptionsopts)
 * @returns {object} - The data found based on the query string and options parameter.
 */
genshin.weaponmaterialtypes = genshin.weaponmaterialtype = function (query, opts) {
    return retrieveData(query, Folder.weaponmaterialtypes, opts);
}

/**
 * Get data about talent material type(s).
 * @param {string} query - Talent book name, days of the week, region, or name of domain of mastery.
 * @param {object|Options} opts - The library options, see [Valid Options](https://github.com/theBowja/genshin-db/blob/main/readme.md#genshindbsetoptionsopts)
 * @returns {object} - The data found based on the query string and options parameter.
 */
genshin.talentmaterialtypes = genshin.talentmaterialtype = function (query, opts) {
    return retrieveData(query, Folder.talentmaterialtypes, opts);
}

/**
 * Get data about a material(s).
 * @param {string} query - Material rairty, type, "WOOD", ingredient, specialty liyue, domain, days of the week, talent books...
 * @param {object|Options} opts - The library options, see [Valid Options](https://github.com/theBowja/genshin-db/blob/main/readme.md#genshindbsetoptionsopts)
 * @returns {object} - The data found based on the query string and options parameter.
 */
genshin.materials = genshin.material = function (query, opts) {
    return retrieveData(query, Folder.materials, opts);
}

/**
 * Get data about an element.
 * @param {string} query - Name of the element.
 * @param {object|Options} opts - The library options, see [Valid Options](https://github.com/theBowja/genshin-db/blob/main/readme.md#genshindbsetoptionsopts)
 * @returns {object} - Data about the element.
 */
genshin.elements = genshin.element = function (query, opts) {
    return retrieveData(query, Folder.elements, opts);
}

/**
 * Get data about constellation for a character.
 * @param {string} query - Name of the character.
 * @param {object|Options} opts - The library options, see [Valid Options](https://github.com/theBowja/genshin-db/blob/main/readme.md#genshindbsetoptionsopts)
 * @returns {object} - Constellation data for the character.
 */
genshin.constellations = genshin.constellation = function (query, opts) {
    return retrieveData(query, Folder.constellations, opts);
}

/**
 * Get data about an artifact(s)
 * @param {string} query - Artifact name or rarity.
 * @param {object|Options} opts  - The library options, see [Valid Options](https://github.com/theBowja/genshin-db/blob/main/readme.md#genshindbsetoptionsopts)
 * @returns {object} - The data found based on the query string and options parameter.
 */
genshin.artifacts = genshin.artifact = function (query, opts) {
    return retrieveData(query, Folder.artifacts, opts);
}

/**
 * Get data about a rarity.
 * @param {string} query - The rarity you want to get information about.
 * @param {object|Options} opts  - The library options, see [Valid Options](https://github.com/theBowja/genshin-db/blob/main/readme.md#genshindbsetoptionsopts)
 * @returns {object} - The data found based on the query string and options parameter.
 */
genshin.rarity = function (query, opts) {
    return retrieveData(query, Folder.rarity, opts);
}

/**
 * Get data about a food. 
 * @param {string} query - Recipe name, food rarity, recipe type, food ingredients, buffs or character name with a specialty dish.
 * @param {object|Options} opts - The library options, see [Valid Options](https://github.com/theBowja/genshin-db/blob/main/readme.md#genshindbsetoptionsopts)
 * @returns {object} - The data found based on the query string and options parameter.
 */
genshin.foods = genshin.food = function (query, opts) {
    return retrieveData(query, Folder.foods, opts);
}

/**
 * Get data about a domain.
 * @param {string} query - Domain name, domain entrance name, domain type, recommended elements or days of the week.
 * @param {object|Options} opts - The library options, see [Valid Options](https://github.com/theBowja/genshin-db/blob/main/readme.md#genshindbsetoptionsopts)
 * @returns {object} - The data found based on the query string and options parameter.
 */
genshin.domains = genshin.domain = function (query, opts) {
    return retrieveData(query, Folder.domains, opts);
}

/**
 * Get data about an enemy or boss.
 * @param {string} query - Enemy name, enemy type ("COMMON", "ELITE", "BOSS") or enemy category.
 * @param {object|Options} opts - The library options, see [Valid Options](https://github.com/theBowja/genshin-db/blob/main/readme.md#genshindbsetoptionsopts)
 * @returns {object} - The data found based on the query string and options parameter.
 */
genshin.enemies = genshin.enemy = function (query, opts) {
    return retrieveData(query, Folder.enemies, opts);
}

// genshin.reactions = function(query, opts={}) {
//     opts = Object.assign({}, baseoptions, sanitizeOptions(opts));

//     const data = getJSON(`./${baselang}/reactions/${query}`);

//     return data;
// }

/**
 * Get data in any specified folder.
 * @param {string} folder - Folder name. For example: 'characters'.
 * @param {object|Options} opts - The library options, see [Valid Options](https://github.com/theBowja/genshin-db/blob/main/readme.md#genshindbsetoptionsopts)
 * @returns {object} - The data found based on the query string and options parameter.
 */
genshin.searchFolder = function (folder, query, opts) {
    if(typeof folder !== 'string') return undefined;
    return retrieveData(query, folder, opts);
}


genshin.helper = require('./helper.js');

genshin.Language = genshin.Languages = language.LanguagesEnum;
genshin.Folder = genshin.Folders = Folder;

//TODO: documentate the three methods below
/**
 * 
 * @param {*} language 
 * @param {*} folder 
 * @param {*} altname 
 * @param {*} query 
 * @returns 
 */
genshin.addAltName = function (language, folder, altname, query) {
    const options = new Options(
        false, // dumpResult
        true, // matchNames
        false, // matchAltNames
        false, // matchAliases
        false, // matchCategories
        false, // verboseCategories
        [language], // queryLanguages
    );

    const filename = retrieveData(query, folder, options, true);
    if (filename)
        return altnames.addAltName(language, folder, altname, filename);
    else
        return false;
}
genshin.removeAltNames = altnames.removeAltNames;
genshin.setAltNameLimits = altnames.setLimit;

//Class Options will serve as a template for the library's options.
genshin.Options = Options;

genshin.addData = addData;

module.exports = genshin;
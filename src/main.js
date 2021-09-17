const fuzzysort = require('fuzzysort');
//const design = require('./design.json');
const language = require('./language.js');
const Folder = require('./folder.js');
const altnames = require('./altnames.js');
const { getData, getIndex } = require('./getdata.js');

// object that will be exported
const genshin = {};

// Options that we'll start off with.
let baseoptions = {
    matchAltNames: true, // Allows the matching of alternate or custom names.
    matchAliases: false, // Allows the matching of aliases. These are searchable fields that returns the data object the query matched in.
    matchCategories: false, // Allows the matching of categories. If true, then returns an array if it matches.
    verboseCategories: false, // Used if a category is matched. If true, then replaces each string name in the array with the data object instead.
    queryLanguages: ["English"], // Array of languages that your query will be searched in.
    resultLanguage: "English" // Output language that you want your results to be in.
}

genshin.setOptions = function(options) {
    Object.assign(baseoptions, sanitizeOptions(options));
}

genshin.getOptions = function() {
    return JSON.parse(JSON.stringify(baseoptions));
}

/**
 * get rid of unnecessary properties
 */
function sanitizeOptions(opts) {
    if(typeof opts !== 'object' || opts === null) return undefined;

    let sanOpts = {};
    ['matchAltNames', 'matchAliases', 'matchCategories', 'verboseCategories'].forEach(prop => {
        if(typeof opts[prop] === 'boolean') sanOpts[prop] = opts[prop];
    });
    opts.resultLanguage = language.format(opts.resultLanguage);
    if(opts.resultLanguage !== undefined)
        sanOpts.resultLanguage = opts.resultLanguage;
    opts.queryLanguages = language.format(opts.queryLanguages);
    if(opts.queryLanguages !== undefined)
        sanOpts.queryLanguages = Array.isArray(opts.queryLanguages) ? opts.queryLanguages : [opts.queryLanguages];
    return sanOpts;
}

// returns an array of strings used for autocomplete aka fuzzy searching
function buildQueryDict(querylangs, folder, opts) {
    let dict = opts.matchCategories ? ['names'] : [];
    for(const lang of querylangs) {
        const index = getIndex(lang, folder);
        if(index === undefined) continue;
        if(index.names)
            dict = dict.concat(Object.keys(index.names));
        if(opts.matchAltNames)
            dict = dict.concat(altnames.getAltNamesList(lang, folder));
        if(opts.matchAliases && index.aliases)
            dict = dict.concat(Object.keys(index.aliases));
        if(opts.matchCategories && index.categories)
            dict = dict.concat(Object.keys(index.categories));
    }
    return dict;
}

function autocomplete(input, dict) {
    let result = fuzzysort.go(input, dict, { limit: 1 })[0];
    return result === undefined ? undefined : result.target;
}

// genshin.categories = function(query, opts={}) {
//     opts = Object.assign({}, baseoptions, sanitizeOptions(opts));

//     const file = getCategory(opts.resultLanguage);
//     return file[query] ? file[query] : [];
// }

// TODO: use a better name lol
// TODO: if folder is undefined, search through every folder
function searchFolder(query, folder, opts, getfilename) {
    opts = Object.assign({}, baseoptions, sanitizeOptions(opts));
    query = autocomplete(""+query, buildQueryDict(opts.queryLanguages, folder, opts));
    if(query === undefined) return undefined; // no result

    for(let lang of opts.queryLanguages) {
        let langindex = getIndex(lang, folder);
        if(langindex === undefined) continue;

        // check if query is in .names
        if(langindex.names[query] !== undefined) {
            const filename = langindex.names[query];
            if(getfilename) return filename;
            return getData(opts.resultLanguage, folder, filename);
        }

        // check if query is in .altnames
        if(opts.matchAltNames && altnames.getFilename(lang, folder, query)) {
            const filename = altnames.getFilename(lang, folder, query);
            if(getfilename) return filename;
            return getData(opts.resultLanguage, folder, filename);
        }

        // check if query is in .aliases
        if(opts.matchAliases && langindex.aliases[query] !== undefined) {
            const filename = langindex.aliases[query];
            if(getfilename) return filename;
            return getData(opts.resultLanguage, folder, filename);
        }

        // check if query is in .categories or is 'names'
        if(opts.matchCategories && (langindex.categories[query] !== undefined || query === 'names')) {
            let reslangindex = getIndex(opts.resultLanguage, folder);
            if(reslangindex === undefined) return undefined;

            let tmparr = (query === 'names') ? Object.values(reslangindex.names) : langindex.categories[query];
            // change the array of filenames into an array of data objects or data names. ignores undefined results if any
            return tmparr.reduce((accum, filename) => {
                let res = opts.verboseCategories ? getData(opts.resultLanguage, folder, filename) : reslangindex.namemap[filename];
                if(res !== undefined) accum.push(res);
                return accum;
            }, []);
        }
    }
    return undefined;
}

genshin.characters = function(query, opts) {
    return searchFolder(query, Folder.characters, opts);
}
genshin.character = genshin.characters;

genshin.talents = function(query, opts) {
    return searchFolder(query, Folder.talents, opts);
}
genshin.talent = genshin.talents;

genshin.weapons = function(query, opts) {
    return searchFolder(query, Folder.weapons, opts);
}
genshin.weapon = genshin.weapons;

genshin.weaponmaterialtypes = function(query, opts) {
    return searchFolder(query, Folder.weaponmaterialtypes, opts);
}
genshin.weaponmaterialtype = genshin.weaponmaterialtypes;

genshin.talentmaterialtypes = function(query, opts) {
    return searchFolder(query, Folder.talentmaterialtypes, opts);
}
genshin.talentmaterialtype = genshin.talentmaterialtypes;

genshin.materials = function(query, opts) {
    return searchFolder(query, Folder.materials, opts);
}
genshin.material = genshin.materials;

genshin.elements = function(query, opts) {
    return searchFolder(query, Folder.elements, opts);
}
genshin.element = genshin.elements;

genshin.constellations = function(query, opts) {
    return searchFolder(query, Folder.constellations, opts);
}
genshin.constellation = genshin.constellations;

genshin.artifacts = function(query, opts) {
    return searchFolder(query, Folder.artifacts, opts);
}
genshin.artifact = genshin.artifacts;

genshin.rarity = function(query, opts) {
    return searchFolder(query, Folder.rarity, opts);
}

genshin.foods = function(query, opts) {
    return searchFolder(query, Folder.foods, opts);
}
genshin.food = genshin.foods;

genshin.domains = function(query, opts) {
    return searchFolder(query, Folder.domains, opts);
}
genshin.domain = genshin.domains;

genshin.enemies = function(query, opts) {
    return searchFolder(query, Folder.enemies, opts);
}
genshin.enemy = genshin.enemies;

// genshin.reactions = function(query, opts={}) {
//     opts = Object.assign({}, baseoptions, sanitizeOptions(opts));

//     const data = getJSON(`./${baselang}/reactions/${query}`);

//     return data;
// }

genshin.helper = require('./helper.js');

// export enums
genshin.Language = language.LanguagesEnum;
genshin.Languages = language.LanguagesEnum;
genshin.Folder = Folder;
genshin.Folders = Folder;

// export custom alternate names api
genshin.addAltName = function(language, folder, altname, query) {
    const myOptions = {
        matchAltNames: false,
        matchAliases: false,
        matchCategories: false,
        verboseCategories: false,
        queryLanguages: [language],
    }
    const filename = searchFolder(query, folder, myOptions, true)
    if(filename)
        return altnames.addAltName(language, folder, altname, filename);
    else
        return false;
}
genshin.removeAltNames = altnames.removeAltNames;
genshin.setAltNameLimits = altnames.setLimit;


module.exports = genshin;
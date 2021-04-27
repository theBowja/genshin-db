const fuzzysort = require('fuzzysort');
//const design = require('./design.json');
const language = require('./language.js');
const { getData, getIndex } = require('./getdata.js');

// object that will be exported
const genshin = {};

// Options that we'll start off with.
let baseoptions = {
    matchAliases: true, // Allows the matching of aliases.
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
    ['matchAliases', 'matchCategories', 'verboseCategories'].forEach(prop => {
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

function buildQueryDict(querylangs, folder, opts) {
    let dict = opts.matchCategories ? ['names'] : [];
    for(const lang of querylangs) {
        const index = getIndex(lang, folder);
        if(index === undefined) continue;
        if(index.names)
            dict = dict.concat(Object.keys(index.names));
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
function searchFolder(query, folder, opts) {
    opts = Object.assign({}, baseoptions, sanitizeOptions(opts));
    query = autocomplete(""+query, buildQueryDict(opts.queryLanguages, folder, opts));
    if(query === undefined) return undefined;

    for(let lang of opts.queryLanguages) {
        let langindex = getIndex(lang, folder);
        if(langindex === undefined) continue;

        // check if query is in .names
        if(langindex.names[query] !== undefined)
            return getData(opts.resultLanguage, folder, langindex.names[query]);

        // check if query is in .aliases
        if(opts.matchAliases && langindex.aliases[query] !== undefined)
            return getData(opts.resultLanguage, folder, langindex.aliases[query]);

        // check if query is in .categories or is 'names'
        if(opts.matchCategories && (langindex.categories[query] !== undefined || query === 'names')) {
            let reslangindex = getIndex(opts.resultLanguage, folder);
            if(reslangindex === undefined) return undefined;

            let tmparr = (query === 'names') ? Object.values(reslangindex.names) : langindex.categories[query];
            // change the array of filenames into an array of data objects or data names. ignores undefined results if any
            return tmparr.reduce((accum, filename) => {
                let res = opts.verbose ? getData(opts.resultLanguage, folder, filename) : reslangindex.namemap[filename];
                if(res !== undefined) accum.push(res);
                return accum;
            }, []);
        }
    }
    return undefined;
}

genshin.characters = function(query, opts) {
    return searchFolder(query, 'characters', opts);
}
genshin.character = genshin.characters;

genshin.talents = function(query, opts) {
    return searchFolder(query, 'talents', opts);
}
genshin.talent = genshin.talents;

genshin.weapons = function(query, opts) {
    return searchFolder(query, 'weapons', opts);
}
genshin.weapon = genshin.weapons;

genshin.weaponmaterialtypes = function(query, opts) {
    return searchFolder(query, 'weaponmaterialtypes', opts);
}
genshin.weaponmaterialtype = genshin.weaponmaterialtypes;

genshin.talentmaterialtypes = function(query, opts) {
    return searchFolder(query, 'talentmaterialtypes', opts);
}
genshin.talentmaterialtype = genshin.talentmaterialtypes;

genshin.elements = function(query, opts) {
    return searchFolder(query, 'elements', opts);
}
genshin.element = genshin.elements;

genshin.constellations = function(query, opts) {
    return searchFolder(query, 'constellations', opts);
}
genshin.constellation = genshin.constellations;

genshin.artifacts = function(query, opts) {
    return searchFolder(query, 'artifacts', opts);
}
genshin.artifact = genshin.artifacts;

genshin.rarity = function(query, opts) {
    return searchFolder(query, 'rarity', opts);
}

genshin.recipes = function(query, opts) {
    return searchFolder(query, 'recipes', opts)
}
genshin.recipe = genshin.recipes;

// genshin.reactions = function(query, opts={}) {
//     opts = Object.assign({}, baseoptions, sanitizeOptions(opts));

//     const data = getJSON(`./${baselang}/reactions/${query}`);

//     return data;
// }

genshin.helper = require('./helper.js');

module.exports = genshin;
const fuzzysort = require('fuzzysort');
//const design = require('./design.json');
const language = require('./language.js');

// object that will be exported
const genshin = {};

let baseoptions = {
    verbose: false, // used for replacing string names from categories with data object
    nameonly: false, // set this to true if you don't want your query to match any categories or aliases
    querylanguages: ["English"], // array of languages that your query will be searched in
    resultlanguage: "English"
}

genshin.setOptions = function(options) {
    Object.assign(baseoptions, sanitizeOptions(options));
}

genshin.getOptions = function() {
    return JSON.parse(JSON.stringify(baseoptions));
}

const alldata = require('./data/data.min.json');
function getData(lang, folder, filename) {
    try {
        return alldata[lang][folder][filename];
    } catch(e) {
        return undefined;
    }
}

const allindex = require('./data/index.min.json');
function getIndex(lang, folder) {
    try {
        return allindex[lang][folder];
    } catch(e) {
        return undefined;
    }
}

/**
 * get rid of unnecessary properties
 */
function sanitizeOptions(opts) {
    if(typeof opts !== 'object' || opts === null) return undefined;

    let sanOpts = {};
    opts.resultlanguage = language.format(opts.resultlanguage);
    opts.querylanguages = language.format(opts.querylanguages);
    if(typeof opts.verbose === "boolean")
        sanOpts.verbose = opts.verbose;
    if(typeof opts.nameonly === 'boolean')
        sanOpts.nameonly = opts.nameonly;
    if(opts.resultlanguage !== undefined)
        sanOpts.resultlanguage = opts.resultlanguage;
    if(opts.querylanguages !== undefined)
        sanOpts.querylanguages = Array.isArray(opts.querylanguages) ? opts.querylanguages : [opts.querylanguages];
    return sanOpts;
}

function buildQueryDict(querylangs, folder, nameonly) {
    let dict = nameonly ? [] : ['names'];
    for(const lang of querylangs) {
        const index = getIndex(lang, folder);
        if(index === undefined) continue;
        if(index.names)
            dict = dict.concat(Object.keys(index.names));
        if(nameonly) continue;
        if(index.aliases)
            dict = dict.concat(Object.keys(index.aliases));
        if(index.categories)
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

//     const file = getCategory(opts.resultlanguage);
//     return file[query] ? file[query] : [];
// }

// TODO: use a better name lol
// TODO: if folder is undefined, search through every folder
function searchFolder(query, folder, opts) {
    opts = Object.assign({}, baseoptions, sanitizeOptions(opts));
    query = autocomplete(""+query, buildQueryDict(opts.querylanguages, folder, opts.nameonly));
    if(query === undefined) return undefined;

    for(let lang of opts.querylanguages) {
        let langindex = getIndex(lang, folder);
        if(langindex === undefined) continue;

        // check if query is in .names
        if(langindex.names[query] !== undefined)
            return getData(opts.resultlanguage, folder, langindex.names[query]);

        if(opts.nameonly) continue;

        // check if query is in .aliases
        if(langindex.aliases[query] !== undefined)
            return getData(opts.resultlanguage, folder, langindex.aliases[query]);

        // check if query is in .categories
        if(langindex.categories[query] !== undefined) {
            let reslangindex = getIndex(opts.resultlanguage, folder);
            if(reslangindex === undefined) return undefined;
            // change the array of filenames into an array of data objects or data names. ignores undefined results if any
            return langindex.categories[query].reduce((accum, filename) => {
                let res = opts.verbose ? getData(opts.resultlanguage, folder, filename) : reslangindex.namemap[filename];
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

genshin.talents = function(query, opts) {
    return searchFolder(query, 'talents', opts);
}

genshin.weapons = function(query, opts) {
    return searchFolder(query, 'weapons', opts);
}

genshin.weaponmaterialtypes = function(query, opts) {
    return searchFolder(query, 'weaponmaterialtypes', opts);
}

genshin.talentmaterialtypes = function(query, opts) {
    return searchFolder(query, 'talentmaterialtypes', opts);
}

genshin.elements = function(query, opts) {
    return searchFolder(query, 'elements', opts);
}

genshin.constellations = function(query, opts) {
    return searchFolder(query, 'constellations', opts);
}

genshin.artifacts = function(query, opts) {
    return searchFolder(query, 'artifacts', opts);
}

genshin.rarity = function(query, opts) {
    return searchFolder(query, 'rarity', opts);
}

genshin.recipes = function(query, opts) {
    return searchFolder(query, 'recipes', opts)
}

// genshin.reactions = function(query, opts={}) {
//     opts = Object.assign({}, baseoptions, sanitizeOptions(opts));

//     const data = getJSON(`./${baselang}/reactions/${query}`);

//     return data;
// }

genshin.helper = require('./helper.js');

module.exports = genshin;
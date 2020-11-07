const genshin = {};

let baseoptions = {
    verbose: false, // used for replacing string names from categories with data object
    resultlanguage: "english",
    querylanguages: ["english"]
}

genshin.setOptions = function(options) {
    Object.assign(baseoptions, sanitizeOptions(options));
}

genshin.getOptions = function() {
    return JSON.parse(JSON.stringify(baseoptions));
}

/**
 * @param langs - a string or array of strings
 * @returns undefined if none of the strings are valid languages
 */
function formatLanguages(langs) {
    if(typeof langs === "string") {
        switch(langs) {
            case "en":
            case "english":
                return "english";
            // case "jp":
            // case "japanese":
            //     return "japanese";
        }
    } else if(Array.isArray(langs)) {
        let tmp = [];
        for(let l of langs) {
            l = formatLanguages(l);
            if(l && !tmp.includes(l)) tmp.push(l);
        }
        if(tmp.length) return tmp;
    }
    return undefined;
}

function getJSON(path) {
    try {
        return require(path);
    } catch(e) {
        return undefined;
    }
}

/**
 * get rid of unnecessary properties
 */
function sanitizeOptions(opts={}) {
    opts.resultlanguage = formatLanguages(opts.resultlanguage);
    opts.querylanguages = formatLanguages(opts.querylanguages);
    let sanOpts = {};
    if(typeof opts.verbose === "boolean")
        sanOpts.verbose = opts.verbose;
    if(opts.resultlanguage !== undefined)
        sanOpts.resultlanguage = opts.resultlanguage;
    if(opts.querylanguages !== undefined)
        sanOpts.querylanguages = opts.querylanguages;
    return sanOpts;
}

function buildQueryDict(querylangs, folder) {
    let dict = [];
    for(const lang of querylangs) {
        const file = getJSON(`./index/${lang}/${folder}.json`)
        //console.log(file);
        if(file === undefined) continue;
        dict = [...dict, ...(file.names||[]), ...Object.keys(file).filter(k => k !== 'file')];
    }
    //console.log(dict);
    return dict;
}

function autocomplete(input, dict) {
    const fuzzysort = require('fuzzysort');
    let result = fuzzysort.go(input, dict, { limit: 1 })[0];
    return result === undefined ? undefined : result.target;
}

genshin.categories = function(query, opts={}) {
    opts = Object.assign({}, baseoptions, sanitizeOptions(opts));

    const file = getJSON(`./${opts.resultlanguage}/categories.json`);
    return file[query] ? file[query] : [];
}

// TODO: use a better name lol
// TODO: if folder is undefined, search through every folder
function searchFolder(query, folder, opts={}) {
    opts = Object.assign({}, baseoptions, sanitizeOptions(opts));
    query = autocomplete(query, buildQueryDict(opts.querylanguages, folder));
    if(query === undefined) return undefined;

    const queryindex = getJSON(`./index/${opts.resultlanguage}/${folder}.json`);
    if(queryindex[query] !== undefined) return queryindex[query];
    const filename = queryindex.file[queryindex.names.indexOf(query)];
    if(filename === undefined) return;

    return getJSON(`./${opts.resultlanguage}/${folder}/${filename}`);
}

const folders = ['characters', 'weapons', 'elements', 'rarity'];

genshin.characters = function(query, opts={}) {
    return searchFolder(query, 'characters', opts);
}

genshin.weapons = function(query, opts={}) {
    return searchFolder(query, 'weapons', opts);
}

genshin.elements = function(query, opts={}) {
    return searchFolder(query, 'elements', opts);
}

genshin.rarity = function(query, opts={}) {
    return searchFolder(query, 'rarity', opts);
}

// genshin.reactions = function(query, opts={}) {
//     opts = Object.assign({}, baseoptions, sanitizeOptions(opts));

//     const data = getJSON(`./${baselang}/reactions/${query}`);

//     return data;
// }

module.exports = genshin;
const genshin = {};

let baseoptions = {
    verbose: false, // used for replacing string names from categories with data object
    autocomplete: true,
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
        return {};
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
    if(typeof opts.autocomplete === "boolean")
        sanOpts.autocomplete = opts.autocomplete;
    if(opts.resultlanguage !== undefined)
        sanOpts.resultlanguage = opts.resultlanguage;
    if(opts.querylanguages !== undefined)
        sanOpts.querylanguages = opts.querylanguages;
    return sanOpts;
}

genshin.categories = function(query, opts={}) {
    query = query.toLowerCase();
    opts = Object.assign({}, baseoptions, sanitizeOptions(opts));

    const file = getJSON(`./${opts.resultlanguage}/categories.json`);
    return file[query] ? file[query] : [];
}

genshin.characters = function(query, opts={}) {
    query = query.toLowerCase(); // TODO: language specific sanitation
    opts = Object.assign({}, baseoptions, sanitizeOptions(opts));

    const queryindex = getJSON(`./index/${opts.resultlanguage}/characters.json`);
    if(queryindex[query] !== undefined) return queryindex[query];
    const filename = queryindex.file[queryindex.names.indexOf(query)];
    if(filename === undefined) return;

    return getJSON(`./${opts.resultlanguage}/characters/${filename}`);
}

genshin.weapons = function(query, opts={}) {
    opts = Object.assign({}, baseoptions, sanitizeOptions(opts));

    const data = getJSON(`./${baselang}/weapons/${query}`);

    return data;
}

genshin.elements = function(query, opts={}) {
    opts = Object.assign({}, baseoptions, sanitizeOptions(opts));

    const data = getJSON(`./${baselang}/elements/${query}`);

    return data;
}


genshin.rarity = function(query, opts={}) {
    opts = Object.assign({}, baseoptions, sanitizeOptions(opts));

    const data = getJSON(`./${baselang}/rarity/${query}`);

    return data;
}

genshin.reactions = function(query, opts={}) {
    opts = Object.assign({}, baseoptions, sanitizeOptions(opts));

    const data = getJSON(`./${baselang}/reactions/${query}`);

    return data;
}

module.exports = genshin;
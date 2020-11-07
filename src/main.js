const genshin = {};

let baseoptions = {
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
 * Creates and returns a new object with 
 */
function combineObjects(base, ...over) {

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
            case "jp":
            case "japanese":
                return "japanese";
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
    if(opts.autocomplete === true || opts.autocomplete === false)
        sanOpts.autocomplete = opts.autocomplete;
    if(opts.resultlanguage)
        sanOpts.resultlanguage = opts.resultlanguage;
    if(opts.querylanguages)
        sanOpts.querylanguages = opts.querylanguages;
    return sanOpts;
}

genshin.characters = function(query, opts={}) {
    opts = Object.assign({}, baseoptions, sanitizeOptions(opts));

    const queryindex = getJSON(`./index/${opts.resultlanguage}/characters.json`);
    const filename = queryindex.file[queryindex.name.indexOf(query)];
    if(filename === undefined) return;
    
    return getJSON(`./${opts.resultlanguage}/characters/${filename}`);
}

genshin.elements = function(query, opts={}) {
    opts = Object.assign({}, baseoptions, sanitizeOptions(opts));

    const data = getJSON(`./${baselang}/elements/${query}`);

    return data;
}

genshin.categories = function(query, opts={}) {
    opts = Object.assign({}, baseoptions, sanitizeOptions(opts));

}

genshin.weapons = function(query, opts={}) {
    opts = Object.assign({}, baseoptions, sanitizeOptions(opts));

    const data = getJSON(`./${baselang}/weapons/${query}`);

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
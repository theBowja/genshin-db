const genshin = {};

let baselang = "english";

genshin.setOptions = function(options) {
    options = formatOptions(options);

    if(options.language !== undefined) baselang = options.language;
}

/**
 * remove this function later maybe
 */
genshin.setBaseLanguage = function(lang) {
    lang = formatLanguages(lang);
    if(lang === undefined) return false;
    baselang = lang;
    return true;
}

/**
 * 
 */
function formatLanguages(lang) {
    switch(lang) {
        case "en":
        case "english":
            return "english";
        case "jp":
        case "japanese":
            return "japanese";
        default:
            return undefined;
    }
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
function formatOptions(options={}) {
    let opt = {};
    opt.language = formatLanguages(options.language);
    return opt;
}

genshin.characters = function(query, options={}) {
    options = formatOptions(options);

    const index = getJSON('./index/characters.json');
    const filename = index[baselang].file[index[baselang].name.indexOf(query)];
    if(filename === undefined) return;
    return getJSON(`./${baselang}/characters/${filename}`);
}

genshin.elements = function(query, options={}) {
    options = formatOptions(options);

    const data = getJSON(`./${baselang}/elements/${query}`);

    return data;
}


genshin.weapons = function(query, options) {
    options = formatOptions(options);

    const data = getJSON(`./${baselang}/weapons/${query}`);

    return data;
}

genshin.rarity = function(query, options) {
    options = formatOptions(options);

    const data = getJSON(`./${baselang}/rarity/${query}`);

    return data;
}

genshin.reactions = function(query, options) {
    options = formatOptions(options);

    const data = getJSON(`./${baselang}/reactions/${query}`);

    return data;
}

module.exports = genshin;
const genshin = {};

let baselang = "english";

genshin.setOptions = function(options) { }

/**
 * 
 */
genshin.setBaseLanguage = function(lang) {
    lang = languages(lang);
    if(lang === "") return false;
    baselang = lang;
    return true;
}

/**
 * 
 */
function languages(lang) {
    switch(lang) {
        case "en":
        case "english":
            return "english";
        case "jp":
        case "japanese":
            return "japanese";
        default:
            return "";
    }
}

genshin.elements = function(query, options) {
    const file = require(`./${baselang}/elements/${query}`);
    if(!file) return;

    return file;
}

genshin.characters = function(query, options) {
    const file = require(`./${baselang}/characters/${query}`);
    if(!file) return;

    return file;
}

genshin.weapons = function(query, options) {
    const file = require(`./${baselang}/weapons/${query}`);
    if(!file) return;

    return file;
}

genshin.rarity = function(query, options) {
    const file = require(`./${baselang}/rarity/${query}`);
    if(!file) return;

    return file;
}

genshin.reactions = function(query, options) {
    const file = require(`./${baselang}/reactions/${query}`);
    if(!file) return;

    return file;
}

module.exports = genshin;
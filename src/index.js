module.exports.elements = function(query) {
    const file = require(`./elements/${query}`);
    if(!file) return;

    return file;
}

module.exports.characters = function(query) {
    const file = require(`./characters/${query}`);
    if(!file) return;

    return file;
}

module.exports.weapons = function(query) {
    const file = require(`./weapons/${query}`);
    if(!file) return;

    return file;
}

module.exports.rarity = function(query) {
    const file = require(`./rarity/${query}`);
    if(!file) return;

    return file;
}

module.exports.reactions = function(query) {
    const file = require(`./reactions/${query}`);
    if(!file) return;

    return file;
}
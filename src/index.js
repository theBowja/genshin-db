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
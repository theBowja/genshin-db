module.exports.elements = function(query) {
    const file = require(`./elements/${query}`);
    if(!file) return;

    return file;
}
const alldata = require('./min/data.min.json');
const allindex = require('./min/index.min.json');
const allimage = require('./min/image.min.json');
const allstats = require('./min/stats.min.json');
const allcurve = require('./min/curve.min.json');


function getData(lang, folder, filename) {
    try {
        let tmp = alldata[lang][folder][filename];
        if(tmp.images === undefined) tmp.images = getImage(folder, filename);
        return tmp;
    } catch(e) {
        return undefined;
    }
}

function getIndex(lang, folder) {
    try {
        return allindex[lang][folder];
    } catch(e) {
        return undefined;
    }
}

function getImage(folder, filename) {
    try {
        return allimage[folder][filename];
    } catch(e) {
        return undefined;
    }
}

function getStats(folder, filename) {

}

function getCurve(folder) {

}


module.exports = {
    getData: getData,
    getIndex: getIndex,
    getImage: getImage,
    getStats: getStats
}
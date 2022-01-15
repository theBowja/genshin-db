let all = require('./min/data.min.json');
const pako = require('pako');

if(all instanceof ArrayBuffer) {
    all = JSON.parse(pako.ungzip(all, { to: 'string' }));
}

/**
{
  data: {
    [Languages]: {
      [folders]: ObjectMap
    }
  },
  index: {
    [Languages]: {
      [folders]: ObjectMap
    }
  },
  image: {
    [folders]: ObjectMap
  },
  stats: {
    [folders]: ObjectMap
  },
  curve: {
    [folders]: ObjectMap
  },
  url: {
    [folders]: ObjectMap
  }
}
*/

if(!all.data) all.data = {};
if(!all.index) all.index = {};
if(!all.image) all.image = {};
if(!all.url) all.url = {};
if(!all.stats) all.stats = {};
if(!all.curve) all.curve = {};

const alldata  = all.data;
const allindex = all.index;
const allimage = all.image;
const allurl   = all.url;
const allstats = all.stats;
const allcurve = all.curve;

const availableimage = ['characters', 'artifacts', 'weapons', 'constellations', 'talents', 'materials', 'foods', 'elements', 'domains', 'enemies'];
const availableurl   = ['characters', 'artifacts', 'weapons', 'foods', 'materials'];
const availablestats = ['characters', 'weapons', 'enemies'];
const availablecurve = ['characters', 'weapons', 'enemies'];

const calcStatsMap = {
    'characters': calcStatsCharacter,
    'weapons': calcStatsWeapon,
    'enemies': calcStatsEnemy
};

function getData(lang, folder, filename) {
    try {
        let tmp = alldata[lang][folder][filename];
        if(tmp.images === undefined && availableimage.includes(folder)) {
            tmp.images = getImage(folder, filename);
        }
        if(tmp.url === undefined && availableurl.includes(folder)) {
            tmp.url = getURL(folder, filename);
        }
        if(tmp.stats === undefined && availablestats.includes(folder) && calcStatsMap[folder]) {
            tmp.stats = calcStatsMap[folder](filename);
        }
        if(folder === 'talents' && tmp.combat1.parameters === undefined) {
            setAttributesTalent(tmp, filename);
        }
        return tmp;
    } catch(e) { return undefined; }
}

function getIndex(lang, folder) {
    try {
        return allindex[lang][folder];
    } catch(e) { return undefined; }
}

function getImage(folder, filename) {
    try {
        return allimage[folder][filename];
    } catch(e) { return undefined; }
}

function getURL(folder, filename) {
    try {
        return allurl[folder][filename];
    } catch(e) { return undefined; }
}

function getStats(folder, filename) {
    try {
        return allstats[folder][filename];
    } catch(e) { return undefined; }
}

function getCurve(folder) {
    try {
        return allcurve[folder];
    } catch(e) { return undefined; }
}

function calcStatsCharacter(filename) {
    const mystats = getStats('characters', filename);
    const mycurve = getCurve('characters');
    if(mystats === undefined || mycurve === undefined) return undefined;
    /** 
     * Calculates the stats of a character at a specific level and ascension phase.
     * @param level: number - level. number between 1-90. returns undefined if not within range.
     * @param ascension: undefined | number | string - the ascension number, or '-'/'+'. defaults to '-'.
     *                   only decides which stats to return at level boundaries (20, 40, 50, 60, 70, 80).
     */
    return function(level, ascension) {
        level = parseInt(level, 10);
        if(isNaN(level)) return undefined;
        if(level > 90 || level < 1) return undefined;

        const [phase, promotion] = getPromotionBonus(mystats.promotion, level, ascension);
        let output = {
            level: level,
            ascension: phase,
            hp: mystats.base.hp * mycurve[level][mystats.curve.hp] + promotion.hp,
            attack: mystats.base.attack * mycurve[level][mystats.curve.attack] + promotion.attack,
            defense: mystats.base.defense * mycurve[level][mystats.curve.defense] + promotion.defense,
            specialized: promotion.specialized
        };
        if(mystats.specialized === 'FIGHT_PROP_CRITICAL')
            output.specialized += mystats.base.critrate;
        else if(mystats.specialized === 'FIGHT_PROP_CRITICAL_HURT')
            output.specialized += mystats.base.critdmg;

        return output;
    }
}

function calcStatsWeapon(filename) {
    const mystats = getStats('weapons', filename);
    const mycurve = getCurve('weapons');
    if(mystats === undefined || mycurve === undefined) return undefined;
    const maxlevel = mystats.promotion[mystats.promotion.length-1].maxlevel;
    /**
     * Calculates the stats of a weapon at a specific level and ascension phase.
     */
    return function(level, ascension) {
        level = parseInt(level, 10);
        if(isNaN(level)) return undefined;
        if(level > maxlevel || level < 1) return undefined;

       const [phase, promotion] = getPromotionBonus(mystats.promotion, level, ascension);
        let output = {
            level: level,
            ascension: phase,
            attack: mystats.base.attack * mycurve[level][mystats.curve.attack] + promotion.attack,
            specialized: mystats.base.specialized * mycurve[level][mystats.curve.specialized]
        };

        return output; 
    }
}

/**
 * Generates a function for calculating the hp/atk/defense of an enemy.
 */
function calcStatsEnemy(filename) {
    const mystats = getStats('enemies', filename);
    const mycurve = getCurve('enemies');
    if(mystats === undefined || mycurve === undefined) return undefined;
    /**
     * Calculates the stats of a enemy at a specific level. Does not take into account location.
     */
    return function(level) {
        level = parseInt(level, 10);
        if(isNaN(level)) return undefined;
        if(level > 200 || level < 1) return undefined;

        let output = {
            level: level,
            hp: mystats.base.hp * mycurve[level][mystats.curve.hp],
            attack: mystats.base.attack * mycurve[level][mystats.curve.attack],
            defense: level*5+500//mystats.base.defense * mycurve[level][mystats.curve.defense]
        };

        return output; 
    }
}

/**
 * @param level: integer
 * @param ascension: undefined | number | string - the ascension number, or '-'/'+'. defaults to '-'.
 *                   only decides which stats to return at level boundaries.
 */
function getPromotionBonus(promotions, level, ascension) {
    for(let index = promotions.length - 2; index >= 0; index--) {
        if(level > promotions[index].maxlevel) {
            return [index+1, promotions[index+1]];
        } else if(level === promotions[index].maxlevel) {
            if(Number.isFinite(ascension) && ascension > index || ascension === '+')
                return [index+1, promotions[index+1]];
            else
                return [index, promotions[index]];
        }
    }
    return [0, promotions[0]];
}

function setAttributesTalent(data, filename) {
    const myparams = getStats('talents', filename);
    for(const prop of ['combat1', 'combat2', 'combatsp', 'combat3']) {
        if(myparams[prop] === undefined) continue;
        data[prop].attributes.parameters = myparams[prop];
    }
}

/* ======================================================================================= */

function isObject(obj) {
    return !!obj && typeof obj === 'object';
}

function dataExists(data, language, folder, filename) {
    try {
        if(language)
            return data[language][folder][filename]
        else
            return data[folder][filename];
    } catch {
        return undefined;
    }
}

function assignOverride(obj, keyPath, lastKey, value) {
    for(const key of keyPath) {
        if(!obj[key])
            obj[key] = {}
        obj = obj[key];
    }
    obj[lastKey] = value;
}

function assignArray(obj, keyPath, lastKey, array) {
    array = array.filter(val => typeof val === 'string');
    if(array.length === 0) return;

    for(const key of keyPath) {
        if(!obj[key])
            obj[key] = {}
        obj = obj[key];
    }
    if(!obj[lastKey]) return obj[lastKey] = array;
    for(const value of array) {
        if(typeof value !== 'string') continue;
        if(!obj[lastKey].includes(value))
            obj[lastKey].push(value);
    }
}

const languagesArr = require('./language.js').languages;
const foldersArr = Object.values(require('./folder.js'));
function addData(newdata, override = true) {
    if(newdata instanceof ArrayBuffer) {
        newdata = JSON.parse(pako.ungzip(newdata, { to: 'string' }));
    }

    if(!isObject(newdata)) return;
    if(isObject(newdata.data)) {
        for(const language of languagesArr) {
            if(!isObject(newdata.data[language])) continue;
            for(const folder of Object.keys(newdata.data[language])) {
            // for(const folder of foldersArr) { // commented to allow addition of new folders
                if(!isObject(newdata.data[language][folder])) continue;
                for(const filename in newdata.data[language][folder]) {
                    if(!isObject(newdata.data[language][folder][filename])) continue;
                    if(!override && dataExists(alldata, language, folder, filename)) continue;
                    assignOverride(alldata, [language, folder], filename, newdata.data[language][folder][filename]);
                }
            }
        }
    }
    if(isObject(newdata.index)) {
        for(const language of languagesArr) {
            if(!isObject(newdata.index[language])) continue;
            for(const folder of Object.keys(newdata.index[language])) {
            // for(const folder of foldersArr) { // commented to allow addition of new folders
                if(!isObject(newdata.index[language][folder])) continue;
                for(const indexprop of ['namemap', 'names', 'aliases', 'categories', 'properties']) {
                    if(!isObject(newdata.index[language][folder][indexprop])) continue;
                    for(const filename in newdata.index[language][folder][indexprop]) {
                        switch(indexprop) { // check if valid type (either string or array)
                            case 'namemap':
                            case 'names':
                            case 'aliases':
                                if(typeof newdata.index[language][folder][indexprop][filename] !== 'string') continue;
                                assignOverride(allindex, [language, folder, indexprop], filename, newdata.index[language][folder][indexprop][filename]);
                                break;

                            case 'categories':
                            case 'properties':
                                if(!Array.isArray(newdata.index[language][folder][indexprop][filename])) continue;
                                assignArray(allindex, [language, folder, indexprop], filename, newdata.index[language][folder][indexprop][filename]);
                                break;
                        }
                    }
                }
            }
        }
    }
    if(isObject(newdata.image)) {
        for(const folder of Object.keys(newdata.image)) {
        // for(const folder of availableimage) { // commented to allow addition of new folders
            if(!isObject(newdata.image[folder])) continue;
            for(const filename in newdata.image[folder]) {
                if(!isObject(newdata.image[folder][filename])) continue;
                if(!override && dataExists(allimage, folder, filename)) continue;
                assignOverride(allimage, [folder], filename, newdata.image[folder][filename]);
                if(!availableimage.includes(folder)) availableimage.push(folder);
            }
        }
    }
    if(isObject(newdata.stats)) {
        for(const folder of Object.keys(newdata.stats)) {
        // for(const folder of availablestats) { // commented to allow addition of new folders
            if(!isObject(newdata.stats[folder])) continue;
            for(const filename in newdata.stats[folder]) {
                if(!isObject(newdata.stats[folder][filename])) continue;
                if(!override && dataExists(allimage, folder, filename)) continue;
                assignOverride(allstats, [folder], filename, newdata.stats[folder][filename]);
                if(!availablestats.includes(folder)) availablestats.push(folder);
            }
        }
    }
    if(isObject(newdata.curve)) {
        for(const folder of Object.keys(newdata.curve)) {
        // for(const folder of availablecurve) { // commented to allow addition of new folders
            if(!isObject(newdata.curve[folder])) continue;
            for(const filename in newdata.curve[folder]) {
                if(!isObject(newdata.curve[folder][filename])) continue;
                if(!override && dataExists(allimage, folder, filename)) continue;
                assignOverride(allcurve, [folder], filename, newdata.curve[folder][filename]);
                if(!availablecurve.includes(folder)) availablecurve.push(folder);
            }
        }
    }
    if(isObject(newdata.url)) {
        for(const folder of Object.keys(newdata.url)) {
        // for(const folder of availableurl) { // commented to allow addition of new folders
            if(!isObject(newdata.url[folder])) continue;
            for(const filename in newdata.url[folder]) {
                if(!isObject(newdata.url[folder][filename])) continue;
                if(!override && dataExists(allimage, folder, filename)) continue;
                assignOverride(allurl, [folder], filename, newdata.url[folder][filename]);
                if(!availableurl.includes(folder)) availableurl.push(folder);
            }
        }
    }
}

module.exports = {
    addData: addData,
    getData: getData,
    getIndex: getIndex,
    getImage: getImage,
    getStats: getStats
}
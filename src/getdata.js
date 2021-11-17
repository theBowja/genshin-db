const alldata  = require('./min/data.min.json');
const allindex = require('./min/index.min.json');
const allimage = require('./min/image.min.json');
const allurl   = require('./min/url.min.json');
const allstats = require('./min/stats.min.json');
const allcurve = require('./min/curve.min.json');

const availableimage = ['characters', 'artifacts', 'weapons', 'constellations', 'talents', 'materials', 'foods', 'elements', 'domains', 'enemies'];
const availableurl   = ['characters', 'artifacts', 'weapons', 'foods', 'materials'];
const availablestats = ['characters', 'weapons', 'enemies'];
const availablecurve = ['characters', 'weapons'];

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



module.exports = {
    getData: getData,
    getIndex: getIndex,
    getImage: getImage,
    getStats: getStats
}
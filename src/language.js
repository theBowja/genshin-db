const fuzzysort = require('fuzzysort');

// converts Genshin's language codes into expanded strings
const languageMap = {
	'CHS': 'ChineseSimplified',
	'CHT': 'ChineseTraditional',
	'DE':  'German',
	'EN':  'English',
	'ES':  'Spanish',
	'FR':  'French',
	'ID':  'Indonesian',
	'JP':  'Japanese',
	'KR':  'Korean',
	'PT':  'Portuguese',
	'RU':  'Russian',
	'TH':  'Thai',
	'VI':  'Vietnamese'
};

// // converts expanded strings into javascript locale codes
const localeMap = {
	'ChineseSimplified':  'zh-cn',
	'ChineseTraditional': 'zh-tw',
	'German':             'de',
	'English':            'en',
	'Spanish':            'es',
	'French':             'fr',
	'Indonesian':         'id',
	'Japanese':           'ja',
	'Korean':             'ko',
	'Portuguese':         'pt',
	'Russian':            'ru',
	'Thai':               'th',
	'Vietnamese':         'vi'
};

const languageDict = Object.keys(languageMap).concat(Object.values(languageMap));

function autocompleteLanguage(input, dict) {
    let result = fuzzysort.go(input, dict, { limit: 1 })[0];
    if(result !== undefined)
    	result = result.target.length < 4 ? languageMap[result.target] : result.target;
    return result;
}

/**
 * @param langs - a string or array of strings
 * @returns - autocompleted full name of the language. see languageMap.
 *            undefined if none of the strings are valid languages.
 */
function format(langs) {
    if(typeof langs === 'string') {
        return autocompleteLanguage(langs, languageDict);
    } else if(Array.isArray(langs)) {
        let tmp = [];
        for(let l of langs) {
            l = format(l);
            if(l && !tmp.includes(l)) tmp.push(l);
        }
        if(tmp.length) return tmp;
    }
    return undefined;
}

module.exports = {
	languages: Object.values(languageMap),
	languageCodes: Object.keys(languageMap),
	languageMap: languageMap,
	localeMap: localeMap,
	format: format
};
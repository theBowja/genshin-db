const fuzzysort = require('fuzzysort');

const LanguagesEnum = {
	'ChineseSimplified'  : 'ChineseSimplified',
	'ChineseTraditional' : 'ChineseTraditional',
	'English'            : 'English',
	'French'             : 'French',
	'German'             : 'German',
	'Indonesian'         : 'Indonesian',
	'Italian'            : 'Italian',
	'Japanese'           : 'Japanese',
	'Korean'             : 'Korean',
	'Portuguese'         : 'Portuguese',
	'Russian'            : 'Russian',
	'Spanish'            : 'Spanish',
	'Thai'               : 'Thai',
	'Turkish'            : 'Turkish',
	'Vietnamese'         : 'Vietnamese'
};

// converts Genshin's language codes into expanded strings
const languageMap = {
	'CHS': 'ChineseSimplified',
	'CHT': 'ChineseTraditional',
	'DE':  'German',
	'EN':  'English',
	'ES':  'Spanish',
	'FR':  'French',
	'ID':  'Indonesian',
	'IT':  'Italian',
	'JP':  'Japanese',
	'KR':  'Korean',
	'PT':  'Portuguese',
	'RU':  'Russian',
	'TH':  'Thai',
	'TR':  'Turkish',
	'VI':  'Vietnamese'
};
// array of language strings
const languages = Object.values(languageMap);
// array of language codes
const languageCodes = Object.keys(languageMap);

// // converts expanded strings into javascript locale codes
const localeMap = {
	'ChineseSimplified':  'zh-cn',
	'ChineseTraditional': 'zh-tw',
	'German':             'de',
	'English':            'en',
	'Spanish':            'es',
	'French':             'fr',
	'Indonesian':         'id',
	'Italian':            'it',
	'Japanese':           'ja',
	'Korean':             'ko',
	'Portuguese':         'pt',
	'Russian':            'ru',
	'Thai':               'th',
	'Turkish':            'tr',
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
	LanguagesEnum: LanguagesEnum,
	languages: languages, // array of strings
	languageCodes: languageCodes,
	languageMap: languageMap,
	localeMap: localeMap,
	format: format
};
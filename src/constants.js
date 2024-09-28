// enum for folders. // make sure update index.d.ts too
// not really used internally. mainly for altnames api
const FoldersEnum = {
	characters     : 'characters',
	talents        : 'talents',
	constellations : 'constellations',
	
	weapons        : 'weapons',

	foods          : 'foods',
	materials      : 'materials',
	crafts         : 'crafts',

	artifacts      : 'artifacts',
	domains        : 'domains',
	enemies        : 'enemies',

	rarity         : 'rarity',
	elements       : 'elements',

	achievements   : 'achievements',
	achievementgroups: 'achievementgroups',

	windgliders    : 'windgliders',
	outfits        : 'outfits',
	animals        : 'animals',
	namecards      : 'namecards',
	geographies    : 'geographies',
	adventureranks : 'adventureranks',

	emojis         : 'emojis',
	voiceovers     : 'voiceovers',

	tcgactioncards:    'tcgactioncards',
	tcgcardbacks:      'tcgcardbacks',
	tcgcardboxes:      'tcgcardboxes',
	tcgcharactercards: 'tcgcharactercards',
	tcgdetailedrules:  'tcgdetailedrules',
	tcgenemycards:     'tcgenemycards',
	tcgkeywords:       'tcgkeywords',
	tcglevelrewards:   'tcglevelrewards',
	tcgstatuseffects:  'tcgstatuseffects',
	tcgsummons:        'tcgsummons'
};

const folders = Object.values(FoldersEnum);

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

module.exports = {
	FoldersEnum,
	folders, // Object.values(FoldersEnum)
	languageMap,
	languageCodes,
	LanguagesEnum,
	languages,
	localeMap,
	languageDict
}
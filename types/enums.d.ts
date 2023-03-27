declare module "genshin-db" {
	export enum Language {
		ChineseSimplified  = "ChineseSimplified",
		ChineseTraditional = "ChineseTraditional",
		English            = "English",
		French             = "French",
		German             = "German",
		Indonesian         = "Indonesian",
		Italian            = "Italian",
		Japanese           = "Japanese",
		Korean             = "Korean",
		Portuguese         = "Portuguese",
		Russian            = "Russian",
		Spanish            = "Spanish",
		Thai               = "Thai",
		Turkish            = "Turkish",
		Vietnamese         = "Vietnamese"
	}

	export enum Folder {
		characters     = "characters",
		talents        = "talents",
		constellations = "constellations",

		weapons        = "weapons",

		materials      = "materials",
		foods          = "foods",
		crafts         = "crafts",

		artifacts      = "artifacts",
		domains        = "domains",
		enemies        = "enemies",
		animals        = "animals",

		outfits        = "outfits",
		windgliders    = "windgliders",
		namecards      = "namecards",
		geographies    = "geographies",

		achievements   = "achievements",
		achievementgroups = "achievementgroups",

		adventureranks = "adventureranks",

		rarity         = "rarity", // deprecated
		elements       = "elements",

		tcgactioncards    = "tcgactioncards",
		tcgcardbacks      = "tcgcardbacks",
		tcgcardboxes      = "tcgcardboxes",
		tcgcharactercards = "tcgcharactercards",
		tcgdetailedrules  = "tcgdetailedrules",
		tcgkeywords       = "tcgkeywords",
		tcglevelrewards   = "tcglevelrewards",
		tcgstatuseffects  = "tcgstatuseffects",
		tcgsummons        = "tcgsummons"
	}

	export enum MatchType {
		None = "none",
		Names = "names",
		AltNames = "altnames",
		Aliases = "aliases",
		Categories = "categories"
	}
}
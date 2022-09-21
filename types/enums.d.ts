declare module "genshin-db" {
	export enum Language {
		ChineseSimplified  = "ChineseSimplified",
		ChineseTraditional = "ChineseTraditional",
		English            = "English",
		French             = "French",
		German             = "German",
		Indonesian         = "Indonesian",
		Japanese           = "Japanese",
		Korean             = "Korean",
		Portuguese         = "Portuguese",
		Russian            = "Russian",
		Spanish            = "Spanish",
		Thai               = "Thai",
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

		rarity         = "rarity", // depreciated
		elements       = "elements"
	}

	export enum MatchType {
		None = "none",
		Names = "names",
		AltNames = "altnames",
		Aliases = "aliases",
		Categories = "categories"
	}
}
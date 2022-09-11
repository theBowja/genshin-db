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

	    foods          = "foods",
	    materials      = "materials",
	    crafts         = "crafts",
	    weaponmaterialtypes = "weaponmaterialtypes",
	    talentmaterialtypes = "talentmaterialtypes",

	    artifacts      = "artifacts",
	    domains        = "domains",
	    enemies        = "enemies",

	    rarity         = "rarity",
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
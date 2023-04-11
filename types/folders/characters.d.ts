declare module "genshin-db" {
	export interface Character {
		id: number;
		name: string;
		fullname?: string; // only Russian has shortened "name" for inazuma characters. undefined if same as name

		title: string; // empty strings for traveler
		description: string; // sanitized with: removeNonBreakSpace, replaceGenderM, replaceGenderF, removeHashtag

		weaponType: string; // enum
		weaponText: string; // translated
		bodyType: string; // enum
		gender: string; // manually translated

		qualityType: string // enum
		rarity: 4 | 5;

		birthdaymmdd: string; // empty string if player character
		birthday: string; // translated. empty string if player character

		elementType: string; // enum
		elementText: string; // translated

		affiliation: string; // empty string if player character
		associationType: string; // enum;
		region: string; // empty string if player character or crossover (aloy)

		substatType: string; // enum
		substatText: string; // translated

		constellation: string;
		cv: {
			english: string;
			chinese: string;
			japanese: string;
			korean: string;
		};
		costs: {
			"ascend1": Items[];
			"ascend2": Items[];
			"ascend3": Items[];
			"ascend4": Items[];
			"ascend5": Items[];
			"ascend6": Items[];
		};
		images: {
			filename_icon: string;
			filename_sideIcon: string;
			filename_gachaSplash?: string; // lumine/aether doesn't have this
			filename_gachaSlice?: string; // lumine/aether doesn't have this

			card?: string;     // wikia
			portrait?: string; // wikia
			mihoyo_icon: string;     // hoyolab
			mihoyo_sideIcon: string; // hoyolab
			cover1?: string; // official site
			cover2?: string; // official site
			"hoyolab-avatar"?: string; // manually entered from hoyolab
		};
		url: {
			fandom: string;
		};
		stats: StatFunction;
		version: string;
	}
}
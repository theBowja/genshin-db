declare module "genshin-db" {
	export interface Character {
		id: number;
		name: string;
		fullname?: string; // only Russian has shortened "name" for inazuma characters. undefined if same as name

		title: string; // empty strings for traveler
		description: string; // sanitized with: removeNonBreakSpace, replaceGenderM, replaceGenderF, removeHashtag

		weaponType: 'WEAPON_BOW' | 'WEAPON_CATALYST' | 'WEAPON_CLAYMORE' | 'WEAPON_POLE' | 'WEAPON_SWORD_ONE_HAND'; // enum
		weaponText: string; // translated
		bodyType: 'BODY_BOY' | 'BODY_GIRL' | 'BODY_LADY' | 'BODY_LOLI' | 'BODY_MALE'; // enum
		gender: string; // manually translated

		qualityType: string // enum
		rarity: 4 | 5;

		birthdaymmdd: string; // empty string if player character
		birthday: string; // translated. empty string if player character

		elementType: 'ELEMENT_ANEMO' | 'ELEMENT_CRYO' | 'ELEMENT_DENDRO' | 'ELEMENT_ELECTRO' | 'ELEMENT_GEO' | 'ELEMENT_HYDRO' | 'ELEMENT_NONE' | 'ELEMENT_PYRO'; // enum
		elementText: string; // translated

		affiliation: string; // empty string if player character
		associationType: 'ASSOC_FATUI' | 'ASSOC_FONTAINE' | 'ASSOC_INAZUMA' | 'ASSOC_LIYUE' | 'ASSOC_MAINACTOR' | 'ASSOC_MONDSTADT' | 'ASSOC_RANGER' | 'ASSOC_SUMERU'; // enum;
		region: string; // empty string if player character or crossover (aloy)

		substatType: 'FIGHT_PROP_ATTACK_PERCENT' | 'FIGHT_PROP_CHARGE_EFFICIENCY' | 'FIGHT_PROP_CRITICAL' | 'FIGHT_PROP_CRITICAL_HURT' | 'FIGHT_PROP_DEFENSE_PERCENT' | 'FIGHT_PROP_ELEC_ADD_HURT' | 'FIGHT_PROP_ELEMENT_MASTERY' | 'FIGHT_PROP_FIRE_ADD_HURT' | 'FIGHT_PROP_GRASS_ADD_HURT' | 'FIGHT_PROP_HEAL_ADD' | 'FIGHT_PROP_HP_PERCENT' | 'FIGHT_PROP_ICE_ADD_HURT' | 'FIGHT_PROP_PHYSICAL_ADD_HURT' | 'FIGHT_PROP_ROCK_ADD_HURT' | 'FIGHT_PROP_WATER_ADD_HURT' | 'FIGHT_PROP_WIND_ADD_HURT'; // enum
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
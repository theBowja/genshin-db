declare module "genshin-db" {
	export interface Character {
		name: string;
		fullname: string; // only Russian has shortened "name" for inazuma characters
		title: string; // empty strings for traveler
		description: string;
		rarity: '4' | '5';
		element: string;
		weapontype: string;
		substat: string;
		gender: string; // manually translated
		body: string; // untranslated
		association: string; // untranslated
		region: string; // empty string if player character or crossover (aloy)
		affiliation: string; // empty string if player character
		birthdaymmdd: string; // empty string if player character
		birthday: string; // empty string if player character
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
			nameicon: string;
			namesideicon: string;
			namegachasplash?: string; // lumine/aether doesn't have this
			namegachaslice?: string; // lumine/aether doesn't have this

			card?: string;     // wikia
			portrait?: string; // wikia
			icon: string;     // hoyolab
			sideicon: string; // hoyolab
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
declare module "genshin-db" {
	export interface Weapon {
		id: number;
		name: string;
		dupealias?: string; // Prized Isshin Blade (which isn't obtainable)

		description: string;
		descriptionRaw: string;

		weaponType: string; // enum
		weaponText: string; // translated

		rarity: 1 | 2 | 3 | 4 | 5;
		story: string; // empty string if no story

		baseAtkValue: number;
		mainStatType: string; // enum
		mainStatText: string; // translated
		baseStatText: string;

		effectName?: string; // low rarity weapons dont have this
		effectTemplateRaw?: string; // low rarity weapons dont have this
		r1?: WeaponRefine; // for example dull blade doesn't have any refinement
		r2?: WeaponRefine;
		r3?: WeaponRefine;
		r4?: WeaponRefine;
		r5?: WeaponRefine;

		costs: {
			"ascend1": Items[];
			"ascend2": Items[];
			"ascend3": Items[];
			"ascend4": Items[];
			"ascend5"?: Items[]; // 1 and 2 star weapons only have 4 ascensions
			"ascend6"?: Items[]; // 1 and 2 star weapons only have 4 ascensions
		};
		images: {
			filename_icon: string;
			filename_awakenIcon: string;
			filename_gacha: string;
			mihoyo_icon?: string; // hoyolab. they're missing some images unfortunately.
			mihoyo_awakenIcon?: string; // hoyolab. they're missing some images unfortunately.
		};
		// url: { // deprecated
		// 	fandom: string;
		// };
		stats: StatFunction;
		version: string;
	}

	export interface WeaponRefine {
		description: string; // sanitized with removeColorHTML, replaceNonBreakSpace, removeHashtag, replaceGenderM
		values: string[];
	}

	//#endregion

	//#region WeaponMaterial
	//deprecated
	// export interface WeaponMaterial { // English only
	// 	name: string;
	// 	"2starname": string;
	// 	"3starname": string;
	// 	"4starname": string;
	// 	"5starname": string;
	// 	day: string[];
	// 	location: string;
	// 	region: string;
	// 	domainofforgery: string;
	// }
}
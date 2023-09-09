declare module "genshin-db" {
	export interface Material {
		id: number;
		name: string;
		dupealias?: string; // Key Sigil, Cake for Traveler
		rarity?: 1 | 2 | 3 | 4 | 5; // not every material has this
		sortRank: number;

		description: string;
		category: 'ADSORBATE' | 'AVATAR_MATERIAL' | 'CONSUME' | 'EXCHANGE' | 'EXP_FRUIT' | 'FISH_BAIT' | 'FISH_ROD' | 'ITEM_VIRTUAL' | 'NOTICE_ADD_HP' | 'WEAPON_EXP_STONE' | 'WOOD'; // enum
		typeText: string; // translated

		dropDomainId?: number;
		dropDomainName?: string;
		daysOfWeek?: string[]; // for domain

		source: string[];

		images: {
			filename_icon: string;
		};
	}
}
declare module "@genshin-db/tcg" {
	export interface WindGlider {
		id: number;
		name: string;
		description: string;
		rarity: 4;
		story: string;
		isHidden?: true;
		source: string[];
		
		images: {
			filename_icon: string;
			filename_gacha: string;
		};

		version: string;
	}
}
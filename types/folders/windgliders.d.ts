declare module "genshin-db" {
	export interface WindGlider {
		name: string;
		description: string;
		rarity: '4';
		story: string;
		sortorder: number;
		ishidden?: true;
		source: string[];
		
		images: {
			nameicon: string;
			namegacha: string;
		};

		version: string;
	}
}
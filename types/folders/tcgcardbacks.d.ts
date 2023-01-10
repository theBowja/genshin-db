declare module "genshin-db" {
	export interface TcgCardBacks {
		id: number;
		name: string; // translated

		description: string; // translated
		descriptionraw: string; // translated

		source: string; // translated

		rarity: number;
		
		images: {
			filename_icon: string;
			filename_icon_HD: string;
		};

		version: string;
	}
}
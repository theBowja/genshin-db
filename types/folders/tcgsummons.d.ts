declare module "genshin-db" {
	export interface TcgSummons {
		id: number;
		name: string; // translated

		cardtypetext: string; // translated

		tags: string[]; // enum. for some reason only Burning Flame (created by Burning Reaction) has tags.
		tagstext: string[]; // translated

		description: string; // translated
		descriptionraw: string; // translated
		descriptionreplaced: string; // translated

		countingtype: string; // enum
		tokentype: string; // enum
		hinttype: string; // enum

		images: {
			filename_tagsicon: string[];
			filename_hinticon: string;
			filename_cardface: string;
			filename_cardface_golden: string;
			filename_cardface_HD: string;
		};

		version: string;
	}
}
declare module "genshin-db" {
	export interface Material {
		name: string;
		dupealias?: string; // Key Sigil, Cake for Traveler

		description: string;
		sortorder: number;
		rarity?: '1' | '2' | '3' | '4' | '5'; // not every material has this
		category: string; // untranslated
		materialtype: string;
		dropdomain?: string;
		daysofweek?: string[];
		source: string[];

		images: {
			nameicon: string;
			fandom?: string;
			redirect: string;
		};
		url: {
			fandom: string;
		};
	}
}
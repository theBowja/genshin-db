declare module "genshin-db" {
	export interface TcgStatusEffects {
		id: number;
		name: string; // translated

		statustypetext: string; // translated

		cardtype: string; // enum
		cardtypetext: string; // translated

		tags: string[]; // enum

		description: string; // translated
		descriptionraw: string; // translated
		descriptionreplaced: string; // translated

		countingtype?: string; // enum
		bufftype?: string; // enum. determines visual fx?

		version: string;
	}
}
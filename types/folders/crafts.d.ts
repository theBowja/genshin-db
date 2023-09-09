declare module "genshin-db" {
	export interface Craft {
		id: number;
		name: string;
		filterText: string; // translated
		sortOrder: number;
		unlockRank: number; // adventure rank this is unlocked at?
		resultCount: number;
		moraCost: number;
		recipe: CraftIngredient[];

		altrecipes?: CraftIngredient[][]; // for blue/red/yellow dye that have multiple recipes to create it

		version: string; // can be empty string
	}

	export interface CraftIngredient {
		id: number;
		name: string;
		count: number;
	}
}
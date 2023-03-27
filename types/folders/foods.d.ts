declare module "genshin-db" {
	export interface Food {
		name: string;
		rarity: '1' | '2' | '3' | '4'| '5';
		foodtype: 'NORMAL' | 'SPECIALTY';
		foodfilter: string;
		foodcategory: string; // untranslated
		effect: string;
		description: string;

		suspicious?: {
			effect: string;
			description: string;
		};
		normal?: {
			effect: string;
			description: string;
		};
		delicious?: {
			effect: string;
			description: string;
		};
		basedish?: string;
		character?: string;

		ingredients: FoodIngredient[];
		images: {
			nameicon: string;
		};
		url: {
			fandom: string;
		};
		version: string;
	}

	export interface FoodIngredient {
		name: string;
		count: number;
	}

	// UNUSED. FOR REFERENCE ONLY.
	/*
	export interface FoodNormal {
		name: string;
		rarity: string;
		foodtype: 'NORMAL';
		foodfilter: string;
		foodcategory: string;
		effect: string;
		description: string;

		suspicious: {
			effect: string;
			description: string;
		};
		normal: {
			effect: string;
			description: string;
		};
		delicious: {
			effect: string;
			description: string;
		};

		ingredients: FoodIngredient[];
		images?: {};
		url: {
			fandom: string;
		};
	}
	*/

	// UNUSED. FOR REFERENCE ONLY.
	/*
	export interface FoodSpecialty {
		name: string;
		rarity: string;
		foodtype: 'SPECIALTY';
		foodfilter: string;
		foodcategory: string;
		effect: string;
		description: string;
		
		basedish: string;
		character: string;

		ingredients: FoodIngredient[];
		images?: {};
		url: {
			fandom: string;
		};
	}
	*/
}
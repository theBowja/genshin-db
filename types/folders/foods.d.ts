declare module "genshin-db" {
	export interface Food {
		id: number;
		name: string;
		rarity: 1 | 2 | 3 | 4 | 5;
		foodtype: 'NORMAL' | 'SPECIALTY';
		filterType: 'COOK_FOOD_ATTACK' | 'COOK_FOOD_DEFENSE' | 'COOK_FOOD_FUNCTION' | 'COOK_FOOD_HEAL'; // enum
		filterText: string; // translated
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

		baseDishId?: number; // for specialty dish
		baseDishName?: string; // for specialty dish
		characterId?: number; // for specialty dish
		characterName?: string; // for specialty dish

		ingredients: FoodIngredient[];
		images: {
			filename_buff: string;
			filename_icon: string;
		};
		version: string;
	}

	export interface FoodIngredient {
		id: number;
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
# Food

Search function: `genshindb.foods("query", opts);`  
Interactive: https://genshindb-ia.netlify.app/  
Web API: https://genshin-db-api.vercel.app/api/foods?query=query

Type:
```ts
interface Food {
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
}```

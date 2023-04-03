# Craft

Search function: `genshindb.crafts("query", opts);`  
Interactive: https://genshindb-ia.netlify.app/  
Web API: https://genshin-db-api.vercel.app/api/crafts?query=query

Type:
```ts
interface Craft {
	name: string;
	filter: string; // pretty much like category
	sortorder: number;
	unlockrank: number; // adventure rank this is unlocked at?
	resultcount: number;
	moracost: number;
	recipe: CraftIngredient[];

	altrecipes?: CraftIngredient[][]; // for blue/red/yellow dye that have multiple recipes to create it

	version: string; // can be empty string
}```

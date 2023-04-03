# TcgCardBoxes

Search function: `genshindb.tcgcardboxes("query", opts);`  
Interactive: https://genshindb-ia.netlify.app/  
Web API: https://genshin-db-api.vercel.app/api/tcgcardboxes?query=query

Type:
```ts
interface TcgCardBoxes {
	id: number;
	name: string; // translated

	description: string; // translated
	descriptionraw: string; // translated

	source: string; // translated

	rarity: number;
	
	images: {
		filename_icon: string;
		filename_bg: string;
	};

	version: string;
}```

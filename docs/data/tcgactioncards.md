# TcgActionCards

Search function: `genshindb.tcgactioncards("query", opts);`  
Interactive: https://genshindb-ia.netlify.app/  
Web API: https://genshin-db-api.vercel.app/api/tcgactioncards?query=query

Type:
```ts
interface TcgActionCards {
	id: number;
	name: string; // translated

	cardtype: string; // enum
	cardtypetext: string; // translated

	tags: string[]; // enum
	tagstext: string[]; // translated

	description: string; // translated
	descriptionraw: string; // translated
	descriptionreplaced: string; // translated

	storytitle?: string; // translated. created cards like Keqing's Lightning Stiletto don't have this property.
	storytext?: string; // translated. created cards like Keqing's Lightning Stiletto don't have this property.

	source?: string; // translated. not every card has this property.
	
	playcost: TcgCardPlayCost[];

	images: {
		filename_tagsicon: string[];
		filename_cardface: string;
		filename_cardface_golden: string;
		filename_cardface_HD: string;
	};

	version: string;
}```

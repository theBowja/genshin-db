# TcgCardBacks

Search function: `genshindb.tcgcardbacks("query", opts);`
Interactive: https://genshindb-ia.netlify.app/
Web API: https://genshin-db-api.vercel.app/api/tcgcardbacks?query=query

Type:
```ts
interface TcgCardBacks {
	id: number;
	name: string; // translated

	description: string; // translated
	descriptionraw: string; // translated

	source: string; // translated

	rarity: number;
	
	images: {
		filename_icon: string;
		filename_icon_HD: string;
	};

	version: string;
}```

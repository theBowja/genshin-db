# TcgCharacterCards

Search function: `genshindb.tcgcharactercards("query", opts);`  
Interactive: https://genshindb-ia.netlify.app/  
Web API: https://genshin-db-api.vercel.app/api/tcgcharactercards?query=query

Type:
```ts
interface TcgCharacterCards {
	id: number;
	name: string; // translated

	hp: number;
	maxenergy: number;

	tags: string[]; // enum
	tagstext: string[]; // translated

	storytitle: string; // translated
	storytext: string; // translated

	source: string; // translated
	
	skills: TcgSkills[];

	images: {
		filename_tagsicon: string[];
		filename_cardface: string;
		filename_cardface_golden: string;
		filename_cardface_HD: string;
	};

	version: string;
}```

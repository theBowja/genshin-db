# TcgKeywords

Search function: `genshindb.tcgkeywords("query", opts);`  
Interactive: https://genshindb-ia.netlify.app/  
Web API: https://genshin-db-api.vercel.app/api/tcgkeywords?query=query

Type:
```ts
interface TcgKeywords {
	id: number;
	name: string; // translated
	nameraw: string; // translated

	description: string; // translated
	descriptionraw: string; // translated

	version: string;
}```

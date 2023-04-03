# TcgDetailedRules

Search function: `genshindb.tcgdetailedrules("query", opts);`  
Interactive: https://genshindb-ia.netlify.app/  
Web API: https://genshin-db-api.vercel.app/api/tcgdetailedrules?query=query

Type:
```ts
interface TcgDetailedRules {
	id: number;
	name: string; // translated

	rules: TcgRule[];

	version: string;
}```

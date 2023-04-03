# Animal

Search function: `genshindb.animals("query", opts);`  
Interactive: https://genshindb-ia.netlify.app/  
Web API: https://genshin-db-api.vercel.app/api/animals?query=query

Type:
```ts
interface Animal {
	name: string;
	dupealias?: string; // Vietnamese Vịt
	description: string;
	category: string;
	counttype: 'CAPTURE' | 'NONE' | 'FISH';
	sortorder: number;
	
	images: {
		nameicon: string;
	};

	version: string;
}```

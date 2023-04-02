# WindGlider

Search function: `genshindb.windgliders("query", opts);`
Interactive: https://genshindb-ia.netlify.app/
Web API: https://genshin-db-api.vercel.app/api/windgliders?query=query

Type:
```ts
interface WindGlider {
	name: string;
	description: string;
	rarity: '4';
	story: string;
	sortorder: number;
	ishidden?: true;
	source: string[];
	
	images: {
		nameicon: string;
		namegacha: string;
	};

	version: string;
}```

# Namecard

Search function: `genshindb.namecards("query", opts);`  
Interactive: https://genshindb-ia.netlify.app/  
Web API: https://genshin-db-api.vercel.app/api/namecards?query=query

Type:
```ts
interface Namecard {
	name: string;
	description: string;
	sortorder: number;
	source: string[];
	images: {
		nameicon: string;
		namebanner?: string; // the first namecard doesn't have this
		namebackground: string;
	};
	version: string;
}```

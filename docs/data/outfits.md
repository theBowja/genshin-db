# Outfit

Search function: `genshindb.outfits("query", opts);`
Interactive: https://genshindb-ia.netlify.app/
Web API: https://genshin-db-api.vercel.app/api/outfits?query=query

Type:
```ts
interface Outfit {
	name: string;
	description: string;
	isdefault: boolean;
	character: string;
	source?: string[];

	images: {
		namecard: string;
		nameicon?: string;
		namesideicon?: string;
		namesplash?: string;
	};
	url: {
		modelviewer?: string;
	};
	version: string;
}```

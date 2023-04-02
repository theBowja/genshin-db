# Geography

Search function: `genshindb.geographies("query", opts);`
Interactive: https://genshindb-ia.netlify.app/
Web API: https://genshin-db-api.vercel.app/api/geographies?query=query

Type:
```ts
interface Geography {
	name: string;
	area: string;
	description :string;
	region: string;
	showonlyunlocked?: true;
	sortorder: number;
	images: {
		nameimage: string;
	};
	version: string;
}```

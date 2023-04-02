# Element

Search function: `genshindb.elements("query", opts);`
Interactive: https://genshindb-ia.netlify.app/
Web API: https://genshin-db-api.vercel.app/api/elements?query=query

Type:
```ts
interface Element {
	name: string;
	type: string;
	color: string;
	emoji: string;
	region: string;
	archon: string;
	theme: string;
	images: {
		base64: string;
		wikia: string;
	}```

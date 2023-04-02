# Enemy

Search function: `genshindb.enemies("query", opts);`
Interactive: https://genshindb-ia.netlify.app/
Web API: https://genshin-db-api.vercel.app/api/enemies?query=query

Type:
```ts
interface Enemy {
	name: string;
	specialname: string;

	type: 'COMMON' | 'ELITE' | 'BOSS';
	category: string; 
	description: string;

	investigation?: { // almost all but not every enemy has this.
		name: string;
		category: string;
		description: string;
	}```

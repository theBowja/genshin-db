# TcgLevelRewards

Search function: `genshindb.tcglevelrewards("query", opts);`
Interactive: https://genshindb-ia.netlify.app/
Web API: https://genshin-db-api.vercel.app/api/tcglevelrewards?query=query

Type:
```ts
interface TcgLevelRewards {
	id: number;
	name: string; // it's literally just a number

	exp?: number; // the highest level doesn't have any exp.

	icontype: string; // enum

	unlockdescription: string; // translated
	unlockdescriptionraw: string; // translated

	rewards: TcgReward[];

	version: string;
}```

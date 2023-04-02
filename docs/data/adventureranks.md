# AdventureRank

Search function: `genshindb.adventureranks("query", opts);`
Interactive: https://genshindb-ia.netlify.app/
Web API: https://genshin-db-api.vercel.app/api/adventureranks?query=query

Type:
```ts
interface AdventureRank {
	name: string;
	exp: number;
	unlockdescription: string;
	reward: AdventureRankReward[];
}```

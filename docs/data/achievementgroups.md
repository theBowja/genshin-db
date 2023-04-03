# AchievementGroup

Search function: `genshindb.achievementgroups("query", opts);`  
Interactive: https://genshindb-ia.netlify.app/  
Web API: https://genshin-db-api.vercel.app/api/achievementgroups?query=query

Type:
```ts
interface AchievementGroup {
	name: string;
	sortorder: number;
	reward?: Rewards;
	images: {
		nameicon: string;
	};

	version: string;
}```

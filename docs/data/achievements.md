# Achievement

Search function: `genshindb.achievements("query", opts);`  
Interactive: https://genshindb-ia.netlify.app/  
Web API: https://genshin-db-api.vercel.app/api/achievements?query=query

Type:
```ts
interface Achievement {
	name: string;
	dupealias?: string; // Let the Wind Lead, That's One Big Crystalfly, and a few in other languages

	achievementgroup: string;
	ishidden?: true;
	sortorder: number;
	stages: number;
	stage1: {
		title: string;
		ps5title?: string;
		description: string;
		progress: number;
		reward: Rewards;
	};
	stage2?: {
		title: string;
		ps5title?: string;
		description: string;
		progress: number;
		reward: Rewards;
	};
	stage3?: {
		title: string;
		ps5title?: string;
		description: string;
		progress: number;
		reward: Rewards;
	};

	version: string;
}```

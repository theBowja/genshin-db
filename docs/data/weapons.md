# Weapon

Search function: `genshindb.weapons("query", opts);`
Interactive: https://genshindb-ia.netlify.app/
Web API: https://genshin-db-api.vercel.app/api/weapons?query=query

Type:
```ts
interface Weapon {
	name: string;
	dupealias?: string; // Prized Isshin Blade

	description: string;
	weapontype: string;
	rarity: '1' | '2' | '3' | '4' | '5';
	story: string; // empty string if no story
	baseatk: number;
	substat: string;
	subvalue: string;
	effectname: string;
	effect: string;
	r1: string[];
	r2: string[];
	r3: string[];
	r4: string[];
	r5: string[];
	weaponmaterialtype: string; // English only
	costs: {
		"ascend1": Items[];
		"ascend2": Items[];
		"ascend3": Items[];
		"ascend4": Items[];
		"ascend5"?: Items[]; // 1 and 2 star weapons only have 4 ascensions
		"ascend6"?: Items[]; // 1 and 2 star weapons only have 4 ascensions
	};
	images: {
		nameicon: string;
		namegacha: string;
		nameawakenicon: string;
		image?: string; // wikia
		icon?: string; // hoyolab. some images don't have this.
		awakenicon?: string; // hoyolab. some images don't have this.
	};
	url: {
		fandom: string;
	};
	stats: StatFunction;
	version: string;
}```

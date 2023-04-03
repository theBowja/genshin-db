# Constellation

Search function: `genshindb.constellations("query", opts);`  
Interactive: https://genshindb-ia.netlify.app/  
Web API: https://genshin-db-api.vercel.app/api/constellations?query=query

Type:
```ts
interface Constellation {
	name: string;
	c1: ConstellationDetail;
	c2: ConstellationDetail;
	c3: ConstellationDetail;
	c4: ConstellationDetail;
	c5: ConstellationDetail;
	c6: ConstellationDetail;
	images: {
		constellation: string;
		constellation2?: string; // only for player characters. shows girl constellation image
		c1: string;
		c2: string;
		c3: string;
		c4: string;
		c5: string;
		c6: string;
	};
	version: string;
}```

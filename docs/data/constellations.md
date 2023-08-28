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
		filename_constellation: string;
		filename_constellation2?: string; // only for player characters. shows girl constellation image
		filename_c1: string;
		filename_c2: string;
		filename_c3: string;
		filename_c4: string;
		filename_c5: string;
		filename_c6: string;
	};
	version: string;
}```

For the filename_c1 to filename_c6 images, you can also use the following image url: `https://upload-os-bbs.mihoyo.com/game_record/genshin/constellation_icon/${filename}.png`
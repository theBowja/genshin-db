# Artifact

Search function: `genshindb.artifacts("query", opts);`  
Interactive: https://genshindb-ia.netlify.app/  
Web API: https://genshin-db-api.vercel.app/api/artifacts?query=query

Type:
```ts
interface Artifact {
	name: string;
	rarity: ('1' | '2' | '3' | '4' | '5')[];
	"1pc"?: string; // for circlets only
	"2pc"?: string;
	"4pc"?: string;
	flower?: ArtifactDetail;
	plume?: ArtifactDetail;
	sands?: ArtifactDetail;
	goblet?: ArtifactDetail;
	circlet: ArtifactDetail;
	images: {
		nameflower?: string;
		nameplume?: string;
		namesands?: string;
		namegoblet?: string;
		namecirclet: string;
		flower?: string;
		plume?: string;
		sands?: string;
		goblet?: string;
		circlet: string;
	};
	url: {
		fandom: string;
	};
	version: string;
}```

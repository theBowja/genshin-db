declare module "genshin-db" {
	export interface Artifact {
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
	}

	export interface ArtifactDetail {
		name: string;
		relictype: string; // for different languages
		description: string;
		story: string;
	}
}

// UNUSED. FOR REFERENCE ONLY.
// artifacts with 2pc and 4pc set effects
// export interface ArtifactNormal {
//     name: string;
//     rarity: string[];
//     "2pc": string;
//     "4pc": string;
//     flower: ArtifactDetail;
//     plume: ArtifactDetail;
//     sands: ArtifactDetail;
//     goblet: ArtifactDetail;
//     circlet: ArtifactDetail;
//     images: {
//         flower: string;
//         plume: string;
//         sands: string;
//         goblet: string;
//         circlet: string;
//     };
//     url: {
//         fandom: string;
//     };
// }

// // UNUSED. FOR REFERENCE ONLY.
// // circlet artifacts
// export interface ArtifactHeadSingle {
//     name: string;
//     rarity: string[];
//     "1pc": string;
//     circlet: ArtifactDetail;
//     images: {
//         circlet: string;
//     };
//     url: {
//         fandom: string;
//     };
// }
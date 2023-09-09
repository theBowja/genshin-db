declare module "genshin-db" {
	export interface Artifact {
		id: number;
		name: string;
		rarityList: (1 | 2 | 3 | 4 | 5)[];
		effect1Pc?: string; // for circlets only
		effect2Pc?: string;
		effect4Pc?: string;
		flower?: ArtifactDetail;
		plume?: ArtifactDetail;
		sands?: ArtifactDetail;
		goblet?: ArtifactDetail;
		circlet?: ArtifactDetail;
		images: {
			filename_flower?: string;
			filename_plume?: string;
			filename_sands?: string;
			filename_goblet?: string;
			filename_circlet?: string;
			mihoyo_flower?: string;
			mihoyo_plume?: string;
			mihoyo_sands?: string;
			mihoyo_goblet?: string;
			mihoyo_circlet?: string;
		};

		version: string;
	}

	export interface ArtifactDetail {
		name: string;
		relicType: 'EQUIP_BRACER' | 'EQUIP_NECKLACE' | 'EQUIP_SHOES' | 'EQUIP_RING' | 'EQUIP_DRESS'; // enum
		relicText: string; // translated
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
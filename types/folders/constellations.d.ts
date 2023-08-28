declare module "genshin-db" {
	export interface Constellation {
		id: number;
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
	}

	export interface ConstellationDetail {
		name: string; // sanitized with replaceNonBreakSpace, removeHashtag
		description: string; // sanitized with replaceNonBreakSpace, removeColorHTML, replaceLayoutPC, replaceGenderM, removeHashtag
		descriptionRaw: string;
	}
}
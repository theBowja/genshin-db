declare module "genshin-db" {
	export interface Constellation {
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
	}

	export interface ConstellationDetail {
		name: string;
		effect: string;
	}
}
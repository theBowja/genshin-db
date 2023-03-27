declare module "genshin-db" {
	export interface Domain {
		name: string;

		region: string;
		domainentrance: string;
		domaintype: string; // Artifacts, Weapon Ascension Materials, Talent Level-Up Material
		description: string;

		recommendedlevel: number;
		recommendedelements: string[];
		daysofweek?: string[]; // undefined for artifact domains
		unlockrank: number; // adventure rank this domain unlocks at
		rewardpreview: Rewards[];
		disorder: string[];

		monsterlist?: string[]; // I manually keep this updated. If I forget, it'll be undefined.
		// objectives?: string[]; // UNIMPLEMENTED TODO

		images: {
			namepic: string;
		}
	}


}
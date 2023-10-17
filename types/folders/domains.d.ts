declare module "genshin-db" {
	export interface Domain {
		id: number;
		name: string;

		regionId: number;
		regionName: string;
		entranceId: number;
		entranceName: string;
		domainType: 'UI_ABYSSUS_AVATAR_PROUD' | 'UI_ABYSSUS_RELIC' | 'UI_ABYSSUS_WEAPON_PROMOTE'; // enum
		domainText: string; // translated

		description: string;

		recommendedLevel: number;
		recommendedElements: string[];

		daysOfWeek?: string[]; // undefined for artifact domains
		unlockRank: number; // adventure rank this domain unlocks at
		rewardPreview: Rewards[];
		disorder: string[];

		monsterList?: {
			id: string;
			name: string;
		}[]; // I manually keep this updated. If I forget, it'll be undefined.
		// objectives?: string[]; // UNIMPLEMENTED TODO

		images: {
			filename_image: string;
		}
	}


}
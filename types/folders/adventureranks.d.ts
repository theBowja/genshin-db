declare module "genshin-db" {
	export interface AdventureRank {
		name: string;
		exp: number;
		unlockdescription: string;
		reward: AdventureRankReward[];
	}

	export interface AdventureRankReward {
		name: string;
		count: number;
		type: 'MATERIAL' | 'ARTIFACT' | 'WEAPON';
	}
}
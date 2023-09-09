declare module "genshin-db" {
	export interface AdventureRank {
		id: number;
		name: string;
		exp: number;
		unlockdescription: string;
		reward: AdventureRankReward[];
	}

	export interface AdventureRankReward {
		id: number
		name: string;
		count: number;
		type: 'MATERIAL' | 'ARTIFACT' | 'WEAPON';
	}
}
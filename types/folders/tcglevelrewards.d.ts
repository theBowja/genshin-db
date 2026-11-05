declare module "@genshin-db/tcg" {
	export interface TcgLevelRewards {
		id: number;
		name: string; // it's literally just a number

		exp?: number; // the highest level doesn't have any exp.

		icontype: string; // enum

		unlockdescription: string; // translated
		unlockdescriptionraw: string; // translated

		rewards: TcgReward[];

		version: string;
	}

	export interface TcgReward {
		id: number;
		name: string; // translated
		count: number;
	}
}
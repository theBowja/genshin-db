declare module "genshin-db" {
	export interface Enemy {
		name: string;
		specialname: string;

		type: 'COMMON' | 'ELITE' | 'BOSS';
		category: string; 
		description: string;

		investigation?: { // almost all but not every enemy has this.
			name: string;
			category: string;
			description: string;
		}

		// droplist: Rewards; TODO
		// particles: TODO
		// resistance: { TODO
		//     physical: number;
		//     pyro: number;
		//     dendro: number;
		//     hydro: number;
		//     geo: number;
		//     anemo: number;
		//     cryo: number;
		//     electro: number;
		// };
		rewardpreview: Rewards[];

		images: {
			nameicon: string;
		};
		stats: EnemyStatFunction;
	}

	export interface EnemyStatFunction {
		(level: number): EnemyStatResult;
	}

	export interface EnemyStatResult {
		level: number;
		hp: number;
		attack: number;
		defense: number;
	}

}
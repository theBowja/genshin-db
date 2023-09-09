declare module "genshin-db" {
	export interface Enemy {
		id: number;
		name: string;
		specialName: string;

		enemyType: 'BOSS' | 'COMMON' | 'ELITE'; // enum
		category: string; // translated
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
		rewardPreview: Rewards[];

		images: {
			filename_icon: string;
			filename_investigationIcon: string;
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
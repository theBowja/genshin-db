declare module "genshin-db" {
	export interface Enemy {
		id: number; // archive id
		monsterId: number; // might be different from id

		name: string;
		specialNames: string[]; // list of possible special names

		monsterType: 'MONSTER_BOSS' | 'MONSTER_ORDINARY'; // enum
		enemyType: 'BOSS' | 'ELITE' | 'NORMAL'; // enum
		categoryType: 'CODEX_SUBTYPE_ABYSS' | 'CODEX_SUBTYPE_AUTOMATRON' | 'CODEX_SUBTYPE_BEAST' | 'CODEX_SUBTYPE_BOSS' | 'CODEX_SUBTYPE_ELEMENTAL' | 'CODEX_SUBTYPE_FATUI' | 'CODEX_SUBTYPE_HILICHURL' | 'CODEX_SUBTYPE_HUMAN'; // enum
		categoryText: string; // translated
		description: string;

		investigation?: { // almost all but not every enemy has this.
			investigationId: number;
			name: string;
			categoryType: 'Boss' | 'Common' | 'Elite'; // enum
			categoryText: string; // translated
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
			filename_investigationIcon?: string;
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
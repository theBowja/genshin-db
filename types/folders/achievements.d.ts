declare module "genshin-db" {
	export interface Achievement {
		id: number[];
		name: string;
		dupealias?: string; // Let the Wind Lead, That's One Big Crystalfly, and a few in other languages

		achievementGroupId: number;
		achievementGroupName: string;

		isHidden?: true;
		sortOrder: number;
		stages: number;
		stage1: {
			title: string;
			ps5title?: string;
			description: string;
			progress: number;
			reward: Rewards;
		};
		stage2?: {
			title: string;
			ps5title?: string;
			description: string;
			progress: number;
			reward: Rewards;
		};
		stage3?: {
			title: string;
			ps5title?: string;
			description: string;
			progress: number;
			reward: Rewards;
		};

		version: string;
	}
}
declare module "genshin-db" {
	export interface AchievementGroup {
		name: string;
		sortorder: number;
		reward?: Rewards;
		images: {
			nameicon: string;
		};

		version: string;
	}
}
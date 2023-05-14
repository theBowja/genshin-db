declare module "@PaimonApp/genshin-db" {
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
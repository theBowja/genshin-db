declare module "genshin-db" {
	export interface Outfit {
		id: number;
		name: string;
		description: string;
		isDefault: boolean;
		characterId: number;
		characterName: string;
		source?: string[];

		images: {
			filename_card: string;
			filename_icon?: string;
			filename_iconCircle: string;
			filename_splash?: string;
			filename_sideIcon?: string;
		};
		url: {
			modelviewer?: string;
		};
		version: string;
	}
}
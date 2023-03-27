declare module "genshin-db" {
	export interface Geography {
		name: string;
		area: string;
		description :string;
		region: string;
		showonlyunlocked?: true;
		sortorder: number;
		images: {
			nameimage: string;
		};
		version: string;
	}
}
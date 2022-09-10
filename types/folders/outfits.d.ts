declare module "genshin-db" {
	export interface Outfit {
		name: string;
		description: string;
		isdefault: boolean;
		character: string;
		source?: string[];

		images: {
			namecard: string;
			nameicon?: string;
			namesideicon?: string;
			namesplash?: string;
		};
		url: {
			modelviewer?: string;
		};
		version: string;
	}
}
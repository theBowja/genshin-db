declare module "genshin-db" {
	export interface Namecard {
		name: string;
		description: string;
		sortorder: number;
		source: string[];
		images: {
			nameicon: string;
			namebanner?: string; // the first namecard doesn't have this
			namebackground: string;
		};
		version: string;
	}
}
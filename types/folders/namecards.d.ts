declare module "@genshin-db/tcg" {
	export interface Namecard {
		id: number;
		name: string;
		description: string;
		sortOrder: number;
		source: string[];
		images: {
			filename_icon: string;
			filename_banner?: string; // the first namecard doesn't have this
			filename_background: string;
		};
		version: string;
	}
}
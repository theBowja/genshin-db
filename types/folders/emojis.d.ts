declare module "genshin-db" {
	export interface Emoji {
		id: number;
		name: string;
		dupealias?: string;

		setId: number;
		sortOrder: number;

		images: {
			filename_icon: string;
		};
		version: string;
	}
}
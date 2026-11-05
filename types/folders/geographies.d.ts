declare module "@genshin-db/tcg" {
	export interface Geography {
		id: number;
		name: string;
		areaId: number;
		areaName: string;
		description: string;
		regionId: string;
		regionName: string;
		showOnlyUnlocked?: true;
		sortOrder: number;
		images: {
			filename_image: string;
		};
		version: string;
	}
}
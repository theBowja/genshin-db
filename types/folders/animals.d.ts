declare module "genshin-db" {
	export interface Animal {
		id: number;
		name: string;
		dupealias?: string; // Vietnamese Vịt
		description: string;
		categoryType: 'ANIMAL' | 'AVIARY' | 'CRITTER' | 'FISH'; // enum
		categoryText: string; // translated
		countType: 'CAPTURE' | 'FISH' | 'NONE'; // enum
		sortOrder: number;
		
		images: {
			filename_icon: string;
		};

		version: string;
	}
}
declare module "genshin-db" {
	export interface Animal {
		id: number;
		name: string;
		dupealias?: string; // Vietnamese Vịt
		description: string;
		categoryType: 'SUBTYPE_ANIMAL' | 'SUBTYPE_AVIARY' | 'SUBTYPE_CRITTER' | 'SUBTYPE_FISH'; // enum
		categoryText: string; // translated
		countType: 'COUNT_TYPE_CAPTURE' | 'COUNT_TYPE_FISH' | 'COUNT_TYPE_NONE'; // enum
		sortOrder: number;
		
		images: {
			filename_icon: string;
		};

		version: string;
	}
}
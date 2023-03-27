declare module "genshin-db" {
	export interface TcgCharacterCards {
		id: number;
		name: string; // translated

		hp: number;
		maxenergy: number;

		tags: string[]; // enum
		tagstext: string[]; // translated

		storytitle: string; // translated
		storytext: string; // translated

		source: string; // translated
		
		skills: TcgSkills[];

		images: {
			filename_tagsicon: string[];
			filename_cardface: string;
			filename_cardface_golden: string;
			filename_cardface_HD: string;
		};

		version: string;
	}

	export interface TcgSkills {
		id: number;
		name: string; // translated

		basedamage?: number; // some skills like Barbara's burst don't do damage directly.
		baseelement?: string; // some skills like Barbara's burst don't apply elements directly.

		typetag: 'GCG_SKILL_TAG_A' | 'GCG_SKILL_TAG_E' | 'GCG_SKILL_TAG_Q' | 'GCG_SKILL_TAG_PASSIVE'; // enum
		type: string; // translated     

		description: string; // translated
		descriptionraw: string; // translated
		descriptionreplaced: string; // translated

		playcost: TcgSkillPlayCost[];
	}

	export interface TcgSkillPlayCost {
		costtype: string; // enum
		count: number;
	}
}
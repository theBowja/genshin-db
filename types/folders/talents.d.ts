declare module "genshin-db" {
	export interface Talent {
		id: number;
		name: string;
		combat1: CombatTalentDetail;
		combat2: CombatTalentDetail;
		combatsp?: CombatTalentDetail; // for mona/ayaka
		combat3: CombatTalentDetail;
		passive1: PassiveTalentDetail;
		passive2: PassiveTalentDetail;
		passive3?: PassiveTalentDetail; // player character doesn't have a third talent
		passive4?: PassiveTalentDetail; // for kokomi
		costs: {
			"lvl2": Items[];
			"lvl3": Items[];
			"lvl4": Items[];
			"lvl5": Items[];
			"lvl6": Items[];
			"lvl7": Items[];
			"lvl8": Items[];
			"lvl9": Items[];
			"lvl10": Items[];
		}
		images?: { // images for talents aren't available yet
			filename_combat1: string;
			filename_combat2: string;
			filename_combatsp?: string; // for mona/ayaka
			filename_combat3: string;
			filename_passive1: string;
			filename_passive2: string;
			filename_passive3?: string; // player character doesn't have a third talent
			filename_passive4?: string; // for kokomi's negative crit passive
		};
		version: string;
	}

	export interface CombatTalentDetail {
		name: string;
		descriptionRaw: string;
		description: string; // sanitized with removeColorHTML, removeHashtag, replaceGenderM, replaceLayoutPC, replaceNonBreakSpace
		flavorText?: string; // no flavortext for combat1 (normal attack). sanitized with replaceGenderM, replaceNonBreakSpace
		attributes: {
			labels: string[];
			parameters: {
				[key: string]: number[];
			};
		};
	}

	export interface PassiveTalentDetail {
		name: string;
		descriptionRaw: string;
		description: string; // sanitized with removeColorHTML, removeHashtag, replaceGenderM, replaceLayoutPC, replaceNonBreakSpace
	}
}
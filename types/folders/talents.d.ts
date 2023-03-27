declare module "genshin-db" {
	export interface Talent {
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
			combat1: string;
			combat2: string;
			combatsp?: string; // for mona/ayaka
			combat3: string;
			passive1: string;
			passive2: string;
			passive3?: string; // player character doesn't have a third talent
		};
		version: string;
	}

	export interface CombatTalentDetail {
		name: string;
		info: string;
		description?: string; // no description for combat1
		attributes: {
			labels: string[];
			parameters: {
				[key: string]: number[];
			};
		};
	}

	export interface PassiveTalentDetail {
		name: string;
		info: string;
	}
}
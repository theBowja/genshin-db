declare module "genshin-db" {
	export interface Voiceover {
		id: number;
		name: string;

		friendLines: Voiceline[];
		actionLines: Voiceline[];

		version: {
			[voicelineId: number | string]: string
		};
	}

	export interface Voiceline {
		voicelineId: number;
		title: string;
		voicelineType: string;
		description: string;
		voicefile: string;

		hasGenderedVoicefile?: boolean;
		voicefile_male?: string;

		hasUnlockConditions?: boolean;
		unlockConditions: {
			unlockText: string;
			conditionType: string; // enum
			paramList: number[];
		}[];
	}
}
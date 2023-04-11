/// <reference path="./folders/achievements.d.ts" />
/// <reference path="./folders/achievementgroups.d.ts" />
/// <reference path="./folders/adventureranks.d.ts" />
/// <reference path="./folders/animals.d.ts" />
/// <reference path="./folders/artifacts.d.ts" />
/// <reference path="./folders/characters.d.ts" />
/// <reference path="./folders/constellations.d.ts" />
/// <reference path="./folders/domains.d.ts" />
/// <reference path="./folders/elements.d.ts" />
/// <reference path="./folders/enemies.d.ts" />
/// <reference path="./folders/foods.d.ts" />
/// <reference path="./folders/geographies.d.ts" />
/// <reference path="./folders/materials.d.ts" />
/// <reference path="./folders/namecards.d.ts" />
/// <reference path="./folders/outfits.d.ts" />
/// <reference path="./folders/rarity.d.ts" />
/// <reference path="./folders/talentmaterialtypes.d.ts" />
/// <reference path="./folders/talents.d.ts" />
// <reference path="./folders/weaponmaterialtypes.d.ts" />
/// <reference path="./folders/weapons.d.ts" />
/// <reference path="./folders/windgliders.d.ts" />
/// <reference path="./folders/crafts.d.ts" />

/// <reference path="./folders/tcgactioncards.d.ts" />
/// <reference path="./folders/tcgcardbacks.d.ts" />
/// <reference path="./folders/tcgcardboxes.d.ts" />
/// <reference path="./folders/tcgcharactercards.d.ts" />
/// <reference path="./folders/tcgdetailedrules.d.ts" />
/// <reference path="./folders/tcgkeywords.d.ts" />
/// <reference path="./folders/tcglevelrewards.d.ts" />
/// <reference path="./folders/tcgstatuseffects.d.ts" />
/// <reference path="./folders/tcgsummons.d.ts" />

/// <reference path="./enums.d.ts" />

declare module "genshin-db" {
	export interface QueryFunction<R> {
		<Q extends string, O extends QueryOptions>(query: Q, opts?: O):
			(O extends { dumpResult: true }
			?
				DumpResult<R, O, Q>
			:
				(O extends { matchCategories: true } ? (O extends { verboseCategories: true } ? R[] : string[]) : never) | 
				(Q extends "names" ? (O extends { matchCategories: true } ? never : R | undefined) : R | undefined)
			)
	}

	export interface DumpResult<R, O extends QueryOptions, Q extends string> {
		query: Q;
		folder: Folder | Folder[];
		match: string | undefined;
		matchfolder: Folder;
		matchtype: MatchType | undefined;
		options: QueryOptions;
		filename: (O extends { matchCategories: true } ? string[] : undefined) | string | undefined;
		result: (O extends { matchCategories: true } ? (O extends { verboseCategories: true } ? R[] : string[]) : never) | 
				(Q extends "names" ? (O extends { matchCategories: true } ? never : R | undefined) : R | undefined);
	}

	/* Logic
	if matchCategories
	  if verboseCategories
		add R[];
	  else
		add string[];
	else
	  add never

	if "names"
	  if matchCategories
		add never
	  else
		add R | undefined;
	else
	  add R | undefined;
	*/

	/* Test examples
	characters("names", { matchCategories: true }); // string[]
	characters("names", { matchCategories: true, verboseCategories: true }); // Character[]

	characters("names"); // Character | undefined
	characters("names", { matchCategories: false }); // Character | undefined
	characters("foobar"); // Character | undefined
	characters("foobar", { matchCategories: false }); // Character | undefined
	characters("foobar", { verboseCategories: false }); // Character | undefined

	characters("foobar", { matchCategories: true }); // Character | string[] | undefined
	characters("foobar", { matchCategories: true, verboseCategories: true }); // Character | Character[] | undefined
	*/

	export interface StatFunction {
		(level: number, ascension?: number | '+' | '-'): StatResult;
	}

	export interface StatResult {
		level: number;
		ascension: number;
		hp?: number;
		attack?: number;
		defense?: number;
		specialized?: number;
	}

	export interface QueryOptions {
		dumpResult?: boolean;
		matchNames?: boolean;
		matchAltNames?: boolean;
		matchAliases?: boolean;
		matchCategories?: boolean;
		verboseCategories?: boolean;
		queryLanguages?: Language[];
		resultLanguage?: Language;
	}

	export const achievementgroups: QueryFunction<AchievementGroup>;
	export const achievements: QueryFunction<Achievement>;
	export const adventureranks: QueryFunction<AdventureRank>;
	export const animals: QueryFunction<Animal>;
	export const artifacts: QueryFunction<Artifact>;
	export const characters: QueryFunction<Character>;
	export const constellations: QueryFunction<Constellation>;
	export const crafts: QueryFunction<Craft>;
	export const domains: QueryFunction<Domain>;
	export const elements: QueryFunction<Element>;
	export const enemies: QueryFunction<Enemy>;
	export const foods: QueryFunction<Food>;
	export const geographies: QueryFunction<Geography>;
	export const materials: QueryFunction<Material>;
	export const namecards: QueryFunction<Namecard>;
	export const outfits: QueryFunction<Outfit>;
	export const rarity: QueryFunction<Rarity>;
	export const talentmaterialtypes: QueryFunction<TalentMaterial>;
	export const talents: QueryFunction<Talent>;
	// export const weaponmaterialtypes: QueryFunction<WeaponMaterial>;
	export const weapons: QueryFunction<Weapon>;
	export const windgliders: QueryFunction<WindGlider>;

	export const tcgactioncards: QueryFunction<TcgActionCards>;
	export const tcgcardbacks: QueryFunction<TcgCardBacks>;
	export const tcgcardboxes: QueryFunction<TcgCardBoxes>;
	export const tcgcharactercards: QueryFunction<TcgCharacterCards>;
	export const tcgdetailedrules: QueryFunction<TcgDetailedRules>;
	export const tcgkeywords: QueryFunction<TcgKeywords>;
	export const tcglevelrewards: QueryFunction<TcgLevelRewards>;
	export const tcgstatuseffects: QueryFunction<TcgStatusEffects>;
	export const tcgsummons: QueryFunction<TcgSummons>;



	export interface categories {
		(query: string, folder: Folder, opts: QueryOptions): undefined | string[];
	}


	export interface Items {
		name: string;
		count: number;
	}

	export interface Rewards {
		name: string;
		rarity?: '1' | '2' | '3' | '4' | '5'; // only used for artifacts
		count?: number; // only used for adventure exp, mora, and companionship exp
		countmax?: number; // upper range. used for enhancement ore which can be shown as "0~1"
	}


	// export interface Commission {
	//     name: string;
	//     description: string;
	//     target: string;
	//     city: string;
	// }


	//#region Altnames

	export function addAltName(language: Language, folder: Folder, altname: string, query: string): boolean;
	export function removeAltNames(language: Language, folder: Folder, altname: string): boolean;
	export function setAltNameLimits(limit: { maxLength?: number, maxCount?: number }): void;

	//#endregion

	// not sure how to add default true to "overwrite" param
	export function addData(data: ArrayBuffer | any, overwrite? : boolean): void;
	export function searchFolder(folder: string, query: string, opts?: QueryOptions): any;
	export function searchMultipleFolders(folders: string[], query: string, opts?: QueryOptions): any;

	//#region Options

	/**
	 * Set options by providing the values you want to change.
	 */
	export function setOptions(opts: QueryOptions): void;

	/**
	 * Returns a cloned copy of the options.
	 */
	export function getOptions(): QueryOptions;

	//#endregion
}

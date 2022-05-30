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
    folder: Folder;
    match: string | undefined;
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

export interface EnemyStatFunction {
    (level: number): EnemyStatResult;
}

export interface EnemyStatResult {
    level: number;
    hp: number;
    attack: number;
    defense: number;
}

//<MatchCategories extends boolean | undefined, Verbose extends boolean | undefined>
export interface QueryOptions {
    dumpResult?: boolean;
    matchNames?: boolean;
    matchAltNames?: boolean;
    matchAliases?: boolean;
    matchCategories?: boolean;
    verboseCategories?: boolean;
    queryLanguages?: Languages[];
    resultLanguage?: Languages;
}

//#region Enum

export enum Languages {
    ChineseSimplified  = "ChineseSimplified",
    ChineseTraditional = "ChineseTraditional",
    English            = "English",
    French             = "French",
    German             = "German",
    Indonesian         = "Indonesian",
    Japanese           = "Japanese",
    Korean             = "Korean",
    Portuguese         = "Portuguese",
    Russian            = "Russian",
    Spanish            = "Spanish",
    Thai               = "Thai",
    Vietnamese         = "Vietnamese"
}

// genshindb.folder
export enum Folder {
    characters     = "characters",
    talents        = "talents",
    constellations = "constellations",
    
    weapons        = "weapons",

    foods          = "foods",
    materials      = "materials",
    weaponmaterialtypes = "weaponmaterialtypes",
    talentmaterialtypes = "talentmaterialtypes",

    artifacts      = "artifacts",
    domains        = "domains",
    enemies        = "enemies",

    rarity         = "rarity",
    elements       = "elements"
}

//#endregion

// not easy to figure this out
//export const setOptions: (options: QueryOptions): void 
//export const getOptions: ():

export const artifacts: QueryFunction<Artifact>;
export const characters: QueryFunction<Character>;
export const outfits: QueryFunction<Outfit>;
export const constellations: QueryFunction<Constellation>;
export const elements: QueryFunction<Element>;
export const rarity: QueryFunction<Rarity>;
export const foods: QueryFunction<Food>;
export const talentmaterialtypes: QueryFunction<TalentMaterial>;
export const talents: QueryFunction<Talent>;
export const weaponmaterialtypes: QueryFunction<WeaponMaterial>;
export const weapons: QueryFunction<Weapon>;
export const materials: QueryFunction<Material>;
export const domains: QueryFunction<Domain>;
export const enemies: QueryFunction<Enemy>;
export const achievements: QueryFunction<Achievement>;
export const achievementgroups: QueryFunction<AchievementGroup>;

export interface categories {
    (query: string, folder: Folder, opts: QueryOptions): undefined | string[];
}

//#region Artifact

export interface Artifact {
    name: string;
    rarity: string[];
    "1pc"?: string;
    "2pc"?: string;
    "4pc"?: string;
    flower?: ArtifactDetail;
    plume?: ArtifactDetail;
    sands?: ArtifactDetail;
    goblet?: ArtifactDetail;
    circlet: ArtifactDetail;
    images: {
        nameflower?: string;
        nameplume?: string;
        namesands?: string;
        namegoblet?: string;
        namecirclet: string;
        flower?: string;
        plume?: string;
        sands?: string;
        goblet?: string;
        circlet: string;
    };
    url: {
        fandom: string;
    };
    version: string;
}

// UNUSED. FOR REFERENCE ONLY.
// artifacts with 2pc and 4pc set effects
export interface ArtifactNormal {
    name: string;
    rarity: string[];
    "2pc": string;
    "4pc": string;
    flower: ArtifactDetail;
    plume: ArtifactDetail;
    sands: ArtifactDetail;
    goblet: ArtifactDetail;
    circlet: ArtifactDetail;
    images: {
        flower: string;
        plume: string;
        sands: string;
        goblet: string;
        circlet: string;
    };
    url: {
        fandom: string;
    };
}

// UNUSED. FOR REFERENCE ONLY.
// circlet artifacts
export interface ArtifactHeadSingle {
    name: string;
    rarity: string[];
    "1pc": string;
    circlet: ArtifactDetail;
    images: {
        circlet: string;
    };
    url: {
        fandom: string;
    };
}

export interface ArtifactDetail {
    name: string;
    relictype: string; // for different languages
    description: string;
}

//#endregion

//#region Character

export interface Character {
    name: string;
    fullname: string; // only Russian has shortened "name" for japanese characters
    title: string;
    description: string;
    rarity: string;
    element: string;
    weapontype: string;
    substat: string;
    gender: string; // manually translated
    body: string; // untranslated
    association: string; // untranslated
    region: string; // empty string if player character or crossover (aloy)
    affiliation: string; // empty string if player character
    birthdaymmdd: string; // empty string if player character
    birthday: string; // empty string if player character
    constellation: string;
    cv: {
        english: string;
        chinese: string;
        japanese: string;
        korean: string;
    };
    costs: {
        "ascend1": Items[];
        "ascend2": Items[];
        "ascend3": Items[];
        "ascend4": Items[];
        "ascend5": Items[];
        "ascend6": Items[];
    };
    images: {
        nameicon: string;
        namesideicon: string;
        namegachasplash?: string; // lumine/aether doesn't have this
        namegachaslice?: string; // lumine/aether doesn't have this

        card?: string;     // wikia
        portrait?: string; // wikia
        icon: string;     // hoyolab
        sideicon: string; // hoyolab
        cover1?: string; // official site
        cover2?: string; // official site
        "hoyolab-avatar"?: string; // manually entered from hoyolab
    };
    url: {
        fandom: string;
    };
    stats: StatFunction;
    version: string;
}

//#endregion

//#region Outfit

export interface Outfit {
    name: string;
    description: string;
    isdefault: boolean;
    character: string;
    source?: string[];

    images: {
        namecard: string;
        nameicon?: string;
        namesideicon?: string;
        namesplash?: string;
    };
    url: {
        modelviewer?: string;
    };
    version: string;
}

//#endregion

//#region Constellation

export interface Constellation {
    name: string;
    c1: ConstellationDetail;
    c2: ConstellationDetail;
    c3: ConstellationDetail;
    c4: ConstellationDetail;
    c5: ConstellationDetail;
    c6: ConstellationDetail;
    images: {
        constellation: string;
        constellation2?: string; // only for player characters. shows girl constellation image
        c1: string;
        c2: string;
        c3: string;
        c4: string;
        c5: string;
        c6: string;
    };
    version: string;
}

export interface ConstellationDetail {
    name: string;
    effect: string;
}

//#endregion

//#region Misc

export interface Element {
    name: string;
    type: string;
    color: string;
    emoji: string;
    region: string;
    archon: string;
    theme: string;
    images: {
        base64: string;
        wikia: string;
    }
}

export interface Rarity {
    name: string;
    emoji: string;
    image: string;
}

//#endregion

//#region Food

export interface Food {
    name: string;
    rarity: string;
    foodtype: string; // untranslated
    foodfilter: string;
    foodcategory: string; // untranslated
    effect: string;
    description: string;

    suspicious?: {
        effect: string;
        description: string;
    };
    normal?: {
        effect: string;
        description: string;
    };
    delicious?: {
        effect: string;
        description: string;
    };
    basedish?: string;
    character?: string;

    ingredients: FoodIngredient[];
    images: {
        nameicon: string;
    };
    url: {
        fandom: string;
    };
    version: string;
}

// UNUSED. FOR REFERENCE ONLY.
/*
export interface FoodNormal {
    name: string;
    rarity: string;
    foodtype: 'NORMAL';
    foodfilter: string;
    foodcategory: string;
    effect: string;
    description: string;

    suspicious: {
        effect: string;
        description: string;
    };
    normal: {
        effect: string;
        description: string;
    };
    delicious: {
        effect: string;
        description: string;
    };

    ingredients: FoodIngredient[];
    images?: {};
    url: {
        fandom: string;
    };
}
*/

// UNUSED. FOR REFERENCE ONLY.
/*
export interface FoodSpecialty {
    name: string;
    rarity: string;
    foodtype: 'SPECIALTY';
    foodfilter: string;
    foodcategory: string;
    effect: string;
    description: string;
    
    basedish: string;
    character: string;

    ingredients: FoodIngredient[];
    images?: {};
    url: {
        fandom: string;
    };
}
*/
export interface FoodIngredient {
    name: string;
    count: number;
}

//#endregion

//#region Talent

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
    description: string;
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

export interface Items {
    name: string;
    count: number;
}

//#endregion

//#region TalentMaterial
//deprecated
export interface TalentMaterial { // English only
    name: string;
    "2starname": string;
    "3starname": string;
    "4starname": string;
    day: string[];
    localtion: string;
    region: string;
    domainofmastery: string;
}

//#endregion

//#region Weapon

export interface Weapon {
    name: string;
    description: string;
    weapontype: string;
    rarity: string;
    baseatk: number;
    substat: string;
    subvalue: string;
    effectname: string;
    effect: string;
    r1: string[];
    r2: string[];
    r3: string[];
    r4: string[];
    r5: string[];
    weaponmaterialtype: string; // English only
    costs: {
        "ascend1": Items[];
        "ascend2": Items[];
        "ascend3": Items[];
        "ascend4": Items[];
        "ascend5"?: Items[]; // 1 and 2 star weapons only have 4 ascensions
        "ascend6"?: Items[]; // 1 and 2 star weapons only have 4 ascensions
    };
    images: {
        nameicon: string;
        namegacha: string;
        nameawakenicon: string;
        image?: string; // wikia
        icon: string; // hoyolab
        awakenicon: string; // hoyolab
    };
    url: {
        fandom: string;
    };
    stats: StatFunction;
    version: string;
}

//#endregion

//#region WeaponMaterial
//deprecated
export interface WeaponMaterial { // English only
    name: string;
    "2starname": string;
    "3starname": string;
    "4starname": string;
    "5starname": string;
    day: string[];
    location: string;
    region: string;
    domainofforgery: string;
}

//#endregion

//#region Material

export interface Material {
    name: string;
    description: string;
    sortorder: number;
    rarity?: string; // not every material has this
    category: string; // untranslated
    materialtype: string;
    dropdomain?: string;
    daysofweek?: string[];
    source: string[];

    images: {
        nameicon: string;
        fandom?: string;
        redirect: string;
    };
    url: {
        fandom: string;
    };
}

//#endregion

//#region Domain

/* UNIMPLEMENTED TODO
export interface DomainEntrance {
    name: string;
}
*/

export interface Domain {
    name: string;

    region: string;
    domainentrance: string;
    domaintype: string; // Artifacts, Weapon Ascension Materials, Talent Level-Up Material
    description: string;

    recommendedlevel: number;
    recommendedelements: string[];
    daysofweek?: string[]; // undefined for artifact domains
    unlockrank: number; // adventure rank this domain unlocks at
    rewardpreview: Rewards[];
    disorder: string[];

    monsterlist?: string[]; // I manually keep this updated. If I forget, it'll be undefined.
    // objectives?: string[]; // UNIMPLEMENTED TODO

    images: {
        namepic: string;
    }
}

export interface Rewards {
    name: string;
    rarity?: string; // only used for artifacts
    count?: number; // only used for adventure exp, mora, and companionship exp
    countmax?: number; // upper range. used for enhancement ore which can be shown as "0~1"
}

//#endregion

//#region Enemies

export interface Enemy {
    name: string;
    specialname: string;

    type: string; // enum of "COMMON", "ELITE", "BOSS"
    category: string; 
    description: string;

    investigation?: { // almost all but not every enemy has this.
        name: string;
        category: string;
        description: string;
    }

    // droplist: Rewards; TODO
    // particles: TODO
    // resistance: { TODO
    //     physical: number;
    //     pyro: number;
    //     dendro: number;
    //     hydro: number;
    //     geo: number;
    //     anemo: number;
    //     cryo: number;
    //     electro: number;
    // };
    rewardpreview: Rewards[];

    images: {
        nameicon: string;
    };
    stats: EnemyStatFunction;
}

//#endregion

//#region Achievements

export interface Achievement {
    name: string;

    achievementgroup: string;
    ishidden?: true;
    sortorder: number;
    stages: number;
    stage1: {
        title: string;
        ps5title?: string;
        description: string;
        progress: number;
        reward: Rewards;
    };
    stage2?: {
        title: string;
        ps5title?: string;
        description: string;
        progress: number;
        reward: Rewards;
    };
    stage3?: {
        title: string;
        ps5title?: string;
        description: string;
        progress: number;
        reward: Rewards;
    };

    version: string;
}

export interface AchievementGroup {
    name: string;
    sortorder: number;
    reward?: Rewards;
    images: {
        nameicon: string;
    };

    version: string;
}

//#endregion

export interface WindGlider {
    name: string;
    description: string;
    rarity: string;
    sortorder: number;
    ishidden?: true;
    source: string[];
    
    images: {
        nameicon: string;
        namegacha: string;
    };

    version: string;
}

export interface Animal {
    name: string;
    description: string;
    category: string;
    counttype : string;
    sortorder: number;
    
    images: {
        nameicon: string;
    };

    version: string;
}

export interface Namecard {
    name: string;
    description: string;
    sortorder: number;
    source: string[];
    images: {
        nameicon: string;
        namebanner?: string; // the first namecard doesn't have this
        namebackground: string;
    };
    version: string;
}

export interface Geography {
    name: string;
    area: string;
    description :string;
    region: string;
    showonlyunlocked?: true;
    sortorder: number;
    images: {
        nameimage: string;
    };
    version: string;
}

export interface AdventureRank {
    name: string;
    exp: number;
    unlockdescription: string;
    reward: AdventureRankReward[];
}

export interface AdventureRankReward {
    name: string;
    count: number;
    type: string; // MATERIAL, ARTIFACT, WEAPON
}

export interface Commission {
    name: string;
    description: string;
    target: string;
    city: string;
}


//#region Altnames

// export interface ;

export function addAltName(language: Languages, folder: Folder, altname: string, query: string): boolean;
export function removeAltNames(language: Languages, folder: Folder, altname: string): boolean;
export function setAltNameLimits(limit: { maxLength?: number, maxCount?: number }): void;

//#endregion

// not sure how to add default true to "overwrite" param
export function addData(data: ArrayBuffer | any, overwrite? : boolean): void;
export function searchFolder(folder: string, query: string, opts?: QueryOptions): any
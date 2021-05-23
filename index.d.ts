// TODO: handle exact match and filter keywords
export interface QueryFunction<Result> {
    // retrieve list of names
    (query: "names", opts?: QueryOptions<false>): string[];
    (query: "names", opts?: QueryOptions<true>): Result[];
    // fuzzy search
    (query: string, opts?: QueryOptions<false>): Result | string[];
    (query: string, opts?: QueryOptions<true>): Result | Result[];
}

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

export interface QueryOptions<Verbose extends boolean> {
    matchAliases?: boolean;
    matchCategories?: boolean;
    verboseCategories?: Verbose;
    queryLanguages?: Languages[];
    resultlanguage?: Languages;
}

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

//export const setOptions: (options: QueryOptions): void 
//export const getOptions: ():

export const artifacts: QueryFunction<ArtifactNormal | ArtifactHeadSingle>;
export const characters: QueryFunction<Character>;
export const constellations: QueryFunction<Constellation>;
export const elements: QueryFunction<Element>;
export const rarity: QueryFunction<Rarity>;
export const foods: QueryFunction<FoodNormal | FoodSpecialty>;
export const talentmaterialtypes: QueryFunction<TalentMaterial>;
export const talents: QueryFunction<Talent>;
export const weaponmaterialtypes: QueryFunction<WeaponMaterial>;
export const weapons: QueryFunction<Weapon>;

//#region Artifact

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
    aliases?: string[]; // currently unused
    title: string;
    description: string;
    rarity: string;
    element: string;
    weapontype: string;
    substat: string;
    gender: string; // manually translated
    body: string; // untranslated
    association: string; // untranslated
    region: string; // manual untranslated. empty string if player character
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
    talentmaterialtype: string; // untranslated. empty string if I forget to update this
    images: {
        image?: string;    // wikia
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
}

//#endregion

//#region Constellation

export interface Constellation {
    name: string;
    aliases?: string[];
    c1: ConstellationDetail;
    c2: ConstellationDetail;
    c3: ConstellationDetail;
    c4: ConstellationDetail;
    c5: ConstellationDetail;
    c6: ConstellationDetail;
    images: {
        c1: string;
        c2: string;
        c3: string;
        c4: string;
        c5: string;
        c6: string;
    };
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
    url: string;
}

export interface Rarity {
    name: string;
    emoji: string;
    image: string;
}

//#endregion

//#region Food

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

export interface FoodIngredient {
    name: string;
    count: number;
}

//#endregion

//#region Talent

export interface Talent {
    name: string;
    aliases?: string[];
    combat1: CombatTalentDetail;
    combat2: CombatTalentDetail;
    combatsp?: CombatTalentDetail; // for mona
    combat3: CombatTalentDetail;
    passive1: PassiveTalentDetail;
    passive2: PassiveTalentDetail;
    passive3?: PassiveTalentDetail; // player character doesn't have a third talent
    images?: { // images for talents aren't available yet
        combat1: string;
        combat2: string;
        combatsp: string;
        combat3: string;
        passive1: string;
        passive2: string;
        passive3: string;
    };
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

//#endregion

//#region TalentMaterial

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
    images: {
        image?: string; // wikia
        icon: string; // hoyolab
        awakenicon: string; // hoyolab
    };
    url: {
        fandom: string;
    };
    stats: StatFunction;
}

//#endregion

//#region WeaponMaterial

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
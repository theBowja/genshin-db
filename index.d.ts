// TODO: handle exact match and filter keywords
export interface QueryFunction<Entry> {
    // retrieve all
    (query: "names", opts?: QueryOptions<false>): string[];
    (query: "names", opts?: QueryOptions<true>): Entry[];
    // fuzzy search
    (query: string, opts?: QueryOptions<false>): Entry | string[];
    (query: string, opts?: QueryOptions<true>): Entry | Entry[];
}

export interface QueryOptions<Verbose extends boolean> {
    verbose?: Verbose;
    resultlanguage?: string;
    querylanguages?: string[];
}

export function categories(
    query: string,
    opts?: QueryOptions<false>
): string | string[];

export const artifacts: QueryFunction<Artifact>;
export const characters: QueryFunction<Character>;
export const constellations: QueryFunction<Constellation>;
export const elements: QueryFunction<Element>;
export const rarity: QueryFunction<Rarity>;
export const recipes: QueryFunction<Recipe>;
export const talentmaterialtypes: QueryFunction<TalentMaterial>;
export const talents: QueryFunction<Talent>;
export const weaponmaterialtypes: QueryFunction<WeaponMaterial>;
export const weapons: QueryFunction<Weapon>;

export interface Artifact {
    name: string;
    minrarity: string;
    maxrarity: string;
    flower?: ArtifactDetail;
    plume?: ArtifactDetail;
    sands?: ArtifactDetail;
    goblet?: ArtifactDetail;
    circlet?: ArtifactDetail;
    "1pc"?: string;
    "2pc"?: string;
    "3pc"?: string;
    "4pc"?: string;
    "5pc"?: string;
    drop: {
        [key: number]: string[];
    };
}

export interface ArtifactDetail {
    name: string;
    images: {
        image: string;
    };
    description: string;
}

export interface Character {
    name: string;
    aliases?: string[];
    titles: string[];
    element: string;
    weapontype: string;
    gender: string;
    region: string;
    rarity: string;
    birthday?: string;
    constellation: string;
    substat: string;
    images: {
        image: string;
        card: string;
        portrait: string;
    };
    cv: {
        chinese?: string;
        english?: string;
        japanese?: string;
        korean?: string;
    };
    affiliation: string;
    description: string;
    talentmaterialtype: string;
    url: string;
}

export interface Constellation {
    name: string;
    aliases?: string[];
    c1: ConstellationDetail;
    c2: ConstellationDetail;
    c3: ConstellationDetail;
    c4: ConstellationDetail;
    c5: ConstellationDetail;
    c6: ConstellationDetail;
}

export interface ConstellationDetail {
    name: string;
    effect: string;
}

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

export interface Recipe {
    name: string;
    rarity: string;
    foodrecipetype: string;
    effect: string;
    description: string;
    buffs: string[];
    images: {
        image: string;
    };
    ingredients: string[];
    source: string;
    base?: string;
    cook?: string;
}

export interface Talent {
    name: string;
    aliases?: string[];
    combat1?: TalentDetail;
    combat2?: TalentDetail;
    combat3?: TalentDetail;
    combatsp?: TalentDetail;
    passive1?: TalentDetail;
    passive2?: TalentDetail;
    passive3?: TalentDetail;
}

export interface TalentDetail {
    name: string;
    image: string;
    info: string;
    description?: string;
    attributes?: string;
}

export interface TalentMaterial {
    name: string;
    "2starname": string;
    "3starname": string;
    "4starname": string;
    day: string[];
    localtion: string;
    region: string;
    domainofmastery: string;
}

export interface Weapon {
    name: string;
    weapontype: string;
    rarity: string;
    images: {
        image: string;
    };
    baseatk: string;
    substat: string;
    subvalue: string;
    effectname: string;
    effect: string;
    r1: string[];
    r2: string[];
    r3: string[];
    r4: string[];
    r5: string[];
    description: string;
    weaponmaterialtype: string;
    url: string;
}

export interface WeaponMaterial {
    name: string;
    "2starname": string;
    "3starname": string;
    "4starname": string;
    "5starname": string;
    day: string[];
    localtion: string;
    region: string;
    domainofforgery: string;
}

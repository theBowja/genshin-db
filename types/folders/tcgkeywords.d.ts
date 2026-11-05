declare module "@genshin-db/tcg" {
	export interface TcgKeywords {
		id: number;
		name: string; // translated
		nameraw: string; // translated

		description: string; // translated
		descriptionraw: string; // translated

		version: string;
	}
}
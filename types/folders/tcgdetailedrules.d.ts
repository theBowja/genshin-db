declare module "genshin-db" {
	export interface TcgDetailedRules {
		id: number;
		name: string; // translated

		rules: TcgRule[];

		version: string;
	}

	export interface TcgRule {
		reaction?: {
			elementone: string; // enum
			elementtwo: string; // enum
		};

		title: string; // translated. can be empty string.
		titleraw: string; // translated. can be empty string.

		content: string; // translated
		contentraw: string; // translated

		filename_image?: string;
	}
}
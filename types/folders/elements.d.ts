declare module "@genshin-db/tcg" {
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
}
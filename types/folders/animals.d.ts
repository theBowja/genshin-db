declare module "genshin-db" {
	export interface Animal {
	    name: string;
	    description: string;
	    category: string;
	    counttype: 'CAPTURE' | 'NONE' | 'FISH';
	    sortorder: number;
	    
	    images: {
	        nameicon: string;
	    };

	    version: string;
	}
}
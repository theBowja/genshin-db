declare module "genshin-db" {
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
}
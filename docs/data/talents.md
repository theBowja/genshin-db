# Talent

Search function: `genshindb.talents("query", opts);`  
Interactive: https://genshindb-ia.netlify.app/  
Web API: https://genshin-db-api.vercel.app/api/talents?query=query

Type:
```ts
interface Talent {
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
	}```

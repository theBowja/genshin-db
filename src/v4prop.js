const Folder = require('./folder.js').FoldersEnum;

// Maps v5 property values to v4 property names for backwards compatibility purposes.
// It's not a 100% match to v4 but it's good enough for a quick bandaid fix.

module.exports = {
	addv4: addv4,
	getv4: getv4
}

function addv4(v5data, folder) {
	const v4 = getv4(v5data, folder);
	copyOverwriteObj(v4, v5data);
	return v5data;
}

function copyOverwriteObj(from, to) {
	for (let [key, value] of Object.entries(from)) {
		if (isObject(value)) {
			if (to[key] === undefined) to[key] = {};
			copyOverwriteObj(value, to[key]);
		} else {
			to[key] = value;
		}
	}
}

function isObject(val) {
	return typeof val === 'object' && !Array.isArray(val) && val !== null;
}

function getv4(v5data, folder) {
	switch(folder) {
	case Folder.characters:
		return mapcharacters(v5data);
	case Folder.constellations:
		return mapconstellations(v5data);
	case Folder.talents:
		return maptalents(v5data);
	case Folder.weapons:
		return mapweapons(v5data);
	case Folder.artifacts:
		return mapartifacts(v5data);
	case Folder.foods:
		return mapfoods(v5data);
	case Folder.materials:
		return mapmaterials(v5data);
	case Folder.domains:
		return mapdomains(v5data);
	case Folder.enemies:
		return mapenemies(v5data);
	case Folder.outfits:
		return mapoutfits(v5data);
	case Folder.windgliders:
		return mapwindgliders(v5data);
	case Folder.animals:
		return mapanimals(v5data);
	case Folder.namecards:
		return mapnamecards(v5data);
	case Folder.geographies:
		return mapgeographies(v5data);
	case Folder.crafts:
		return mapcrafts(v5data);
	case Folder.achievements:
		return mapachievements(v5data);
	case Folder.achievementgroups:
		return mapachievementgroups(v5data);
	case Folder.adventureranks:
		return mapadventureranks(v5data);
	default:
		return v5data;
	}
}

function mapcharacters(v5data) {
	return {
		id: v5data.id,
		name: v5data.name,
		fullname: v5data.fullname || v5data.name,
		title: v5data.title,
		description: v5data.description,
		rarity: v5data.rarity+'',
		element: v5data.elementText,
		weapontype: v5data.weaponText,
		substat: v5data.substatText,
		gender: v5data.gender,
		body: v5data.bodyType.substring(v5data.bodyType.indexOf('_')+1),
		association: v5data.associationType.substring(v5data.associationType.indexOf('_')+1),
		region: v5data.region,
		affiliation: v5data.affiliation,
		birthdaymmdd: v5data.birthdaymmdd,
		birthday: v5data.birthday,
		constellation: v5data.constellation,
		cv: v5data.cv,
		costs: v5data.costs,

		images: {
			nameicon: v5data.images.filename_icon,
			namesideicon: v5data.images.filename_sideIcon,
			namegachasplash: v5data.images.filename_gachaSplash,
			namegachaslice: v5data.images.filename_gachaSlice,
		},
		url: v5data.url,
		stats: v5data.stats,
		version: v5data.version
	};
}

function mapconstellations(v5data) {
	return {
		id: v5data.id,
		name: v5data.name,
		c1: {
			name: v5data.c1.name,
			effect: v5data.c1.description
		},
		c2: {
			name: v5data.c2.name,
			effect: v5data.c2.description
		},
		c3: {
			name: v5data.c3.name,
			effect: v5data.c3.description
		},
		c4: {
			name: v5data.c4.name,
			effect: v5data.c4.description
		},
		c5: {
			name: v5data.c5.name,
			effect: v5data.c5.description
		},
		c6: {
			name: v5data.c6.name,
			effect: v5data.c6.description
		},

		images: {
			constellation: v5data.images.filename_constellation,
			constellation2: v5data.images.filename_constellation2,
			c1: v5data.images.filename_c1,
			c2: v5data.images.filename_c2,
			c3: v5data.images.filename_c3,
			c4: v5data.images.filename_c4,
			c5: v5data.images.filename_c5,
			c6: v5data.images.filename_c6,
		},
		version: v5data.version
	};
}

function maptalents(v5data) {
	return { 
		id: v5data.id,
		name: v5data.name,
		...['combat1', 'combat2', 'combatsp', 'combatju', 'combat3'].reduce((accum, combat) => {
			if (v5data[combat]) {
				accum[combat] = {
					name: v5data[combat].name,
					info: v5data[combat].description,
					description: v5data[combat].flavorText,
					attributes: v5data[combat].attributes
				}
			}
			return accum;
		}, {}),
		...['passive1', 'passive2', 'passive3', 'passive4'].reduce((accum, passive) => {
			if (v5data[passive]) {
					accum[passive] = {
					name: v5data[passive].name,
					info: v5data[passive].description,
				}
			}
			return accum;
		}, {}),
		costs: v5data.costs,

		images: {
			combat1: v5data.images.filename_combat1,
			combat2: v5data.images.filename_combat2,
			combatsp: v5data.images.filename_combatsp,
			combatju: v5data.images.filename_combatju,
			combat3: v5data.images.filename_combat3,
			passive1: v5data.images.filename_passive1,
			passive2: v5data.images.filename_passive2,
			passive3: v5data.images.filename_passive3,
		},
		version: v5data.version
	};
}

function mapweapons(v5data) {
	return {
		id: v5data.id,
		name: v5data.name,
		dupealias: v5data.dupealias,
		description: v5data.description,
		weapontype: v5data.weaponText,
		rarity: v5data.rarity+'',
		story: v5data.story,
		baseatk: Math.round(v5data.baseAtkValue),
		substat: v5data.mainStatText,
		subvalue: v5data.baseStatText.replace('%', ''),
		effectname: v5data.r1 && v5data.effectName,
		effect: v5data.r1 && v5data.r1.description,
		r1: v5data.r1 && v5data.r1.values,
		r2: v5data.r2 && v5data.r2.values,
		r3: v5data.r3 && v5data.r3.values,
		r4: v5data.r4 && v5data.r4.values,
		r5: v5data.r5 && v5data.r5.values,
		weaponmaterialtypes: '', // deprecated
		costs: v5data.costs,

		images: {
			nameicon: v5data.images.filename_icon,
			namegacha: v5data.images.filename_gacha,
			nameawakenicon: v5data.images.filename_awakenIcon
		},
		// url: v5data.url, // deprecated
		stats: v5data.stats,
		version: v5data.version
	};
}

function mapartifacts(v5data) {
	return {
		id: v5data.id,
		name: v5data.name,
		rarity: v5data.rarityList.map(r => r+''),
		'1pc': v5data.effect1Pc,
		'2pc': v5data.effect2Pc,
		'4pc': v5data.effect4Pc,
		...['flower', 'plume', 'sands', 'goblet', 'circlet'].reduce((accum, type) => {
			if (v5data[type]) {
				accum[type] = {
					name: v5data[type].name,
					relictype: v5data[type].relicText,
					description: v5data[type].description,
					story: v5data[type].story
				}
			}
			return accum;
		}, {}),

		images: {
			nameflower: v5data.images.filename_flower,
			nameplume: v5data.images.filename_plume,
			namesands: v5data.images.filename_sands,
			namegoblet: v5data.images.filename_goblet,
			namecirclet: v5data.images.filename_circlet
		},
		version: v5data.version
	};
}

function mapfoods(v5data) {
	return {
		id: v5data.id,
		name: v5data.name,
		rarity: v5data.rarity+'',
		foodtype: v5data.foodtype,
		foodfilter: v5data.filterText,
		// foodcategory: ??? // deprecated. backwards incompatible
		effect: v5data.effect,
		description: v5data.description,
		suspicious: v5data.suspicious,
		normal: v5data.normal,
		delicious: v5data.delicious,
		basedish: v5data.baseDishName,
		character: v5data.characterName,
		ingredients: v5data.ingredients,

		images: {
			nameicon: v5data.images.filename_icon
		},
		version: v5data.version
	};
}

function mapmaterials(v5data) {
	return {
		id: v5data.id,
		name: v5data.name,
		dupealias: v5data.dupealias,
		description: v5data.description,
		sortorder: v5data.sortRank, // backwards incompatible
		rarity: v5data.rarity && v5data.rarity+'',
		category: v5data.category,
		materialtype: v5data.typeText,
		dropdomain: v5data.dropDomainName,
		daysofweek: v5data.daysOfWeek,
		source: v5data.sources,

		images: {
			nameicon: v5data.images.filename_icon
		},
		version: v5data.version
	};
}

function mapdomains(v5data) {
	return {
		id: v5data.id,
		name: v5data.name,
		region: v5data.regionName,
		domainentrance: v5data.entranceName,
		domaintype: v5data.domainText,
		description: v5data.description,
		recommendedlevel: v5data.recommendedLevel,
		recommendedelements: v5data.recommendedElements,
		unlockrank: v5data.unlockRank,
		rewardpreview: v5data.rewardPreview,
		disorder: v5data.disorder,
		monsterlist: v5data.monsterList,

		images: {
			namepic: v5data.images.filename_image
		},
		version: v5data.version
	};
}

function mapenemies(v5data) {
	return {
		id: v5data.id,
		name: v5data.name,
		specialname: v5data.specialNames[0],
		enemytype: v5data.enemyType,
		category: v5data.categoryText,
		description: v5data.description,
		investigation: {
			investigationId: v5data.investigation.investigationId,
			name: v5data.investigation.name,
			category: v5data.investigation.categoryText,
			description: v5data.investigation.description
		},
		rewardpreview: v5data.rewardPreview,

		images: {
			nameicon: v5data.images.filename_icon
		},
		stats: v5data.stats,
		version: v5data.version
	};
}

function mapoutfits(v5data) {
	return {
		id: v5data.id,
		name: v5data.name,
		description: v5data.description,
		isdefault: v5data.isDefault,
		character: v5data.characterName,
		source: v5data.source,

		images: {
			namecard: v5data.images.filename_card,
			nameicon: v5data.images.filename_icon,
			namesideicon: v5data.images.filename_sideIcon,
			namesplash: v5data.images.filename_splash
		},
		url: v5data.url,
		version: v5data.version
	};
}

function mapwindgliders(v5data) {
	return {
		id: v5data.id,
		name: v5data.name,
		description: v5data.description,
		rarity: v5data.rarity+'',
		story: v5data.story,
		sortorder: v5data.id,
		ishidden: v5data.isHidden,
		source: v5data.source,

		images: {
			nameicon: v5data.images.filename_icon,
			namegacha: v5data.images.filename_gacha
		},
		version: v5data.version
	};
}

function mapanimals(v5data) {
	return {
		id: v5data.id,
		name: v5data.name,
		dupealias: v5data.dupealias,
		description: v5data.description,
		category: v5data.categoryText,
		counttype: v5data.countType.substring(v5data.countType.lastIndexOf('_')+1),
		sortorder: v5data.sortOrder,

		images: {
			nameicon: v5data.images.filename_icon
		},
		version: v5data.version
	};
}

function mapnamecards(v5data) {
	return {
		id: v5data.id,
		name: v5data.name,
		description: v5data.description,
		sortorder: v5data.sortOrder,
		source: v5data.source,

		images: {
			nameicon: v5data.images.filename_icon,
			namebanner: v5data.images.filename_banner,
			namebackground: v5data.images.filename_background
		},
		version: v5data.version
	};
}

function mapgeographies(v5data) {
	return {
		id: v5data.id,
		name: v5data.name,
		area: v5data.areaName,
		description: v5data.description,
		region: v5data.regionName,
		showonlyunlocked: v5data.showOnlyUnlocked,
		sortorder: v5data.sortOrder,

		images: {
			nameimage: v5data.images.filename_image
		},
		version: v5data.version
	};
}

function mapcrafts(v5data) {
	return {
		id: v5data.id,
		name: v5data.name,
		filter: v5data.filterText,
		sortorder: v5data.sortOrder,
		unlockrank: v5data.unlockRank,
		resultcount: v5data.resultCount,
		moracost: v5data.moraCost,
		recipe: v5data.recipe,
		altrecipes: v5data.altrecipes,

		version: v5data.version
	};
}

function mapachievements(v5data) {
	return {
		id: v5data.id,
		name: v5data.name,
		dupealias: v5data.dupealias,
		achievementgroup: v5data.achievementGroupName,
		ishidden: v5data.isHidden,
		sortorder: v5data.sortOrder,
		stages: v5data.stages,
		...['stage1', 'stage2', 'stage3'].reduce((accum, stage) => {
			if (v5data[stage]) {
				accum[stage] = v5data[stage];
			}
			return accum;
		}, {}),

		version: v5data.version
	};
}

function mapachievementgroups(v5data) {
	return {
		id: v5data.id,
		name: v5data.name,
		sortorder: v5data.sortOrder,
		reward: v5data.reward,

		images: {
			nameicon: v5data.images.filename_icon
		},
		version: v5data.version
	};
}

function mapadventureranks(v5data) {
	return {
		id: v5data.id,
		name: v5data.name,
		exp: v5data.exp,
		unlockdescription: v5data.unlockDescription,
		reward: v5data.reward,

		version: v5data.version
	};
}
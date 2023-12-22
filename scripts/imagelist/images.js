// this script will compile all the image names together into a giant list for analysis
const design = require('../../src/design.json');
const fs = require('fs');

function getImageData(folder) {
	return require(`../../src/data/image/${folder}.json`);
}

function getImageList(folders) {
	const imagemap = {};
	for (let folder of folders) {
		let imagesjson = getImageData(folder);

		for (let data of Object.values(imagesjson)) {
			for (let [key, value] of Object.entries(data)) {
				if (key.startsWith('filename_')) {
					if (!Array.isArray(value)) {
						value = [value];
					}
					
					for (let image of value) {
						imagemap[image] = true;
					}
				}
			}
		}
	}

	let imagelist = Object.keys(imagemap).sort();
	return imagelist;
}

function getImageListsByFolder(folders) {
	const imagemap = {};
	for (let folder of folders) {
		let imagesjson = getImageData(folder);
		const imagelist = [];

		for (let data of Object.values(imagesjson)) {
			for (let [key, value] of Object.entries(data)) {
				if (key.startsWith('filename_')) {
					if (!Array.isArray(value)) {
						value = [value];
					}
					
					for (let image of value) {
						imagelist.push(image)
					}
				}
			}
		}

		if (imagelist.length > 0)
			imagemap[folder] = imagelist;
	}

	return imagemap;
}

let imagelist = getImageList(design.hasImage);
fs.writeFileSync(`./imagesAll.json`, JSON.stringify(imagelist, null, '\t'));

imagelist = getImageList(design.hasImage.filter(e => design.standard.includes(e)));
fs.writeFileSync(`./imagesStandard.json`, JSON.stringify(imagelist, null, '\t'));

imagelist = getImageList(design.hasImage.filter(e => design.tcg.includes(e)));
fs.writeFileSync(`./imagesTcg.json`, JSON.stringify(imagelist, null, '\t'));

imagelist = getImageListsByFolder(design.hasImage);
fs.writeFileSync(`./imagesFolder.json`, JSON.stringify(imagelist, null, '\t'));

/* 
D:\GenshinImpact\AssetStudioCLI\AssetStudioCLI.exe "C:\Program Files\Genshin Impact\Genshin Impact Game\GenshinImpact_Data\StreamingAssets\AssetBundles\blocks" "D:\GenshinImpact\ALL\latest" --silent --types "Texture2D" --types "Sprite" --game GI --names "(^Skill_A_.*)|(^Skill_E_.*)|(^Skill_S_.*)|(^UI_AchievementIcon_.*)|(^UI_AnimalIcon_.*)|(^UI_AvatarIcon_.*)|(^UI_Buff_Item_.*)|(^UI_Codex_Scenery_.*)|(^UI_Costume_.*)|(^UI_DungeonPic_.*)|(^UI_EquipIcon_.*)|(^UI_FlycloakIcon_.*)|(^UI_Gacha_AvatarIcon_.*)|(^UI_Gacha_AvatarImg_.*)|(^UI_Gacha_EquipIcon_.*)|(^UI_Gacha_FlycloakIcon_.*)|(^UI_GcgIcon_.*)|(^UI_Gcg_Bg_.*)|(^UI_Gcg_Buff_Common_Element_.*)|(^UI_Gcg_CardBack_.*)|(^UI_Gcg_CardFace_.*)|(^UI_Gcg_Cardtable_.*)|(^UI_Gcg_Char_.*)|(^UI_Gcg_Tag_.*)|(^UI_ItemIcon_.*)|(^UI_MonsterIcon_.*)|(^UI_NameCardIcon_.*)|(^UI_NameCardPic_.*)|(^UI_RelicIcon_.*)|(^UI_Talent_.*)"

use this one :)
D:\GenshinImpact\AssetStudioCLI\AssetStudioCLI.exe "D:\GenshinImpact\4.3\patch\blocks" "D:\GenshinImpact\4.3\patch" --silent --types "Texture2D" --types "Sprite" --game GI --names "(^Eff_UI_Talent.*)|(^Skill_A_.*)|(^Skill_E_.*)|(^Skill_S_.*)|(^MonsterSkill.*)|(^UI_AchievementIcon_.*)|(^UI_AnimalIcon_.*)|(^UI_AvatarIcon_.*)|(^UI_Buff_Item_.*)|(^UI_Codex_Scenery_.*)|(^UI_Costume_.*)|(^UI_DungeonPic_.*)|(^UI_EquipIcon_.*)|(^UI_FlycloakIcon_.*)|(^UI_Gacha_AvatarIcon_.*)|(^UI_Gacha_AvatarImg_.*)|(^UI_Gacha_EquipIcon_.*)|(^UI_Gacha_FlycloakIcon_.*)|(^UI_GcgIcon_.*)|(^UI_Gcg_Bg_.*)|(^UI_Gcg_Buff_Common_Element_.*)|(^UI_Gcg_CardBack_.*)|(^UI_Gcg_CardFace_.*)|(^UI_Gcg_Cardtable_.*)|(^UI_Gcg_Char_.*)|(^UI_Gcg_Tag_.*)|(^UI_ItemIcon_.*)|(^UI_MonsterIcon_.*)|(^UI_NameCardIcon_.*)|(^UI_NameCardPic_.*)|(^UI_RelicIcon_.*)|(^UI_Talent_.*)"

UI_AvatarIcon_Zhongli_Circle
*/

// 		--names "(^UI_.*)|(^Img.*)|(^Icon.*)|(^Eff_UI_Talent.*)|(^Skill_.*)|(^MonsterSkill.*)"

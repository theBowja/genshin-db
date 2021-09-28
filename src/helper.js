const helper = {};

/**
 * 
 */
helper.makeFilename = function(englishname) {
	englishname = englishname.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	return englishname.toLowerCase().replace(/[^a-z]/g,'');
}


/**
 * english only :(
 */
helper.substat = function(substat, subvalue) {
	if(subvalue === undefined) return;
	return substat.replace(/([^%]*)(%?)/, `$1 ${subvalue}$2`)
}

/**
 * If you're too lazy to make your own String.format function, then use this one.
 * replaces {0} etc with values. can separate with slashes
 */
helper.effect = function(effect, ...numbers) {
	if(effect === undefined || numbers.length === 0) return;

	for(let i = 0; i < numbers[0].length; i++) {
		let values = numbers.reduce((acc, curr) => {
			if(acc !== "") acc += '/';
			return acc + curr[i];
		}, "");
		effect = effect.replace(new RegExp(`\\{${i}\\}`, 'g'), values);
	}
	return effect;
}

/**
 * Enum of available formatting for formatWeaponEffect
 */
helper.WeaponFormat = {
	R1: 0,              // "When HP is above 90%, increases CRIT Rate by 14%."
	R2: 1,              // "When HP is above 90%, increases CRIT Rate by 17.5%."
	R3: 2,              // "When HP is above 90%, increases CRIT Rate by 21%."
	R4: 3,              // "When HP is above 90%, increases CRIT Rate by 24.5%."
	R5: 4,              // "When HP is above 90%, increases CRIT Rate by 28%."
	AllSlash: 5,        // "When HP is above 90%, increases CRIT Rate by 14/17.5/21/24.5/28%."
	AllSlashWSuffix: 6, // "When HP is above 90%, increases CRIT Rate by 14%/17.5%/21%/24.5%/28%."
	AllDash: 7,         // "When HP is above 90%, increases CRIT Rate by 14-28%."
	AllDashWSuffix: 8   // "When HP is above 90%, increases CRIT Rate by 14%-28%."
}

/**
 * Formats and returns the string for weapon effect.
 * weapon - weapon object as returned by genshin-db
 * formattype - the format provided by helper.WeaponFormat
 * markdownbold - boolean. whether or not to add markdown bold around variable numbers
 * Returns the string for the weapon effect at a specific refine level or all refine levels.
 * Examples: "Increases DMG against opponents affected by Hydro or Cryo by 12%."
 *           "Increases DMG against opponents affected by Hydro or Cryo by 12/15/18/21/24%."
 */
helper.formatWeaponEffect = function(weapon, formattype, markdownbold) {
	let values = [];
	let suffix;

	switch(formattype) {
		case helper.WeaponFormat.R1:
			values = weapon.r1;
			break;
		case helper.WeaponFormat.R2:
			values = weapon.r2;
			break;
		case helper.WeaponFormat.R3:
			values = weapon.r3;
			break;
		case helper.WeaponFormat.R4:
			values = weapon.r4;
			break;
		case helper.WeaponFormat.R5:
			values = weapon.r5;
			break;
		case helper.WeaponFormat.AllSlash:
			for(let i = 0; i < weapon.r1.length; i++) {
				suffix = getSuffix(weapon.r1[i]);
				if(suffix)
					values.push(`${rmLast(weapon.r1[i])}/${rmLast(weapon.r2[i])}/${rmLast(weapon.r3[i])}/${rmLast(weapon.r4[i])}/${rmLast(weapon.r5[i])}${suffix}`);
				else
					values.push(`${weapon.r1[i]}/${weapon.r2[i]}/${weapon.r3[i]}/${weapon.r4[i]}/${weapon.r5[i]}`);
			}
			break;
		case helper.WeaponFormat.AllSlashWSuffix:
			for(let i = 0; i < weapon.r1.length; i++) {
				values.push(`${weapon.r1[i]}/${weapon.r2[i]}/${weapon.r3[i]}/${weapon.r4[i]}/${weapon.r5[i]}`);
			}
			break;
		case helper.WeaponFormat.AllDash:
			for(let i = 0; i < weapon.r1.length; i++) {
				suffix = getSuffix(weapon.r1[i]);
				if(suffix)
					values.push(`${rmLast(weapon.r1[i])}-${rmLast(weapon.r5[i])}${suffix}`);
				else
					values.push(`${weapon.r1[i]}-${weapon.r5[i]}`);
			}
			break;
		case helper.WeaponFormat.AllDashWSuffix:
			for(let i = 0; i < weapon.r1.length; i++) {
				values.push(`${weapon.r1[i]}-${weapon.r5[i]}`);
			}
			break;
	}

	let effect = weapon.effect;
	for(let i = 0; i < values.length; i++) {
		effect = effect.replace(`{${i}}`, values[i]);
	}

	return effect;
}

function getSuffix(param) {
	let last = param[param.length-1];
	return isNaN(parseInt(last, 10)) ? last : undefined;
}
function rmLast(param) {
	return param.substring(0, param.length-1);
}

/*==============================================================================================*/

/**
 * attributes - the attributes object from genshin-db. for example: genshindb.talents('klee').combat1.attributes
 * talentlevel - the talent level that you wish to get the formatted labels of
 * Returns an array of labels.
 * Example: ['1-Hit DMG|72.2%', '2-Hit DMG|62.4%', ...]
 */
helper.formatTalentLabels = function(attributes, talentlevel) {
	if(!Number.isInteger(talentlevel) || !(talentlevel >= 1 && talentlevel <= 15))
		throw 'talentlevel parameter must be an integer between 1 and 15';
	// if(!attributes.labels && attributes.attributes && attributes.attributes.labels) attributes = attributes.attributes;

	let outlabels = [];

	const rx = /{(.*?)}/g;
	for(let label of attributes.labels) {
		let matches = label.matchAll(rx);

		for(let match of matches) {
			const grab = match[1]; // example: param5:F1
			const [paramnum, format] = grab.split(':');

			let value = attributes.parameters[paramnum][talentlevel-1];
			if(format === 'I') { // integer
				label = label.replace(match[0], value);
				continue;
			}
			if(format.includes('P')) // percent
				value = value*100;
			if(format.includes('F')) // float
				value = value.toFixed(format[1]);
			if(format.includes('P')) // percent
				value = value+'%';
			label = label.replace(match[0], value);
		}
		outlabels.push(label);
	}
	return outlabels;
}








module.exports = helper;
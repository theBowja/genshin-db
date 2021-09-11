const helper = {};


helper.makeFilename = function(str) {
	str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	return str.toLowerCase().replace(/[^a-z]/g,'');
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













module.exports = helper;
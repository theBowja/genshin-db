// THIS SCRIPT IMPORTS DATA IN THE import FOLDER INTO THE LIBRARY
// I made a script elsewhere that extracts what I need out of the GenshinData repo

const fs = require('fs');

if(!fs.existsSync('./import/EN')) {
	console.log('import folder doesn\'t exist');
	process.exit();
}



const fs = require('fs');

const folders = fs.readdirSync(`../../types/folders`);//.forEach(filename => {
// const folders = ['characters.d.ts'];


// console.log(folders);

for (const filename of folders) {
	let resdts = fs.readFileSync(`../../types/folders/${filename}`).toString();


	const file = extractFileName(filename);
	console.log(filename);
	const typeinterface = extractTypeInterface(resdts);
	const header = extractNameOfInterface(typeinterface);

	const template = makeDocTemplate(header, file, typeinterface);

	if (fs.existsSync(`../../docs/data/${file}.md`)) {
		let existingmd = fs.readFileSync(`../../docs/data/${file}.md`).toString();

		if (existingmd.includes('```\r\n')) { // replace existing
			const old = existingmd.substring(0, existingmd.indexOf('```\r\n')+5);
			existingmd = existingmd.replace(old, template);
			fs.writeFileSync(`../../docs/data/${file}.md`, existingmd);
		} else { // prepend


			// createNewDocs(`../../docs/data/${file}.md`, typeinterface);
		}
	} else {
		fs.writeFileSync(`../../docs/data/${file}.md`, template);
	}
}

function createNewDocs (path, typeinterface) {
	console.log('createNewDocs');
}

function writeFileIfDifferent(path, data) {
	let existing = {};
	try { existing = require(path); } catch {};
	if(JSON.stringify(existing) !== JSON.stringify(data)) {
		if(path.lastIndexOf('/') !== -1)
			fs.mkdirSync(path.substring(0, path.lastIndexOf('/')), { recursive: true });
		fs.writeFileSync(path, JSON.stringify(data, null, '\t'));
	}
}

function makeDocTemplate(header, folder, typeinterface) {
	return (`# ${header}\n\n` +
	`Search function: \`genshindb.${folder}("query", opts);\`  \n` +
	`Interactive: https://genshindb-ia.vercel.app/  \n` +
	`Web API: https://genshin-db-api.vercel.app/api/${folder}?query=query\n\n` +
	`Type:\n` + 
	`\`\`\`ts\n`).replaceAll('\n', '\r\n') +
	typeinterface + 
	(`\`\`\`\n`).replaceAll('\n', '\r\n');
}

function extractTypeInterface(text) {
	const rx = /export (.*?}[^;])/gs;
	const match = rx.exec(text);
	return match[1].replaceAll('\n\t', '\n');
}

// example: Character
function extractNameOfInterface(typeinterface) {
	return typeinterface.substring(typeinterface.indexOf(' ') + 1, typeinterface.indexOf('{') - 1);
}

// example: characters
function extractFileName(filename) {
	return filename.substring(0, filename.indexOf('.'));
}
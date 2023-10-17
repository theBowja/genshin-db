const fs = require('fs');
const path = require('path');

const from = 'D:/Workspace/Node/GenshinData-scripts/export';
const to = path.resolve(__dirname, './import');

function copyImportData() {
	fs.cpSync(from, to, { force: true, recursive: true });
}

copyImportData();
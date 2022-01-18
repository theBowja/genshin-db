# dist

This folder contains various gzips/scripts which can be used from node, web, or any javascript project.

You can choose which data to include to reduce the size of your project.

The main scripts `genshindb-none.js` and `genshindb-standard.js` contain the `genshin-db` searching api. The scripts in the `data/scripts` contain only binary data which is extracted by the main script or can be extracted manually.

The format of the name for the data scripts are: language name, a dash, and then folder name. All lowercase. For example: english-characters.

## Web

You may wish to use `genshin-db` with your React or Angular or whatever web project. The important thing is to reduce the size of script to keep browser loading times fast.


The script `genshindb-none.js` contains the searching api but with no data in it to keep it small. You can add it to your hmtl to use it:

```html
<script type='text/javascript' src='https://cdn.jsdelivr.net/gh/theBowja/genshin-db@main/dist/genshindb-none.js'></script>
<script>
console.log(GenshinDb.characters('hu tao')); // logs undefined
</script>
```

Then you can pick and [choose which data scripts](https://github.com/theBowja/genshin-db/tree/main/dist/data/scripts) to include. These data scripts will automatically add their data to the main script if it is in the browser.

```html
<script type='text/javascript' src='https://cdn.jsdelivr.net/gh/theBowja/genshin-db@main/dist/genshindb-none.js'></script>
<script type='text/javascript' src='https://cdn.jsdelivr.net/gh/theBowja/genshin-db@main/dist/data/scripts/english-characters.js'></script>
<script type='text/javascript' src='https://cdn.jsdelivr.net/gh/theBowja/genshin-db@main/dist/data/scripts/english-talents.js'></script>
<script>
console.log(GenshinDb.characters('hu tao')); // logs the data object for Hu Tao
console.log(GenshinDb.talents('hu tao')); // logs the data object for Hu Tao
</script>
```

### dynamically loading data script from web

You can load data on the fly as well with [jQuery's getScript](https://api.jquery.com/jquery.getscript/). If you don't have jQuery, then you can use the [standalone getScript](https://gist.github.com/colingourlay/7209131).

```html
<script type='text/javascript' src='https://cdn.jsdelivr.net/gh/theBowja/genshin-db@main/dist/genshindb-none.js'></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
console.log(GenshinDb.characters('hu tao')); // logs undefined
$.getScript('https://cdn.jsdelivr.net/gh/theBowja/genshin-db@main/dist/data/scripts/english-characters.js', () => {
	console.log(GenshinDb.characters('hu tao')); // logs the data object for Hu Tao
})
</script>
```

Just keep in mind not to call `getScript` for the same data script multiple times.

An alternative is to use XMLHttpRequest to get the data gzips, then manually add them via `GenshinDb.addData` method. However, you will probably get blocked by CORS so I won't write an example for this.

## Node

Easiest way to use genshin-db in your Node project is by installing with `npm install genshin-db`. Then you can access the APIs after `const genshindb = require('genshin-db')`.

However you will have to manually update your install after every new version update to get the latest data.

If this is a problem or if you have any memory constraints, then you can consider the usage methods below.

### using the webpack dist in Node

There is an option to download the main and data scripts to your Node project and use the module via `require`. Reasons for doing so may be because of memory constraints.

First, download the file `dist/genshindb-none.js` and add it to your project. This file typically won't need to get updated.

Then, download the data gzips/scripts you'll use into a folder in your project.

Then, you can use genshin-db in your project like so:

```js
const genshindb = require('./genshindb-none.js');
require('./datascripts/english-characters.js')(genshindb); // pass in genshindb to auto add the data to genshin-db

console.log(genshindb.characters('hu tao')); // logs the data object for Hu Tao
```

This will require you to keep track of updates manually.

### dynamically load data in Node

It's possible to use HTTP to dynamically load in data for genshin-db.

```js
const genshindb = require('./dist/genshindb-none.js');

https.get('https://gitcdn.link/cdn/theBowja/genshin-db/main/dist/data/gzips/english-characters.min.json.gzip', (res) => {
	let bodyChunks = []; // array of Buffer
	res.on('data', (chunk) => { bodyChunks.push(chunk); });
	res.on('end', () => {
		const body = Buffer.concat(bodyChunks);

		genshindb.addData(body);
		let searchResult = genshindb.characters('hu');
		console.log(searchResult); // logs the data object for Hu Tao
	});
}).on('error', (e) => {
	console.log('ERROR: ' + e.message);
});
```

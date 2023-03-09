/**
This script is a helper for building webpack with specified language data.

By itself, the distribution will include all languages
  npm run build
that will be output into the dist folder as genshindb.js

If you want to limit the languages packed, then append a space-separated list of language names.
For example:
  npm run build -- --languages english
will produce a distribution in the dist folder with only the English genshin data.

More examples:
  npm run build -- --languages english chinesesimplified korean japanese
  npm run build -- --languages none --folder none filename:genshindb-nodata.js
  npm run build -- --languages all --folder achievements filename:all-achievements.js --outdir dist/data/scripts

Available language names can be found in src/language.js file
*/

// This script should be called from the root directory.

const path = require('path');
const execSync = require('child_process').execSync;
const argv = require('yargs-parser')(process.argv.slice(2), {
  alias: { folder: ['folders'], language: ['languages'] },
  array: [ 'folders', 'languages' ],
  default: { folders: ['standard'], languages: ['all'], filename: 'genshindb.js', outdir: 'dist' }
});

execSync(`npm run combineData -- --folders ${argv.folders} --languages ${argv.languages}`, { stdio: [0, 1, 2] });
execSync(`npx webpack --config scripts/webpack/webpack.main.config.js --env filename=${argv.filename} --env outdir=${path.resolve(argv.outdir)}`, { stdio:[0, 1, 2] });
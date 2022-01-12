/**
This script is a helper for building webpack with specified language data.

By itself, the distribution will include all languages
  node build

If you want to limit the languages packed, then append a space-separated list of language names.
For example:
  node build english
will produce a distribution in the dist folder with only the English genshin data.

More examples:
  node build english chinesesimplified korean japanese
  node build french german

Available language names can be found in src/language.js file
*/

// this script should be called from the root directory.
// node ./webpack/build.js

const execSync = require('child_process').execSync;
const arg = process.argv.slice(2).join(' ');

execSync('node ./generate.js ' + arg, { cwd: 'src', stdio: [0, 1, 2] });
// execSync('node ./examples.js', { stdio: [0, 1, 2] });
execSync('npx webpack --config webpack/webpack.main.config.js', { stdio:[0, 1, 2] });
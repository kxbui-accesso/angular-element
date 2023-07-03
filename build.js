const fs = require('fs-extra');
const path = './dist/angular-element-app';
const concat = require('concat');
(async function build() {
  const files = [
    path + '/runtime.js',
    path + '/polyfills.js',
    path + '/main.js'
  ];
  await fs.ensureDir(path);
  await concat(files, path + '/angular-element-app.bundle.js');
})();
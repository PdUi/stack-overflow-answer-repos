const projects = require("../angular.json").projects;
const concat = require('concat');

Object.keys(projects)
      .forEach((key) => {
          if (key.startsWith('custom') && !key.endsWith('app') && key.indexOf('e2e') === -1) {
            concat([
              `./dist/${key}/runtime.js`,
              `./dist/${key}/es2015-polyfills.js`,
              `./dist/${key}/polyfills.js`,
              `./dist/${key}/scripts.js`,
              `./dist/${key}/main.js`
            ], `./dist/${key}/${key}.js`);
          }
        });

const path = require('path');
const Plugin = require('broccoli-caching-writer');
const compile = require('../lib/compile');
const walkSync = require('walk-sync');

let versionConfig = {
  version: {
    name: 'latest',
    ref: 'latest'
  }
};

module.exports = class CompileStaticPages extends Plugin {
  constructor([ pagesDir, layoutsDir, includesDir ]) {
    super([ pagesDir, layoutsDir, includesDir ], { annotation: 'compile guides' });
  }

  build() {
    let [ pagesDir, layoutsDir, includesDir ] = this.inputPaths;
    walkSync(pagesDir, { directories: false }).forEach((filepath) => {
      compile(path.join(pagesDir, filepath), layoutsDir, includesDir, versionConfig);
    });
  }
};

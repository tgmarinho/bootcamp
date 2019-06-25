const { override, addBabelPlugin } = require('customize-cra');

const rootImport = [
  'root-import',
  {
    rootPathSuffix: 'src',
  },
];

module.exports = override(addBabelPlugin(rootImport));

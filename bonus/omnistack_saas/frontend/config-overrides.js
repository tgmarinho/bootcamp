// const { injectBabelPlugin } = require('react-app-rewired');
const { addBabelPlugin, override } = require('customize-cra');

const rootImport = [
  'root-import',
  {
    rootPathPrefix: '~',
    rootPathSuffix: 'src',
  },
];

// module.exports = config => injectBabelPlugin(rootImport, config);

module.exports = override(addBabelPlugin(rootImport));

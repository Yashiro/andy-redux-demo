const path = require('path');

module.exports = function (webpackConfig, env) {
  webpackConfig.output.devtoolModuleFilenameTemplate = info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/');

  webpackConfig.resolve.alias = {
    ...webpackConfig.resolve.alias
  };

  return webpackConfig;
};
const {
  override,
  addBabelPlugins,
  fixBabelImports,
  addExternalBabelPlugins,
  addBabelPresets,
  babelInclude,
  setWebpackPublicPath,
  babelExclude,
} = require("customize-cra");

const nps = require('path')

module.exports = {
  webpack: override(
    babelInclude([
      nps.resolve('../src'),
      nps.resolve('./src'),
    ]),
    ...addBabelPlugins(
      // "transform-decorators-legacy",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-object-rest-spread",
    ),
    ...addBabelPresets(
      [
        "@babel/env",
        {
          targets: {
            browsers: ["> 1%", "last 2 versions"]
          },
          modules: 'commonjs'
        }
      ],
      "@babel/preset-flow",
      "@babel/preset-react",
    ),
    fixBabelImports(
      'antd',
      { "libraryName": "antd", "style": "css" },
    ),
    (config) => {
      config.output.publicPath = ''
      // config.output.path = nps.join(__dirname, '../www-dist')
      return config
    }
  ),

}

const {
  override,
  addBabelPlugins,
  fixBabelImports,
  addExternalBabelPlugins,
  addBabelPresets,
  babelInclude,
  addWebpackModuleRule,
  setWebpackPublicPath,
  disableEsLint,
  babelExclude
} = require('customize-cra')

const nps = require('path')

const devEnv = (...fnList) => {
  return (config) => {
    if (config.mode !== 'production') {
      return fnList.reduce((conf, fn) => fn(conf), config)
    }
    return config
  }
}

const prodEnv = (...fnList) => {
  return (config) => {
    if (config.mode === 'production') {
      return fnList.reduce((conf, fn) => fn(conf), config)
    }
    return config
  }
}

module.exports = {
  webpack: override(
    disableEsLint(),
    babelInclude([nps.resolve('../src'), nps.resolve('./src')]),
    ...addBabelPlugins(
      // "transform-decorators-legacy",
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread'
    ),
    ...addBabelPresets(
      [
        '@babel/env',
        {
          targets: {
            browsers: ['> 1%', 'last 2 versions']
          },
          modules: 'commonjs'
        }
      ],
      '@babel/preset-flow',
      '@babel/preset-react'
    ),
    fixBabelImports('antd', { libraryName: 'antd', style: 'css' }),
    (config) => {
      // console.log(config.module.rules)
      config.output.publicPath = ''
      return config
    }
  )
}

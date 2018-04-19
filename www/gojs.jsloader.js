/**
 * @file gojs.jsloader.js
 * @author Cuttle Cong
 * @date 2018/2/16
 * @description
 */
var nps = require('path')

module.exports = [
  {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    include: [
      nps.join(__dirname, '..')
    ],
    exclude: [
      /(\/)node_modules\1(core-js|babel-runtime)\1/
    ],
    query: {
      cacheDirectory: true
    }
  },
  {
    test: /\.json$/,
    loader: 'json-loader',
    include: [
      nps.join(__dirname, '..')
    ]
  },
  {
    test: /\.less$/,
    loader: 'style-loader!css-loader!less-loader',
    include: [
      nps.join(__dirname, '..')
    ]
  },
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader',
    include: [
      nps.join(__dirname, '..')
    ]
  }
]


const path = require('path')

module.exports = {
  entry: "./src/index.js",
  output: {
      path: path.join(__dirname, 'www', 'js'),
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
          test: /\.js$/,
          exclude: /(node_modules|\.tmp)/,
          loader: 'babel-loader',
          query: {
              cacheDirectory: true,
              presets: ['es2015', 'stage-0', 'react'],
              // plugins: ['transform-runtime'],
          }
      },
      {
          test: /\.jsx$/,
          exclude: /(node_modules|\.tmp)/,
          loader: 'babel-loader',
          query: {
              cacheDirectory: true,
              presets: ['es2015', 'stage-0', 'react'],
              // plugins: ['transform-runtime'],
          }
      }
    ]
  }
}

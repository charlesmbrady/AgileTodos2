const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8081,
    hot: true,
    contentBase: './dist',
    // hotOnly: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/'
      },
      '/auth': {
        target: 'http://localhost:8080'
      }
    }
  }
});

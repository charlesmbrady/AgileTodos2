const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
require('css-loader');
require('style-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attributes: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      // {
      //   test: /\.css$/,
      //   loader: 'css-loader'
      // },

      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images'
        }
      },
      {
        test: /\.(mp4|webm)$/i,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'videos'
          }
        }
      },
      {
        test: /\.pdf$/,
        use: {
          loader: 'file-loader',
          options: {
            // name: "[name].[contenthash].[ext]",
            outputPath: 'assets/docs/'
            // publicPath: "assets/docs/"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              'react',
              ['env', {
                "modules": false
              }],
              'stage-2'
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 2222
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.template.html'
    }),
    new CopyWebpackPlugin([
      { from: 'src/favicon/', to: 'favicon' }
    ]),
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('style.css')
  ]
};

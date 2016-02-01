
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: 'assert',
    publicPath: "public/",
    filename: 'bundle.js',
    chunkFilename:'[name].chunk.js'
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        loaders: ['babel-loader'],
        //include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader?minimize')
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('css-loader?minimize!less-loader')
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('app.css')
  ],
  resolve: {
    extensions: ['', '.js', '.json']
  }
};

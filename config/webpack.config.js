
module.exports = {
  entry: './src/js/app.js',
  output: {
    path: 'dist/js',
    publicPath: "public/",
    filename: '[name].bundle.js',
    chunkFilename:'[name].chunk.js'
  },
  module: {
    loaders:[
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.art$/, loader: 'raw-loader' }
    ]
  }
};

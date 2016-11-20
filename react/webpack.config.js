var htmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new htmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './src/app.js'
  ],
  module:{
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/}
    ]
  },
  output:{
    filename: 'app_bundle.js',
    path: __dirname + '/dist'
  },
  plugins: [
    HTMLWebpackPluginConfig
  ]
};


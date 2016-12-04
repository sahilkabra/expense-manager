const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new htmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './src/app.js'
  ],
  debug: true,
  devtool: 'source-map',
  resolve: {
      root: path.resolve(__dirname),
      extensions: ['', '.js', '.jsx'],
      alias : {
          src: 'src'
      }
  },
  module:{
    loaders: [
      {test: /\.jsx?$/, loaders: ['babel-loader'], exclude: /node_modules/}
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


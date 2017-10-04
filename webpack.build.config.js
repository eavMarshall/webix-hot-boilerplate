var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: "./src/index",
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].[chunkhash:8].bundle.js'
  },
  externals: {

  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My app',
      chunks: ['index'],
      template:'index.template.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(png|jpg|gif|svg)$/, loader: 'url-loader' },
      { test: /\.json?$/, loader: 'json' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
}
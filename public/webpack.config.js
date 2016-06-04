var CompressionPlugin = require("compression-webpack-plugin");
var webpack = require('webpack');
module.exports = {
  entry: {
    app: ['./index.js']
  },
  output: {
    path: './dist/',
    filename: 'build.js'
  },
  
  plugins: [
            new CompressionPlugin({
                asset: "{file}.gz",
                algorithm: "gzip",
                regExp: /\.js$|\.html$/,
                threshold: 10240,
                minRatio: 0.8
            }),

            new webpack.DefinePlugin({
                'require.specified': 'require.resolve'
            })
        ],

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/dist/,
        loader: 'babel?optional[]=runtime&loose=true'
      },
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} ,
      {test:   /\.css$/, loader: "style-loader!css-loader"},
      { test: /\.(png|woff|woff2|eot|ttf|svg)(\?.*)?$/, loader: 'url-loader?limit=100000' }
    ]
  },
  devtool: 'source-map'
}

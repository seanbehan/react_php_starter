var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/app.jsx',
  output: { path: __dirname, filename: 'public/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
  modules: [
    path.resolve('./src'),
    path.resolve('./node_modules')
  ]
},
};

var path = require('path');

var config = {
    context: __dirname + "/src",
    entry:  {
        'app': './js/index.js'
    },
    output: {
        path: "./build",
        publicPath: "./build/",
        filename: "app.js"
    },

  resolve: {
      root: __dirname + '/src',
      extensions: ['', '.js', 'jpg', '.json']
  },
  module: {
      preLoaders: [
          {
              test: /\.(js)$/,
              exclude: /node_modules/,
              loader: 'jshint-loader'

          }
      ],
      loaders: [
          {
              test: /\.js?$/,
              exclude: /(node_modules|bower_components)/,
              loaders: ['ng-annotate', 'babel?presets[]=es2015']
          },
          {
              test: /\.html$/,
              loader: 'html'
          },
          {
              test: /\.(jpe?g|png|gif|svg)$/,
              loader: 'url-loader?limit=8192&name=assets/[name].[ext]'
          },
          {
              test: /\.(scss|css)$/,
              loader: 'style!css!sass!!autoprefixer-loader?browsers=last 2 version'
          }
      ]
  }
};

module.exports = config;

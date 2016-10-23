var path = require('path'),
    webpack = require("webpack");

var node_dir = path.join(__dirname, '../node_modules/'),
    custom_js_dir = path.join(__dirname + '/src/js/');

var config = {
    context: path.join(__dirname, '/src'),
    entry:  {
        'app': './js/index.js'
    },
    output: {
        path: path.join(__dirname, '/build'),
        publicPath: "./build/",
        filename: "app.js"
    },

  resolve: {
      root:path.join(__dirname, '/src'),
      extensions: ['', '.js', 'jpg', '.json'],
      alias: {
            vmap: custom_js_dir + "jquery.vmap",
            world_map: custom_js_dir + "jquery.vmap.world",
            custom_map: custom_js_dir + "main",
            jquery: node_dir + "jquery/dist/jquery"
        }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false
          }
    })
  ],
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

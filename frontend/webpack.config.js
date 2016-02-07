var config = {
  entry: {
      'app': './src/js/index.js'
  },
  output: {
      path: './build',
      filename: '[name].js'
  },
  resolve: { alias: {} },

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
              test: /\.(jpe?g|png|gif|svg|json)$/i,
              loaders: [
                  'file?hash=sha512&digest=hex&name=./assets/[name].[ext]',
                  'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
              ]
          }
      ]
  }
};

module.exports = config;

module.exports = {
    entry: {
        'app': './src/js/index.js'
    },
    output: {
        'filename': './build/[name].js'
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
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(jpe?g|png|gif|svg|json)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=./build/assets/[name].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    }
}

module.exports = {
    entry: {
        'app': './src/js/index.js'
    },
    output: {
        'filename': './build/[name].js'
    },
    resolve: {
        root: __dirname + '/src',
        extensions: ['', '.js', 'jpg']
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel?presets[]=es2015' // 'babel-loader' is also a legal name to reference
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    }
}

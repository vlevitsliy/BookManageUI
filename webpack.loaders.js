module.exports = [
    {
        test: /\.jsx?$/,
        exclude: /(node_modules|public)/,
        loader: "babel-loader",
        query: {
            presets: ['es2015', 'stage-0', 'react']
        }
    },
    // {
    // 	test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    // 	exclude: /(node_modules)/,
    // 	loader: "file"
    // },
    // {
    // 	test: /\.(woff|woff2)$/,
    // 	exclude: /(node_modules)/,
    // 	loader: "url-loader?prefix=font/&limit=5000"
    // },
    // {
    // 	test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    // 	exclude: /(node_modules)/,
    // 	loader: "url-loader?limit=10000&mimetype=application/octet-stream"
    // },
    {
        test: /\.svg|ico|png|gif|jpg($|\?)/,
        exclude: /(node_modules)/,
        loader: "file-loader?name=[hash].[ext]&outputPath=app/images/"
    },
    {
        test: /\.svg|ico|png|gif|jpg($|\?)/,
        exclude: /src/,
        loader: "file-loader?name=[hash].[ext]&outputPath=app/images/"
    },
    {
        test: /\.css$/,
        include: /[\/\\]src[\/\\]/,
        use: [
            // { loader: 'style?sourceMap' },
            // { loader: 'css' },
            { loader: 'style-loader' },
            { loader: 'css-loader' },

        ]
        // loaders: [
        //     'style?sourceMap',
        //     'css',
        //     'style-loader',
        //     'css-loader'
        // ]
        // loader: styleExtractor.extract("style-loader", "css-loader!less-loader")
    },
];

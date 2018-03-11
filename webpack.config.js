"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var url = require("file-loader");

// const HOST = process.env.HOST || "127.0.0.1";
const HOST = "0.0.0.0";
const PORT = process.env.PORT || "8084";

// global css
// loaders.push({
//     test: /\.css$/,
//     include: /[\/\\]src[\/\\]/,
//     loaders: [
//         'style?sourceMap',
//         'css',
//         'style-loader',
//         'css-loader'
//     ]
// });

// loaders.push({
//     test: /\.(jpe?g|png|gif|svg)$/i,
//     exclude: /src/,
//     loader: "file?name=img/[name].[ext]",
// });
// loaders.push({
// 	test: /\.(jpe?g|png|gif|svg)$/i,
// 	// test: /\.svg|ico|png|gif|jpg($|\?)/,
//     exclude: /node_modules/,
//     loader: "file?name=img/[name].[ext]"
// });

module.exports = {
    entry:
        {'test/test':'./src/index.jsx'} // your app's entry point
    ,
    devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
    output: {
        path: path.join(__dirname, 'public2'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.jpg', 'svg']
    },
    module: {
        loaders
    },
    devServer: {
        proxy: [
            {
                path: [
                    '/streams'
                ],
                target: 'https://video-dev.github.io/',
                secure: false,
                rewrite: req => {
                    req.url = 'streams/x36xhzz/x36xhzz.m3u8';
                }
            },
            {
            path: [
                '/'
            ],
            target: 'http://0.0.0.0:8888',
            secure: false,
            rewrite: req => {
                req.headers.host = '0.0.0.0:8888';
            }
        },
        ],
        contentBase: "./public2",
        // do not print bundle build stats
        noInfo: true,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
};

var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, './app/main.js');
var BUILD_PATH = path.resolve(__dirname, './build');
module.exports = {
    entry: APP_PATH,
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    devServer: {
        inline: true, //实时刷新
        port: 8100
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }

}
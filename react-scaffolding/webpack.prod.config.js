/*
 * @Author: 0easy-23
 * @Date:   2018-05-29 14:20:09
 * @Last Modified by:   0easy-23
 * @Last Modified time: 2018-05-29 14:24:08
 */
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            options: {
                presets: ['env']
            }
        }, {
            test: /\.(scss|css)$/,

            use: [{
                loader: MiniCssExtractPlugin.loader
            }, {
                loader: 'css-loader',

                options: {
                    sourceMap: true
                }
            }, {
                loader: 'sass-loader',

                options: {
                    sourceMap: true
                }
            }, {
                loader: 'postcss-loader'
            }]
        }]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css", ".scss"],
    },
    plugins: [
        new UglifyJSPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkhash].css'
        }),
        new HtmlWebpackPlugin({
            title: 'demo',
            template: './index.html',
            inject: 'body'
        }),
    ],

    entry: './src/index.js',

    output: {
        filename: 'js/[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },

    mode: 'production'
}
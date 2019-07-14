const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackUtil = require('./webpack.util');

console.log(process.env.NODE_ENV)

module.exports = {
    mode: 'development',
    entry: webpackUtil.makeEntry(path.join(__dirname, '../assets/js/pages')),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {},
                },
                'css-loader',
                'sass-loader'
            ],
        }],
    },
    plugins: [
        new MiniCssExtractPlugin({
            moduleFilename: ({ name }) => `${name.replace(/js/, 'style').replace(/\.(js|css|sass|scss)/, '')}.css`
        })
    ],
}
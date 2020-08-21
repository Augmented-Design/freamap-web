const path = require('path');
const m_utils = require('./webpack-utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtracPlugin = require('mini-css-extract-plugin');

config = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.s(a|c)ss$/,
                use: [
                    MiniCssExtracPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtracPlugin()
    ],
    resolve: {
        extensions: ['.js', '.sass', '.css']
    }
};

if (!config.plugins)
    config.plugins = []
config.plugins = config.plugins.concat(m_utils.generateHtmls('./src/templates/pages'));

module.exports = config
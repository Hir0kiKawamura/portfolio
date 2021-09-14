const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const pjson = require('./package.json');

module.exports = {
    mode: 'development',
    entry: {
        'portfolio': ['./src/js/index.tsx']
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json',],
        alias: {
            'src': path.resolve(__dirname, 'src'),
        },
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            exclude: /node_module/,
            // include: [ require.resolve('@kintone/kintone-js-sdk'), ],
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["@babel/preset-env", {
                                targets: {
                                    node: "current"
                                }
                            }],
                            '@babel/preset-react',
                        ]
                    }
                },
                { loader: 'ts-loader' }
            ],
        },
        {
            test: /\.js$/,
            exclude: /node_module/,
            // include: [ require.resolve('@kintone/kintone-js-sdk'), ],
            use: [
                { loader: 'babel-loader', },
            ],
        },
        {
            test: /\.css$/,
            use: [
                { loader: 'style-loader', },
                { loader: 'css-loader', },
            ],
        },
        ],
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: "custom html",
            template: path.resolve(__dirname, "src/public/index.html"),
        })
    ],
};
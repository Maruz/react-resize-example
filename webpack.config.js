const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const assign = require('lodash/assign');

module.exports = () => {
    const common = {
        context: path.resolve(__dirname, 'src'),
        devtool: 'cheap-module-source-map',
        entry: ['babel-polyfill', './main.jsx'],
        output: {
            chunkFilename: 'js/[name].js',
            filename: 'js/[name].js',
            path: path.resolve(__dirname, 'public'),
            publicPath: '/',
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    include: [
                        path.resolve(__dirname, 'src'),
                    ],
                    use: 'babel-loader',
                },
                {
                    test: /\.css$/,
                    include: [
                        path.resolve(__dirname, 'src'),
                    ],
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                localIdentName: '[local]--[hash:base64:5]',
                                modules: true,
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.scss$/,
                    include: [
                        path.resolve(__dirname, 'node_modules'),
                        path.resolve(__dirname, 'src'),
                    ],
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [
                                    path.resolve(__dirname, 'node_modules'),
                                ],
                                sourceMap: true,
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'assets', 'index.html'),
                hash: true
            })
        ],
        resolve: {
            extensions: ['.js', '.jsx'],
        },
    };

    const dev = assign({}, common, {
        devtool: 'cheap-module-eval-source-map',
    });

    const prod = assign({}, common, {

    });

    const stage = assign({}, common, {

    });

    return dev;
};

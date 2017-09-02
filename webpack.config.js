const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    devtool: 'cheap-module-eval-source-map',
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

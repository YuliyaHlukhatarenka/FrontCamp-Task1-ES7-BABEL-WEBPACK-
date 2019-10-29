const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        polyfill: ['./node_modules/core-js/es/promise/index.js'],
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(process.cwd(), 'dist'),
        compress: true,
        port: 9001
    },
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: '[name].js',
        chunkFilename: 'chunk-[id].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: ['babel-loader'],
            },
            {
                test: /\.html$/, loader: 'html-loader',
            },
            {
                test: /\.css$/, loader: ['style-loader', 'css-loader'],
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' })
    ]
}
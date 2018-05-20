var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    mode: "development",
    entry: SRC_DIR + "/index.js",
    output: {
        path: DIST_DIR,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: SRC_DIR, //+ "/css/",
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                include: SRC_DIR,
                exclude: "/node_modules/",
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
            },
            {
              test: /\.properties$/,
              loader: 'i18n-loader',
              options: {
                locales: [
                    "it",
                    "en",
                    "es"
                ]
              }
            }
        ]
    },
    resolve: {
        alias: {
            "modules": "src/modules"
        }
    },
    context: __dirname,
    target: "web",
    devServer: {
        hot: true,
    },
    plugins: [
    new HtmlWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;
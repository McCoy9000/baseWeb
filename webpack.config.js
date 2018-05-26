var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
var RES_DIR = path.resolve(__dirname, "resources");

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
                include: SRC_DIR,
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
                include: RES_DIR,
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                include: RES_DIR,
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
            },
            {
                test: /\.lang\.json$/,
                include: RES_DIR,
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
            "modules": SRC_DIR + "/modules"
        }
    },
    context: __dirname,
    target: "web",
    watch: true,
    devServer: {
        contentBase: DIST_DIR,
        watchContentBase: true,
        port: 9000,
        compress: true,
        hot: true
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: SRC_DIR + '/template.html'
      }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var GoogleFontsPlugin = require('google-fonts-webpack-plugin')

var DIST_DIR = path.resolve(__dirname, 'dist')
var SRC_DIR = path.resolve(__dirname, 'src')
var RES_DIR = path.resolve(__dirname, 'src/resources')

var config = {
  mode: 'development',
  entry: SRC_DIR + '/index.js',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
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
        exclude: '/node_modules/',
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif|eot|ttf|woff|woff2)$/,
        include: RES_DIR,
        loader: 'file-loader'
      },
      {
        test: /\.lang\.json$/,
        include: RES_DIR,
        loader: 'i18n-loader',
        options: {
          locales: [
            'it',
            'en',
            'es'
          ]
        }
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app')
    ],
    alias: {
      'js': SRC_DIR + '/js',
      'components': SRC_DIR + '/js/components',
      'css': SRC_DIR + '/css',
      'images': RES_DIR + '/images',
      'fonts': RES_DIR + '/fonts',
      'texts': RES_DIR + '/texts'
    }
  },
  context: __dirname,
  target: 'web',
  watch: true,
  devServer: {
    contentBase: DIST_DIR,
    watchContentBase: true,
    port: 9000,
    compress: true,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: SRC_DIR + '/template.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      'React': 'react',
      'ReactDOM': 'react-dom',
      '_': 'lodash',
      'axios': 'axios',
      'FormattedMessage': 'react-intl'
    }),
    new GoogleFontsPlugin({
      fonts: [
        { family: 'Slabo 27px' }
      ]
    })
  ]
}

module.exports = config

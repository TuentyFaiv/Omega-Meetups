const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const dev = (process.env.NODE_ENV !== 'production');

module.exports = {
  entry: './src/logic/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: dev ? 'js/[name].js' : 'js/[name].[hash].js',
    publicPath: path.resolve(__dirname, '/')
  },
  devtool: dev ? "cheap-source-map" : "hidden-source-map",
  devServer: {
    port: 3000,
    publicPath: '/',
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  },
  optimization: {
    minimizer: dev ? [] : [new TerserWebpackPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'raw-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'node_modules')]
              }
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
            options: {
              hmr: true
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: dev ? 'assets/images/[name].[ext]' : 'assets/images/[hash].[ext]'
          }
        }
      },
      {
        test: /\.ttf$/,
        use: {
          loader: 'file-loader',
          options: {
            name: dev ? 'assets/fonts/[name].[ext]' : 'assets/fonts/[hash].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/interface/containers/index.pug')
    }),
    new MiniCSSExtractPlugin({
      filename: dev ? 'css/main.css' : 'css/main.[hash].css'
    })
  ]
}
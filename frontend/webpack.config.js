const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

const envVars = dotenv.config().parsed;

module.exports = (env) => ({
  mode: env === 'prod' ? 'production' : 'development',

  entry: './src/index',

  output: {
    path: path.resolve('../backend/public/app'),
    filename: '[name].[hash].js',
    publicPath: '/app',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(tsx?)|(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(
        process.env.API_URL || (envVars && envVars.API_URL)
      ),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],

  devServer: {
    port: 5001,
    historyApiFallback: true,
    publicPath: '/app',
  },
});

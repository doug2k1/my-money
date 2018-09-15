const path = require('path');

module.exports = env => ({
  mode: env === 'prod' ? 'production' : 'development',

  entry: './src/index',

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.(tsx?)|(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    ]
  }
});

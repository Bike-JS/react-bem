const path = require('path');

const DIST = path.join(__dirname, 'dist');

module.exports = {
  mode: 'production',
  entry: './lib/index.js',
  output: {
    path: DIST,
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  devtool: 'source-map',
  externals: {
    'react': 'react'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              targets: {
                node: 'current'
              }
            }],
            '@babel/preset-react'
          ],
          plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
          ]
        },
      },
    ]
  }
};

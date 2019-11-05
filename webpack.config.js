const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/js/index.js',
    './src/scss/style.scss',
  ],
  output: {
    filename: './js/bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src/js'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env'],
          ],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    },
    {
      test: /\.(sass|scss)$/,
      include: path.resolve(__dirname, 'src/scss'),
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {},
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          url: false,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          sourceMap: true,
          plugins: () => [
            require('cssnano')({
              preset: ['default', {
                discardComments: {
                  removeAll: true,
                },
              }],
            }),
          ],
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
      ],
    },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/style.bundle.css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './index.html'),
      inject: false,
    }),
  ],
};

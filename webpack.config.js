const path = require('path');
const crypto = require('crypto');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_HASH = crypto.randomBytes(8).toString('hex');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash:8].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        minifyCSS: true,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'sw.js',
          to: 'sw.js',
          transform(content) {
            return content.toString().replace('__BUILD_HASH__', BUILD_HASH);
          },
        },
        { from: 'manifest.json', to: 'manifest.json' },
        { from: 'icon.svg', to: 'icon.svg' },
        { from: 'icon-192.png', to: 'icon-192.png' },
        { from: 'icon-512.png', to: 'icon-512.png' },
      ],
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({ extractComments: false }),
      new CssMinimizerPlugin(),
    ],
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    proxy: [
      {
        context: ['/api', '/env.js'],
        target: 'http://localhost:3001',
      },
    ],
  },
  performance: {
    hints: false,
  },
};

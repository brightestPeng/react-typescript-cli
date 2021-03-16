import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Webpackbar from 'webpackbar';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Options as HtmlMiniOptions } from 'html-minifier';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import { resolve } from 'path';

import config from '../utils/config';

const getCssLoaders = (importLoaders: number) => [
  config.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      modules: false,
      sourceMap: true,
      importLoaders,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: true,
    },
  },
];

// 压缩html配置
const htmlMiniOptions: HtmlMiniOptions = {
  collapseWhitespace: true,
  keepClosingSlash: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
};

const commonConfig: Configuration = {
  entry: ['react-hot-loader/babel', config.entryPath],
  output: {
    filename: 'js/[name].[fullhash:8].js',
    path: config.buildPath,
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: getCssLoaders(0),
      },
      {
        test: /\.less/,
        use: [...getCssLoaders(2), 'less-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 小于8K,转化为base64
              limit: 8192,
              name: '[name]-[contenthash:8].[ext]',
              outputPath: 'imgs',
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[contenthash:8].[ext]',
              outputPath: 'fonts',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.json', '.js'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new Webpackbar({
      name: 'react-typescript-cli',
      color: 'green',
    }),
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      minify: config.isDev ? false : htmlMiniOptions,
      template: `${config.basePath}/public/index.html`,
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: config.basePath,
          from: 'public',
          to: '../build',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        memoryLimit: 1024,
        configFile: resolve(config.basePath, './src/tsconfig.json'),
      },
    }),
  ],
};

export default commonConfig;

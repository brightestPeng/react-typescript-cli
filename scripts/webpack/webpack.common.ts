import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import config from '../utils/config';

const getCssLoaders = (importLoaders: number) => [
  {
    loader: 'style-loader',
  },
  {
    loader: 'css-loader',
    options: {
      module: false,
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

const commonConfig: Configuration = {
  entry: ['react-hot-loader/patch', config.entryPath],
  output: {
    filename: '[name].[chunkhash:8].js',
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
        use: getCssLoaders(1),
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
    new HtmlWebpackPlugin({
      template: `${config.basePath}/public/index.html`,
    }),
  ],
};

export default commonConfig;

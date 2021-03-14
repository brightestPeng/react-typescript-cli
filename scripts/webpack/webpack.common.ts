import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import config from '../utils/config';

const commonConfig: Configuration = {
  entry: config.entryPath,
  output: {
    filename: '[name].[chunkhash:8].js',
    path: config.buildPath,
  },
  module: {
    rules: [
      {
        test: /\(tsx?)/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${config.basePath}/public/index.html`,
    }),
  ],
};

export default commonConfig;

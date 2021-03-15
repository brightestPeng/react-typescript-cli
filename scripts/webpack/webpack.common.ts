import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import config from '../utils/config';

const commonConfig: Configuration = {
  entry: ['webpack-hot-middleware/client', config.entryPath],
  output: {
    filename: '[name].[chunkhash:8].js',
    path: config.buildPath,
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.json','.js'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${config.basePath}/public/index.html`,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

export default commonConfig;

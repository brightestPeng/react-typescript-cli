import merge from 'webpack-merge';
import webpack from 'webpack';

import common from './webpack.common';

const devConfig = merge(common, {
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
});

(devConfig.entry as string[]).push('webpack-hot-middleware/client');

export default devConfig;

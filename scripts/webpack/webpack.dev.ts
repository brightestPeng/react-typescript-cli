import merge from 'webpack-merge';

import common from './webpack.common';

const devConfig = merge(common, {
  mode: 'development',
});

export default devConfig;

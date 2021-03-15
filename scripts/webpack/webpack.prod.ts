import merge from 'webpack-merge';

import common from './webpack.common';

const prodConfig = merge(common, {
  mode: 'production',
});

export default prodConfig;

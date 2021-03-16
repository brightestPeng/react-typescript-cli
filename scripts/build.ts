import webpack from 'webpack';

import webpackConfig from './webpack/webpack.prod';

function build() {
  webpack(webpackConfig, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

build();

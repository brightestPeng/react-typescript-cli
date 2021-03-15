import webpack from 'webpack';

import webpackConfig from './webpack/webpack.prod';

function build() {
  webpack(webpackConfig, (err) => {
    console.log(err, '错误');
  });

  // console.log(compiler.options,"编译文件");
  // compiler.run((error) => {
  //   if (error) {
  //     console.error(error);
  //     return;
  //   }

  //   // const analyzeStatsOpts = {
  //   //   preset: 'normal',
  //   //   colors: true,
  //   // };

  //   // console.log(stats.toString(ENABLE_ANALYZE ? analyzeStatsOpts : 'minimal'));
  // });
}

build();

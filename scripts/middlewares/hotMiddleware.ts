import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import { Compiler } from 'webpack';

import webpackConfig from '../webpack/webpack.dev';

const middlewares = (compiler: Compiler) => {
  // 配置输出目录
  const devMiddlewareOptions: webpackDevMiddleware.Options = {
    publicPath: webpackConfig.output?.publicPath as string,
  };
  // 配置热加载
  const hotMiddlewareOptions: webpackHotMiddleware.MiddlewareOptions = {
    path: '/__webpack_hmr',
    heartbeat: 2000,
  };

  return [
    webpackDevMiddleware(compiler, devMiddlewareOptions),
    webpackHotMiddleware(compiler, hotMiddlewareOptions),
  ];
};

export default middlewares;

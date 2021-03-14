import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import { Compiler } from 'webpack';

import webpackConfig from '../webpack/webpack.dev';

const middlewares = (compiler: Compiler) => {
  const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output?.publicPath as string,
  });

  const hotMiddleware = webpackHotMiddleware(compiler,{
    
  });

  return [hotMiddleware,devMiddleware];
};

export default middlewares;

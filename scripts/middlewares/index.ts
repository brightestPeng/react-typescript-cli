import { Express } from 'express';
import { Compiler } from 'webpack';

import proxy from './proxyMiddleware';
import middlewares from './hotMiddleware';

const steupMiddlewares = (server: Express, complier: Compiler) => {
  // 配置代理
  proxy(server);
  // 热加载  server => express
  server.use(middlewares(complier));
};

export default steupMiddlewares;

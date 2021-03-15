import { Express } from 'express';
import { Compiler } from 'webpack';

import proxy from './proxyMiddleware';
import hotMiddleware from './hotMiddleware';

const steupMiddlewares = (server: Express, complier: Compiler) => {
  // 反向代理
  proxy(server);

  // 热加载
  server.use(hotMiddleware(complier));
};

export default steupMiddlewares;

import { Express } from 'express';
import { Compiler } from 'webpack';

import proxy from './proxyMiddleware';

const steupMiddlewares = (
  server: Express,
  complier: Compiler,
) => {
  // 反向代理
  proxy(server);

  // 热加载
};

export default steupMiddlewares;

import { createProxyMiddleware } from 'http-proxy-middleware';
import { Express } from 'express';

import config, {
  IPorxyOptions,
} from '../utils/config';

const proxy = (server: Express): void => {
  config.proxy.forEach(
    ({ url, ...args }: IPorxyOptions) => {
      // 打印地址
      console.log(
        `proxy ${url} -> ${args.target}`,
      );
      server.use(
        url,
        createProxyMiddleware(args),
      );
    },
  );
};

export default proxy;

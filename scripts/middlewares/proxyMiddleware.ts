import { createProxyMiddleware } from 'http-proxy-middleware';
import { Express } from 'express';

import config from '../utils/config';
import { IPorxyOptions } from '../utils/proxy';

const proxy = (server: Express): void => {
  config.proxy.forEach(({ url, ...args }: IPorxyOptions) => {
    server.use(url, createProxyMiddleware(args));
  });
};

export default proxy;

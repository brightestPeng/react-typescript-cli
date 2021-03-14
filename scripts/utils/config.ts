import path from 'path';
import { Options } from 'http-proxy-middleware';

const basePath = path.resolve(
  __dirname,
  '../../',
);

export interface IPorxyOptions extends Options {
  url: string;
}

const proxy: Array<IPorxyOptions> = [
  {
    url: '/api',
    target: 'wwww.baidu.com',
    changeOrigin: true,
  },
];

export default {
  host: '127.0.0.1',
  port: [3000, 8080],
  basePath,
  entryPath: `${basePath}/src`,
  buildPath: `${basePath}/build`,
  proxy,
};

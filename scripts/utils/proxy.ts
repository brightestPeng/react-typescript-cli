import { Options } from 'http-proxy-middleware';

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

export default proxy;

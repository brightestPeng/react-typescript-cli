import express, { Express } from 'express';
import getPort from 'get-port';
import webpack, { Compiler } from 'webpack';
import yargs from 'yargs';
import chalk from 'chalk';

import config from './utils/config';

import webpackDevConfig from './webpack/webpack.dev';

import steupMiddlewares from './middlewares';
import OpenBrowserPlugin from './plugins/openBrowser';

async function start() {
  const app: Express = express();
  // 获取未被占用的端口
  const port = await getPort({ host: config.host, port: config.port });
  const url = `http://${config.host}:${port}`;

  // 是否打开浏览器
  if (yargs.argv.open) {
    webpackDevConfig.plugins?.push(new OpenBrowserPlugin({ url }));
  }

  // 调用wepack函数，返回Compiler对象
  const compiler: Compiler = webpack(webpackDevConfig);
  // 加载中间件
  steupMiddlewares(app, compiler);
  // 启动服务
  app.listen(port, config.host, () => {
    console.log(`listen on ${chalk.green(url)}`);
  });
}
start();

import express, { Express } from 'express';
import getPort from 'get-port';
import webpack, { Compiler } from 'webpack';
import OpenBrowserPlugin from 'open-browser-webpack-plugin';
import chalk from 'chalk';

import config from './utils/config';
import webpackDevConfig from './webpack/webpack.dev';

async function start() {
  const app: Express = express();
  const port = await getPort({
    host: config.host,
    port: config.port,
  });
  const url = `http://${config.host}:${port}`;

  webpackDevConfig.plugins?.concat(
    new OpenBrowserPlugin({
      url,
    }),
  );

  const compiler: Compiler = webpack(
    webpackDevConfig,
  );

  app.listen(port, config.host, () => {
    console.log(`listen on ${chalk.green(url)}`);
  });
}

start();

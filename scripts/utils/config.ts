import path from 'path';
import proxy from './proxy';

const basePath = path.resolve(__dirname, '../../');

const isDev = process.env.NODE_ENV === 'development';

export default {
  host: '127.0.0.1',
  port: [3000, 8080],
  basePath,
  entryPath: path.resolve(basePath, 'src/main.tsx'),
  buildPath: path.resolve(basePath, 'build'),
  proxy,
  isDev,
};

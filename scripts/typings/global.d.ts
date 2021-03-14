declare module 'open-browser-webpack-plugin' {
  import { Compiler } from 'webpack';

  interface OpenBrowserOptions {
    url: string;
    browser?: string;
    delay?: number;
    ignoreErrors?: boolean;
  }

  class OpenBrowserWebpackPlugin {
    constructor(options: OpenBrowserOptions);
    apply(compiler: Compiler): void;
  }

  export = OpenBrowserWebpackPlugin;
}

declare module 'open-browser-webpack-plugin' {
  import { WebpackPluginInstance, Compiler } from 'webpack';

  interface OpenBrowserOptions {
    url: string;
    delay?: number;
    browser?: string;
    ignoreErrors?: boolean;
  }

  class OpenBrowserPlugin implements WebpackPluginInstance {
    option: OpenBrowserOptions;
    constructor(parameters: OpenBrowserOptions);
    apply(compiler: Compiler): void;
  }

  export = OpenBrowserPlugin;
}

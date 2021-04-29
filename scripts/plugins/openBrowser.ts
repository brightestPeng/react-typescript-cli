import { Compiler, Stats, WebpackPluginInstance } from 'webpack';
import open from 'open';

export interface OpenBrowserOptions {
  url: string;
  delay?: number;
}

class OpenBrowserPlugin implements WebpackPluginInstance {
  private open = false;
  protected options: OpenBrowserOptions;
  constructor(options: OpenBrowserOptions) {
    this.options = options;
  }
  apply(compiler: Compiler): void {
    const handler = (stats: Stats) => {
      this.open = true;
      if (this.options.url && !stats.hasErrors()) {
        if (this.options.delay) {
          setTimeout(() => {
            open(this.options.url);
          }, this.options.delay);
        } else {
          open(this.options.url);
        }
      }
    };
    // 编译完成打开浏览器
    compiler.hooks.done.tap('open-browser-plugin', (stats: Stats) => !this.open && handler(stats));
  }
}

export default OpenBrowserPlugin;

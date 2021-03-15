import { Compiler, Stats } from 'webpack';
import open from 'open';

export interface OpenBrowserOptions {
  url: string;
  delay?: number;
}

class OpenBrowserPlugin {
  private isRun = false;
  protected options: OpenBrowserOptions;
  constructor(options: OpenBrowserOptions) {
    this.options = options;
  }

  apply(compiler: Compiler): void {
    const handler = (stats: Stats) => {
      this.isRun = true;

      // 如果编译不报错,存在url,自动打开浏览器
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

    compiler.hooks.afterPlugins.tap('trest', (stats: Compiler) => {
      console.log(stats);
    });

    compiler.hooks.done.tap(
      'open-browser-plugin',
      (stats: Stats) => !this.isRun && handler(stats),
    );
  }
}

export default OpenBrowserPlugin;

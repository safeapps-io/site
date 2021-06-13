const { config } = require('dotenv-flow');

config(process.env.STAGE ? { node_env: 'stage' } : undefined);

const sveltePreprocess = require('svelte-preprocess'),
  { mdsvex } = require('mdsvex'),
  path = require('path'),
  static = require('@sveltejs/adapter-static');

const extensions = ['.svelte', '.svx'];
module.exports = {
  kit: {
    adapter: static(),
    vite: () => ({
      define: {
        'process.env.ROOT_DOMAIN': JSON.stringify(process.env.ROOT_DOMAIN),
      },
      resolve: {
        alias: {
          $components: path.resolve('src/components'),
          $core: path.resolve('src/core'),
          $static: path.resolve('static/static'),
          $utils: path.resolve('src/utils'),
        },
        dedupe: ['svelte'],
      },
    }),
  },
  extensions,
  preprocess: [
    sveltePreprocess({
      sourceMap: true,
      defaults: {
        script: 'typescript',
        /**
         * For now it is meaningless, because we still need to add lang='scss' to every component.
         * Reason: https://github.com/sveltejs/language-tools/issues/747
         *
         * But it is still a little simpler to remember we always have scss everywhere.
         */
        style: 'scss',
      },
      postcss: true,
      scss: {
        prependData: `@import 'src/styles/importable';`,
      },
    }),
    mdsvex({ extensions }),
  ],
};

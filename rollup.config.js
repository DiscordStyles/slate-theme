import * as path from "path";
import { createRollupConfigs } from "./scripts/base.config.js";
import alias from "@rollup/plugin-alias";
import scss from "rollup-plugin-scss";

const production = !process.env.ROLLUP_WATCH;

export const config = {
  staticDir: "static",
  distDir: "dist",
  buildDir: `dist/build`,
  serve: !production,
  production,
  rollupWrapper: (rollup) => {
    rollup.plugins = [
      ...rollup.plugins,
      scss({
        watch: "scss",
        output: "static/css/app.css",
      }),
      alias({
        entries: [{ find: "@", replacement: path.resolve("src") }],
      }),
    ];
  },
  svelteWrapper: (svelte) => {},
  swWrapper: (worker) => worker,
};

const configs = createRollupConfigs(config);

export default configs;

/**
  Wrappers can either mutate or return a config

  wrapper example 1
  svelteWrapper: (cfg, ctx) => {
    cfg.preprocess: mdsvex({ extension: '.md' }),
  }

  wrapper example 2
  rollupWrapper: cfg => {
    cfg.plugins = [...cfg.plugins, myPlugin()]
    return cfg
  }
*/


import type { Configuration as WebpackConfiguration } from "webpack";
import buildDevServer from "./buildDevServer";
import buildLoaders from "./buildLoaders";
import buildPlugins from "./buildPlugins";
import buildResolvers from "./buildResolvers";
import { BuildOptions } from "./types/types";


export function buildWebpack(options: BuildOptions): WebpackConfiguration {
  const { mode, port, paths } = options;

  const isDev = mode === "development";

  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? "inline-source-map" : false,
    devServer: isDev ? buildDevServer(options) : undefined,
    plugins: buildPlugins(options),
  };
}

import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin, { Configuration } from "mini-css-extract-plugin";
import { ProgressPlugin } from "webpack";

import { BuildOptions } from "./types/types";

export type Mode = "development" | "production" | "none";

function buildPlugins({mode,paths}: BuildOptions): Configuration["plugins"] {
  
  const isDev = mode === "development";
  const isProd = mode === "production";

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ];

  if (isDev) {
    plugins.push(new ProgressPlugin());
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      })
    );
  }

  return plugins;
}

export default buildPlugins;

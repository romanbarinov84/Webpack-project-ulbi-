import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin, { Configuration } from "mini-css-extract-plugin";
import { DefinePlugin, ProgressPlugin } from "webpack";
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
import { BuildOptions } from "./types/types";

export type Mode = "development" | "production" | "none";

function buildPlugins({ mode, paths ,analyzer,platform}: BuildOptions): Configuration["plugins"] {
  const isDev = mode === "development";
  const isProd = mode === "production";

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new DefinePlugin({
      __PLATFORM__ : JSON.stringify(platform),
    })
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

  if(analyzer){
     plugins.push(
      new BundleAnalyzerPlugin()
    )
  }

  return plugins;
}

export default buildPlugins;

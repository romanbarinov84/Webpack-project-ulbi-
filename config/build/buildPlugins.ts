import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin, { Configuration } from "mini-css-extract-plugin";
import { DefinePlugin, ProgressPlugin } from "webpack";
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
import { BuildOptions } from "./types/types";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';


const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

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
    }),
    new ForkTsCheckerWebpackPlugin()
  ];

  if (isDev) {
    plugins.push(new ProgressPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
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

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";


type Mode = "development" | "production" | "none";



function buildLoaders(options:BuildOptions): ModuleOptions["rules"] {
    const mode: Mode = options.mode ?? "development";
    const isDev = mode === "development";

    const scssLoaders =  {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader",
      ],
    }

    const tsLoaders = {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    }


  return [
     scssLoaders,
     tsLoaders,
   
  ];
}

export default buildLoaders;

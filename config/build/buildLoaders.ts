import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
     const isDev = options.mode === "development";

     const scssLoader = {
                  test: /\.s[ac]ss$/i,
                  use: [
                    // Creates `style` nodes from JS strings
                    isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                  ],
                };

                const tsLoader = {
                  test: /\.tsx?$/, //файлы с расширением .ts или .tsx
                  use: "ts-loader", //используем ts-loader для обработки этих файлов
                  exclude: /node_modules/, //исключаем папку node_modules
                };
    return [
        scssLoader,
              tsLoader,
    ]
  }        

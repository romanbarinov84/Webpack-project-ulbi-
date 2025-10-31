import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import { env } from 'process';
import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';



export function buildWebpack(): webpack.Configuration {
    const isDev = env.mode === "development";
  return {
    mode: (env.mode as "development" | "production" | "none") ?? "development",
    entry: path.resolve(__dirname, "src", "index.tsx"),

    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
              isDev ? "style-loader" :  MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.tsx?$/, //файлы с расширением .ts или .tsx
          use: "ts-loader", //используем ts-loader для обработки этих файлов
          exclude: /node_modules/, //исключаем папку node_modules
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"], //автоматическое разрешение расширений файлов
    },
    devtool: isDev ? "inline-source-map" : false, //для удобства отладки
    devServer: isDev
      ? 
         buildDevServer()
        
      : undefined,

    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: [
       new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
       isDev && new webpack.ProgressPlugin(),
      !isDev && new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      })
    ],
  };// webpack configuration code
}
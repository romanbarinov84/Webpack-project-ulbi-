import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

type Mode = "development" | "production" | "none";

function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const mode: Mode = options.mode ?? "development";
  const isDev = mode === "development";

  const scssModulesLoaders = {
    test: /\.module\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  // --- Обычные SCSS ---
  const scssLoaders = {
    test: /\.(sa|sc|c)ss$/,
    exclude: /\.module\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader",
    ],
  };

  // --- TypeScript ---
  const tsLoaders = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [scssModulesLoaders, scssLoaders, tsLoaders];
}

export default buildLoaders;

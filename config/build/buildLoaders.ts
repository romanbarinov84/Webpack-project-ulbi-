import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import  ReactRefreshTypeScript  from "react-refresh-typescript";
import buildBabelLoader from "./babel/buildBabelLoader";


type Mode = "development" | "production" | "none";

function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const mode: Mode = options.mode ?? "development";
  const isDev = mode === "development";

  const assetLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }

  const assetLoaderImages = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }    
  
  const svgrLoader = {
  test: /\.svg$/,
  use: [
    {
      loader:"@svgr/webpack",
      options: {
        icon:true
      }
    }
  ],
}    

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
    exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
              }),
            }
          }
        ]
      }


      const babelLoader = buildBabelLoader(options)

  return [assetLoader,assetLoaderImages,svgrLoader , scssModulesLoaders, scssLoaders, babelLoader];
}

export default buildLoaders;

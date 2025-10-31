
import webpack from "webpack";
import "webpack-dev-server";
import { buildWebpack } from "./config/build/buildWebpack";

type Mode = "development" | "production" | "none";

interface EnvVariables {
  mode?: Mode;
  port?: number;
}

export default (env: EnvVariables) => {
  

  const config: webpack.Configuration = buildWebpack();

  return config;
};

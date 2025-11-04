import { env } from "process"
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

function buildDevServer(options:BuildOptions): DevServerConfiguration {
  return {
            port:options.port ?? 3000,
            open: true,
            hot: true,
          } 
   
  
}

export default buildDevServer
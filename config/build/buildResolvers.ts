import { Configuration } from "webpack"
import { BuildOptions } from "./types/types"


function buildResolvers(options: BuildOptions): Configuration["resolve"] {
  return {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    }
}

export default buildResolvers
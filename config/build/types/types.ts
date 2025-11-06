export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  
}

 export type BuildMode = "development" | "production" | "none";

export interface BuildOptions {

  mode: BuildMode;
  port: number;
  paths: BuildPaths;
  analyzer?: boolean;
}
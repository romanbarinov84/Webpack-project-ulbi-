export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
}

 export type BuildMode = "development" | "production" | "none";
 export type BuildPlatform = "mobile" | "desktop";

export interface BuildOptions {

  mode: BuildMode;
  port: number;
  paths: BuildPaths;
  platform:BuildPlatform;
  analyzer?: boolean;
}
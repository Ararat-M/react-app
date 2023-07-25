import path from "path";
import webpack from "webpack";
import buildLoaders from "./config/build/buildLoaders";
import buildPlugins from "./config/build/buildPlugins";
import buildResolve from "./config/build/buildResolve";

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    clean: true
  },
  module: {
    rules: buildLoaders(),
  },
  resolve: buildResolve(),
  plugins: buildPlugins()
}

export default config;
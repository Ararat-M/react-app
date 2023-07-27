import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";


export default function buildLoaders(isDev: boolean): RuleSetRule[] {
  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\.scss/,
            localIdentName: isDev 
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]"
          },
        }
      },
      "sass-loader",
    ],
  }

  const typeScriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    typeScriptLoader,
    sassLoader
  ]
}
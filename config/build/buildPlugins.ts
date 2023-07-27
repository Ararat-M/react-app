import { WebpackPluginInstance, ProgressPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default function buildPlugins(): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: './public/index.html' 
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin()
  ]
}

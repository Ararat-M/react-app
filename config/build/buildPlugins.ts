import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export default function buildPlugins(): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: './public/index.html' 
    }),
    new webpack.ProgressPlugin()
  ]
}

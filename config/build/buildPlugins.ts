import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default function buildPlugins(): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: './public/index.html' 
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin()
  ]
}

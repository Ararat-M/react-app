import { type WebpackPluginInstance, ProgressPlugin, HotModuleReplacementPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import BundleAnalyzer from "webpack-bundle-analyzer";

export default function buildPlugins(isDev: boolean, isAnalyze: boolean): WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin()
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new HotModuleReplacementPlugin());
  }

  if (isAnalyze) {
    plugins.push(new BundleAnalyzer.BundleAnalyzerPlugin({
      openAnalyzer: true
    }));
  }

  return plugins;
}

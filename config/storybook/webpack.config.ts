import type webpack from "webpack";
import path from "path";
import { styleLoader } from "../build/loaders/styleLoader";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { type RuleSetRule } from "webpack";

export default ({ config }: { config: webpack.Configuration }) => {
  config.resolve?.modules?.push(path.resolve(__dirname, "..", "..", "src"));

  config.resolve?.extensions?.push(".ts", ".tsx");

  if (config.module === undefined) return;

  config.module.rules?.push(styleLoader(true));

  config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
    // eslint-disable-next-line @typescript-eslint/prefer-includes
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules?.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"]
  });

  config.plugins?.push(new MiniCssExtractPlugin());

  return config;
};

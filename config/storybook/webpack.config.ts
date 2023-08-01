import webpack from 'webpack';
import path from 'path';
import { styleLoader } from '../build/loaders/styleLoader';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default ({ config }: {config: webpack.Configuration}) => {
    config.resolve?.modules?.push(path.resolve(__dirname, '..', '..', 'src'));

    config.module?.rules?.push(styleLoader(true))
    config.plugins?.push(new MiniCssExtractPlugin())

    return config;
};

import { type Preview } from "@storybook/react";
import '../../src/app/styles/index.scss';
import { Theme } from "app/providers/themeProvider";
import { ThemeDecorator } from "shared/config/storybookDecorator/ThemeDecorator";
import { StyleDecorator } from "shared/config/storybookDecorator/StyleDecorator";

const preview: Preview = {
  decorators:  [
    StyleDecorator(),
    ThemeDecorator(Theme.LIGHT)
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  }
};

export default preview;



import { type Preview } from "@storybook/react";
import { StyleDecorator } from "shared/config/storybookDecorator/StyleDecorator";

const preview: Preview = {
  decorators: [
    StyleDecorator()
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;

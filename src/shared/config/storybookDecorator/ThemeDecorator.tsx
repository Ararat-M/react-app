/* eslint-disable react/display-name */
import { type StoryFn } from "@storybook/react";
import { type Theme } from "app/providers/themeProvider";
import { ThemeProvider } from "app/providers/themeProvider/ui/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
  <ThemeProvider initialTheme={theme}>
    <div
      style={{ display: "block" }}
      className={`app ${theme}`}
    >
      <StoryComponent />
    </div>
  </ThemeProvider>
);
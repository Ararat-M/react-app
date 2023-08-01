/* eslint-disable react/display-name */
import { type StoryFn } from "@storybook/react";
import { type Theme } from "app/providers/themeProvider";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
);
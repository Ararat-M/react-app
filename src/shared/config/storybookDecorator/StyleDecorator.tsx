/* eslint-disable react/display-name */
import { type StoryFn } from "@storybook/react";
import "app/styles/index.scss";

export const StyleDecorator = () => (StoryComponent: StoryFn) => (
  <StoryComponent />
);
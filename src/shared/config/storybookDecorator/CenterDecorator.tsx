/* eslint-disable react/display-name */
import { type StoryFn } from "@storybook/react";

export const CenterDecorator = () => (StoryComponent: StoryFn) => (
  <div style={
    {
      margin: "auto auto"
    }
  }>
    <StoryComponent />
  </div>
);
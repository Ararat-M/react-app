/* eslint-disable react/display-name */
import { type StoryFn } from "@storybook/react";

export const CenterDecorator = () => (StoryComponent: StoryFn) => (
  <div style={
    {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }>
    <StoryComponent />
  </div>
);
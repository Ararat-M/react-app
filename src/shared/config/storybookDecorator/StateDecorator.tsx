/* eslint-disable react/display-name */
import { type StoryFn } from "@storybook/react";
import { StoreProvider } from "app/providers/storeProvider";
import "app/styles/index.scss";

export const StateDecorator = () => (StoryComponent: StoryFn) => (
  <StoreProvider>
    <StoryComponent />
  </StoreProvider>
);
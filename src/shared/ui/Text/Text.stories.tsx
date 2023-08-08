import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorator/ThemeDecorator";
import { CenterDecorator } from "shared/config/storybookDecorator/CenterDecorator";
import { Theme } from "app/providers/themeProvider";
import { Text, TextTheme } from "./Text";

const meta = {
  title: "shared/Text",
  component: Text,
  args: {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: "Lorem"
  }
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextLight: Story = {};
TextLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const TextDark: Story = {};
TextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextErrLight: Story = {
  args: {
    textTheme: TextTheme.ERR
  }
};
TextErrLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const TextErrDark: Story = {
  args: {
    textTheme: TextTheme.ERR
  }
};
TextErrDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextWithoutTitleDark: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: ""
  }
};
TextWithoutTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextWithoutTitleLight: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: ""
  }
};
TextWithoutTitleLight.decorators = [ThemeDecorator(Theme.LIGHT)];
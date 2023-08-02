import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonTheme } from "./Button";
import { Theme } from "app/providers/themeProvider";
import { ThemeDecorator } from "shared/config/storybookDecorator/ThemeDecorator";
import { CenterDecorator } from "shared/config/storybookDecorator/CenterDecorator";

const darkThemeDecorators = [CenterDecorator(), ThemeDecorator(Theme.DARK)];
const lightThemeDecorators = [CenterDecorator(), ThemeDecorator(Theme.LIGHT)];

const meta = {
  title: "shared/Button",
  component: Button
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLight: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.DEFAULT
  },
  decorators: lightThemeDecorators
};

export const DefaultDark: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.DEFAULT
  },
  decorators: darkThemeDecorators
};

export const ClearLight: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.CLEAR
  },
  decorators: lightThemeDecorators
};

export const ClearDark: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.CLEAR
  },
  decorators: darkThemeDecorators
};

export const OutlineLight: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.OUTLINE
  },
  decorators: lightThemeDecorators
};

export const OutlineDark: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.OUTLINE
  },
  decorators: darkThemeDecorators
};

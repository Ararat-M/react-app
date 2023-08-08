import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorator/ThemeDecorator";
import { CenterDecorator } from "shared/config/storybookDecorator/CenterDecorator";
import { Theme } from "app/providers/themeProvider";
import { Input } from "./Input";

const meta = {
  title: "shared/Input",
  component: Input,
  args: {
    placeholder: "placeholder"
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputLight: Story = {};
InputLight.decorators = [CenterDecorator(), ThemeDecorator(Theme.LIGHT)];

export const InputDark: Story = {};
InputDark.decorators = [CenterDecorator(), ThemeDecorator(Theme.DARK)];
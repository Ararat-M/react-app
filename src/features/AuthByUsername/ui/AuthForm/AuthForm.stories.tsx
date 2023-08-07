import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorator/ThemeDecorator";
import { CenterDecorator } from "shared/config/storybookDecorator/CenterDecorator";
import { Theme } from "app/providers/themeProvider";
import { AuthForm } from "./AuthForm";

const meta = {
  title: "features/AuthByUsername/AuthForm",
  component: AuthForm
} satisfies Meta<typeof AuthForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AuthFormLight: Story = {};
AuthFormLight.decorators = [CenterDecorator(), ThemeDecorator(Theme.LIGHT)];

export const AuthFormDark: Story = {};
AuthFormDark.decorators = [CenterDecorator(), ThemeDecorator(Theme.DARK)];
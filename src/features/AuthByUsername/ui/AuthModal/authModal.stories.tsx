import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorator/ThemeDecorator";
import { CenterDecorator } from "shared/config/storybookDecorator/CenterDecorator";
import { Theme } from "app/providers/themeProvider";
import { AuthModal } from "./AuthModal";
import { StateDecorator } from "shared/config/storybookDecorator/StateDecorator";

const meta = {
  title: "features/AuthByUsername/AuthModal",
  component: AuthModal,
  args: {
    isOpen: true,
    onClose: () => {}
  }
} satisfies Meta<typeof AuthModal>;

const decorators = [StateDecorator(), CenterDecorator()];

export default meta;
type Story = StoryObj<typeof meta>;

export const AuthModalLight: Story = {};
AuthModalLight.decorators = [...decorators, ThemeDecorator(Theme.LIGHT)];

export const AuthModalDark: Story = {};
AuthModalDark.decorators = [...decorators, ThemeDecorator(Theme.DARK)];
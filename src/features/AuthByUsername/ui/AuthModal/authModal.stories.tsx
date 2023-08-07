import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorator/ThemeDecorator";
import { CenterDecorator } from "shared/config/storybookDecorator/CenterDecorator";
import { Theme } from "app/providers/themeProvider";
import { AuthModal } from "./AuthModal";

const meta = {
  title: "features/AuthByUsername/AuthModal",
  component: AuthModal,
  args: {
    isOpen: true,
    onClose: () => {}
  }
} satisfies Meta<typeof AuthModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AuthModalLight: Story = {};
AuthModalLight.decorators = [CenterDecorator(), ThemeDecorator(Theme.LIGHT)];

export const AuthModalDark: Story = {};
AuthModalDark.decorators = [CenterDecorator(), ThemeDecorator(Theme.DARK)];
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorator/ThemeDecorator";
import { Theme } from "app/providers/themeProvider";
import { Modal } from "./Modal";

const meta = {
  title: "shared/Modal",
  component: Modal
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalLight: Story = {
  args: {
    children: "text",
    isOpen: true,
    onClose() {}
  }
};
ModalLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ModalDark: Story = {
  args: {
    children: "text",
    isOpen: true,
    onClose() {}
  }
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];

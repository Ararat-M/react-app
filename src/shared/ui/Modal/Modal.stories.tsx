import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorator/ThemeDecorator";
import { Theme } from "app/providers/themeProvider";
import { Modal } from "./Modal";

const meta = {
  title: "shared/Modal",
  component: Modal,
  args: {
    children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, at nisi! Eius vel ea a quos aut corrupti quae cupiditate, labore pariatur nam quis voluptates dolorem eos ut accusantium illo.",
    isOpen: true,
    onClose() {}
  }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalLight: Story = {};
ModalLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ModalDark: Story = {};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];

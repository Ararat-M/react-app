import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorator/ThemeDecorator";
import { Sidebar } from "./Sidebar";
import { Theme } from "app/providers/themeProvider";
import { withRouter } from "storybook-addon-react-router-v6";

const meta = {
  title: "widgets/Sidebar",
  component: Sidebar,
  decorators: [withRouter]
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarLight: Story = {};
SidebarLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SidebarDark: Story = {};
SidebarDark.decorators = [ThemeDecorator(Theme.DARK)];

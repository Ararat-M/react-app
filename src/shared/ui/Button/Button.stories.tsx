import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonTheme } from './Button';
import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybookDecorator/ThemeDecorator';

const meta = {
  title: 'shared/Button',
  component: Button
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.DEFAULT
  },
};

export const Clear: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.CLEAR
  }
};

export const ClearDark: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.CLEAR
  }
};
ClearDark.decorators= [ThemeDecorator(Theme.DARK)]

export const Outline: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.OUTLINE
  },
};

export const OutlineDark: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.OUTLINE
  },
};
OutlineDark.decorators= [ThemeDecorator(Theme.DARK)]

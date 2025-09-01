import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';

import { Card } from './Card';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'elevated'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a default card with some description text to show how it looks.',
  },
};

export const Outlined: Story = {
  args: {
    title: 'Outlined Card',
    description: 'This card has an outlined variant style.',
    variant: 'outlined',
  },
};

export const Elevated: Story = {
  args: {
    title: 'Elevated Card',
    description: 'This card has an elevated variant with a shadow.',
    variant: 'elevated',
  },
};

export const TitleOnly: Story = {
  args: {
    title: 'Title Only Card',
    variant: 'default',
  },
};

export const LongContent: Story = {
  args: {
    title: 'Card with Long Content',
    description: 'This is a card with much longer content to demonstrate how the component handles text that spans multiple lines. It should wrap nicely and maintain good readability.',
    variant: 'elevated',
  },
};

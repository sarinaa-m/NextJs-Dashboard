import Button from '@/components/ui/Button';
import type { Meta, StoryObj } from '@storybook/react';

import { Mail, Send, Plus, Trash2 } from 'lucide-react';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
    disabled: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail size={20} />
        Send Email
      </>
    ),
    variant: 'primary',
  },
};

export const IconOnly: Story = {
  args: {
    children: <Plus size={20} />,
    variant: 'primary',
  },
};

export const AllVariants: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Button {...args} variant="primary">
        <Send size={20} />
        Primary
      </Button>
      <Button {...args} variant="secondary">
        <Mail size={20} />
        Secondary
      </Button>
      <Button {...args} variant="outline">
        <Plus size={20} />
        Outline
      </Button>
      <Button {...args} variant="primary" disabled>
        <Trash2 size={20} />
        Disabled
      </Button>
    </div>
  ),
};
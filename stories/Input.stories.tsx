import Input from '@/components/ui/Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'UI/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        placeholder: {
            control: 'text',
        },
        error: {
            control: 'text',
        },
        disabled: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
    args: {
        placeholder: 'Type here…',
        error: '',
        disabled: false,
    },
    render: (args) => (
        <div className="flex flex-col gap-4 w-64">
            <Input {...args} />
            <Input {...args} disabled />
            <Input {...args} error="Something went wrong" />
        </div>
    ),
};

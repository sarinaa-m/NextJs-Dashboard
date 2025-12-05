import Card from '@/components/ui/Card';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'UI/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
    args: {
        children: 'Card',
    },
    render: (args) => (
        <div className="flex flex-col gap-4">
            <Card {...args} className="primary">

            </Card>

        </div>
    ),
};
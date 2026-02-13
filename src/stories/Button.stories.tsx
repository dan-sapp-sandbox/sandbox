import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "@/components/Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Click Me",
    variant: "primary",
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const WithIconChild: Story = {
  args: {
    variant: "primary",
    children: <span className="flex items-center gap-2">🚀 Launch</span>,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

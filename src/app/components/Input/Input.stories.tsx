import { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/app/components";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      subtitle: "Displays an input description here",
    },
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    type: {
      control: "select",
      options: ["text", "password", "email", "number"],
    },
    value: { control: "text" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    type: "text",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
  },
};

export const Email: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
  },
};

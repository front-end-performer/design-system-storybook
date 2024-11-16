import { Meta, StoryFn } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "@/app/components"; // Adjust the import path accordingly

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
  argTypes: {
    variant: {control: false},
    size: {
      options: ["sm", "md", "lg"], // Options for the select dropdown
      control: {
        type: "select", // This makes the size prop controlled by a select dropdown
      },
    },
  },
};

export default meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  size: "md", // Default size is medium
  children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  size: "md", // Default size is medium
  children: "Secondary Button",
};

export const Small = Template.bind({});
Small.args = {
  variant: "primary",
  size: "sm", // Small button
  children: "Small Button",
};

export const Large = Template.bind({});
Large.args = {
  variant: "primary",
  size: "lg", // Large button
  children: "Large Button",
};

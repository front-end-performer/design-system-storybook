import { Meta, StoryObj } from "@storybook/react";
import { Card } from "@/app/components";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      subtitle: "Displays an card description here",
    },
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    imageUrl: { control: "text" },
    buttonText: { control: "text" },
    onButtonClick: { action: "button clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Sample Card",
    description: "This is a description for the sample card.",
    imageUrl: "https://via.placeholder.com/300x150",
    buttonText: "Click Me",
  },
};

export const WithoutImage: Story = {
  args: {
    title: "Card Without Image",
    description: "This card does not have an image.",
    buttonText: "Learn More",
  },
};

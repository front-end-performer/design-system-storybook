import { Meta, StoryFn } from "@storybook/react";
import { ComponentProps } from "react";
import { TokensTable } from "@/app/components";

type StoryProps = ComponentProps<typeof TokensTable>;

const meta: Meta<StoryProps> = {
  title: "Style Guide/TokensTable",
  component: TokensTable,
  tags: ["autodocs"],
  parameters: {
    docs: {
      subtitle: "Displays an stack description here",
    },
  },
  argTypes: {
    category: { table: { disable: true } },
    tokens: { table: { disable: true } },
  },
};

export default meta;

const Template: StoryFn<typeof TokensTable> = (args) => (
  <TokensTable {...args} />
);

export const DefaultColors = Template.bind({});
DefaultColors.args = {
  tokens: {
    colors: {
      primary: "#005f73",
      secondary: "#0a9396",
      accent: "#94d2bd",
      background: "#e9d8a6",
      textPrimary: "#001219",
    },
  },
  category: "colors",
};

export const DefaultSpacing = Template.bind({});
DefaultSpacing.args = {
  tokens: {
    spacing: {
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
    },
  },
  category: "spacing",
};
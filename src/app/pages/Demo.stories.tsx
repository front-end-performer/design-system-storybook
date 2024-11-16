import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import DemoPage from "./Demo";

export default {
  title: "Pages/DemoPage",
  component: DemoPage,
  argTypes: {
    title: { control: "text" },
    welcomeMessage: { control: "text" },
  },
} as Meta;

const Template: StoryFn<typeof DemoPage> = (args) => <DemoPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Welcome to My Website",
  welcomeMessage:
    "This is a simple Next.js page with a header, footer, and content area.",
};

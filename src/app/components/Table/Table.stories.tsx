import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Table, DataProps } from "@/app/components";
import type { TokenValue } from "../Tokens/type";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    data: { control: "object" },
    category: { control: "text" },
  },
} as Meta;

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {},
  category: "",
};

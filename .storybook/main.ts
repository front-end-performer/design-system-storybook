import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-interactions",
    "storybook-design-token"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
};
export default config;

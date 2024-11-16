import React from "react";
import { ColorTokens } from "@/app/components";

export default {
  title: "Style Guide/ColorTokens",
  component: ColorTokens,
  parameters: {
    docs: {
      description: {
        component:
          "Design tokens used across the application for consistent styling.",
      },
    },
  },
};

export const Tokens = () => <ColorTokens />;

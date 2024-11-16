import React from "react";
import { SpacingTokens } from "@/app/components";

export default {
  title: "Style Guide/SpacingTokens",
  component: SpacingTokens,
  parameters: {
    docs: {
      description: {
        component:
          "Design tokens used across the application for consistent styling.",
      },
    },
  },
};

export const Tokens = () => <SpacingTokens />;

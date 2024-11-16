import React from "react";
import tokens from "@/app/tokens/design-tokens.json";
import { DesignTokens } from "./type";
import { Table } from "../Table/Table";

export const SpacingTokens: React.FC = () => {
  const typedTokens: DesignTokens = tokens;
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Spacing Table</h2>
      <Table data={typedTokens.spacing} category="spacing" />
    </div>
  );
};

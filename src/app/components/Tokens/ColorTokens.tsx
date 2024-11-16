import React from "react";
import tokens from "@/app/tokens/design-tokens.json";
import { DesignTokens } from "./type";
import { Table } from "../Table/Table";

export const ColorTokens: React.FC = () => {
  const typedTokens: DesignTokens = tokens;

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Colors Table</h2>
      <Table data={typedTokens.colors} category="colors" />
    </div>
  );
};

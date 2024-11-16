import { PropsWithChildren } from "react";
import { Table } from "../Table/Table";

type ColorProps = {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    textPrimary: string;
  };
};

type SpacingProps = {
  spacing: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
};

type StackProps = PropsWithChildren<{
  tokens: ColorProps | SpacingProps;
  category: string;
}>;

export const TokensTable = ({ tokens, category }: StackProps) => {
  // Flatten the designTokens object to key-value pairs for the Table component
  const flattenedTokens = Object.entries(
    category === "colors"
      ? (tokens as ColorProps).colors
      : (tokens as SpacingProps).spacing
  ).map(([name, value]) => ({ name, value }));

  return (
    <div className="container mx-auto">
      <Table tokens={flattenedTokens} category={category} />
    </div>
  );
};
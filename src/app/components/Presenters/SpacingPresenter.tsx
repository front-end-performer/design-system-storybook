import React from "react";
import { useMemo } from "react";
import { styled } from "@storybook/theming";
import { PresenterProps } from "../Tokens/type";

export const SpacingPresenter = ({ token }: PresenterProps) => {
  const Space = useMemo(
    () =>
      styled.div(() => ({
        background: 'bg-blue-500',
        borderRadius: 2,
        height: 32,
        width: token,
      })),
    [token]
  );

  return <Space></Space>;
};
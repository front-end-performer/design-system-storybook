import React from "react";
import { useMemo } from "react";
import { styled } from "@storybook/theming";
import { PresenterProps } from "../Tokens/type";

export const TokenPresenter = ({ token, category = "" }: PresenterProps) => {
  const Presenter = useMemo(
    () =>
      styled.div(() => ({
        background: category === "colors" ? token : "#005f73",
        borderRadius: 2,
        height: 32,
        width: category === "spacing" ? token : "100%",
      })),
    [token, category]
  );

  return <Presenter></Presenter>;
};

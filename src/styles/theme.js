import { between } from "polished";
import { css } from "styled-components";

export const theme = {
  colors: {
    blueDarkest: "#12182b",
    blueDark: "#1c2341",
    blueMd: "#394f6b",
    blueLight: "#55BEC0",
    blueBright: "#6DFFE7",
    white: "#ffffff",
  },
  text: {
    h1: () => css`
      font-size: 26px;
      font-weight: 700;
      line-height: 150%;
    `,
    h2: () => css`
      font-size: 17px;
      font-weight: 500;
      line-height: 150%;
    `,
    p: () => css`
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
    `,
  },
};

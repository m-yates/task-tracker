import { createGlobalStyle as css } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 400;
  }
  body {
    background-color: ${theme.colors.blueDarkest};
    color: ${theme.colors.white};
  }
`;

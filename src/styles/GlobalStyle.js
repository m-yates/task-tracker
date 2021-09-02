import { createGlobalStyle as css } from "styled-components";

export const GlobalStyle = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Noto Sans SC", sans-serif;
    font-weight: 400;
  }
`;

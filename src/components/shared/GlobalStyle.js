import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  body {
    color: ${props => props.theme.nightRider};
    font-family: Roboto, sans-serif;
    font-size: 1.1025rem;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle;

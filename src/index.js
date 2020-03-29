import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";

import Root from "#root/components/Root";
import GlobalStyle from "#root/components/shared/GlobalStyle";
import * as theme from "#root/styled-components/theme";

render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Root />
  </ThemeProvider>,
  document.getElementById("root")
);

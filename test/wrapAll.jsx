// this is for testing components within a context similar to that of the app
// right now this only wraps a ThemeProvider (for styled-components) but this can
// definitely be exapnded upon to include other things as necessary (e.g. redux)

import { render } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";

import * as theme from "#root/styled-components/theme";

const wrapAll = element => {
  const wrapper = render(<ThemeProvider theme={theme}>{element}</ThemeProvider>);

  return wrapper;
};

export default wrapAll;

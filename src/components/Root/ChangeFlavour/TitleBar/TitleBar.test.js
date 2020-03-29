// including purely a snapshot test like this has its advantages and disadvantages
// the main advantage being that accidental changes to things such as the Styled Components' theme
// would not cause stylistic breaks

import React from "react";

import wrapAll from "#test/wrapAll";

import TitleBar from "./TitleBar";

describe("TitleBar", () => {
  test("matches snapshot", () => {
    const { container } = wrapAll(<TitleBar />);

    expect(container).toMatchSnapshot();
  });
});

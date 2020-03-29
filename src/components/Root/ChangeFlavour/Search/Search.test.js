// including purely a snapshot test like this has its advantages and disadvantages
// the main advantage being that accidental changes to things such as the Styled Components' theme
// would not cause stylistic breaks

import React from "react";

import wrapAll from "#test/wrapAll";

import Search from "./Search";

describe("Search", () => {
  // we do not test value or onChange here - those are tested in integration tests found in ChangeFlavour
  test("matches snapshot", () => {
    const { container } = wrapAll(<Search />);

    expect(container).toMatchSnapshot();
  });
});

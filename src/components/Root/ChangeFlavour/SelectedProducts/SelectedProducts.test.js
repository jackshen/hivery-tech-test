// including purely a snapshot test like this has its advantages and disadvantages
// the main advantage being that accidental changes to things such as the Styled Components' theme
// would not cause stylistic breaks

import React from "react";

import { currentProducts } from "#root/mocks/productMock";
import wrapAll from "#test/wrapAll";

import SelectedProducts from "./SelectedProducts";

describe("SelectedProducts", () => {
  test("matches snapshot", () => {
    const { container } = wrapAll(<SelectedProducts data={currentProducts} />);

    expect(container).toMatchSnapshot();
  });
});

import { fireEvent } from "@testing-library/react";
import React from "react";

import wrapAll from "#test/wrapAll";

import ActionButtons from "./ActionButtons";

describe("ActionButtons", () => {
  test("onCancel works properly", () => {
    const handleCancelMock = jest.fn();

    const { getByText } = wrapAll(<ActionButtons canCancel onCancel={handleCancelMock} />);

    fireEvent.click(getByText("Cancel"));

    expect(handleCancelMock).toHaveBeenCalledTimes(1);
  });

  test("onCancel doesn't trigger if canCancel is false", () => {
    const handleCancelMock = jest.fn();

    const { getByText } = wrapAll(<ActionButtons canCancel={false} onCancel={handleCancelMock} />);

    fireEvent.click(getByText("Cancel"));

    expect(handleCancelMock).not.toHaveBeenCalled();
  });

  // the Save button isn't actually hooked up to anything, so we'll just make do with a snapshot test for now
  test("canSave disables the Save button", () => {
    const { container } = wrapAll(<ActionButtons canCancel canSave={false} />);

    expect(container).toMatchSnapshot();
  });
});

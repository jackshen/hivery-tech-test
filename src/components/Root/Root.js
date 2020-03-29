import React from "react";

import { currentProducts, productCapacity, productUpdateData } from "#root/mocks/productMock";

import ChangeFlavour from "./ChangeFlavour";

const Root = () => (
  <ChangeFlavour
    currentProducts={currentProducts}
    productCapacity={productCapacity}
    productUpdateData={productUpdateData}
  />
);

export default Root;

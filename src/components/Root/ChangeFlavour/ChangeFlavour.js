import React, { useState } from "react";
import styled from "styled-components";

import ActionButtons from "./ActionButtons";
import Legend from "./Legend";
import ProductsTable from "./ProductsTable";
import Search from "./Search";
import SelectedProducts from "./SelectedProducts";
import TitleBar from "./TitleBar";

const ContentWrapper = styled.div`
  align-items: center;
  display: grid;
  grid-template-areas: "title-bar title-bar" "search legend" "selected-products products-table" "action-buttons action-buttons";
  grid-template-columns: minmax(auto, 19.25rem) auto;
  grid-template-rows: repeat(2, min-content) 1fr min-content;
  height: 100%;
  width: 100%;
`;

// I specifically designed it this way so that we can easily hook this up with real data
// in the future, instead of hardcoding the assumption that the data will be provided in
// a static set of mock arrays and objects
const ChangeFlavour = ({ currentProducts, productCapacity, productUpdateData }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleChange = evt => setSearchValue(evt.target.value.toUpperCase());

  return (
    <ContentWrapper>
      <TitleBar />
      <Search onChange={handleChange} value={searchValue} />
      <Legend />
      <SelectedProducts data={currentProducts} />
      <ProductsTable
        currentProducts={currentProducts}
        data={productUpdateData}
        onSelect={selectedProducts => {
          setSelectedProducts(selectedProducts);
        }}
        search={searchValue.trim()}
        selectedProducts={selectedProducts}
        stock={productCapacity}
      />
      <ActionButtons
        canCancel={selectedProducts.length > 0}
        canSave={selectedProducts.length > 0}
        onCancel={() => {
          setSelectedProducts([]);
        }}
      />
    </ContentWrapper>
  );
};

export default ChangeFlavour;

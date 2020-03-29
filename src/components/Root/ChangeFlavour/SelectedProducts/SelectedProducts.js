import React from "react";
import styled from "styled-components";

import ProductCard from "./ProductCard";

const SelectedProductsHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  background-color: ${props => props.theme.solitude};
  display: flex;
  font-weight: bold;
  height: 2.875rem;
  padding: 0 2.25rem;
  width: 100%;
`;

const SelectedProductsWrapper = styled.div`
  border-bottom: 0.0625rem solid ${props => props.theme.veryLightGrey};
  border-right: 0.0625rem solid ${props => props.theme.veryLightGrey};
  display: flex;
  flex-direction: column;
  grid-area: selected-products;
  height: 100%;
  overflow-y: auto;
  width: 100%;
`;

const SelectedProducts = ({ data }) => (
  <SelectedProductsWrapper>
    <SelectedProductsHeader>Selected Products</SelectedProductsHeader>
    {data.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
  </SelectedProductsWrapper>
);

export default SelectedProducts;

import React from "react";
import styled from "styled-components";

import ProductCode from "#root/components/shared/ProductCode";
import ProductImage from "#root/components/shared/ProductImage";

import StockCheckmark from "./StockCheckmark";

const ProductCategoryIndicator = styled.div`
  background-color: ${props => {
    if (props.displayCategory === 0) return props.theme.recommended;
    else if (props.displayCategory === 1) return props.theme.other;
    else if (props.displayCategory === 2) return props.theme.caution;
  }};
  border-top: 0.0625rem solid ${props => props.theme.whiteSmoke};
  height: 100%;
  margin-right: 1.875rem;
  min-width: 0.5rem;
`;

const ProductCellWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 4rem;
  padding: 0;
  text-align: left;
`;

const ProductRowImage = styled(ProductImage)`
  margin-right: 1rem;
  width: 1rem;
`;

const ProductCell = ({ displayCategory, isStocked, productCode, productName }) => (
  <ProductCellWrapper>
    <ProductCategoryIndicator displayCategory={displayCategory} />
    <ProductRowImage productCode={productCode} productName={productName} />
    <div>
      <div>{productName}</div>
      <ProductCode>{productCode}</ProductCode>
    </div>
    {isStocked ? <StockCheckmark /> : ""}
  </ProductCellWrapper>
);

export default ProductCell;

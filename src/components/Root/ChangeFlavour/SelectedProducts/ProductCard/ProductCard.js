import React from "react";
import styled from "styled-components";

import ProductCode from "#root/components/shared/ProductCode";
import ProductImage from "#root/components/shared/ProductImage";

import ProductCardStatsTable from "./ProductCardStatsTable";

const ProductCardImage = styled(ProductImage)`
  padding: 0 2.125rem;
  width: 1.75rem;
`;

const ProductCardInfo = styled.div`
  width: 100%;
`;

const ProductCardWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  margin-top: 1.75rem;
  position: relative;
  width: 100%;

  :after {
    background-color: ${props => props.theme.whiteSmoke};
    bottom: 0;
    content: " ";
    left: 50%;
    height: 0.0625rem;
    position: absolute;
    transform: translate(-50%, 0);
    width: 85%;
  }
`;

const ProductCardTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.5625rem;
`;

const ProductCard = ({ product }) => (
  <ProductCardWrapper>
    <ProductCardImage productCode={product.product_code} productName={product.product_name} />
    <ProductCardInfo>
      <ProductCardTitle>{product.product_name}</ProductCardTitle>
      <ProductCode>{product.product_code}</ProductCode>
      <ProductCardStatsTable price={product.price} vends={product.average_sales} />
    </ProductCardInfo>
  </ProductCardWrapper>
);

export default ProductCard;

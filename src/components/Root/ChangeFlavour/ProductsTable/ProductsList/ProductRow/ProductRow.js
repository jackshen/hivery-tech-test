import React from "react";
import styled from "styled-components";

import { formatCurrency } from "#root/helpers/currencyFormatters";

import InsufficientData from "./InsufficientData";
import ProductCell from "./ProductCell";
import ProductChart from "./ProductChart";

const NetGain = styled.div`
  color: ${props => (props.isNegative ? props.theme.outrageousOrange : props.theme.lima)};
  font-weight: bold;
`;

const ProductRowChart = styled.div`
  box-shadow: inset 0 -3px 3px -2px ${props => props.theme.veryLightGrey},
    inset 0 3px 3px -2px ${props => props.theme.veryLightGrey};
  display: flex;
  justify-content: center;
  overflow: auto;
  width: 100%;
`;

const ProductRowProduct = styled.div`
  align-items: center;
  border-bottom: 0.0625rem solid ${props => props.theme.whiteSmoke};
  box-sizing: border-box;
  cursor: pointer;
  display: grid;
  grid-template-columns: 6fr repeat(4, 1fr);
  padding-right: 5rem;
  text-align: left;
  transition: background-color 0.25s;
  user-select: none;
  width: 100%;

  :hover {
    background-color: ${props => props.theme.darken("white")};
  }

  ${props => {
    if (props.isSelected) {
      return `
        background-color: ${props.theme.aliceBlue};

        :hover {
          background-color: ${props.theme.darken(props.theme.aliceBlue)}
        }
      `;
    }
  }}

  > div {
    padding-right: 1rem;

    :first-child {
      text-align: left;
    }
  }
`;

const ProductRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductRow = ({ currentProductsRevenue, isSelected, isShowingDetails, isStocked, onClick, product, style }) => {
  const revenue = product.price * product.average_sales;
  const netGain = revenue - currentProductsRevenue;

  return (
    <ProductRowWrapper data-testid="product-row" style={style}>
      {/* data-testid="product-row" used in Cypress */}
      <ProductRowProduct isSelected={isSelected} onClick={() => onClick(product.product_code)}>
        <ProductCell
          displayCategory={product.display_category}
          isStocked={isStocked}
          productCode={product.product_code}
          productName={product.product_name}
        />
        <div>{formatCurrency(product.price)}</div>
        <div>{product.average_sales.toFixed(2)}</div>
        <div>{formatCurrency(revenue)}</div>
        <NetGain isNegative={netGain < 0}>{formatCurrency(netGain)}</NetGain>
      </ProductRowProduct>
      {isShowingDetails &&
        (product.cannibalised ? (
          <ProductRowChart>
            <ProductChart cannibalised={product.cannibalised} />
          </ProductRowChart>
        ) : (
          <InsufficientData />
        ))}
    </ProductRowWrapper>
  );
};

export default ProductRow;

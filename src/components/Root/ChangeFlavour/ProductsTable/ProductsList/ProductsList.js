import React, { forwardRef } from "react";
import { VariableSizeList } from "react-window";
import styled from "styled-components";
import useResizeObserver from "use-resize-observer";

import ProductRow from "./ProductRow";

const Wrapper = styled.div`
  flex: 1;
  min-height: 0;
  width: 100%;
`;

const ProductsList = forwardRef(
  ({ currentProductsRevenue, innerRef, onClick, products, productStates, selectedProducts }, listRef) => {
    const { height = 1, ref: wrapperRef } = useResizeObserver();

    const getItemSize = index => {
      if (productStates[products[index].product_code]?.isShowingDetails) return 300;
      return 64;
    };

    return (
      <Wrapper ref={wrapperRef}>
        {/*
        if you don't do height={height - 1}, it'll keep growing and growing... forever
        given more time, I'd love to identify why exactly this is an issue, but in the
        interest of time I've decided to leave it as-is here
      */}
        <VariableSizeList
          height={height - 1}
          innerRef={innerRef}
          itemCount={products.length}
          itemSize={getItemSize}
          ref={listRef}
        >
          {props => {
            const product = products[props.index];
            const productState = productStates[product.product_code];

            return (
              <ProductRow
                currentProductsRevenue={currentProductsRevenue}
                isSelected={selectedProducts.includes(product.product_code)}
                isShowingDetails={productState.isShowingDetails}
                isStocked={productState.isStocked}
                onClick={onClick}
                product={product}
                style={props.style}
              />
            );
          }}
        </VariableSizeList>
      </Wrapper>
    );
  }
);

export default ProductsList;

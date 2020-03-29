import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useResizeObserver from "use-resize-observer";

import ProductsList from "./ProductsList";

const ProductTableHeader = styled.div`
  background-color: ${props => props.theme.solitude};
  flex: 0 auto;
  height: 2.875rem;
`;

const ProductTableHeaderContents = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: grid;
  font-weight: bold;
  grid-template-columns: 6fr repeat(4, 1fr);
  height: 100%;
  padding-right: 5rem;
  text-align: left;
  width: ${props => (props.width ? `${props.width}px` : "100%")};

  > div:first-child {
    padding-left: 2.25rem;
  }
`;

const ProductTableWrapper = styled.div`
  border-bottom: 0.0625rem solid ${props => props.theme.veryLightGrey};
  border-left: 0.0625rem solid ${props => props.theme.veryLightGrey};
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
`;

const ProductsTable = ({ currentProducts, data, onSelect: pushSelect, search, selectedProducts, stock }) => {
  const listRef = useRef();
  // we use this so that we can align the headers up properly
  // a visible scrollbar would offset the width of the row items, hence causing misalignment
  // putting a ResizeObserver on the row items allows us to re-align the header accordingly
  const { ref: listInnerRef, width: listWidth } = useResizeObserver();

  const [productStates, setProductStates] = useState(() =>
    data.reduce((productStates, product) => {
      productStates[product.product_code] = {
        isShowingDetails: false,
        isStocked: stock.hasOwnProperty(product.product_code)
      };

      return productStates;
    }, {})
  );

  const currentProductsRevenue = currentProducts.reduce(
    (sum, currProduct) => sum + currProduct.average_sales * currProduct.price,
    0
  );

  const recomputeRowHeights = index => {
    listRef.current.resetAfterIndex(index);
  };

  useEffect(() => {
    // we use needsToCommit here to prevent unnecessary renders
    let needsToCommit = false;
    const newProductStates = Object.keys(productStates).reduce((newProductStates, productCode) => {
      const productState = productStates[productCode];
      if (productState.isShowingDetails && !selectedProducts.includes(productCode)) {
        needsToCommit = true;
        newProductStates[productCode] = {
          ...productState,
          isShowingDetails: false
        };
      } else {
        newProductStates[productCode] = productState;
      }
      return newProductStates;
    }, {});

    if (needsToCommit) {
      setProductStates(newProductStates);

      recomputeRowHeights(0);
    }
  }, [selectedProducts]);

  const updateSelectedProducts = newSelectedProducts => {
    pushSelect(newSelectedProducts);
  };

  const filteredData = data.filter(
    product => !search || product.product_code.includes(search) || product.product_name.includes(search)
  );

  useEffect(() => {
    // we need to recompute row heights once the search term changes
    recomputeRowHeights(0);
  }, [filteredData]);

  // need to use callback syntax for setting state because this function can be cached by child components
  const handleClick = productCode => {
    if (!selectedProducts.includes(productCode)) {
      // a single click selects the product...
      updateSelectedProducts(selectedProducts => [...selectedProducts, productCode]);
    } else {
      const productState = productStates[productCode];

      if (!productState.isShowingDetails) {
        // another click shows product details (i.e. the graph)...
        setProductStates({
          ...productStates,
          [productCode]: {
            ...productState,
            isShowingDetails: true
          }
        });
      } else {
        // and a third click resets it all
        updateSelectedProducts(selectedProducts.filter(code => code !== productCode));
        setProductStates({
          ...productStates,
          [productCode]: {
            ...productState,
            isShowingDetails: false
          }
        });
      }
    }

    recomputeRowHeights(filteredData.findIndex(product => product.product_code === productCode));
  };

  return (
    <ProductTableWrapper>
      <ProductTableHeader>
        <ProductTableHeaderContents width={listWidth}>
          <div>Product</div>
          <div>Price</div>
          <div>Vends</div>
          <div>Revenue</div>
          <div>Net gain</div>
        </ProductTableHeaderContents>
      </ProductTableHeader>
      <ProductsList
        currentProductsRevenue={currentProductsRevenue}
        innerRef={listInnerRef}
        onClick={handleClick}
        products={filteredData}
        productStates={productStates}
        ref={listRef}
        selectedProducts={selectedProducts}
      />
    </ProductTableWrapper>
  );
};

export default ProductsTable;

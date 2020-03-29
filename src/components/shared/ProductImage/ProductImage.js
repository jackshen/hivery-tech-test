import styled from "styled-components";

const ProductImage = styled.img.attrs(props => ({
  alt: props.productCode + props.productName,
  src: `https://cdn.vendinganalytics.com/reyes-ccb/tb/${props.productCode}.png`
}))`
  object-fit: contain;
`;

export default ProductImage;

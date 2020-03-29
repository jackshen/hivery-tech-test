import React from "react";
import styled from "styled-components";

const Key = styled.div`
  background-color: ${props => props.theme[props.color]};
  border-radius: 0.25rem;
  height: 1.375rem;
  margin: 0 0.5rem 0 1rem;
  min-width: 1.375rem;
`;

const LegendWrapper = styled.div`
  align-items: center;
  display: flex;
  grid-area: legend;
  height: fit-content;
  justify-self: end;
  padding-right: 2.8125rem;
  vertical-align: middle;
  width: fit-content;
`;

const Legend = () => (
  <LegendWrapper>
    <Key color="recommended" />
    <span>Recommended Flavours</span>
    <Key color="other" />
    <span>Other Flavours</span>
    <Key color="caution" />
    <span>Caution Flavours</span>
  </LegendWrapper>
);

export default Legend;

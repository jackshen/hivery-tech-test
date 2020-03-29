import React from "react";
import styled from "styled-components";

const Checkmark = styled.div`
  align-items: center;
  background-color: ${props => props.theme.dodgerBlue};
  border-radius: 50%;
  color: white;
  display: flex;
  font-size: 0.7rem;
  height: 1rem;
  justify-content: center;
  line-height: 0;
  margin-left: auto;
  position: relative;
  text-align: center;
  min-width: 1rem;

  :hover {
    :after {
      align-items: center;
      background-color: ${props => props.theme.smalt};
      border-radius: 0.25rem;
      bottom: 1.5rem;
      content: "Currently stocked";
      display: flex;
      font-size: 1.15rem;
      height: 2.125rem;
      justify-content: center;
      left: 50%;
      position: absolute;
      transform: translate(-50%, 0);
      width: 10.25rem;
    }
  }
`;

const StockCheckmark = () => <Checkmark>✔</Checkmark>;

export default StockCheckmark;

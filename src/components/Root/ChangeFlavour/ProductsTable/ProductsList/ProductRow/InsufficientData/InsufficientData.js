import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  background-color: ${props => props.theme.whiteSmoke};
  box-shadow: inset 0 -3px 3px -2px ${props => props.theme.veryLightGrey},
    inset 0 3px 3px -2px ${props => props.theme.veryLightGrey};
  box-sizing: border-box;
  color: ${props => props.theme.nobel};
  display: flex;
  font-size: 1.25rem;
  height: 300px;
  justify-content: center;
  width: 100%;
`;

const InsufficientData = () => {
  return (
    <Wrapper>
      <span>Insufficient data to render chart.</span>
    </Wrapper>
  );
};

export default InsufficientData;

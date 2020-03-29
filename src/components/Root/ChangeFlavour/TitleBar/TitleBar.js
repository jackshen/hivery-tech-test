import React from "react";
import styled from "styled-components";

const TitleBarWrapper = styled.div`
  border-bottom: 0.125rem solid ${props => props.theme.solitude};
  box-sizing: border-box;
  font-size: 1.25rem;
  grid-area: title-bar;
  padding: 1.5rem 2.4375rem;
  width: 100%;
`;

const TitleBar = () => {
  return <TitleBarWrapper>Change Flavour</TitleBarWrapper>;
};

export default TitleBar;

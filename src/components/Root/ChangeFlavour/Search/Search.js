import React from "react";
import styled from "styled-components";

const SearchInput = styled.input.attrs({
  placeholder: "Search",
  type: "text"
})`
  border: 0.0625rem solid ${props => props.theme.veryLightGrey};
  border-radius: 0.25rem;
  box-sizing: border-box;
  color: ${props => props.theme.raven};
  font: inherit;
  height: 2.5625rem;
  outline: none;
  padding-left: 1.125rem;
  padding-right: 2.375rem;
  width: 17.0625rem;
`;

const SearchWrapper = styled.div`
  grid-area: search;
  height: fit-content;
  justify-self: end;
  margin: 2.215rem 0;
  position: relative;
  width: fit-content;

  :after {
    border: 0.125rem solid ${props => props.theme.nobel};
    border-radius: 0.125rem;
    box-sizing: border-box;
    color: ${props => props.theme.nobel};
    content: "?";
    display: inline-block;
    font-weight: bold;
    height: 1.375rem;
    position: absolute;
    right: 0.5rem;
    text-align: center;
    top: 50%;
    transform: translate(0, -50%);
    width: 1.375rem;
  }
`;

const Search = ({ onChange, value }) => (
  <SearchWrapper>
    <SearchInput onChange={onChange} value={value} />
  </SearchWrapper>
);

export default Search;

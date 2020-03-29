import styled from "styled-components";

const Button = styled.button`
  background-color: white;
  border: 0.0625em solid ${props => props.theme.gainsboro};
  border-radius: 0.25rem;
  font-family: inherit;
  font-size: 1.1rem;
  padding: 0.5em 1.125em;
  transition: background-color 0.25s, border-color 0.25s, box-shadow 0.25s, color 0.25s;

  :focus {
    box-shadow: 0 0 0 2px white, 0 0 3px 3px ${props => props.theme.dodgerBlue};
    outline: none;
  }

  :hover {
    background-color: ${props => props.theme.darken("white")};
    cursor: pointer;
  }

  :disabled {
    background-color: ${props => props.theme.whiteSmoke};
    border-color: ${props => props.theme.veryLightGrey};
    color: ${props => props.theme.nobel};
    cursor: not-allowed;
  }

  ${props => {
    if (props.color === "primary") {
      return `
        background-color: ${props.theme.dodgerBlue};
        border-color: ${props.theme.dodgerBlue};
        color: white;

        :not(:disabled):hover {
          background-color: ${props.theme.darken(props.theme.dodgerBlue)};
          cursor: pointer;
        }
      `;
    }
  }}
`;

export default Button;

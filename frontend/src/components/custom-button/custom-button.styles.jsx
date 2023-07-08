import styled, { css } from "styled-components";

const button = css`
  width: 225px;
  margin-bottom: 15px;
  padding: 10px 15px;
  opacity: 0.85;
  font-size: large;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
`;

const buttonStyles = css`
  border: none;
  background-color: #000;
  color: #fff;
  &:hover {
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
  }
`;

const invertedButtonStyles = css`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  &:hover {
    background-color: #000;
    color: #fff;
    border: 1px solid #000;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  border: 1px solid #4285f4;
  &:hover {
    background-color: #fff;
    color: #4285f4;
  }
`;
const buttonType = (props) => {
  if (props.googleSignIn) {
    return googleSignInStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const Button = styled.button`
  ${button}
  ${buttonType}
`;

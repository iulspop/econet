import React from "react"
import styled from "styled-components"
import { buttonReset } from "../../../mixins"

export const Button = ({ clickAction, children, alt }) => {
  return (
    <StyledButton onClick={clickAction} alt={alt}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  ${buttonReset}
  padding: 2rem 0;
  margin: 0 5rem;
  position: relative;

  font-size: 3.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;

  cursor: pointer;

  &::before {
    width: 130%;
    height: 3px;
    content: "";
    background: radial-gradient(
      circle at center,
      ${props => props.theme.colors.primary},
      transparent
    );
    position: absolute;
    top: 0;
    left: -15%;
  }

  &::after {
    width: 130%;
    height: 3px;
    content: "";
    background: radial-gradient(
      circle at center,
      ${props => props.theme.colors.primary},
      transparent
    );
    position: absolute;
    top: 100%;
    left: -15%;
  }
`

import React from "react"
import styled from "styled-components"
import { buttonReset } from "../../../../mixins"

export const Button = ({ clickAction, children, ariaLabel, inactive }) => {
  return (
    <StyledButton
      onClick={clickAction}
      aria-label={ariaLabel}
      inactive={inactive}
    >
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
  color: ${props => (props.inactive ? "gray" : props.theme.colors.primary)};
  text-transform: uppercase;

  cursor: pointer;

  @media only screen and ${props => props.theme.media.tabPort} {
    font-size: 2.3rem;
    padding: 1.5rem 0;
    margin: 0 3rem;
  }

  @media only screen and ${props => props.theme.media.phone} {
    display: block;
    width: 150px;
    margin: 2rem auto;
    margin-bottom: 3rem;
  }

  &::before {
    width: 130%;
    height: 3px;
    content: "";
    background: radial-gradient(
      circle at center,
      ${props => (props.inactive ? "gray" : props.theme.colors.primary)},
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
      ${props => (props.inactive ? "gray" : props.theme.colors.primary)},
      transparent
    );
    position: absolute;
    top: 100%;
    left: -15%;
  }
`
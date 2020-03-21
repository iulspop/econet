import React from "react"
import styled, { css } from "styled-components"
import { buttonReset, linkReset } from "../../../../mixins"

export const Button = ({
  clickAction,
  link,
  href,
  children,
  ariaLabel,
  inactive,
}) => {
  return (
    <React.Fragment>
      {link ? (
        <StyledLink
          onClick={clickAction}
          aria-label={ariaLabel}
          inactive={inactive}
          href={href}
        >
          {children}
        </StyledLink>
      ) : (
        <StyledButton
          onClick={clickAction}
          aria-label={ariaLabel}
          inactive={inactive}
        >
          {children}
        </StyledButton>
      )}
    </React.Fragment>
  )
}

const buttonStyle = css`
  padding: 2rem 0;
  margin: 0 5rem;
  position: relative;

  font-size: 3.5rem;
  font-weight: 700;
  color: ${props => (props.inactive ? "gray" : props.theme.colors.primary)};
  text-transform: uppercase;
  text-align: center;

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

const StyledButton = styled.button`
  ${buttonReset}
  ${buttonStyle}
`

const StyledLink = styled.a`
  ${linkReset}
  ${buttonStyle}
`

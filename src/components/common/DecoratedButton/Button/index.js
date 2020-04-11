import React from "react"
import styled, { css } from "styled-components"
import { buttonReset, linkReset } from "../../../../mixins"
import { GatsbyLink } from "../../Header/Links/GatsbyLink"

export const Button = ({
  clickAction,
  link,
  href,
  children,
  ariaLabel,
  inactive,
  slim,
}) => {
  return (
    <React.Fragment>
      {link ? (
        <StyledLink
          onClick={clickAction}
          aria-label={ariaLabel}
          inactive={inactive}
          to={href}
          slim={slim}
        >
          {children}
        </StyledLink>
      ) : (
        <StyledButton
          onClick={clickAction}
          aria-label={ariaLabel}
          inactive={inactive}
          slim={slim}
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

  font-size: ${props => (props.slim ? "2.5rem" : "3.5rem")};
  font-weight: 700;
  line-height: ${props => (props.slim ? "1.3" : "1.7")};
  color: ${props => (props.inactive ? "gray" : props.theme.colors.primary)};
  text-transform: uppercase;
  text-align: center;

  &:focus {
    outline: 2px dotted grey;
  }
  cursor: pointer;

  @media only screen and ${props => props.theme.media.tabPort} {
    font-size: 2.3rem;
    padding: 1.5rem 0;
    margin: 0 3rem;
  }

  @media only screen and ${props => props.theme.media.phone} {
    display: block;
    margin: 1.5rem auto;
    margin-bottom: 3rem;
    font-size: calc(0.00882353 * 100vw + 1.417647rem);
    line-height: 1.3;
  }

  &::before {
    width: 115%;
    height: 3px;
    content: "";
    background: radial-gradient(
      circle at center,
      ${props => (props.inactive ? "gray" : props.theme.colors.primary)},
      transparent
    );
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &::after {
    width: 115%;
    height: 3px;
    content: "";
    background: radial-gradient(
      circle at center,
      ${props => (props.inactive ? "gray" : props.theme.colors.primary)},
      transparent
    );
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
`

const StyledButton = styled.button`
  ${buttonReset}
  ${buttonStyle}
`

const StyledLink = styled(GatsbyLink)`
  ${linkReset}
  ${buttonStyle}
`

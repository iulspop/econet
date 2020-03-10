import React from "react"
import styled from "styled-components"
import { buttonReset, linkReset, buttonStyle } from "../../../../mixins"

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

const StyledButton = styled.button`
  ${buttonReset}
  ${buttonStyle}
`

const StyledLink = styled.a`
  ${linkReset}
  ${buttonStyle}
`

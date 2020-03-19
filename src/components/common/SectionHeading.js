import React from "react"
import styled from "styled-components"

export const SectionHeading = ({ children }) => {
  return <StyledSectionHeading>{children}</StyledSectionHeading>
}

const StyledSectionHeading = styled.h3`
  font-size: 5rem;

  @media only screen and ${props => props.theme.media.tabPort} {
    font-size: calc(0.045 * 100vw + 0.95rem);
  }
`

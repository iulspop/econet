import React from "react"
import styled from "styled-components"

export const SectionHeading = ({ children, className, id }) => {
  return (
    <StyledSectionHeading id={id} className={className}>
      {children}
    </StyledSectionHeading>
  )
}

const StyledSectionHeading = styled.h3`
  font-size: 5rem;
  margin-bottom: 1rem;

  @media only screen and ${props => props.theme.media.tabPort} {
    font-size: calc(0.045 * 100vw + 0.95rem);
  }
`

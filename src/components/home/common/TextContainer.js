import React from "react"
import styled from "styled-components"

export const TextContainer = ({ children, className }) => {
  return (
    <StyledTextContainer className={className}>{children}</StyledTextContainer>
  )
}

const StyledTextContainer = styled.div`
  width: 50vw;

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 90vw;
  }
`

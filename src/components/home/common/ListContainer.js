import React from "react"
import styled from "styled-components"

export const ListContainer = ({ children, className }) => {
  return (
    <StyledListContainer className={className}>{children}</StyledListContainer>
  )
}

const StyledListContainer = styled.div`
  width: 50vw;

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 90vw;
  }
`

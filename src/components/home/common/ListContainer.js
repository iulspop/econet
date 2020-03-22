import React from "react"
import styled from "styled-components"

export const ListContainer = ({ children }) => {
  return <StyledListContainer>{children}</StyledListContainer>
}

const StyledListContainer = styled.div`
  width: 55vw;

  @media only screen and ${props => props.theme.media.tabLand} {
    width: 60vw;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 95vw;
  }
`

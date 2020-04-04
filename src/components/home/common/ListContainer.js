import React from "react"
import styled from "styled-components"

export const ListContainer = ({ children, serviceList }) => {
  return (
    <StyledListContainer serviceList={serviceList}>
      {children}
    </StyledListContainer>
  )
}

const StyledListContainer = styled.div`
  width: ${props => (props.serviceList ? "60vw" : "55vw")};

  @media only screen and ${props => props.theme.media.tabLand} {
    width: ${props => (props.serviceList ? "60vw" : "55vw")};
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 95vw;
  }
`

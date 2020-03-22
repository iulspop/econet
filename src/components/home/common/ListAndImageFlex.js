import React from "react"
import styled from "styled-components"

export const ListAndImageFlex = ({ children }) => {
  return <StyledListAndImageFlex>{children}</StyledListAndImageFlex>
}

const StyledListAndImageFlex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90vw;

  @media only screen and ${props => props.theme.media.tabLand} {
    width: 95vw;
  }

  @media only screen and ${props => props.theme.media.phone} {
    width: 90vw;
  }
`

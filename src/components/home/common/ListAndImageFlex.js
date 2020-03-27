import React from "react"
import styled from "styled-components"

export const ListAndImageFlex = ({ children, className, reverseWrap }) => {
  return (
    <StyledListAndImageFlex className={className} reverseWrap={reverseWrap}>
      {children}
    </StyledListAndImageFlex>
  )
}

const StyledListAndImageFlex = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: ${props => (props.reverseWrap ? "wrap-reverse" : "wrap")};
  width: 90vw;

  @media only screen and ${props => props.theme.media.tabLand} {
    width: 92vw;
  }

  @media only screen and ${props => props.theme.media.phone} {
    width: 90vw;
  }
`

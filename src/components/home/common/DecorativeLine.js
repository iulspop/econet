import React from "react"
import styled from "styled-components"

export const DecorativeLine = ({ isPageTop }) => {
  return (
    <StyledDecorativeLine
      src="/assets/decorative-horizontal-line.png"
      alt=""
      isPageTop={isPageTop}
    />
  )
}

const StyledDecorativeLine = styled.img`
  width: 90vw;

  @media only screen and ${props => props.theme.media.tabLand} {
    width: 92vw;
  }

  @media only screen and (max-width: 700px) {
    padding-top: ${props => (props.isPageTop ? "4.5rem" : "0")};
  }

  @media only screen and ${props => props.theme.media.phone} {
    width: 90vw;
  }
`

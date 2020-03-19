import React from "react"
import styled from "styled-components"

export const DecorativeLine = () => {
  return (
    <StyledDecorativeLine
      src={"/assets/decorative-horizontal-line.png"}
      alt={""}
    />
  )
}

const StyledDecorativeLine = styled.img`
  width: 90vw;

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 90vw;
  }
`

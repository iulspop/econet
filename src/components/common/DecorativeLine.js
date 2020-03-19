import React from "react"
import styled from "styled-components"

export const DecorativeLine = () => {
  return <StyledDecorativeLine />
}

const StyledDecorativeLine = styled.img`
  width: 80vw;

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 90vw;
  }
`

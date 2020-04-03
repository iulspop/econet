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
  width: 80vw;
  margin: 2rem 0;

  @media only screen and ${props => props.theme.media.phone} {
    width: 90vw;
    margin-bottom: 0;
  }
`

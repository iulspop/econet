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

  @media only screen and (max-width: 700px) {
    padding-top: ${props => (props.isPageTop ? "4.5rem" : "0")};
  }
`

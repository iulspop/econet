import React from "react"
import styled from "styled-components"

export const List = ({ children }) => {
  return <StyledList>{children}</StyledList>
}

const StyledList = styled.ol`
  display: flex;
  list-style: none;
  counter-reset: my-awesome-counter;

  font-size: 3rem;

  @media only screen and ${props => props.theme.media.tabLand} {
    font-size: 2.8rem;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    font-size: 2.2rem;
  }

  @media only screen and ${props => props.theme.media.phone} {
    flex-wrap: wrap;
  }
`

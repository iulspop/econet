import React from "react"
import styled from "styled-components"

export const SideImage = ({ ariaLabel, url }) => {
  return <StyledSideImage aria-label={ariaLabel} url={url} />
}

const StyledSideImage = styled.div`
  margin-top: 5rem;
  width: 30vw;
  align-item: strech;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;

  @media only screen and ${props => props.theme.media.tabPort} {
    margin-top: 4rem;
    width: 95vw;
    height: 300px;
    background-position: top;
  }
`

import React from "react"
import styled from "styled-components"

export const SideImage = ({ ariaLabel, url, serviceList }) => {
  return (
    <StyledSideImage
      aria-label={ariaLabel}
      url={url}
      serviceList={serviceList}
    />
  )
}

const StyledSideImage = styled.div`
  margin-top: 2rem;
  width: ${props => (props.serviceList ? "25vw" : "30vw")};
  align-item: strech;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 95vw;
    height: 300px;
    background-position: top;
  }
`

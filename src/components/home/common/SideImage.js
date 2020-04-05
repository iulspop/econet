import React from "react"
import styled from "styled-components"

export const SideImage = ({ ariaLabel, url, serviceList, horizontal }) => {
  return (
    <StyledSideImage
      aria-label={ariaLabel}
      url={url}
      serviceList={serviceList}
      horizontal={horizontal}
    />
  )
}

const StyledSideImage = styled.div`
  margin-top: 2rem;
  width: ${props => (props.serviceList ? "25vw" : "35vw")};
  align-item: strech;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;

  @media only screen and ${props => props.theme.media.tabPort} {
    width: ${props => (props.horizontal ? "80vw" : "90vw")};
    height: ${props => (props.horizontal ? "50vw" : "90vw")};
    background-position: top;
  }

  @media only screen and ${props => props.theme.media.phone} {
    width: 90vw;
    height: ${props => (props.horizontal ? "50vw" : "120vw")};
    background-position: top;
  }
`

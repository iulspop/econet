import React from "react"
import styled from "styled-components"

export const FlexColumn = ({ className, children }) => {
  return <StyledFlexColumn className={className}>{children}</StyledFlexColumn>
}

const StyledFlexColumn = styled.div`
  padding: 4rem 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and ${props => props.theme.media.phone} {
    padding: 2rem 0;
  }
`

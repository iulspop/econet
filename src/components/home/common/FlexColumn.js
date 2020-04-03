import React from "react"
import styled from "styled-components"

export const FlexColumn = ({ className, children }) => {
  return <StyledFlexColumn className={className}>{children}</StyledFlexColumn>
}

const StyledFlexColumn = styled.div`
  padding-top: 5rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and ${props => props.theme.media.tabLand} {
    padding: 2rem 0;
  }
`

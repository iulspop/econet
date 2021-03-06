import React from "react"
import styled from "styled-components"

export const FlexColumn = ({ className, children }) => {
  return <StyledFlexColumn className={className}>{children}</StyledFlexColumn>
}

const StyledFlexColumn = styled.div`
  padding-top: 3rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and ${props => props.theme.media.phone} {
    padding: 2rem 0;
  }
`

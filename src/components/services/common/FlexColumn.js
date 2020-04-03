import React from "react"
import styled from "styled-components"

export const FlexColumn = ({ children, className }) => {
  return <StyledFlexColumn className={className}>{children}</StyledFlexColumn>
}

const StyledFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

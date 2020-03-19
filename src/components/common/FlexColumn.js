import React from "react"
import styled from "styled-components"

export const FlexColumn = ({ className, children }) => {
  return <StyledFlexColumn className={className}>{children}</StyledFlexColumn>
}

const StyledFlexColumn = styled.div`
  padding: 7rem 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

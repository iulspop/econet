import React from "react"
import styled from "styled-components"

export const Tray = props => {
  const { showNav } = props

  return <StyledTray showNav={showNav}></StyledTray>
}

const StyledTray = styled.nav`
  width: 300px;
  height: 100vh;
  position: fixed;
  left: 0;
  z-index: 2;
  background-color: purple;

  transition: 0.3s ease;

  transform: ${props => (props.showNav ? "" : "translateX(-300px)")};
  overflow: ${props => (props.showNav ? "" : "hidden")};
`

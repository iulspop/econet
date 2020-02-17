import React from "react"
import styled from "styled-components"

export const Tray = props => {
  const { toggleNav, showNav } = props

  return (
    <>
      <StyledTray showNav={showNav}></StyledTray>
      <OverLay onClick={toggleNav} showNav={showNav} />
    </>
  )
}

const StyledTray = styled.nav`
  width: 300px;
  max-width: 60vw;
  height: 100vh;
  position: fixed;
  left: 0;
  z-index: 2;
  background-color: white;

  transition: 0.3s ease;

  transform: ${props => (props.showNav ? "" : "translateX(-300px)")};
  visibility: ${props => (props.showNav ? "" : "hidden")};
`

const OverLay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  z-index: 1;
  background-color: ${props =>
    props.showNav ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0)"};
  cursor: pointer;

  transition: 0.3s ease;

  visibility: ${props => (props.showNav ? "" : "hidden")};
`

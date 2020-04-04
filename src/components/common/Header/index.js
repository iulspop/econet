import React, { useState } from "react"
import styled from "styled-components"
import { Logo } from "./Logo"
import { Navbar } from "./Navbar"
import { Sidebar } from "./Sidebar"
import { Hamburger } from "./Hamburger"

export const Header = () => {
  const [showNav, setShowNav] = useState(false)

  function toggleNav() {
    setShowNav(!showNav)
  }

  return (
    <StyledHeader>
      <Container>
        <Logo />
        <Navbar />
        <Sidebar showNav={showNav} />
        <Overlay onClick={toggleNav} showNav={showNav} />
        <Hamburger toggleNav={toggleNav} showNav={showNav} />
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.header`
  width: 100%;
  max-width: 1800px;
  height: 130px;
  padding: 0 6rem;

  display: flex;
  justify-content: space-between;

  @media only screen and ${props => props.theme.media.tabLand} {
    height: 100px;
    padding: 0 3rem;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    height: 65px;
    padding: 0 2rem;
  }

  @media only screen and (max-width: 700px) {
    background-color: rgba(255, 255, 255, 0.7);
    position: fixed;
    z-index: 3;
  }
`

const Overlay = styled.div`
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

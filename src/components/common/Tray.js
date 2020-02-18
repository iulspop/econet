import React from "react"
import styled from "styled-components"
import { Link, LinkNumber } from "./Links"

export const Tray = props => {
  const { toggleNav, showNav } = props

  return (
    <>
      <StyledTray showNav={showNav}>
        <MobileLink currentPage>Accueil</MobileLink>
        <MobileLink href={"#"}>À Propos</MobileLink>
        <MobileLink href={"#"}>Services</MobileLink>
        <MobileLink2 href={"#"}>Estimation</MobileLink2>
        <MobileLink href={"#"}>Contact</MobileLink>
        <MobileLinkNumber href={"#"}>514-555-5555</MobileLinkNumber>
      </StyledTray>
      <OverLay onClick={toggleNav} showNav={showNav} />
    </>
  )
}

const StyledTray = styled.nav`
  width: 320px;
  max-width: 80vw;
  height: 100vh;
  position: fixed;
  left: 0;
  z-index: 2;
  background-color: white;

  display: flex;
  flex-direction: column;

  transition: 0.3s ease;

  transform: ${props => (props.showNav ? "" : "translateX(-300px)")};
  visibility: ${props => (props.showNav ? "" : "hidden")};
`

const MobileLink = styled(Link)`
  margin: 1.5rem 0;
`

const MobileLink2 = styled(MobileLink)`
  width: 140px;
`

const MobileLinkNumber = styled(LinkNumber)`
  margin-top: 1.5rem;
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

import React from "react"
import styled from "styled-components"
import { Link, LinkNumber } from "../Links"

export const Sidebar = props => {
  const { showNav } = props

  return (
    <>
      <StyledSidebar showNav={showNav}>
        <MobileLink currentPage href={"/"}>
          Accueil
        </MobileLink>
        <MobileLink href={"#"}>À Propos</MobileLink>
        <MobileLink href={"#"}>Services</MobileLink>
        <MobileLink2 href={"/estimation"}>Estimation</MobileLink2>
        <MobileLink href={"#"}>Contact</MobileLink>
        <MobileLinkNumber href={"#"}>514-555-5555</MobileLinkNumber>
      </StyledSidebar>
    </>
  )
}

const StyledSidebar = styled.nav`
  width: 300px;
  max-width: 75vw;
  height: 100vh;
  position: fixed;
  left: 0;
  z-index: 2;
  background-color: white;
  overflow: scroll;

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

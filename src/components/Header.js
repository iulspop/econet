import React from "react"
import styled from "styled-components"

const NavHeader = styled.header`
  width: 100%;
  height: 135px;
  display: flex;
  justify-content: space-between;
`

const Nav = styled.nav`
  flex-basis: 1000px;
  display: flex;
  justify-content: space-between;
  color: blue;
`

const LogoLink = styled.a`
  align-self: center;
`

const Logo = styled.img`
  height: 100px;
`

const Link = styled.a`
  align-self: center;
`

const ToggleLanguage = styled.button``

export default function Header() {
  return (
    <NavHeader>
      <LogoLink href={"/"}>
        <Logo
          src={"assets/logo.png"}
          alr={"Nettoyage Éconet. Nettoyage écologique de tapis et de meubles"}
        ></Logo>
      </LogoLink>
      <Nav>
        <Link>Accueil</Link>
        <Link>À Propos</Link>
        <Link>Services</Link>
        <Link>Estimation</Link>
        <Link>Contact</Link>
        <ToggleLanguage>EN/FR</ToggleLanguage>
      </Nav>
    </NavHeader>
  )
}

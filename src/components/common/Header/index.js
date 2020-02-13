import React from "react"
import styled from "styled-components"
import { buttonReset } from "../../globals"

export const Header = () => {
  return (
    <Header_Container>
      <LogoLink href={"#"}>
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
    </Header_Container>
  )
}

const Header_Container = styled.header`
  width: 100%;
  height: 130px;
  padding: 0 6rem;
  display: flex;
  justify-content: space-between;
`

const Nav = styled.nav`
  flex-basis: 800px;
  display: flex;
  justify-content: space-between;
`

const LogoLink = styled.a`
  align-self: center;
  line-height: 0;
`

const Logo = styled.img`
  height: 100px;
`

const Link = styled.a`
  align-self: center;
  text-transform: uppercase;
`

const ToggleLanguage = styled.button`
  ${buttonReset}
`

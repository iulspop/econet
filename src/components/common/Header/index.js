import React from "react"
import styled, { css } from "styled-components"
import { buttonReset, linkReset } from "../../globalStyleUtils"
import { theme } from "../../theme"

export const Header = () => {
  return (
    <Header_Container>
      <LogoLink href={"#"}>
        <Logo
          src={"assets/logo.png"}
          alt={"Nettoyage Éconet. Nettoyage écologique de tapis et de meubles"}
        ></Logo>
      </LogoLink>
      <Nav>
        <Link href={"#"}>. Accueil .</Link>
        <Link href={"#"}>. À Propos .</Link>
        <Link href={"#"}>. Services .</Link>
        <Link2 href={"#"}>. Estimation .</Link2>
        <Link href={"#"}>. Contact .</Link>
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
  ${linkReset};
  align-self: center;
  text-align: center;
  text-transform: uppercase;
  width: 110px;
  height: 40px;
  transform: translateY(6px);

  &:hover {
    font-weight: 700;
    color: ${theme.colors.primary};
    border-bottom: 8px dotted ${theme.colors.primary};
  }
`

const Link2 = styled(Link)`
  width: 130px;
`

const ToggleLanguage = styled.button`
  ${buttonReset}
`

import React from "react"
import styled from "styled-components"
import { linkReset } from "../../global"
import { theme } from "../../theme"

export const Header = () => {
  return (
    <Header_Container>
      <Header_Child>
        <LogoLink href={"#"}>
          <picture>
            <source media="(max-width: 1300px)" srcset="assets/logo-slim.png" />
            <Logo
              src={"assets/logo.png"}
              alt={
                "Nettoyage Éconet. Nettoyage écologique de tapis et de meubles"
              }
            />
          </picture>
        </LogoLink>
        <Nav>
          <Link href={"#"}>. Accueil .</Link>
          <Link href={"#"}>. À Propos .</Link>
          <Link href={"#"}>. Services .</Link>
          <Link2 href={"#"}>. Estimation .</Link2>
          <Link href={"#"}>. Contact .</Link>
          <Link3 href={"#"}>514-555-5555</Link3>
          <Link4 href={"#"}>
            <ToggleBold bold>EN</ToggleBold> / <ToggleBold>FR</ToggleBold>
          </Link4>
        </Nav>
      </Header_Child>
    </Header_Container>
  )
}

const Header_Container = styled.div`
  display: flex;
  justify-content: center;
`

const Header_Child = styled.header`
  width: 100%;
  max-width: 1800px;
  height: 130px;
  padding: 0 6rem;

  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1300px) {
    height: 100px;
    padding: 0 3rem;
  }
`

const LogoLink = styled.a`
  align-self: center;

  line-height: 0;
`

const Logo = styled.img`
  height: 100px;

  @media only screen and (max-width: 1300px) {
    height: 50px;
  }
`

const Nav = styled.nav`
  flex-basis: 900px;

  display: flex;
  justify-content: space-between;
`

const Link = styled.a`
  align-self: center;

  ${linkReset};
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

const Link3 = styled(Link)`
  width: 150px;
  font-weight: 700;
`

const Link4 = styled(Link)`
  width: 80px;
`

const ToggleBold = styled.span`
  font-weight: ${props => (props.bold ? "900" : "400")};
`

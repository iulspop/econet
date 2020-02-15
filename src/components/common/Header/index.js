import React from "react"
import styled from "styled-components"
import { linkReset, buttonReset } from "../../global"
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
          <LinkNumber href={"#"}>514-555-5555</LinkNumber>
          <LinkToggleLanguage href={"#"}>
            <ToggleBold bold>EN</ToggleBold> / <ToggleBold>FR</ToggleBold>
          </LinkToggleLanguage>
        </Nav>

        <Hamburger unchecked>
          <Hamburger__Icon>&nbsp;</Hamburger__Icon>
        </Hamburger>
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

  @media only screen and (max-width: 1015px) {
    height: 65px;
    padding: 0 2rem;
  }
`

const LogoLink = styled.a`
  align-self: center;

  margin-right: 2rem; // near 1015px to prevent nav links from touching logo
  line-height: 0;
`

const Logo = styled.img`
  height: 100px;

  @media only screen and (max-width: 1300px) {
    height: 50px;
  }

  @media only screen and (max-width: 1015px) {
    height: 43px;
  }
`

const Nav = styled.nav`
  flex-basis: 900px;

  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1015px) {
    display: none;
  }
`

const Link = styled.a`
  align-self: center;

  ${linkReset};
  width: 110px;
  height: 40px;
  font-size: 1.6rem;
  text-align: center;
  text-transform: uppercase;
  transform: translateY(6px); // to center after adding border on hover

  &:hover {
    font-weight: 700;
    color: ${theme.colors.primary};
    border-bottom: 8px dotted ${theme.colors.primary};
  }
`

const Link2 = styled(Link)`
  width: 130px;
`

const LinkNumber = styled(Link)`
  width: 150px;
  height: 46px;
  transform: translateY(3px);
  font-size: 2.1rem;
  font-weight: 700;
`

const LinkToggleLanguage = styled(Link)`
  width: 80px;
`

const ToggleBold = styled.span`
  font-weight: ${props => (props.bold ? "900" : "400")};
`

const Hamburger = styled.button`
  ${buttonReset}

  &:hover > span::before {
    top: -1rem;
  }

  &:hover > span::after {
    top: 1rem;
  }

  @media only screen and (min-width: 1015px) {
    display: none;
  }
`

const Hamburger__Icon = styled.span`
  position: relative;
  margin-top: 2.5rem;

  &,
  &::before,
  &::after {
    width: 2.5rem;
    height: 2px;
    background-color: black;
    display: inline-block;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::before {
    top: -0.8rem;
  }

  &::after {
    top: 0.8rem;
  }
`

import React from "react"
import styled from "styled-components"
import { MobileNav } from "./MobileNav"
import { Link, Link2, LinkNumber, LinkToggleLanguage } from "./Links"

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <LogoLink href={"#"}>
          <picture>
            <source
              media={`${media.disableNav}`}
              srcset="assets/logo-slim.png"
            />
            <Logo
              src={"assets/logo.png"}
              alt={
                "Nettoyage Éconet. Nettoyage écologique de tapis et de meubles"
              }
            />
          </picture>
        </LogoLink>

        <Nav>
          <Link href={"#"} currentPage>
            . Accueil .
          </Link>
          <Link href={"#"}>. À Propos .</Link>
          <Link href={"#"}>. Services .</Link>
          <Link2 href={"#"}>. Estimation .</Link2>
          <Link href={"#"}>. Contact .</Link>
          <LinkNumber href={"#"}>514-555-5555</LinkNumber>
          <LinkToggleLanguage href={"#"}>EN</LinkToggleLanguage>
        </Nav>

        <MobileNav />
      </Container>
    </StyledHeader>
  )
}

export const media = {
  slimNav: "(max-width: 1350px)",
  slimNavMore: "(max-width: 1015px)",
  disableNav: "(max-width: 1350px)",
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

  @media only screen and ${media.slimNav} {
    height: 100px;
    padding: 0 3rem;
  }

  @media only screen and ${media.slimNavMore} {
    height: 65px;
    padding: 0 2rem;
  }
`

const LogoLink = styled.a`
  align-self: center;

  margin-right: 3rem;
  line-height: 0;
`

const Logo = styled.img`
  height: 100px;

  @media only screen and ${media.slimNav} {
    height: 50px;
  }

  @media only screen and ${media.slimNavMore} {
    height: 43px;
  }
`

const Nav = styled.nav`
  flex-basis: 1000px;

  display: flex;
  justify-content: space-between;

  @media only screen and ${media.disableNav} {
    display: none;
  }
`

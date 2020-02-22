import React from "react"
import styled from "styled-components"
import {
  Link,
  Link2,
  LinkNumber,
  LinkToggleLanguage,
  MobileLinkToggleLanguage,
} from "../Links"

export const Navbar = () => {
  return (
    <>
      <StyledNavbar>
        <Link href={"/"} currentPage>
          . Accueil .
        </Link>
        <Link href={"#"}>. À Propos .</Link>
        <Link href={"#"}>. Services .</Link>
        <Link2 href={"/estimation"}>. Estimation .</Link2>
        <Link href={"#"}>. Contact .</Link>
        <LinkNumber href={"#"}>514-555-5555</LinkNumber>
        <LinkToggleLanguage href={"#"}>EN</LinkToggleLanguage>
      </StyledNavbar>
      <MobileLinkToggleLanguage href={"#"}>EN</MobileLinkToggleLanguage>
    </>
  )
}

export const media = {
  enableHamburger: "(max-width: 1350px)",
  slimNav: "(max-width: 1350px)",
  slimNavMore: "(max-width: 1015px)",
  disableNav: "(max-width: 1350px)",
}

const StyledNavbar = styled.nav`
  flex-basis: 1000px;

  display: flex;
  justify-content: space-between;

  @media only screen and ${media.disableNav} {
    display: none;
  }
`

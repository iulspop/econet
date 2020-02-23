import React from "react"
import styled from "styled-components"
import {
  Link,
  LinkHome,
  LinkEstimation,
  LinkNumber,
  LinkToggleLanguage,
  MobileLinkToggleLanguage,
} from "../Links"

export const Navbar = () => {
  return (
    <React.Fragment>
      <StyledNavbar>
        <LinkHome href={"/"}>. Accueil .</LinkHome>
        <Link href={"#"}>. À Propos .</Link>
        <Link href={"#"}>. Services .</Link>
        <LinkEstimation href={"/estimation"}>. Estimation .</LinkEstimation>
        <Link href={"#"}>. Contact .</Link>
        <LinkNumber href={"#"}>514-555-5555</LinkNumber>
        <LinkToggleLanguage href={"#"}>EN</LinkToggleLanguage>
      </StyledNavbar>
      <MobileLinkToggleLanguage href={"#"}>EN</MobileLinkToggleLanguage>
    </React.Fragment>
  )
}

const StyledNavbar = styled.nav`
  flex-basis: 1000px;

  display: flex;
  justify-content: space-between;

  @media only screen and ${props => props.theme.media.tabLand} {
    display: none;
  }
`

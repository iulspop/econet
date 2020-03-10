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
import { useTranslation } from "react-i18next"

export const Navbar = () => {
  const { t, i18n } = useTranslation("Header")

  return (
    <React.Fragment>
      <StyledNavbar>
        <LinkHome href={"/"}>{t("home")}</LinkHome>
        <Link href={"#"}>{t("about")}</Link>
        <LongLink href={"#"}>{t("residential")}</LongLink>
        <LongLink href={"#"}>{t("commercial")}</LongLink>
        <LinkEstimation href={"/estimation"}>{t("contact")}</LinkEstimation>
        <LinkNumber href={"#"}>514-666-6601</LinkNumber>
        <LinkToggleLanguage
          href={"#"}
          onClick={e => {
            e.preventDefault()
            i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr")
          }}
        >
          {i18n.language === "fr" ? "EN" : "FR"}
        </LinkToggleLanguage>
      </StyledNavbar>
      <MobileLinkToggleLanguage
        onClick={e => {
          e.preventDefault()
          i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr")
        }}
      >
        {i18n.language === "fr" ? "EN" : "FR"}
      </MobileLinkToggleLanguage>
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

const LongLink = styled(Link)`
  width: 150px;
  text-align: center;
`

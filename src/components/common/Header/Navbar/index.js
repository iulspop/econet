import React, { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "styled-components"
import {
  LinkHome,
  LinkAbout,
  LinkResidential,
  LinkCommercial,
  LinkContact,
  LinkNumber,
  LinkToggleLanguage,
  MobileLinkToggleLanguage,
} from "../Links"
import { useTranslation } from "react-i18next"

export const Navbar = () => {
  const { t, i18n } = useTranslation(["Header", "Links"])
  const themeContext = useContext(ThemeContext)

  function determineLanguageToggleURL(language, page) {
    if (language === "fr") {
      switch (page) {
        case "home":
          return "/en"
        case "about":
          return "/en/about"
        case "residential":
          return "/en/residential"
        case "commercial":
          return "/en/commercial"
        case "contact":
          return "/en/contact"
        default:
          throw new Error(`Invalid page. Received: ${page}`)
      }
    } else if (language === "en") {
      switch (page) {
        case "home":
          return "/"
        case "about":
          return "/about"
        case "residential":
          return "/residential"
        case "commercial":
          return "/commercial"
        case "contact":
          return "/contact"
        default:
          throw new Error(`Invalid page. Received: ${page}`)
      }
    } else {
      throw new Error(`Invalid language. Received: ${language}`)
    }
  }

  return (
    <React.Fragment>
      <StyledNavbar>
        <LinkHome to={t("Links:home")}>{t("home")}</LinkHome>
        <LinkAbout to={t("Links:about")}>{t("about")}</LinkAbout>
        <LinkResidential to={t("Links:residential")}>
          {t("residential")}
        </LinkResidential>
        <LinkCommercial to={t("Links:commercial")}>
          {t("commercial")}
        </LinkCommercial>
        <LinkContact to={t("Links:contact")}>{t("contact")}</LinkContact>
        <LinkNumber href="tel:5146666601">514-666-6601</LinkNumber>
        <LinkToggleLanguage
          to={determineLanguageToggleURL(i18n.language, themeContext.page)}
        >
          {i18n.language === "fr" ? "EN" : "FR"}
        </LinkToggleLanguage>
      </StyledNavbar>
      <MobileLinkToggleLanguage
        to={determineLanguageToggleURL(i18n.language, themeContext.page)}
      >
        {i18n.language === "fr" ? "EN" : "FR"}
      </MobileLinkToggleLanguage>
    </React.Fragment>
  )
}

const StyledNavbar = styled.nav`
  flex-basis: 1070px;

  display: flex;
  justify-content: space-between;

  @media only screen and ${props => props.theme.media.tabLand} {
    display: none;
  }
`

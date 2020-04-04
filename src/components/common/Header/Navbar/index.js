import React from "react"
import styled from "styled-components"
import {
  LinkHome,
  LinkAbout,
  LinkResidential,
  LinkCommercial,
  LinkEstimation,
  LinkNumber,
  LinkToggleLanguage,
  MobileLinkToggleLanguage,
} from "../Links"
import { useTranslation } from "react-i18next"

export const Navbar = () => {
  const { t, i18n } = useTranslation(["Header", "Links"])

  return (
    <React.Fragment>
      <StyledNavbar>
        <LinkHome href={t("Links:home")}>{t("home")}</LinkHome>
        <LinkAbout href={t("Links:about")}>{t("about")}</LinkAbout>
        <LinkResidential href={t("Links:residential")}>
          {t("residential")}
        </LinkResidential>
        <LinkCommercial href={t("Links:commercial")}>
          {t("commercial")}
        </LinkCommercial>
        <LinkEstimation href={t("Links:estimation")}>
          {t("contact")}
        </LinkEstimation>
        <LinkNumber href="tel:5146666601">514-666-6601</LinkNumber>
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
  flex-basis: 1070px;

  display: flex;
  justify-content: space-between;

  @media only screen and ${props => props.theme.media.tabLand} {
    display: none;
  }
`

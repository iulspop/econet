import React from "react"
import styled from "styled-components"
import {
  LinkHome,
  LinkAbout,
  LinkResidential,
  LinkCommercial,
  LinkContact,
  LinkNumber,
} from "../Links"
import { useTranslation } from "react-i18next"

export const Sidebar = ({ showNav }) => {
  const { t } = useTranslation(["Header", "Links"])

  return (
    <>
      <StyledSidebar showNav={showNav}>
        <LinkHome to={t("Links:home")}>{t("home")}</LinkHome>
        <LinkAbout to={t("Links:about")}>{t("about")}</LinkAbout>
        <LinkResidential to={t("Links:residential")}>
          {t("residential")}
        </LinkResidential>
        <LinkCommercial to={t("Links:commercial")}>
          {t("commercial")}
        </LinkCommercial>
        <LinkContact to={t("Links:contact")}>{t("contact")}</LinkContact>
        <LinkNumber href="tel:5146666601" target="_blank">
          514-666-6601
        </LinkNumber>
      </StyledSidebar>
    </>
  )
}

const StyledSidebar = styled.nav`
  width: 300px;
  max-width: 75vw;
  height: 100vh;
  position: fixed;
  left: 0;
  z-index: 2;
  background-color: white;
  overflow: scroll;

  display: flex;
  flex-direction: column;

  transition: 0.3s ease;

  transform: ${props => (props.showNav ? "" : "translateX(-300px)")};
  visibility: ${props => (props.showNav ? "" : "hidden")};

  & > * {
    margin: 1.5rem 0;
  }
`

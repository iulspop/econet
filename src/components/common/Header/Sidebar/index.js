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
        <MobileLinkHome href={t("Links:home")}>{t("home")}</MobileLinkHome>
        <MobileLinkAbout href={t("Links:about")}>{t("about")}</MobileLinkAbout>
        <MobileLinkResidential href={t("Links:residential")}>
          {t("residential")}
        </MobileLinkResidential>
        <MobileLinkCommercial href={t("Links:commercial")}>
          {t("commercial")}
        </MobileLinkCommercial>
        <MobileLinkContact href={t("Links:contact")}>
          {t("contact")}
        </MobileLinkContact>
        <MobileLinkNumber href="tel:5146666601">514-666-6601</MobileLinkNumber>
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
`

const MobileLinkHome = styled(LinkHome)`
  margin: 1.5rem 0;
`

const MobileLinkAbout = styled(LinkAbout)`
  margin: 1.5rem 0;
`

const MobileLinkResidential = styled(LinkResidential)`
  margin: 1.5rem 0;
`

const MobileLinkCommercial = styled(LinkCommercial)`
  margin: 1.5rem 0;
`

const MobileLinkContact = styled(LinkContact)`
  margin: 1.5rem 0;
`

const MobileLinkNumber = styled(LinkNumber)`
  margin-top: 1.5rem;
`

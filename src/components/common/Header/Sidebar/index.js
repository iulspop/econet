import React from "react"
import styled from "styled-components"
import {
  LinkHome,
  LinkAbout,
  LinkBigger,
  LinkEstimation,
  LinkNumber,
} from "../Links"
import { useTranslation } from "react-i18next"

export const Sidebar = ({ showNav }) => {
  const { t } = useTranslation("Header")

  return (
    <>
      <StyledSidebar showNav={showNav}>
        <MobileLinkHome href={"/"}>{t("home")}</MobileLinkHome>
        <MobileLinkAbout href={"/about"}>{t("about")}</MobileLinkAbout>
        <MobileLinkBigger href={"#"}>{t("residential")}</MobileLinkBigger>
        <MobileLinkBigger href={"#"}>{t("commercial")}</MobileLinkBigger>
        <MobileLinkEstimation href={"/estimation"}>
          {t("contact")}
        </MobileLinkEstimation>
        <MobileLinkNumber href={"#"}>514-666-6601</MobileLinkNumber>
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

const MobileLinkBigger = styled(LinkBigger)`
  margin: 1.5rem 0;
`

const MobileLinkHome = styled(LinkHome)`
  margin: 1.5rem 0;
`

const MobileLinkAbout = styled(LinkAbout)`
  margin: 1.5rem 0;
`

const MobileLinkEstimation = styled(LinkEstimation)`
  margin: 1.5rem 0;
`

const MobileLinkNumber = styled(LinkNumber)`
  margin-top: 1.5rem;
`

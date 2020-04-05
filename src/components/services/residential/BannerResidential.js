import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { FlexColumn, DecorativeLine } from "../../home/common"
import {
  H1,
  H2,
  GridContainer,
  IconContainer1,
  IconContainer2,
  IconContainer3,
  IconContainer4,
  IconContainer5,
  IconLabel,
  IconImg,
} from "../common"
import { DecoratedButton } from "../../common"

export const BannerResidential = () => {
  const { t } = useTranslation(["BannerResidential", "Links"])
  return (
    <StyledFlexColumn>
      <DecorativeLine />
      <H1>{t("h1")}</H1>
      <H2>{t("h2")}</H2>
      <GridContainer>
        <IconContainer1>
          <a href="#tapis">
            <IconLabel for="icon1">{t("tapisLabel")}</IconLabel>
            <IconImg
              src="/assets/house-icon.png"
              aria-label={t("tapisLabel")}
              id="icon1"
            />
          </a>
        </IconContainer1>

        <IconContainer2>
          <a href="#stain">
            <IconLabel for="icon2">{t("stainLabel")}</IconLabel>
            <IconImg
              src="/assets/spill-icon.png"
              aria-label={t("stainLabel")}
              id="icon2"
            />
          </a>
        </IconContainer2>

        <IconContainer3>
          <a href="#furniture">
            <IconLabel for="icon3">{t("furnitureLabel")}</IconLabel>
            <IconImg
              src="/assets/couch-icon.png"
              aria-label={t("furnitureLabel")}
              id="icon3"
            />
          </a>
        </IconContainer3>

        <IconContainer4>
          <a href="#protection">
            <IconLabel for="icon4">{t("protectionLabel")}</IconLabel>
            <IconImg
              src="/assets/sparkle-icon.png"
              aria-label={t("protectionLabel")}
              id="icon4"
            />
          </a>
        </IconContainer4>

        <IconContainer5>
          <a href="#odour">
            <IconLabel for="icon5">{t("odorLabel")}</IconLabel>
            <IconImg
              src="/assets/smell-icon.png"
              aria-label={t("odorLabel")}
              id="icon5"
            />
          </a>
        </IconContainer5>
      </GridContainer>
      <DecoratedButton href={t("Links:contact")} link left right slim>
        {t("CTAButton")}
      </DecoratedButton>
    </StyledFlexColumn>
  )
}

const StyledFlexColumn = styled(FlexColumn)`
  @media only screen and (max-width: 700px) {
    padding-top: 7rem;
  }
`

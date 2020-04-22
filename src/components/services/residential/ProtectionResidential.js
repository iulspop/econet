import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import {
  FlexColumn,
  DecorativeLine,
  ListAndImageFlex,
  SideImage,
  TextContainer,
  SectionHeading,
} from "../../home/common"
import { Paragraph, ButtonContainer } from "../common"
import { DecoratedButton } from "../../common"

export const ProtectionResidential = () => {
  const { t } = useTranslation(["ProtectionResidential", "Links"])
  return (
    <StyledFlexColumn>
      <DecorativeLine />
      <ListAndImageFlex reverseWrap="true">
        <SideImage alt={t("sideImageLabel")} imageName="protection" />
        <TextContainer>
          <SectionHeading id="protection">{t("sectionHeading")}</SectionHeading>
          <Paragraph>{t("paragraph1")}</Paragraph>
          <Paragraph>{t("paragraph2")}</Paragraph>
          <ButtonContainer>
            <DecoratedButton href={t("Links:contact")} link left right slim>
              {t("CTAButton")}
            </DecoratedButton>
          </ButtonContainer>
        </TextContainer>
      </ListAndImageFlex>
    </StyledFlexColumn>
  )
}

const StyledFlexColumn = styled(FlexColumn)`
  background-image: ${props => props.theme.colors.background};
`

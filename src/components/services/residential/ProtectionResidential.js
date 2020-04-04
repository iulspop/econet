import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import {
  FlexColumn,
  DecorativeLine,
  ListAndImageFlex,
  SideImage,
  ListContainer,
  SectionHeading,
} from "../../home/common"
import { Paragraph, ButtonContainer } from "../common"
import { DecoratedButton } from "../../common"

export const ProtectionResidential = () => {
  const { t } = useTranslation("ProtectionResidential")
  return (
    <StyledFlexColumn>
      <DecorativeLine />
      <ListAndImageFlex reverseWrap="true">
        <SideImage
          ariaLabel="carpet cleaning technician handling cleaning machine"
          url="/assets/carpet-cleaning.jpg"
        />
        <ListContainer>
          <SectionHeading id="protection">{t("sectionHeading")}</SectionHeading>
          <Paragraph>{t("paragraph1")}</Paragraph>
          <Paragraph>{t("paragraph2")}</Paragraph>
          <ButtonContainer>
            <DecoratedButton left right slim>
              {t("CTAButton")}
            </DecoratedButton>
          </ButtonContainer>
        </ListContainer>
      </ListAndImageFlex>
    </StyledFlexColumn>
  )
}

const StyledFlexColumn = styled(FlexColumn)`
  background-image: ${props => props.theme.colors.background};
`

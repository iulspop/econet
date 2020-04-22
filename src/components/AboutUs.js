import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { DecoratedButton } from "./common"
import {
  DecorativeLine,
  FlexColumn,
  ListAndImageFlex,
  TextContainer,
  SideImage,
} from "./home/common"
import {
  Paragraph,
  BulletList,
  ListItemGreen,
  ListItemBrown,
  ButtonContainer,
} from "./services/common"

export const AboutUs = () => {
  const { t } = useTranslation(["AboutUs", "Links"])
  return (
    <FlexColumn>
      <DecorativeLine isPageTop="true" />
      <StyledListAndImageFlex>
        <StyledSideImage alt={t("sideImageLabel")} imageName="familyEconet" />
        <StyledTextContainer>
          <H1>{t("mainHeading")}</H1>
          <Paragraph>{t("paragraph1")}</Paragraph>
          <Paragraph>{t("paragraph2")}</Paragraph>
          <strong>{t("listHeading")}</strong>
          <BulletList>
            <ListItemGreen>{t("listItem1")}</ListItemGreen>
            <ListItemBrown>{t("listItem2")}</ListItemBrown>
            <ListItemGreen>{t("listItem3")}</ListItemGreen>
            <ListItemBrown>{t("listItem4")}</ListItemBrown>
            <ListItemGreen>{t("listItem5")}</ListItemGreen>
            <ListItemBrown>{t("listItem6")}</ListItemBrown>
          </BulletList>
          <Paragraph>
            <strong>{t("conclusion")}</strong>
          </Paragraph>
          <ButtonContainer>
            <DecoratedButton href={t("Links:contact")} link left right slim>
              {t("button")}
            </DecoratedButton>
          </ButtonContainer>
        </StyledTextContainer>
      </StyledListAndImageFlex>
    </FlexColumn>
  )
}

const StyledSideImage = styled(SideImage)`
  width: 90vw;
  height: 40vw;

  @media only screen and ${props => props.theme.media.tabPort} {
    height: 60vw;
  }

  @media only screen and ${props => props.theme.media.phone} {
    height: 70vw;
  }
`

const StyledTextContainer = styled(TextContainer)`
  width: 90vw;
  max-width: 900px;
`

const StyledListAndImageFlex = styled(ListAndImageFlex)`
  justify-content: center;
`

const H1 = styled.h1`
  font-size: 5rem;
  line-height: 1.3;
  margin-bottom: 1rem;

  @media only screen and ${props => props.theme.media.tabPort} {
    font-size: calc(0.045 * 100vw + 2rem);
  }
`

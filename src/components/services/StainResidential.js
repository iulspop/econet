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
} from "../home/common"
import {
  Paragraph,
  BulletList,
  ListItemGreen,
  ListItemBrown,
  ButtonContainer,
} from "./common"
import { DecoratedButton } from "../common"

export const StainResidential = () => {
  const { t } = useTranslation("StainResidential")
  return (
    <StyledFlexColumn>
      <DecorativeLine />
      <ListAndImageFlex reverseWrap="true">
        <SideImage
          ariaLabel="carpet cleaning technician handling cleaning machine"
          url="/assets/carpet-cleaning.jpg"
        />
        <ListContainer>
          <SectionHeading id="stain">{t("sectionHeading")}</SectionHeading>
          <Paragraph>{t("paragraph1")}</Paragraph>
          <h4>{t("listHeading1")}</h4>
          <BulletList>
            <ListItemGreen>{t("listItem1")}</ListItemGreen>
            <ListItemBrown>{t("listItem2")}</ListItemBrown>
            <ListItemGreen>{t("listItem3")}</ListItemGreen>
            <ListItemBrown>{t("listItem4")}</ListItemBrown>
          </BulletList>
          <h4>{t("listHeading2")}</h4>
          <BulletList>
            <ListItemGreen>{t("listItem5")}</ListItemGreen>
            <ListItemBrown>{t("listItem6")}</ListItemBrown>
          </BulletList>
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
  background-image: linear-gradient(
    109.6deg,
    rgba(204, 228, 247, 1) 11.2%,
    rgba(237, 246, 250, 1) 100.2%
  );
`

import React from "react"
import { useTranslation } from "react-i18next"
import {
  FlexColumn,
  DecorativeLine,
  ListAndImageFlex,
  SideImage,
  TextContainer,
  SectionHeading,
} from "../../home/common"
import {
  Paragraph,
  BulletList,
  ListItemGreen,
  ListItemBrown,
  ButtonContainer,
} from "../common"
import { DecoratedButton } from "../../common"

export const FurnitureResidential = () => {
  const { t } = useTranslation(["FurnitureResidential", "Links"])
  return (
    <FlexColumn>
      <DecorativeLine />
      <ListAndImageFlex>
        <TextContainer>
          <SectionHeading id="furniture">{t("sectionHeading")}</SectionHeading>
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
            <ListItemGreen>{t("listItem7")}</ListItemGreen>
          </BulletList>
          <ButtonContainer>
            <DecoratedButton href={t("Links:contact")} link left right slim>
              {t("CTAButton")}
            </DecoratedButton>
          </ButtonContainer>
        </TextContainer>
        <SideImage alt={t("sideImageLabel")} imageName="upholsteryCleaning" />
      </ListAndImageFlex>
    </FlexColumn>
  )
}

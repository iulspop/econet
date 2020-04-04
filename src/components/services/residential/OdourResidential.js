import React from "react"
import { useTranslation } from "react-i18next"
import {
  FlexColumn,
  DecorativeLine,
  ListAndImageFlex,
  SideImage,
  ListContainer,
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

export const OdourResidential = () => {
  const { t } = useTranslation("OdourResidential")
  return (
    <FlexColumn>
      <DecorativeLine />
      <ListAndImageFlex>
        <ListContainer>
          <SectionHeading id="odour">{t("sectionHeading")}</SectionHeading>
          <Paragraph>{t("paragraph1")}</Paragraph>
          <h4>{t("listHeading1")}</h4>
          <BulletList>
            <ListItemGreen>{t("listItem1")}</ListItemGreen>
            <ListItemBrown>{t("listItem2")}</ListItemBrown>
            <ListItemGreen>{t("listItem3")}</ListItemGreen>
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
        <SideImage
          ariaLabel="carpet cleaning technician handling cleaning machine"
          url="/assets/carpet-cleaning.jpg"
        />
      </ListAndImageFlex>
    </FlexColumn>
  )
}

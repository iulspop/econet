import React from "react"
import { useTranslation } from "react-i18next"
import { DecoratedButton } from "./common"
import {
  DecorativeLine,
  FlexColumn,
  ListAndImageFlex,
  ListContainer,
  SectionHeading,
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
      <ListAndImageFlex>
        <ListContainer>
          <SectionHeading>{t("mainHeading")}</SectionHeading>
          <Paragraph>{t("paragraph1")}</Paragraph>
          <Paragraph>{t("paragraph2")}</Paragraph>
          <h4>{t("listHeading")}</h4>
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
        </ListContainer>
        <SideImage
          ariaLabel="smiling Javier Romero, owner of Econet"
          url="/assets/smiling-owner.jpg"
        />
      </ListAndImageFlex>
    </FlexColumn>
  )
}

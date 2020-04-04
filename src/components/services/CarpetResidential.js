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
import { DecoratedButton } from "../common"

export const CarpetResidential = () => {
  const { t } = useTranslation("CarpetCleaning")
  return (
    <StyledFlexColumn>
      <DecorativeLine />
      <ListAndImageFlex reverseWrap="true">
        <SideImage
          ariaLabel="carpet cleaning technician handling cleaning machine"
          url="/assets/carpet-cleaning.jpg"
        />
        <ListContainer>
          <SectionHeading id="tapis">{t("sectionHeading")}</SectionHeading>
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
            <ListItemBrown>{t("listItem8")}</ListItemBrown>
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

const Paragraph = styled.p`
  margin-bottom: 2rem;
`

const BulletList = styled.ul`
  list-style: none;
  margin-left: 2.5rem;
  margin-bottom: 3rem;
`

const ListItemGreen = styled.li`
  position: relative;
  line-height: 1.5;
  margin-bottom: 1rem;

  &::before {
    content: " ";
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primary};

    position: absolute;
    top: 53%;
    transform: translateY(-50%);
    left: -2.4rem;
  }
`

const ListItemBrown = styled(ListItemGreen)`
  &::before {
    background-color: ${props => props.theme.colors.secondary};
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

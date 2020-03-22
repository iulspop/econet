import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { DecoratedButton } from "../common"
import {
  DecorativeLine,
  FlexColumn,
  List,
  ListAndImageFlex,
  ListContainer,
  SectionHeading,
  SideImage,
} from "./common"

export const ServiceList = () => {
  const { t } = useTranslation("ServiceList")
  return (
    <FlexColumn>
      <DecorativeLine />

      <ListAndImageFlex>
        <SideImage
          aria-label="Javier, nettoyage econet owner"
          url="/assets/biopic.png"
        />

        <ListContainer>
          <SectionHeading>{t("sectionHeading")}</SectionHeading>

          <List>
            <LeftList>
              <ListItemGreen>{t("listItem1")}</ListItemGreen>
              <ListItemBrown>{t("listItem2")}</ListItemBrown>
              <ListItemGreen>{t("listItem3")}</ListItemGreen>
              <ListItemBrown>{t("listItem4")}</ListItemBrown>
              <ListItemGreen>{t("listItem5")}</ListItemGreen>
            </LeftList>
            <OldList>
              <ListItemGreen>{t("listItem6")}</ListItemGreen>
              <ListItemBrown>{t("listItem7")}</ListItemBrown>
              <ListItemGreen>{t("listItem8")}</ListItemGreen>
              <ListItemBrown>{t("listItem9")}</ListItemBrown>
              <ListItemGreen>{t("listItem10")}</ListItemGreen>
            </OldList>
          </List>

          <ButtonContainer>
            <DecoratedButton left right link slim href="/services">
              {t("button")}
            </DecoratedButton>
          </ButtonContainer>
        </ListContainer>
      </ListAndImageFlex>
    </FlexColumn>
  )
}

const OldList = styled.ul`
  list-style: none;
  margin-top: 6rem;
  margin-left: 5rem;
  font-size: calc(0.00932203 * 100vw + 1.60169rem); // (3rem to 1.9rem)

  @media only screen and ${props => props.theme.media.tabLand} {
    flex-basis: 100vw;
    margin-top: 0rem;
    margin-left: 2rem;
  }
`

const LeftList = styled(OldList)`
  margin-left: 0;

  @media only screen and ${props => props.theme.media.tabLand} {
    margin-top: 2rem;
  }
`

const ListItemGreen = styled.li`
  position: relative;

  &::before {
    content: " ";
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin-right: 1rem;

    position: absolute;
    top: 50%;
    left: -2.4rem;
    transform: translateY(-40%);

    background-color: ${props => props.theme.colors.primary};
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
  margin: 10rem 0;

  @media only screen and ${props => props.theme.media.tabLand} {
    margin: 2rem 0;
  }
`

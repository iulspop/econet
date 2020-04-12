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
  const { t } = useTranslation(["ServiceList", "Links"])
  return (
    <FlexColumn>
      <DecorativeLine />

      <ListAndImageFlex reverseWrap={true}>
        <SideImage
          ariaLabel="carpet cleaning technician handling cleaning machine"
          imageName="vacuumCloseup"
          serviceList={true}
          horizontal="true"
        />

        <ListContainer serviceList={true}>
          <SectionHeading>{t("sectionHeading")}</SectionHeading>

          <List>
            <LeftListContainer>
              <ListItemGreen>{t("listItem1")}</ListItemGreen>
              <ListItemGreen>{t("listItem2")}</ListItemGreen>
              <ListItemGreen>{t("listItem3")}</ListItemGreen>
              <ListItemGreen>{t("listItem4")}</ListItemGreen>
              <ListItemGreen>{t("listItem5")}</ListItemGreen>
            </LeftListContainer>
            <RightListContainer>
              <ListItemGreen>{t("listItem6")}</ListItemGreen>
              <ListItemGreen>{t("listItem7")}</ListItemGreen>
              <ListItemGreen>{t("listItem8")}</ListItemGreen>
              <ListItemGreen>{t("listItem9")}</ListItemGreen>
              <ListItemGreen>{t("listItem10")}</ListItemGreen>
            </RightListContainer>
          </List>

          <ButtonContainer>
            <DecoratedButton left right link slim href={t("Links:residential")}>
              {t("button")}
            </DecoratedButton>
          </ButtonContainer>
        </ListContainer>
      </ListAndImageFlex>
    </FlexColumn>
  )
}

const RightListContainer = styled.div`
  list-style: none;
  margin-left: 6rem;
  font-size: calc(0.00932203 * 100vw + 1.60169rem); // (3rem to 1.9rem)

  @media only screen and ${props => props.theme.media.tabLand} {
    flex-basis: 100vw;
    margin-left: 3rem;
    margin-top: 0rem;
  }
`

const LeftListContainer = styled(RightListContainer)`
  margin-left: 3rem;

  @media only screen and ${props => props.theme.media.tabLand} {
    margin-left: 3rem;
  }
`

const ListItemGreen = styled.li`
  position: relative;
  line-height: 1.3;
  margin-bottom: 1rem;

  &::before {
    content: " ";
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin-right: 1rem;
    background-color: ${props => props.theme.colors.primary};

    position: absolute;
    top: 14px;
    left: -2.4rem;

    @media only screen and ${props => props.theme.media.tabLand} {
      top: 11px;
    }

    @media only screen and ${props => props.theme.media.tabPort} {
      top: 10px;
    }

    @media only screen and ${props => props.theme.media.phone} {
      top: 6px;
    }
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;

  @media only screen and ${props => props.theme.media.tabLand} {
    margin-top: 2rem;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    margin-top: 4rem;
  }

  @media only screen and ${props => props.theme.media.phone} {
    margin-top: 1rem;
  }
`

import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { DecoratedButton } from "../common"
import {
  DecorativeLine,
  FlexColumn,
  ListContainer,
  ListAndImageFlex,
  TextContainer,
  SectionHeading,
  SideImage,
} from "./common"

export const ChooseUs = () => {
  const { t } = useTranslation(["ChooseUs", "Links"])
  return (
    <StyledFlexColumn>
      <DecorativeLine />

      <ListAndImageFlex>
        <TextContainer>
          <SectionHeading>{t("sectionHeading")}</SectionHeading>

          <ListContainer>
            <LeftList>
              <ListItem>
                <ListItemHeading>{t("listItemHeading1")}</ListItemHeading>
                <ListItemParagraph>{t("listItemParagraph1")}</ListItemParagraph>
              </ListItem>
              <ListItem>
                <ListItemHeading>{t("listItemHeading2")}</ListItemHeading>
                <ListItemParagraph>{t("listItemParagraph2")}</ListItemParagraph>
              </ListItem>
              <ListItem>
                <ListItemHeading>{t("listItemHeading3")}</ListItemHeading>
                <ListItemParagraph>{t("listItemParagraph3")}</ListItemParagraph>
              </ListItem>
            </LeftList>

            <RightList>
              <ListItem>
                <ListItemHeading>{t("listItemHeading4")}</ListItemHeading>
                <ListItemParagraph>{t("listItemParagraph4")}</ListItemParagraph>
              </ListItem>
              <ListItem>
                <ListItemHeading>{t("listItemHeading5")}</ListItemHeading>
                <ListItemParagraph>{t("listItemParagraph5")}</ListItemParagraph>
              </ListItem>
              <ListItem>
                <ListItemHeading>{t("listItemHeading6")}</ListItemHeading>
                <ListItemParagraph>{t("listItemParagraph6")}</ListItemParagraph>
              </ListItem>
            </RightList>
          </ListContainer>

          <ButtonContainer>
            <DecoratedButton left right link slim href={t("Links:contact")}>
              {t("button")}
            </DecoratedButton>
          </ButtonContainer>
        </TextContainer>

        <SideImage alt={t("sideImageLabel")} imageName="ownerPicture" />
      </ListAndImageFlex>
    </StyledFlexColumn>
  )
}

const StyledFlexColumn = styled(FlexColumn)`
  background-image: ${props => props.theme.colors.background};
`

const LeftList = styled.ol`
  list-style: none;
`

const RightList = styled(LeftList)`
  margin-left: 5rem;

  @media only screen and ${props => props.theme.media.tabPort} {
    margin-left: 2rem;
  }

  @media only screen and ${props => props.theme.media.phone} {
    margin-left: 0rem;
  }
`

const ListItem = styled.li`
  margin-bottom: 3rem;
  counter-increment: my-awesome-counter;
  & :before {
    content: counter(my-awesome-counter) ". ";
    font-weight: 700;
  }
`

const ListItemHeading = styled.h4`
  display: inline-block;
`

const ListItemParagraph = styled.p`
  width: 23vw;
  font-size: 2.3rem;

  @media only screen and ${props => props.theme.media.tabLand} {
    width: 25vw;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 45vw;
    font-size: 2rem;
  }

  @media only screen and ${props => props.theme.media.phone} {
    width: 90vw;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

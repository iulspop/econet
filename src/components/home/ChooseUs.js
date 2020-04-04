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

export const ChooseUs = () => {
  const { t } = useTranslation("ChooseUs")
  return (
    <StyledFlexColumn>
      <DecorativeLine />

      <ListAndImageFlex>
        <ListContainer>
          <SectionHeading>{t("sectionHeading")}</SectionHeading>

          <List>
            <div>
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
            </div>

            <RightListContainer>
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
            </RightListContainer>
          </List>

          <ButtonContainer>
            <DecoratedButton left right link slim href="/estimation">
              {t("button")}
            </DecoratedButton>
          </ButtonContainer>
        </ListContainer>

        <SideImage
          ariaLabel="carpet cleaning technician handling cleaning machine"
          url="/assets/carpet-cleaning.jpg"
        />
      </ListAndImageFlex>
    </StyledFlexColumn>
  )
}

const StyledFlexColumn = styled(FlexColumn)`
  background-image: ${props => props.theme.colors.background};
`

const RightListContainer = styled.div`
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

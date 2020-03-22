import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { DecoratedButton } from "../common"
import { DecorativeLine, FlexColumn, SectionHeading } from "./common"

export const ChooseUs = () => {
  const { t } = useTranslation("ChooseUs")
  return (
    <StyledFlexColumn>
      <DecorativeLine />
      <Flex>
        <ListContainer>
          <SectionHeading>{t("sectionHeading")}</SectionHeading>

          <OrderedList>
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
          </OrderedList>

          <ButtonContainer>
            <DecoratedButton left right link slim href="/estimation">
              {t("button")}
            </DecoratedButton>
          </ButtonContainer>
        </ListContainer>

        <TechnicianImage aria-label="carpet cleaning technician handling cleaning machine" />
      </Flex>
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

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90vw;

  @media only screen and ${props => props.theme.media.tabLand} {
    width: 95vw;
  }

  @media only screen and ${props => props.theme.media.phone} {
    width: 90vw;
  }
`

const ListContainer = styled.div`
  width: 55vw;

  @media only screen and ${props => props.theme.media.tabLand} {
    width: 60vw;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 95vw;
  }
`

const TechnicianImage = styled.div`
  margin-top: 10rem;
  width: 30vw;
  align-item: strech;
  background-image: url("/assets/carpet-cleaning.jpg");
  background-size: cover;
  background-position: center;

  @media only screen and ${props => props.theme.media.tabPort} {
    margin-top: 4rem;
    width: 95vw;
    height: 300px;
    background-position: top;
  }
`

const OrderedList = styled.ol`
  display: flex;
  list-style: none;
  counter-reset: my-awesome-counter;

  font-size: 3rem;

  @media only screen and ${props => props.theme.media.tabLand} {
    font-size: 2.8rem;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    font-size: 2.2rem;
  }

  @media only screen and ${props => props.theme.media.phone} {
    flex-wrap: wrap;
  }
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
    width: 28vw;
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

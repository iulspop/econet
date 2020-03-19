import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { DecorativeLine, FlexColumn, SectionHeading } from "./common"

export const ChooseUs = () => {
  const { t } = useTranslation("ChooseUs")
  return (
    <StyledFlexColumn>
      <DecorativeLine />
      <Container>
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
      </Container>
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

const Container = styled.div`
  width: 80vw;

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 90vw;
  }
`

const OrderedList = styled.ol`
  display: flex;
  list-style-position: inside;
  font-size: 3rem;
`

const RightListContainer = styled.div`
  margin-left: 5rem;
`

const ListItem = styled.li`
  margin-bottom: 3rem;
  & ::marker {
    font-weight: 700;
  }
`

const ListItemHeading = styled.h4`
  display: inline-block;
`

const ListItemParagraph = styled.p`
  width: 25vw;
  font-size: 2.3rem;
`

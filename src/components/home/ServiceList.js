import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { DecoratedButton } from "../common"
import { DecorativeLine, FlexColumn, SectionHeading } from "./common"

export const ServiceList = () => {
  const { t } = useTranslation("ServiceList")
  return (
    <FlexColumn>
      <DecorativeLine />
      <Container>
        <SectionHeading>{t("sectionHeading")}</SectionHeading>
        <Flex>
          <div>
            <Flex>
              <LeftList>
                <ListItemGreen>{t("listItem1")}</ListItemGreen>
                <ListItemBrown>{t("listItem2")}</ListItemBrown>
                <ListItemGreen>{t("listItem3")}</ListItemGreen>
                <ListItemBrown>{t("listItem4")}</ListItemBrown>
                <ListItemGreen>{t("listItem5")}</ListItemGreen>
              </LeftList>
              <List>
                <ListItemGreen>{t("listItem6")}</ListItemGreen>
                <ListItemBrown>{t("listItem7")}</ListItemBrown>
                <ListItemGreen>{t("listItem8")}</ListItemGreen>
                <ListItemBrown>{t("listItem9")}</ListItemBrown>
                <ListItemGreen>{t("listItem10")}</ListItemGreen>
              </List>
            </Flex>
            <ButtonContainer>
              <DecoratedButton left right link href="/services">
                {t("button")}
              </DecoratedButton>
            </ButtonContainer>
          </div>
          {/* <ImageContainer>
            <div>
              <img src="/assets/biopic.png" alt="{t('figcaption')}" />
              <FigCaption>{t("figCaption")}</FigCaption>
            </div>
          </ImageContainer> */}
        </Flex>
      </Container>
    </FlexColumn>
  )
}

const Container = styled.div`
  width: 80vw;

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 90vw;
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10rem 0;

  @media only screen and ${props => props.theme.media.tabLand} {
    margin: 2rem 0;
  }
`

const List = styled.ul`
  list-style-position: inside;
  margin-top: 6rem;
  margin-left: 3rem;
  font-size: calc(0.00932203 * 100vw + 1.60169rem); // (3rem to 1.9rem)

  @media only screen and ${props => props.theme.media.tabLand} {
    flex-basis: 100vw;
    margin: 0;
  }
`

const LeftList = styled(List)`
  margin-left: 0;

  @media only screen and ${props => props.theme.media.tabLand} {
    margin-top: 2rem;
  }
`

const ListItemGreen = styled.li`
  &::marker {
    color: ${props => props.theme.colors.primary};
  }
`

const ListItemBrown = styled.li`
  &::marker {
    color: ${props => props.theme.colors.secondary};
  }
`

// const ImageContainer = styled.figure`
//   margin: 4rem 0;
//   display: flex;
//   justify-content: center;
// `

// const FigCaption = styled.figcaption`
//   text-align: center;
//   font-size: 1.9rem;
// `

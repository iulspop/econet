import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

export const Story = () => {
  const { t } = useTranslation("Story")
  return (
    <FlexColumn>
      <DecorativeLine src={"/assets/decorative-horizontal-line.png"} alt={""} />
      <Flex>
        <TextContainer>
          <MainHeading>{t("mainHeading")}</MainHeading>
          <Paragraph>{t("paragraph1")}</Paragraph>
          <Paragraph>{t("paragraph2")}</Paragraph>
          <List>
            <strong>{t("listHeading")}</strong>
            <ListItemGreen>{t("listItem1")}</ListItemGreen>
            <ListItemBrown>{t("listItem2")}</ListItemBrown>
            <ListItemGreen>{t("listItem3")}</ListItemGreen>
            <ListItemBrown>{t("listItem4")}</ListItemBrown>
            <ListItemGreen>{t("listItem5")}</ListItemGreen>
            <ListItemBrown>{t("listItem6")}</ListItemBrown>
          </List>
          <Paragraph>
            <strong>{t("conclusion")}</strong>
          </Paragraph>
        </TextContainer>
        <ImageContainer>
          <div>
            <img src="/assets/biopic.png" alt="{t('figcaption')}" />
            <FigCaption>{t("figCaption")}</FigCaption>
          </div>
        </ImageContainer>
      </Flex>
    </FlexColumn>
  )
}

const DecorativeLine = styled.img`
  width: 70vw;
  margin: 2rem 0;

  @media only screen and ${props => props.theme.media.tabLand} {
    width: 70vw;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 80vw;
  }

  @media only screen and ${props => props.theme.media.phone} {
    width: 90vw;
  }
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Flex = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-between;
  font-size: 1.9rem;
  margin-bottom: 5rem;

  @media only screen and ${props => props.theme.media.tabLand} {
    width: 70vw;
    flex-wrap: wrap;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 80vw;
  }

  @media only screen and ${props => props.theme.media.phone} {
    width: 90vw;
  }
`

const TextContainer = styled.main`
  flex-basis: 50vw;

  @media only screen and ${props => props.theme.media.tabLand} {
    flex-basis: 70vw;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    flex-basis: 80vw;
  }

  @media only screen and ${props => props.theme.media.phone} {
    flex-basis: 90vw;
  }
`

const ImageContainer = styled.figure`
  display: flex;
  justify-content: center;
  margin-left: 4rem;
  margin-top: 11rem;

  @media only screen and ${props => props.theme.media.tabLand} {
    flex-grow: 1;
    margin-left: 0rem;
    margin-top: 4rem;
  }
`

const MainHeading = styled.h1`
  margin: 2rem 0;
`

const Paragraph = styled.p`
  margin-bottom: 2rem;
`

const List = styled.ul`
  list-style-position: inside;
  margin-bottom: 2rem;
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

const FigCaption = styled.figcaption`
  text-align: center;
`

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
            {t("listHeading")}
            <li>{t("listItem1")}</li>
            <li>{t("listItem2")}</li>
            <li>{t("listItem3")}</li>
            <li>{t("listItem4")}</li>
            <li>{t("listItem5")}</li>
            <li>{t("listItem6")}</li>
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
  width: 56vw;
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
  width: 56vw;
  display: flex;
  justify-content: space-between;
  font-size: 1.9rem;
  margin-bottom: 5rem;

  @media only screen and ${props => props.theme.media.tabLand} {
    width: 70vw;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 80vw;
    flex-wrap: wrap;
  }

  @media only screen and ${props => props.theme.media.phone} {
    width: 90vw;
  }
`

const TextContainer = styled.main`
  flex-basis: 38vw;

  @media only screen and ${props => props.theme.media.tabPort} {
    flex-basis: 80vw;
  }

  @media only screen and ${props => props.theme.media.phone} {
    flex-basis: 90vw;
  }
`

const ImageContainer = styled.figure`
  display: flex;
  align-self: center;
  justify-content: center;
  margin-left: 4rem;

  @media only screen and ${props => props.theme.media.tabPort} {
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

const FigCaption = styled.figcaption`
  text-align: center;
`

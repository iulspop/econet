import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { DecoratedButton } from "../common"
import { FlexColumn, DecorativeLine, SectionHeading } from "./common"

export const RegionsDesservies = () => {
  const { t } = useTranslation("RegionsDesservies")
  return (
    <FlexColumn>
      <DecorativeLine />
      <TextAndMapFlex>
        <TextContainer>
          <StyledSectionHeading>{t("sectionHeading")}</StyledSectionHeading>
          <Paragraph>{t("paragraph1")}</Paragraph>
          <ButtonContainer>
            <DecoratedButton left right slim>
              {t("button")}
            </DecoratedButton>
          </ButtonContainer>
        </TextContainer>

        <ImageOfMap aria-label={t("mapLabel")} src="/assets/service-area.jpg" />
      </TextAndMapFlex>
    </FlexColumn>
  )
}

const TextAndMapFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;

  @media only screen and ${props => props.theme.media.tabPort} {
    flex-direction: column;
    margin: 0;
  }
`

const TextContainer = styled.div`
  width: 42vw;
  margin-right: 5vw;

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 90vw;
    margin-right: 0;
  }
`

const StyledSectionHeading = styled(SectionHeading)`
  @media only screen and ${props => props.theme.media.tabLand} {
    font-size: 3.9rem;
  }

  @media only screen and ${props => props.theme.media.phone} {
    font-size: 3rem;
  }
`

const Paragraph = styled.p`
  font-size: 2.3rem;

  @media only screen and ${props => props.theme.media.tabPort} {
    font-size: 2rem;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 37vw;
  margin: 4rem 0;

  @media only screen and ${props => props.theme.media.tabLand} {
    width: 42vw;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 90vw;
  }

  @media only screen and ${props => props.theme.media.phone} {
    margin: 1rem 0;
  }
`

const ImageOfMap = styled.img`
  width: 43vw;
  height: 35vw;

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 90vw;
    height: 60vw;
    max-height: 40rem;
    min-height: 30rem;
  }
`

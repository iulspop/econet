import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

export const Sidebox = () => {
  const { t } = useTranslation("HomeForm")

  return (
    <StyledSidebox>
      <FlexContainer>
        <SideImage aria-label="" src="/assets/clock-icon.png" />
        <TextSnippet>
          <H4>{t("sideboxHeading1")}</H4>
          <Paragraph>{t("sideboxParagraph1")}</Paragraph>
        </TextSnippet>
      </FlexContainer>

      <FlexContainer>
        <SideImage aria-label="" src="/assets/communications-icon.png" />
        <TextSnippet>
          <H4>{t("sideboxHeading2")}</H4>
          <Paragraph>{t("sideboxParagraph2")}</Paragraph>
        </TextSnippet>
      </FlexContainer>

      <FlexContainer>
        <SideImage aria-label="" src="/assets/handshake-icon.png" />
        <TextSnippet>
          <H4>{t("sideboxHeading3")}</H4>
          <Paragraph>{t("sideboxParagraph3")}</Paragraph>
        </TextSnippet>
      </FlexContainer>
    </StyledSidebox>
  )
}

const StyledSidebox = styled.aside`
  width: 37vw;
  padding: 4.5rem 3rem;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.primary};
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 1390px) {
    justify-content: space-around;
    width: 35vw;
    padding: 3rem 2rem;
  }

  @media only screen and ${props => props.theme.media.tabLand} {
    flex-direction: row;
    justify-content: space-around;
    width: 95vw;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 95vw;
  }
`

const FlexContainer = styled.div`
  display: flex;

  @media only screen and ${props => props.theme.media.tabPort} {
    margin: 3rem 0;
  }

  @media only screen and ${props => props.theme.media.phone} {
    flex-direction: column;
    margin: 1.5rem 0;
  }
`

const SideImage = styled.img`
  width: 10vw;
  height: 10vw;
  margin-top: 1.1rem;
  margin-right: 2rem;
  border-radius: 50%;
  background-color: grey;
  align-self: center;

  @media only screen and ${props => props.theme.media.tabLand} {
    width: 8vw;
    height: 8vw;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 15vw;
    height: 15vw;
  }

  @media only screen and ${props => props.theme.media.phone} {
    margin: 0;
    margin-bottom: 1rem;
    width: 25vw;
    height: 25vw;
  }
`

const TextSnippet = styled.div`
  width: 23vw;

  @media only screen and (max-width: 1390px) {
    width: 19vw;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 55vw;
  }

  @media only screen and ${props => props.theme.media.phone} {
    width: 72vw;
  }
`
const H4 = styled.h4`
  font-size: 3rem;

  @media only screen and (max-width: 1390px) {
    font-size: 2.8rem;
  }

  @media only screen and ${props => props.theme.media.tabLand} {
    font-size: 2.3rem;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    font-size: 2.2rem;
  }
`

const Paragraph = styled.p`
  font-size: 2.3rem;

  @media only screen and (max-width: 1390px) {
    font-size: 2rem;
  }
`

import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

export const Sidebox = () => {
  const { t } = useTranslation("HomeForm")

  return (
    <StyledSidebox>
      <FlexContainer>
        <SideImage aria-label="" />
        <TextSnippet>
          <h4>{t("sideboxHeading1")}</h4>
          <p>{t("sideboxParagraph1")}</p>
        </TextSnippet>
      </FlexContainer>
      <FlexContainer>
        <SideImage aria-label="" />
        <TextSnippet>
          <h4>{t("sideboxHeading2")}</h4>
          <p>{t("sideboxParagraph2")}</p>
        </TextSnippet>
      </FlexContainer>
      <FlexContainer>
        <SideImage aria-label="" />
        <TextSnippet>
          <h4>{t("sideboxHeading3")}</h4>
          <p>{t("sideboxParagraph3")}</p>
        </TextSnippet>
      </FlexContainer>
    </StyledSidebox>
  )
}

const StyledSidebox = styled.aside`
  width: 35vw;
  padding: 4.5rem 3rem;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.primary};
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const FlexContainer = styled.div`
  display: flex;
`

const SideImage = styled.img`
  width: 10vw;
  height: 10vw;
  margin-right: 2rem;
  background-color: grey;
`

const TextSnippet = styled.div`
  width: 20vw;
`

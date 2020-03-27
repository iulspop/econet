import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import {
  FlexColumn,
  DecorativeLine,
  ListAndImageFlex,
  SectionHeading,
} from "../common"
import { Form } from "./Form"

export const HomeForm = () => {
  const { t } = useTranslation("HomeForm")

  return (
    <FlexColumn>
      <DecorativeLine />
      <ListAndImageFlex>
        <Sidebox>
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
        </Sidebox>

        <FormContainer>
          <SectionHeading>{t("sectionHeading")}</SectionHeading>
          <Form />
        </FormContainer>
      </ListAndImageFlex>
    </FlexColumn>
  )
}

const Sidebox = styled.aside`
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

const FormContainer = styled.div`
  width: 47vw;
`

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
import { Sidebox } from "./Sidebox"

export const HomeForm = () => {
  const { t } = useTranslation("HomeForm")

  return (
    <FlexColumn>
      <DecorativeLine />
      <ListAndImageFlex>
        <Sidebox />

        <FormContainer>
          <SectionHeading>{t("sectionHeading")}</SectionHeading>
          <Form />
        </FormContainer>
      </ListAndImageFlex>
    </FlexColumn>
  )
}

const FormContainer = styled.div`
  width: 47vw;
`

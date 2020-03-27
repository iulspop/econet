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
      <StyledFlex reverseWrap={true} justifyCenter={true}>
        <Sidebox />

        <div>
          <SectionHeading>{t("sectionHeading")}</SectionHeading>
          <Form />
        </div>
      </StyledFlex>
    </FlexColumn>
  )
}

const StyledFlex = styled(ListAndImageFlex)`
  @media only screen and ${props => props.theme.media.tabLand} {
    justify-content: center;
  }
`

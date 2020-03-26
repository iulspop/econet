import React from "react"
import { useTranslation } from "react-i18next"
import {
  FlexColumn,
  DecorativeLine,
  ListAndImageFlex,
  ListContainer,
  SectionHeading,
} from "../common"
import { Form } from "./Form"

export const HomeForm = () => {
  const { t } = useTranslation("HomeForm")

  return (
    <FlexColumn>
      <DecorativeLine />
      <ListAndImageFlex>
        <ListContainer>
          <SectionHeading>{t("sectionHeading")}</SectionHeading>
          <Form />
        </ListContainer>
      </ListAndImageFlex>
    </FlexColumn>
  )
}

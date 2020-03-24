import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { DecorativeLine, FlexColumn } from "./common"

export const HomeForm = () => {
  const { t } = useTranslation("ChooseUs")
  return (
    <FlexColumn>
      <DecorativeLine />
      <h1>hello</h1>
    </FlexColumn>
  )
}

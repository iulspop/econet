import React from "react"
import { useTranslation } from "react-i18next"
import {
  RadioLabel,
  RadioInput,
  RadioInputMarginLeft,
  RadioGroup,
  RadioLegend,
} from "../../common"

export const AnimalsQuestion = () => {
  const { t } = useTranslation("Form")
  return (
    <RadioGroup>
      <RadioLegend>{t("animalsQuestion")}</RadioLegend>

      <RadioLabel>
        <RadioInput type="radio" name="animals" value="oui" />
        {t("yes")}
      </RadioLabel>

      <RadioLabel>
        <RadioInputMarginLeft type="radio" name="animals" value="non" />
        {t("no")}
      </RadioLabel>
    </RadioGroup>
  )
}

import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import {
  RadioLabel,
  RadioInput,
  RadioInputMarginLeft,
  SelectWide,
  Fieldset,
  RadioGroup,
  Legend,
  RadioLegend,
  Label,
} from "../../common"

export const AreaQuestions = ({ selectedOptions }) => {
  const { t } = useTranslation("Form")
  return (
    <OptionsFieldset selectedOptions={selectedOptions}>
      <Legend>{t("areaQuestionsLegend")}</Legend>
      <Label>
        {t("areaQuestion")}
        <SelectWide name="area">
          <option value="<300">{t("areaQuestion300")}</option>
          <option value="300-700">{t("areaQuestion300700")}</option>
          <option value="700-1000">{t("areaQuestion7001000")}</option>
          <option value="1000-2000">{t("areaQuestion10002000")}</option>
          <option value="2000-3000">{t("areaQuestion20003000")}</option>
          <option value="3000-4000">{t("areaQuestion30004000")}</option>
          <option value="4000-5000">{t("areaQuestion40005000")}</option>
          <option value="5000+">{t("areaQuestion5000")}</option>
        </SelectWide>
      </Label>

      <RadioGroup>
        <RadioLegend>{t("highTrafficQuestion")}</RadioLegend>
        <RadioLabel>
          <RadioInput type="radio" name="traffic" value="true" />
          {t("yes")}
        </RadioLabel>
        <RadioLabel>
          <RadioInputMarginLeft type="radio" name="traffic" value="false" />
          {t("no")}
        </RadioLabel>
      </RadioGroup>
    </OptionsFieldset>
  )
}

const OptionsFieldset = styled(Fieldset)`
  display: ${props =>
    props.selectedOptions.tapis || props.selectedOptions.cirage
      ? "block"
      : "none"};
`

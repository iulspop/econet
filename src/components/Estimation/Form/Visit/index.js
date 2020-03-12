import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import {
  Label,
  RadioLabel,
  Input,
  RadioInput,
  RadioInputMarginLeft,
  Select,
  Fieldset,
  RadioGroup,
  Legend,
  RadioLegend,
  InputsContainer,
  NextButton,
  BackButton,
} from "../common"

export const Visit = ({ formStep, backwardFormStep }) => {
  const { t } = useTranslation("Visit")
  return (
    <VisitFieldset formStep={formStep}>
      <Legend>{t("visitLegend")}</Legend>
      <InputsContainer>
        <Label>
          {t("date")}
          <Input type="date" name="date" />
        </Label>
        <Label>
          {t("time")}
          <Select name="time">
            <option value="8 AM">8 AM</option>
            <option value="8:30 AM">8:30 AM</option>
            <option value="9 AM">9 AM</option>
            <option value="9:30 AM">9:30 AM</option>
            <option value="10 AM">10 AM</option>
            <option value="10:30 AM">10:30 AM</option>
            <option value="11 AM">11 AM</option>
            <option value="11:30 AM">11:30 AM</option>
            <option value="12 AM">12 AM</option>
            <option value="12:30 AM">12:30 AM</option>
            <option value="1 PM">1 PM</option>
            <option value="1:30 PM">1:30 PM</option>
            <option value="2 PM">2 PM</option>
            <option value="2:30 PM">2:30 PM</option>
            <option value="3 PM">3 PM</option>
            <option value="3:30 PM">3:30 PM</option>
            <option value="4 PM">4 PM</option>
            <option value="4:30 PM">4:30 PM</option>
            <option value="5 PM">5 PM</option>
            <option value="5:30 PM">5:30 PM</option>
            <option value="6 PM">6 PM</option>
            <option value="6:30 PM">6:30 PM</option>
          </Select>
        </Label>
        <RadioGroup>
          <RadioLegend>{t("parking")}</RadioLegend>
          <RadioLabel>
            <RadioInput type="radio" name="parking" value="true" />
            {t("yes")}
          </RadioLabel>
          <RadioLabel>
            <RadioInputMarginLeft type="radio" name="parking" value="false" />
            {t("no")}
          </RadioLabel>
        </RadioGroup>
        <BackButton type="button" onClick={backwardFormStep}>
          {t("send")}
        </BackButton>
        <NextButton type="submit">Envoyer</NextButton>
      </InputsContainer>
    </VisitFieldset>
  )
}

const VisitFieldset = styled(Fieldset)`
  display: ${props => (props.formStep === 2 ? "block" : "none")};
`

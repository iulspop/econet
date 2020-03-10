import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import {
  Label,
  RadioLabel,
  Input,
  RadioInput,
  RadioInputMarginLeft,
  Fieldset,
  RadioGroup,
  Legend,
  RadioLegend,
  InputsContainer,
  NextButton,
} from "../common"

export const Contact = ({ formStep, forwardFormStep, formName }) => {
  const { t } = useTranslation("Form")
  return (
    <ContactFieldset formStep={formStep}>
      <Legend>{t("contactSectionLegend")}</Legend>
      <InputsContainer>
        <Label>
          {t("name")}
          <Input type="text" name="name" />
        </Label>

        {formName === "commercial-estimation" ? (
          <Label>
            {t("company")}
            <Input type="text" name="company" />
          </Label>
        ) : (
          <></>
        )}

        <Label>
          {t("email")}
          <Input type="email" name="email" />
        </Label>

        <Label>
          {t("phone")}
          <Input type="tel" name="phone" />
        </Label>

        <RadioGroup>
          <RadioLegend>{t("language")}</RadioLegend>

          <DisplayBlockOnPhone>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="langue"
                value="french"
                defaultChecked="checked"
              />
              {t("french")}
            </RadioLabel>
          </DisplayBlockOnPhone>

          <DisplayBlockOnPhone>
            <RadioLabel>
              <RadioInputMarginLeftNotOnPhone
                type="radio"
                name="langue"
                value="english"
              />
              {t("english")}
            </RadioLabel>
          </DisplayBlockOnPhone>

          <DisplayBlockOnPhone>
            <RadioLabel>
              <RadioInputMarginLeftNotOnPhone
                type="radio"
                name="langue"
                value="indifferent"
              />
              {t("indifferent")}
            </RadioLabel>
          </DisplayBlockOnPhone>
        </RadioGroup>
        <NextButton type="button" onClick={forwardFormStep}>
          {t("continue")}
        </NextButton>
      </InputsContainer>
    </ContactFieldset>
  )
}

const ContactFieldset = styled(Fieldset)`
  display: ${props => (props.formStep === 0 ? "block" : "none")};
`

const DisplayBlockOnPhone = styled.span`
  @media only screen and ${props => props.theme.media.phone} {
    display: block;
  }
`

const RadioInputMarginLeftNotOnPhone = styled(RadioInputMarginLeft)`
  @media only screen and ${props => props.theme.media.phone} {
    margin-left: 0;
  }
`

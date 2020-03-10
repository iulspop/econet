import React, { useState } from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import {
  Fieldset,
  Legend,
  InputsContainer,
  NextButton,
  BackButton,
} from "../common"
import { CheckboxGroup } from "./CheckboxGroup"
import { AnimalsQuestion } from "./AnimalsQuestion"
import { TachesQuestion } from "./TachesQuestion"
import { Options } from "./Options"

export const Service = ({
  formStep,
  forwardFormStep,
  backwardFormStep,
  formName,
}) => {
  const { t } = useTranslation("Form")

  const [selectedOptions, setSelectedOptions] = useState({
    tapis: false,
    meubles: false,
    cirage: false,
    detachage: false,
  })

  function toggleOption(key) {
    setSelectedOptions(prev => {
      return { ...prev, [key]: !prev[key] }
    })
  }

  return (
    <ServiceFieldset formStep={formStep}>
      <Legend>{t("serviceSectionLegend")}</Legend>
      <InputsContainer>
        <CheckboxGroup toggleOption={toggleOption} formName={formName} />

        {formName === "residential-estimation" ? <AnimalsQuestion /> : <></>}

        <TachesQuestion selectedOptions={selectedOptions} />

        <Options selectedOptions={selectedOptions} />

        <BackButton type="button" onClick={backwardFormStep}>
          {t("return")}
        </BackButton>
        <NextButton type="button" onClick={forwardFormStep}>
          {t("continue")}
        </NextButton>
      </InputsContainer>
    </ServiceFieldset>
  )
}

const ServiceFieldset = styled(Fieldset)`
  display: ${props => (props.formStep === 1 ? "block" : "none")};
`

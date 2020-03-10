import React, { useState } from "react"
import styled from "styled-components"
import {
  Fieldset,
  Legend,
  InputsContainer,
  NextButton,
  BackButton,
} from "../common"
import { CheckboxCommercial } from "./CheckboxCommercial"
import { CheckboxResidential } from "./CheckboxResidential"
import { AnimalsQuestion } from "./AnimalsQuestion"
import { TachesQuestion } from "./TachesQuestion"
import { Options } from "./Options"

export const Service = ({
  formStep,
  forwardFormStep,
  backwardFormStep,
  formName,
}) => {
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
      <Legend>Maintenant, parlez-nous des services que vous désirez</Legend>
      <InputsContainer>
        {formName === "commercial-estimation" ? (
          <CheckboxCommercial toggleOption={toggleOption} />
        ) : (
          <CheckboxResidential toggleOption={toggleOption} />
        )}

        {formName === "residential-estimation" ? <AnimalsQuestion /> : <></>}

        <TachesQuestion selectedOptions={selectedOptions} />

        <Options selectedOptions={selectedOptions} />

        <BackButton type="button" onClick={backwardFormStep}>
          Retourner
        </BackButton>
        <NextButton type="button" onClick={forwardFormStep}>
          Continuer
        </NextButton>
      </InputsContainer>
    </ServiceFieldset>
  )
}

const ServiceFieldset = styled(Fieldset)`
  display: ${props => (props.formStep === 1 ? "block" : "none")};
`

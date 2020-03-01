import React, { useState } from "react"
import styled from "styled-components"
import {
  RadioLabel,
  RadioInput,
  Fieldset,
  RadioGroup,
  Legend,
  InputsContainer,
  NextButton,
  BackButton,
} from "../common"
import { CarpetOptions } from "./CarpetOptions"

export const Service = props => {
  const { formStep, forwardFormStep, backwardFormStep } = props

  const [showCarpet, setShowCarpet] = useState(false)

  function toggleCarpet() {
    setShowCarpet(!showCarpet)
    console.log("potato")
  }

  return (
    <ServiceFieldset formStep={formStep}>
      <Legend>Maintenant, parlez-nous des services que vous désirez</Legend>
      <InputsContainer>
        <RadioGroup>
          <div>
            <RadioInput
              type="checkbox"
              name="tapis"
              id="tapis"
              onClick={toggleCarpet}
            />
            <CheckboxLabel for="tapis">Nettoyage de tapis</CheckboxLabel>
          </div>
          <div>
            <RadioInput type="checkbox" name="meubles" id="meubles" />
            <CheckboxLabel for="meubles">Nettoyage de meubles</CheckboxLabel>
          </div>
          <div>
            <RadioInput type="checkbox" name="cirage" id="cirage" />
            <CheckboxLabel for="cirage">Cirage</CheckboxLabel>
          </div>
        </RadioGroup>

        <CarpetOptions showCarpet={showCarpet} />

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

const CheckboxLabel = styled(RadioLabel)`
  margin-left: 0.7rem;
`

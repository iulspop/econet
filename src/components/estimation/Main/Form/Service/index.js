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
import { Options } from "./Options"

export const Service = props => {
  const { formStep, forwardFormStep, backwardFormStep } = props

  const [selectedOptions, setSelectedOptions] = useState({
    tapis: false,
    meubles: false,
    cirage: false,
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
        <RadioGroup>
          <div>
            <CheckboxLabel>
              <RadioInput
                type="checkbox"
                name="tapis"
                onClick={() => toggleOption("tapis")}
              />
              Nettoyage de tapis
            </CheckboxLabel>
          </div>
          <div>
            <CheckboxLabel>
              <RadioInput type="checkbox" name="meubles" />
              Nettoyage de meubles
            </CheckboxLabel>
          </div>
          <div>
            <CheckboxLabel>
              <RadioInput
                type="checkbox"
                name="cirage"
                onClick={() => toggleOption("cirage")}
              />
              Cirage
            </CheckboxLabel>
          </div>
        </RadioGroup>

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

const CheckboxLabel = styled(RadioLabel)`
  margin-left: 0.7rem;
`

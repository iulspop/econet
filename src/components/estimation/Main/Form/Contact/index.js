import React from "react"
import styled from "styled-components"
import {
  Label,
  RadioLabel,
  Input,
  RadioInput,
  Fieldset,
  RadioGroup,
  Legend,
  RadioLegend,
  InputsContainer,
  NextButton,
} from "../common"

export const Contact = props => {
  const { formStep, forwardFormStep } = props

  return (
    <ContactFieldset formStep={formStep}>
      <Legend>
        On aurait juste besoin de quelques informations pour vous envoyer
        l'estimation et rester en contact
      </Legend>
      <InputsContainer>
        <Label for="name">Nom et prénom</Label>
        <Input type="text" name="name" id="name" />
        <Label for="company">Compagnie</Label>
        <Input type="text" name="company" id="company" />
        <Label for="email">Courriel</Label>
        <Input type="email" name="email" id="email" />
        <Label for="phone">Téléphone</Label>
        <Input type="tel" name="phone" id="phone" />
        <RadioGroup>
          <RadioLegend>Langue de communication</RadioLegend>

          <RadioInput
            type="radio"
            name="langue"
            id="french"
            value="french"
            defaultChecked="checked"
          />
          <RadioLabel for="french">Français</RadioLabel>

          <RadioInput type="radio" name="langue" id="english" value="english" />
          <RadioLabel for="english">Anglais</RadioLabel>

          <RadioInput
            type="radio"
            name="langue"
            id="indifferent"
            value="indifferent"
          />
          <RadioLabel for="indifferent">Indifférent</RadioLabel>
        </RadioGroup>
        <NextButton type="button" onClick={forwardFormStep}>
          Continuer
        </NextButton>
      </InputsContainer>
    </ContactFieldset>
  )
}

const ContactFieldset = styled(Fieldset)`
  display: ${params => (params.formStep === 0 ? "block" : "none")};
`

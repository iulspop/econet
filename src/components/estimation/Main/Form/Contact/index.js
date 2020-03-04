import React from "react"
import styled from "styled-components"
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
  return (
    <ContactFieldset formStep={formStep}>
      <Legend>
        On aurait juste besoin de quelques informations pour vous envoyer
        l'estimation et rester en contact
      </Legend>
      <InputsContainer>
        <Label>
          Nom et prénom
          <Input type="text" name="name" />
        </Label>

        {formName === "commercial-estimation" ? (
          <Label>
            Compagnie
            <Input type="text" name="company" />
          </Label>
        ) : (
          <></>
        )}

        <Label>
          Courriel
          <Input type="email" name="email" />
        </Label>

        <Label>
          Téléphone
          <Input type="tel" name="phone" />
        </Label>

        <RadioGroup>
          <RadioLegend>Langue de communication</RadioLegend>

          <RadioLabel>
            <RadioInput
              type="radio"
              name="langue"
              value="french"
              defaultChecked="checked"
            />
            Français
          </RadioLabel>

          <RadioLabel>
            <RadioInputMarginLeft type="radio" name="langue" value="english" />
            Anglais
          </RadioLabel>

          <RadioLabel>
            <RadioInputMarginLeft
              type="radio"
              name="langue"
              value="indifferent"
            />
            Indifférent
          </RadioLabel>
        </RadioGroup>
        <NextButton type="button" onClick={forwardFormStep}>
          Continuer
        </NextButton>
      </InputsContainer>
    </ContactFieldset>
  )
}

const ContactFieldset = styled(Fieldset)`
  display: ${props => (props.formStep === 0 ? "block" : "none")};
`

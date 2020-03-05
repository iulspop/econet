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

          <DisplayBlockOnPhone>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="langue"
                value="french"
                defaultChecked="checked"
              />
              Français
            </RadioLabel>
          </DisplayBlockOnPhone>

          <DisplayBlockOnPhone>
            <RadioLabel>
              <RadioInputMarginLeftNotOnPhone
                type="radio"
                name="langue"
                value="english"
              />
              Anglais
            </RadioLabel>
          </DisplayBlockOnPhone>

          <DisplayBlockOnPhone>
            <RadioLabel>
              <RadioInputMarginLeftNotOnPhone
                type="radio"
                name="langue"
                value="indifferent"
              />
              Indifférent
            </RadioLabel>
          </DisplayBlockOnPhone>
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

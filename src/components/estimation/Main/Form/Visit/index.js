import React from "react"
import styled from "styled-components"
import {
  Label,
  RadioLabel,
  HiddenLabelForNetlifyForms,
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
  return (
    <VisitFieldset formStep={formStep}>
      <Legend>
        Parfait! Avant de finir, quand voudriez vous qu'on vous prête service?
      </Legend>
      <InputsContainer>
        <Label>
          Date
          <Input type="date" name="date" />
        </Label>
        <Label>
          Heure Préférée
          <Select name="time">
            <option value="8 AM">8 AM</option>
            <option value="9 AM">9 AM</option>
            <option value="10 AM">10 AM</option>
            <option value="11 AM">11 AM</option>
            <option value="12 AM">12 AM</option>
            <option value="1 PM">1 PM</option>
            <option value="2 PM">2 PM</option>
            <option value="3 PM">3 PM</option>
            <option value="4 PM">4 PM</option>
            <option value="5 PM">5 PM</option>
            <option value="6 PM">6 PM</option>
          </Select>
        </Label>
        <RadioGroup>
          <RadioLegend>Y-a-t-il du stationnement sur place?</RadioLegend>
          <HiddenLabelForNetlifyForms>
            Y-a-t-il du stationnement sur place?
          </HiddenLabelForNetlifyForms>
          <RadioLabel>
            <RadioInput type="radio" name="parking" value="true" />
            Oui
          </RadioLabel>
          <RadioLabel>
            <RadioInputMarginLeft type="radio" name="parking" value="false" />
            Non
          </RadioLabel>
        </RadioGroup>
        <BackButton type="button" onClick={backwardFormStep}>
          Retourner
        </BackButton>
        <NextButton type="submit">Envoyer</NextButton>
      </InputsContainer>
    </VisitFieldset>
  )
}

const VisitFieldset = styled(Fieldset)`
  display: ${props => (props.formStep === 2 ? "block" : "none")};
`

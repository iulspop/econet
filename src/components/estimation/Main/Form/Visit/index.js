import React from "react"
import styled from "styled-components"
import {
  Label,
  RadioLabel,
  HiddenLabelForNetlifyForms,
  Input,
  RadioInput,
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
        <Label for="date">Date</Label>
        <Input type="date" name="date" id="date" />
        <Label for="time">Heure Préférée</Label>
        <Select name="time" id="time">
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
        <RadioGroup>
          <RadioLegend>Y-a-t-il du stationnement sur place?</RadioLegend>
          <HiddenLabelForNetlifyForms for="parkingYes">
            Y-a-t-il du stationnement sur place?
          </HiddenLabelForNetlifyForms>
          <RadioInput
            type="radio"
            name="parking"
            id="parkingYes"
            value="true"
          />
          <RadioLabel for="parkingYes">Oui</RadioLabel>
          <RadioInput
            type="radio"
            name="parking"
            id="parkingNo"
            value="false"
          />
          <RadioLabel for="parkingNo">Non</RadioLabel>
        </RadioGroup>
      </InputsContainer>
      <BackButton type="button" onClick={backwardFormStep}>
        Retourner
      </BackButton>
      <NextButton type="submit">Envoyer</NextButton>
    </VisitFieldset>
  )
}

const VisitFieldset = styled(Fieldset)`
  display: ${props => (props.formStep === 2 ? "block" : "none")};
`

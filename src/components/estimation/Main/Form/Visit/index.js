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
        <Label for="date">
          Quelle date voulez-vous qu’on vous prête service?
        </Label>
        <Input type="date" name="date" id="date" />
        <Label for="time">
          À quelle heure préférez-vous qu’on vous prête service?
        </Label>
        <Select name="time" id="time">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="16">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="0">0</option>
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

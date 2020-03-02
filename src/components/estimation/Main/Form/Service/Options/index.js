import React from "react"
import styled from "styled-components"
import {
  RadioLabel,
  HiddenLabelForNetlifyForms,
  RadioInput,
  Fieldset,
  RadioGroup,
  Legend,
  RadioLegend,
} from "../../common"

export const Options = ({ selectedOptions }) => {
  return (
    <OptionsFieldset selectedOptions={selectedOptions}>
      <Legend>
        Veuillez préciser quelques détails afin que nous puissions vous donner
        l'estimation la plus précise possible
      </Legend>
      <RadioGroup>
        <RadioLegend>
          Quelle sont les pieds carrés de l’aire à nettoyer/cirer?
        </RadioLegend>
        <HiddenLabelForNetlifyForms for="<300sqft">
          Quelle sont les pieds carrés de l’aire à nettoyer/cirer?
        </HiddenLabelForNetlifyForms>
        <div>
          <RadioInput type="radio" name="Area" id="<300sqft" value="<300sqft" />
          <RadioLabel for="<300sqft">300 pieds carrés ou moins</RadioLabel>
        </div>
        <div>
          <RadioInput
            type="radio"
            name="carpetArea"
            id="300-700sqft"
            value="300-700sqft"
          />
          <RadioLabel for="300-700sqft">300 - 700 pieds carrés</RadioLabel>
        </div>
        <div>
          <RadioInput
            type="radio"
            name="carpetArea"
            id="700-1000sqft"
            value="700-1000sqft"
          />
          <RadioLabel for="700-1000sqft">700 – 1000 pieds carrés</RadioLabel>
        </div>
        <div>
          <RadioInput
            type="radio"
            name="carpetArea"
            id="1000-2000sqft"
            value="1000-2000sqft"
          />
          <RadioLabel for="1000-2000sqft">1000 – 2000 pieds carrés</RadioLabel>
        </div>
        <div>
          <RadioInput
            type="radio"
            name="carpetArea"
            id="2000-3000sqft"
            value="2000-3000sqft"
          />
          <RadioLabel for="2000-3000sqft">2000 – 3000 pieds carrés</RadioLabel>
        </div>
        <div>
          <RadioInput
            type="radio"
            name="carpetArea"
            id="3000-4000sqft"
            value="3000-4000sqft"
          />
          <RadioLabel for="3000-4000sqft">3000 – 4000 pieds carrés</RadioLabel>
        </div>
        <div>
          <RadioInput
            type="radio"
            name="carpetArea"
            id="4000-5000sqft"
            value="4000-5000sqft"
          />
          <RadioLabel for="4000-5000sqft">4000 – 5000 pieds carrés</RadioLabel>
        </div>
        <div>
          <RadioInput
            type="radio"
            name="carpetArea"
            id="5000sqft"
            value="5000sqft"
          />
          <RadioLabel for="5000sqft">5000 + pieds carrés</RadioLabel>
        </div>
      </RadioGroup>
      <RadioGroup>
        <RadioLegend>
          L’aire à nettoyer est-elle une zone de haut traffic?
        </RadioLegend>
        <HiddenLabelForNetlifyForms for="trafficYes">
          L’aire à nettoyer est-elle une zone de haut traffic?
        </HiddenLabelForNetlifyForms>
        <RadioInput type="radio" name="traffic" id="trafficYes" value="true" />
        <RadioLabel for="trafficYes">Oui</RadioLabel>
        <RadioInput type="radio" name="traffic" id="trafficNo" value="false" />
        <RadioLabel for="trafficNo">Non</RadioLabel>
      </RadioGroup>
    </OptionsFieldset>
  )
}

const OptionsFieldset = styled(Fieldset)`
  display: ${props =>
    props.selectedOptions.tapis || props.selectedOptions.cirage
      ? "block"
      : "none"};
`

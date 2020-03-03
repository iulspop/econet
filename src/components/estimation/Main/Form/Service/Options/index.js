import React from "react"
import styled from "styled-components"
import {
  RadioLabel,
  HiddenLabelForNetlifyForms,
  RadioInput,
  RadioInputMarginLeft,
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
        <HiddenLabelForNetlifyForms>
          Quelle sont les pieds carrés de l’aire à nettoyer/cirer?
        </HiddenLabelForNetlifyForms>
        <div>
          <RadioLabel>
            <RadioInput type="radio" name="area" value="<300sqft" />
            300 pieds carrés ou moins
          </RadioLabel>
        </div>
        <div>
          <RadioLabel>
            <RadioInput type="radio" name="area" value="300-700sqft" />
            300 - 700 pieds carrés
          </RadioLabel>
        </div>
        <div>
          <RadioLabel>
            <RadioInput type="radio" name="area" value="700-1000sqft" />
            700 – 1000 pieds carrés
          </RadioLabel>
        </div>
        <div>
          <RadioLabel>
            <RadioInput type="radio" name="area" value="1000-2000sqft" />
            1000 – 2000 pieds carrés
          </RadioLabel>
        </div>
        <div>
          <RadioLabel>
            <RadioInput type="radio" name="area" value="2000-3000sqft" />
            2000 – 3000 pieds carrés
          </RadioLabel>
        </div>
        <div>
          <RadioLabel>
            <RadioInput type="radio" name="area" value="3000-4000sqft" />
            3000 – 4000 pieds carrés
          </RadioLabel>
        </div>
        <div>
          <RadioLabel>
            <RadioInput type="radio" name="area" value="4000-5000sqft" />
            4000 – 5000 pieds carrés
          </RadioLabel>
        </div>
        <div>
          <RadioLabel>
            <RadioInput type="radio" name="area" value="5000sqft" />
            5000 + pieds carrés
          </RadioLabel>
        </div>
      </RadioGroup>
      <RadioGroup>
        <RadioLegend>
          L’aire à nettoyer est-elle une zone de haut traffic?
        </RadioLegend>
        <HiddenLabelForNetlifyForms>
          L’aire à nettoyer est-elle une zone de haut traffic?
        </HiddenLabelForNetlifyForms>
        <RadioLabel>
          <RadioInput type="radio" name="traffic" value="true" />
          Oui
        </RadioLabel>
        <RadioLabel>
          <RadioInputMarginLeft type="radio" name="traffic" value="false" />
          Non
        </RadioLabel>
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

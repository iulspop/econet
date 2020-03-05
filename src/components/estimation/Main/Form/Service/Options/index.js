import React from "react"
import styled from "styled-components"
import {
  RadioLabel,
  RadioInput,
  RadioInputMarginLeft,
  SelectWide,
  Fieldset,
  RadioGroup,
  Legend,
  RadioLegend,
  Label,
} from "../../common"

export const Options = ({ selectedOptions }) => {
  return (
    <OptionsFieldset selectedOptions={selectedOptions}>
      <Legend>
        Veuillez préciser quelques détails afin que nous puissions vous donner
        l'estimation la plus précise possible
      </Legend>
      <Label>
        Quelle sont les pieds carrés de l’aire à nettoyer/cirer?
        <SelectWide name="area">
          <option value="<300">300 pieds carrés ou moins</option>
          <option value="300-700">300 - 700 pieds carrés</option>
          <option value="700-1000">700 – 1000 pieds carrés</option>
          <option value="1000-2000">1000 – 2000 pieds carrés</option>
          <option value="2000-3000">2000 – 3000 pieds carrés</option>
          <option value="3000-4000">3000 – 4000 pieds carrés</option>
          <option value="4000-5000">4000 – 5000 pieds carrés</option>
          <option value="5000+">5000 + pieds carrés</option>
        </SelectWide>
      </Label>

      <RadioGroup>
        <RadioLegend>
          L’aire à nettoyer est-elle une zone de haut traffic?
        </RadioLegend>
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

import React from "react"
import {
  RadioLabel,
  HiddenLabelForNetlifyForms,
  RadioInput,
  RadioInputMarginLeft,
  RadioGroup,
  RadioLegend,
} from "../../common"

export const AnimalsQuestion = () => {
  return (
    <RadioGroup>
      <RadioLegend>Y-a-t-il des animaux dans la maison? </RadioLegend>
      <HiddenLabelForNetlifyForms>
        Y-a-t-il des animaux dans la maison?
      </HiddenLabelForNetlifyForms>

      <RadioLabel>
        <RadioInput type="radio" name="animals" value="oui" />
        Oui
      </RadioLabel>

      <RadioLabel>
        <RadioInputMarginLeft type="radio" name="animals" value="non" />
        Non
      </RadioLabel>
    </RadioGroup>
  )
}

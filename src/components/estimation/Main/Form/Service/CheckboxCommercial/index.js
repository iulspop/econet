import React from "react"
import { CheckboxLabel, RadioInput, RadioGroup } from "../../common"

export const CheckboxCommercial = ({ toggleOption }) => {
  return (
    <RadioGroup>
      <div>
        <CheckboxLabel>
          <RadioInput
            type="checkbox"
            name="tapis"
            onClick={() => toggleOption("tapis")}
          />
          Nettoyage de tapis
        </CheckboxLabel>
      </div>
      <div>
        <CheckboxLabel>
          <RadioInput type="checkbox" name="meubles" />
          Nettoyage de meubles
        </CheckboxLabel>
      </div>
      <div>
        <CheckboxLabel>
          <RadioInput
            type="checkbox"
            name="cirage"
            onClick={() => toggleOption("cirage")}
          />
          Cirage
        </CheckboxLabel>
      </div>
    </RadioGroup>
  )
}

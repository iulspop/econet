import React from "react"
import { CheckboxLabel, RadioInput, RadioGroup } from "../../common"

export const CheckboxResidential = ({ toggleOption }) => {
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
      <div>
        <CheckboxLabel>
          <RadioInput type="checkbox" name="detachage" />
          Détachage
        </CheckboxLabel>
      </div>
      <div>
        <CheckboxLabel>
          <RadioInput type="checkbox" name="controleD'odeur" />
          Contrôle d’odeur
        </CheckboxLabel>
      </div>
      <div>
        <CheckboxLabel>
          <RadioInput type="checkbox" name="protectionDeTapis/Meubles" />
          Service de protection de tapis/meubles
        </CheckboxLabel>
      </div>
    </RadioGroup>
  )
}

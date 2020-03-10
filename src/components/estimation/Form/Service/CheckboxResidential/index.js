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
          <RadioInput
            type="checkbox"
            name="meubles"
            onClick={() => toggleOption("meubles")}
          />
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
          <RadioInput
            type="checkbox"
            name="detachage"
            onClick={() => toggleOption("detachage")}
          />
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
          Protection de tapis/meubles
        </CheckboxLabel>
      </div>
    </RadioGroup>
  )
}

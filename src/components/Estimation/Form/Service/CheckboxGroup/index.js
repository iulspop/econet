import React from "react"
import { RadioGroup } from "../../common"
import { Checkbox } from "./Checkbox"

export const CheckboxGroup = ({ formName, toggleOption }) => {
  return (
    <RadioGroup>
      <Checkbox toggleOption={toggleOption} inputName="tapis">
        Nettoyage de tapis
      </Checkbox>
      <Checkbox toggleOption={toggleOption} inputName="meubles">
        Nettoyage de meubles
      </Checkbox>
      <Checkbox toggleOption={toggleOption} inputName="cirage">
        Cirage
      </Checkbox>

      {formName === "residential" ? (
        <>
          <Checkbox toggleOption={toggleOption} inputName="detachage">
            Détachage
          </Checkbox>
          <Checkbox toggleOption={toggleOption} inputName="controleOdeur">
            Contrôle d’odeur
          </Checkbox>
          <Checkbox
            toggleOption={toggleOption}
            inputName="protectionTapisMeubles"
          >
            Protection de tapis/meubles
          </Checkbox>
        </>
      ) : (
        <></>
      )}
    </RadioGroup>
  )
}

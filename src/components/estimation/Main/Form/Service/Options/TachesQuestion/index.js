import React, { useState } from "react"
import styled from "styled-components"
import {
  CheckboxLabel,
  RadioLabel,
  HiddenLabelForNetlifyForms,
  RadioInput,
  RadioInputMarginLeft,
  RadioGroup,
  RadioLegend,
  SelectWide,
  Label,
} from "../../../common"

export const TachesQuestion = () => {
  const [showStainTypes, setShowStainTypes] = useState(false)

  function enableShowStainTypes() {
    setShowStainTypes(prev => true)
  }

  function disableShowStainTypes() {
    setShowStainTypes(prev => false)
  }

  return (
    <>
      <RadioGroup>
        <RadioLegend>
          Y-a-t-il des tâches importantes sur le tapis ou meuble à nettoyer?
        </RadioLegend>
        <HiddenLabelForNetlifyForms>
          Y-a-t-il des tâches importantes sur le tapis ou meuble à nettoyer?
        </HiddenLabelForNetlifyForms>
        <RadioLabel>
          <RadioInput
            type="radio"
            name="tachesImportantes"
            value="true"
            onClick={enableShowStainTypes}
          />
          Oui
        </RadioLabel>
        <RadioLabel>
          <RadioInputMarginLeft
            type="radio"
            name="tachesImportantes"
            value="false"
            onClick={disableShowStainTypes}
          />
          Non
        </RadioLabel>
      </RadioGroup>

      <StainTypesGroup showStainTypes={showStainTypes}>
        <RadioLegend>Veuillez préciser </RadioLegend>
        <HiddenLabelForNetlifyForms>
          Veuillez préciser
        </HiddenLabelForNetlifyForms>
        <div>
          <CheckboxLabel>
            <RadioInput type="checkbox" name="tacheVin" />
            Tâche de vin
          </CheckboxLabel>
        </div>
        <div>
          <CheckboxLabel>
            <RadioInput type="checkbox" name="tacheGraisse" />
            Tâche de graisse
          </CheckboxLabel>
        </div>
        <div>
          <CheckboxLabel>
            <RadioInput type="checkbox" name="tacheUrine" />
            Tâche d’urine
          </CheckboxLabel>
        </div>
        <div>
          <CheckboxLabel>
            <RadioInput type="checkbox" name="tacheJus" />
            Tâche de jus
          </CheckboxLabel>
        </div>
        <div>
          <CheckboxLabel>
            <RadioInput type="checkbox" name="tacheAutres" />
            Autres
          </CheckboxLabel>
        </div>
      </StainTypesGroup>
    </>
  )
}

const StainTypesGroup = styled(RadioGroup)`
  display: ${props => (props.showStainTypes ? "block" : "none")};
`

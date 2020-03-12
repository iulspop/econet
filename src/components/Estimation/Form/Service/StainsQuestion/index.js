import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import {
  RadioLabel,
  RadioInput,
  RadioInputMarginLeft,
  RadioGroup,
  RadioLegend,
} from "../../common"
import { Checkbox } from "../Checkbox"

export const StainsQuestion = ({ selectedOptions }) => {
  const { t } = useTranslation("StainsQuestion")

  const [showStainTypes, setShowStainTypes] = useState(false)

  function enableShowStainTypes() {
    setShowStainTypes(() => true)
  }

  function disableShowStainTypes() {
    setShowStainTypes(() => false)
  }

  return (
    <StyledQuestion selectedOptions={selectedOptions}>
      <RadioGroup>
        <RadioLegend>{t("stainsQuestion")}</RadioLegend>
        <RadioLabel>
          <RadioInput
            type="radio"
            name="tachesImportantes"
            value="true"
            onClick={enableShowStainTypes}
          />
          {t("yes")}
        </RadioLabel>
        <RadioLabel>
          <RadioInputMarginLeft
            type="radio"
            name="tachesImportantes"
            value="false"
            onClick={disableShowStainTypes}
          />
          {t("no")}
        </RadioLabel>
      </RadioGroup>

      <StainTypesGroup showStainTypes={showStainTypes}>
        <RadioLegend>{t("preciser")}</RadioLegend>
        <Checkbox inputName="tacheVin" toggleOption={() => null}>
          {t("vin")}
        </Checkbox>
        <Checkbox inputName="tacheGraisse" toggleOption={() => null}>
          {t("graisse")}
        </Checkbox>
        <Checkbox inputName="tacheUrine" toggleOption={() => null}>
          {t("urine")}
        </Checkbox>
        <Checkbox inputName="tacheJus" toggleOption={() => null}>
          {t("jus")}
        </Checkbox>
        <Checkbox inputName="tacheAutres" toggleOption={() => null}>
          {t("autres")}
        </Checkbox>
      </StainTypesGroup>
    </StyledQuestion>
  )
}

const StainTypesGroup = styled(RadioGroup)`
  display: ${props => (props.showStainTypes ? "block" : "none")};
`

const StyledQuestion = styled.div`
  display: ${props =>
    props.selectedOptions.tapis ||
    props.selectedOptions.meubles ||
    props.selectedOptions.detachage
      ? "block"
      : "none"};
`

import React from "react"
import { CheckboxLabel, RadioInput } from "../../common"

export const Checkbox = ({ toggleOption, inputName, children }) => {
  return (
    <div>
      <CheckboxLabel>
        <RadioInput
          type="checkbox"
          name={inputName}
          onClick={() => toggleOption(inputName)}
        />
        {children}
      </CheckboxLabel>
    </div>
  )
}

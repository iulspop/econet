import React, { useState } from "react"
import styled from "styled-components"
import { Contact } from "./Contact"
import { Service } from "./Service"
import { Visit } from "./Visit"

export const Form = ({ shownForm, formName }) => {
  const [formStep, setFormStep] = useState(0)

  function forwardFormStep() {
    setFormStep(formStep + 1)
  }

  function backwardFormStep() {
    setFormStep(formStep - 1)
  }

  return (
    <StyledForm
      shownForm={shownForm}
      method="POST"
      action="/confirmation"
      data-netlify="true"
      name={formName}
    >
      <input type="hidden" name="form-name" value={formName} />
      <Contact
        formStep={formStep}
        forwardFormStep={forwardFormStep}
        formName={formName}
      />
      <Service
        formStep={formStep}
        forwardFormStep={forwardFormStep}
        backwardFormStep={backwardFormStep}
        formName={formName}
      />
      <Visit formStep={formStep} backwardFormStep={backwardFormStep} />
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: ${props => {
    if (props.name === "commercial") {
      return props.shownForm === "commercial" ? "block" : "none"
    } else if (props.name === "residential") {
      return props.shownForm === "residential" ? "block" : "none"
    } else {
      throw Error("invalid form name")
    }
  }};
  width: 680px;
  margin: 5rem 0;

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 450px;
  }

  @media only screen and ${props => props.theme.media.phone} {
    width: 95vw;
    margin: 1rem 0;
  }
`

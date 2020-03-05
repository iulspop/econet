import React, { useState } from "react"
import styled from "styled-components"
import { Contact } from "./Contact"
import { Service } from "./Service"
import { Visit } from "./Visit"

export const Form = props => {
  const { shownForm, formName } = props

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
      method="post"
      action="#"
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

// Merci, on votre demande d'estimation a été bien envoyé. On vous contactera sous peu. N'hésitez pas à nous joindre si vous avez des questions. On est ouvert de lundi à mardi de 9h à 17h

const StyledForm = styled.form`
  display: ${props => {
    if (props.name === "commercial-estimation") {
      return props.shownForm === "commercial" ? "block" : "none"
    } else if (props.name === "residential-estimation") {
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
`

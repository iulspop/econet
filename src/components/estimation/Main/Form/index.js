import React, { useState } from "react"
import styled from "styled-components"
import { Contact } from "./Contact"
import { Service } from "./Service"
import { Visit } from "./Visit"

export const Form = props => {
  const { showForm } = props

  const [formStep, setFormStep] = useState(0)

  function forwardFormStep() {
    setFormStep(formStep + 1)
  }

  function backwardFormStep() {
    setFormStep(formStep - 1)
  }

  return (
    <StyledForm
      showForm={showForm}
      method="post"
      action="#"
      data-netlify="true"
      name="commercial-estimation"
    >
      <input type="hidden" name="form-name" value="commercial-estimation" />
      <Contact formStep={formStep} forwardFormStep={forwardFormStep} />
      <Service
        formStep={formStep}
        forwardFormStep={forwardFormStep}
        backwardFormStep={backwardFormStep}
      />
      <Visit
        formStep={formStep}
        forwardFormStep={forwardFormStep}
        backwardFormStep={backwardFormStep}
      />
    </StyledForm>
  )
}

// Merci, on votre demande d'estimation a été bien envoyé. On vous contactera sous peu. N'hésitez pas à nous joindre si vous avez des questions. On est ouvert de lundi à mardi de 9h à 17h

const StyledForm = styled.form`
  visibility: ${props => (props.showForm ? "visible" : "collapse")};
  width: 650px;
  margin: 5rem 0;
`

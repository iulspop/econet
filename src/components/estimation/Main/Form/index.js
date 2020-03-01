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
      name="commercial-estimation"
      method="POST"
      netlify
    >
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
  display: ${props => (props.showForm ? "block" : "none")};
  width: 650px;
  margin: 5rem 0;
`

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
    <StyledForm showForm={showForm}>
      <Contact formStep={formStep} forwardFormStep={forwardFormStep} />
      <Service
        formStep={formStep}
        forwardFormStep={forwardFormStep}
        backwardFormStep={backwardFormStep}
      />
      <Visit formStep={formStep} forwardFormStep={forwardFormStep} />
      <Button type="submit" hidden>
        Envoyer la demande
      </Button>
    </StyledForm>
  )
}
// On aurait juste besoin de quelques informations pour vous envoyer l'estimation et rester en contact

// Maintenant, parlez-nous des services que vous désirez

// For tapis extension
// Veuillez préciser quelques détails afin que nous puissions vous donner l'estimation la plus précise possible

// Parfait! Avant de finir, quand voudriez vous qu'on vous prête service?

// Merci, on votre demande d'estimation a été bien envoyé. On vous contactera sous peu. N'hésitez pas à nous joindre si vous avez des questions. On est ouvert de lundi à mardi de 9h à 17h

const StyledForm = styled.form`
  display: ${props => (props.showForm ? "block" : "none")};
  width: 650px;
  margin: 5rem 0;
`
const Button = styled.button`
  display: ${props => (props.hidden ? "none" : "block")};
  width: 15rem;
  margin: auto;
`

import React from "react"
import styled from "styled-components"

export const ContactSection = () => {
  return (
    <Fieldset>
      <Legend>Contact</Legend>
      <Label for="name">Nom Complet</Label>
      <Input type="text" name="name" id="name" />
      <Label for="company">Companie</Label>
      <Input type="text" name="company" id="company" />
      <Label for="email">Courriel</Label>
      <Input type="email" name="email" id="email" />
      <Label for="phone">Téléphone</Label>
      <Input type="tel" name="phone" id="phone" />
      <RadioGroup>
        <Legend>Langue de communication</Legend>
        <Label for="french">Français</Label>
        <Input type="radio" name="langue" id="french" value="french" />

        <Label for="english">Englais</Label>
        <Input type="radio" name="langue" id="english" value="english" />

        <Label for="indifferent">Indifferent</Label>
        <Input type="radio" name="langue" id="english" value="indifferent" />
      </RadioGroup>
    </Fieldset>
  )
}

const Label = styled.label`
  color: ${props => props.theme.colors.primary};
`
const Input = styled.input`
  border: none;
  border-bottom: solid 1px ${props => props.theme.colors.secondary};
`
const Fieldset = styled.fieldset`
  border: none;
  background-color: white;
  border-radius: 6px;
  box-shadow: 5px 5px 5px black;
`

const RadioGroup = styled.fieldset`
  border: none;
`

const Legend = styled.legend`
  display: block;
  font-weight: 700;
  color: ${props => props.theme.colors.tertiary};
`

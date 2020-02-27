import React from "react"
import {
  Label,
  Input,
  Fieldset,
  RadioGroup,
  Legend,
  RadioLegend,
} from "../common"

export const Contact = () => {
  return (
    <Fieldset>
      <Legend>Contact</Legend>
      <Label for="name">Nom et nom de famille</Label>
      <Input type="text" name="name" id="name" />
      <Label for="company">Compagnie</Label>
      <Input type="text" name="company" id="company" />
      <Label for="email">Courriel</Label>
      <Input type="email" name="email" id="email" />
      <Label for="phone">Téléphone</Label>
      <Input type="tel" name="phone" id="phone" />
      <RadioGroup>
        <RadioLegend>Langue de communication</RadioLegend>
        <Label for="french">Français</Label>
        <Input type="radio" name="langue" id="french" value="french" />

        <Label for="english">Anglais</Label>
        <Input type="radio" name="langue" id="english" value="english" />

        <Label for="indifferent">Indifférent</Label>
        <Input type="radio" name="langue" id="english" value="indifferent" />
      </RadioGroup>
    </Fieldset>
  )
}

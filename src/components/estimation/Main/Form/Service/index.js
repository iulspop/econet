import React from "react"
import {
  Label,
  Input,
  Fieldset,
  RadioGroup,
  Legend,
  RadioLegend,
} from "../common"

export const Service = () => {
  return (
    <Fieldset>
      <Legend>Service Désiré</Legend>
      <Label for="tapis">Nettoyage de tapis</Label>
      <Input type="checkbox" name="tapis" id="tapis" />
      <Label for="meubles">Nettoyage de meubles</Label>
      <Input type="checkbox" name="meubles" id="meubles" />
      <Label for="cirage">Cirage</Label>
      <Input type="checkbox" name="cirage" id="cirage" />

      <Fieldset hidden>
        <Legend>Options Tapis</Legend>
        <RadioGroup>
          <RadioLegend>
            Quelle sont les pieds carrés de l’aire à nettoyer?
          </RadioLegend>
          <Label for="<300sqft">300 pieds carrés ou moins</Label>
          <Input
            type="radio"
            name="carpetArea"
            id="<300sqft"
            value="<300sqft"
          />
          <Label for="300-700sqft">300 - 700 pieds carrés</Label>
          <Input
            type="radio"
            name="carpetArea"
            id="300-700sqft"
            value="300-700sqft"
          />
          <Label for="700-1000sqft">700 – 1000 pieds carrés</Label>
          <Input
            type="radio"
            name="carpetArea"
            id="700-1000sqft"
            value="700-1000sqft"
          />
          <Label for="1000-2000sqft">1000 – 2000 pieds carrés</Label>
          <Input
            type="radio"
            name="carpetArea"
            id="1000-2000sqft"
            value="1000-2000sqft"
          />
          <Label for="2000-3000sqft">2000 – 3000 pieds carrés</Label>
          <Input
            type="radio"
            name="carpetArea"
            id="2000-3000sqft"
            value="2000-3000sqft"
          />
          <Label for="3000-4000sqft">3000 – 4000 pieds carrés</Label>
          <Input
            type="radio"
            name="carpetArea"
            id="3000-4000sqft"
            value="3000-4000sqft"
          />
          <Label for="4000-5000sqft">4000 – 5000 pieds carrés</Label>
          <Input
            type="radio"
            name="carpetArea"
            id="4000-5000sqft"
            value="4000-5000sqft"
          />
          <Label for="5000sqft">5000 + pieds carrés</Label>
          <Input
            type="radio"
            name="carpetArea"
            id="5000sqft"
            value="5000sqft"
          />
        </RadioGroup>
        <RadioGroup>
          <RadioLegend>
            L’aire à nettoyer est-elle une zone de haut traffic?
          </RadioLegend>
          <Label for="trafficYes">Oui</Label>
          <Input type="radio" name="traffic" id="trafficYes" value="true" />
          <Label for="trafficNo">Non</Label>
          <Input type="radio" name="traffic" id="trafficNo" value="false" />
        </RadioGroup>
      </Fieldset>
    </Fieldset>
  )
}

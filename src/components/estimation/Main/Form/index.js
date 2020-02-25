import React from "react"
import styled from "styled-components"

export const Form = () => {
  return (
    <StyledForm>
      <fieldset>
        <legend>Contact</legend>
        <Label for="name">Nom Complet</Label>
        <Input type="text" name="name" id="name" />
        <Label for="company">Companie</Label>
        <Input type="text" name="company" id="company" />
        <Label for="email">Courriel</Label>
        <Input
          type="email"
          name="email"
          placeholder="Exemple: john@gmail.com"
          id="email"
        />
        <Label for="phone">Téléphone</Label>
        <Input type="tel" name="phone" id="phone" />
        <fieldset>
          <legend>Langue dans laquelle vous préférez communiquer?</legend>
          <Label for="french">Français</Label>
          <Input type="radio" name="langue" id="french" value="french" />

          <Label for="english">Englais</Label>
          <Input type="radio" name="langue" id="english" value="english" />
        </fieldset>
      </fieldset>
      <fieldset>
        <legend>Service Désiré</legend>
        <Label for="tapis">Nettoyage de tapis</Label>
        <Input type="checkbox" name="tapis" id="tapis" />
        <Label for="meubles">Nettoyage de meubles</Label>
        <Input type="checkbox" name="meubles" id="meubles" />
        <Label for="cirage">Cirage</Label>
        <Input type="checkbox" name="cirage" id="cirage" />

        <fieldset>
          <legend>Tapis</legend>
          <fieldset>
            <legend>Quelle sont les pieds carrés de l’aire à nettoyer?</legend>
            <Label for="<300sqft">300 pieds carrés ou moins</Label>
            <Input type="radio" name="carpetArea" id="<300sqft" />
            <Label for="300-700sqft">300 - 700 pieds carrés</Label>
            <Input type="radio" name="carpetArea" id="300-700sqft" />
            <Label for="700-1000sqft">700 – 1000 pieds carrés</Label>
            <Input type="radio" name="carpetArea" id="700-1000sqft" />
            <Label for="1000-2000sqft">1000 – 2000 pieds carrés</Label>
            <Input type="radio" name="carpetArea" id="1000-2000sqft" />
            <Label for="2000-3000sqft">2000 – 3000 pieds carrés</Label>
            <Input type="radio" name="carpetArea" id="2000-3000sqft" />
            <Label for="3000-4000sqft">3000 – 4000 pieds carrés</Label>
            <Input type="radio" name="carpetArea" id="3000-4000sqft" />
            <Label for="4000-5000sqft">4000 – 5000 pieds carrés</Label>
            <Input type="radio" name="carpetArea" id="4000-5000sqft" />
            <Label for="5000sqft">5000 + pieds carrés</Label>
            <Input type="radio" name="carpetArea" id="5000sqft" />
          </fieldset>
          <fieldset>
            <legend>
              L’aire à nettoyer est-elle une zone de haut traffic?
            </legend>
            <Label for="trafficOui">Oui</Label>
            <Input type="radio" name="traffic" id="trafficOui" />
            <Label for="trafficNon">Non</Label>
            <Input type="radio" name="traffic" id="trafficNon" />
          </fieldset>
        </fieldset>
      </fieldset>
      <fieldset>
        <legend>Visite</legend>
        <Label for="date">
          Quelle date voulez-vous qu’on vous prête service?
        </Label>
        <Input type="date" name="date" id="date" />
        <Label for="time">
          À quelle heure préférez-vous qu’on vous prête service?
        </Label>
        <Input type="" name="time" id="time" />
      </fieldset>
    </StyledForm>
  )
}

const StyledForm = styled.form``
const Label = styled.label``
const Input = styled.input``

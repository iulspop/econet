import React from "react"
import styled from "styled-components"
import { ContactSection } from "./ContactSection"

export const Form = () => {
  return (
    <StyledForm>
      <ContactSection />
      <fieldset>
        <legend>Service Désiré</legend>
        <Label for="tapis">Nettoyage de tapis</Label>
        <Input type="checkbox" name="tapis" id="tapis" />
        <Label for="meubles">Nettoyage de meubles</Label>
        <Input type="checkbox" name="meubles" id="meubles" />
        <Label for="cirage">Cirage</Label>
        <Input type="checkbox" name="cirage" id="cirage" />

        <fieldset>
          <legend>Options Tapis</legend>
          <fieldset>
            <legend>Quelle sont les pieds carrés de l’aire à nettoyer?</legend>
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
          </fieldset>
          <fieldset>
            <legend>
              L’aire à nettoyer est-elle une zone de haut traffic?
            </legend>
            <Label for="trafficYes">Oui</Label>
            <Input type="radio" name="traffic" id="trafficYes" value="true" />
            <Label for="trafficNo">Non</Label>
            <Input type="radio" name="traffic" id="trafficNo" value="false" />
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
        <select name="time" id="time">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="16">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="0">0</option>
        </select>
        <fieldset>
          <legend>Y-a-t-il du stationnement sur place?</legend>
          <Label for="parkingYes">Oui</Label>
          <Input type="radio" name="parking" id="parkingYes" value="true" />
          <Label for="parkingNo">Non</Label>
          <Input type="radio" name="parking" id="parkingNo" value="false" />
        </fieldset>
      </fieldset>
      <button type="submit">Envoyer la demande</button>
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
  width: 350px;
  margin: 5rem 0;
`
const Label = styled.label``
const Input = styled.input``
const FieldSet = styled.fieldset``

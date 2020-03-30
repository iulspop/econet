import React from "react"
import styled from "styled-components"
// import { useTranslation } from "react-i18next"
// import { linkReset } from "../mixins"

export const ContactInfo = () => {
  // const { t } = useTranslation("Confirmation")
  return (
    <ContactInfoBox>
      <h3>Coordonnées</h3>
      <p>
        <strong>Téléphone:</strong>
        <a href="tel:514-874-9488">514-874-9488</a>
      </p>
      <p>
        <strong>Heures de Travail</strong>
        <br></br>
        Lundi - Vendredi<br></br>
        9AM - 6PM
      </p>
      <p>
        Nous desservons Montréal, Laval, Longueuil<br></br>& les régions
        avoisinantes.
      </p>
      <address>
        2763 Rue French, local 300<br></br>
        Montréal, QC H1L 4S2
      </address>
    </ContactInfoBox>
  )
}

const ContactInfoBox = styled.aside`
  width: 25vw;
  height: 587.56px;
  margin-left: 4rem;
  padding: 2rem 1.5rem;
  background-color: white;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`

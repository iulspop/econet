import React from "react"
import styled from "styled-components"
// import { useTranslation } from "react-i18next"
import { linkReset } from "../../mixins"

export const ContactInfo = () => {
  // const { t } = useTranslation("Confirmation")
  return (
    <ContactInfoBox>
      <H3>Coordonnées</H3>

      <Container>
        <H4>Téléphone:</H4>
        <p>
          <Link href="tel:514-666-6601">514-666-6601</Link>
        </p>
      </Container>

      <Container>
        <H4>Heures de Travail</H4>
        <p>
          Lundi - Vendredi<br></br>
          9AM - 6PM
        </p>
      </Container>

      <Container>
        <H4>Notre Desserte</H4>
        <p>
          Montréal, Laval, Longueuil<br></br>& les régions avoisinantes.
        </p>
      </Container>

      <Container>
        <H4>Adresse</H4>
        <address>
          <Link href="https://goo.gl/maps/fTYwJTmaLoEuuYny9">
            2763 Rue French, local 300<br></br>
            Montréal, QC H1L 4S2
          </Link>
        </address>
      </Container>
    </ContactInfoBox>
  )
}

const ContactInfoBox = styled.aside`
  width: 25vw;
  height: 587.56px;
  margin-left: 4rem;
  padding: 2rem 1.5rem;
  border-radius: 3px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  background-color: white;
  // background-color: ${props => props.theme.colors.secondary};

  line-height: 1.5;
`

const Container = styled.div`
  margin-bottom: 3rem;
`

const H3 = styled.h3`
  margin: 0;
  margin-bottom: 1.8rem;
  font-size: 3.5rem;
  line-height: 1;
`

const H4 = styled.h4`
  font-size: 2.4rem;
`

const Link = styled.a`
  ${linkReset};
  transition: 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

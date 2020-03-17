import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

export const Story = () => {
  return (
    <FlexColumn>
      <DecorativeLine src={"/assets/decorative-horizontal-line.png"} alt={""} />
      <Flex>
        <TextContainer>
          <MainHeading>Notre Histoire</MainHeading>
          <Paragraph>
            La mission d’Éconet est de fournir des solutions écologiques
            exceptionnelles de nettoyage de tapis et de meubles et un service à
            la clientèle extraordinaire. L’entreprise a vu le jour il y a 32 ans
            avec M. Marc Lemonnier qui a créé une entreprise fondée sur
            l’excellence, le professionnalisme et la fiabilité. Après trois
            décennies sur le terrain, il s’est associé à la famille Romero en
            2019 pour poursuivre la mission qu’il avait commencée. La famille
            Romero apporte sa passion pour le nettoyage à Montréal, ainsi que 12
            ans d’expertise en nettoyage dans 3 pays différents.
          </Paragraph>
          <Paragraph>
            En tant qu’entreprise familiale, nos clients sont au cœur de nos
            activités. Nous visons à chaque fois à dépasser les attentes de nos
            clients et à leur fournir une solution adaptée à leurs besoins. Nos
            techniciens formés utiliseront les dernières techniques écologiques
            et les meilleurs outils sur le terrain pour vous fournir un espace
            frais et propre.
          </Paragraph>
          <List>
            Notre promesse à nos clients:
            <li>Un service fiable</li>
            <li>Un prix initial honnête</li>
            <li>Des techniciens amicaux et bien formés</li>
            <li>Un service à la clientèle imbattable</li>
            <li>Des produits 100% écologiques</li>
            <li>
              Des solutions exhaustives de nettoyage de tapis et de meubles
            </li>
          </List>
          <Paragraph>
            <strong>
              C'est toujours un honneur de servir nos clients, contact-nous et
              demander votre estimation dès maintenant!
            </strong>
          </Paragraph>
        </TextContainer>
        <ImageContainer>
          <img
            src="/assets/biopic.png"
            alt="Javier Romero, the owner of nettoyage econet."
          />
          <figcaption>Javier Romero, Propriétaire</figcaption>
        </ImageContainer>
      </Flex>
    </FlexColumn>
  )
}

const DecorativeLine = styled.img`
  width: 56vw;
  margin: 2rem 0;
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Flex = styled.div`
  display: flex;
  width: 56vw;
  justify-content: space-between;
  font-size: 1.9rem;
  margin-bottom: 5rem;
`

const TextContainer = styled.main`
  flex-basis: 38vw;
`

const ImageContainer = styled.figure`
  flex-basis: 15vw;
  margin: 12rem 0rem;
  margin-left: 4rem;
`

const MainHeading = styled.h1`
  margin: 2rem 0;
`

const Paragraph = styled.p`
  margin-bottom: 2rem;
`

const List = styled.ul`
  list-style-position: inside;
  margin-bottom: 2rem;
`

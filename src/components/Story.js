import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

export const Story = () => {
  return (
    <Container>
      <DecorativeLine src={"/assets/decorative-horizontal-line.png"} alt={""} />
      <Container2>
        <TextContainer>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            possimus, laudantium harum, debitis laboriosam, vel alias tenetur
            temporibus illo id laborum? Fuga tenetur nisi temporibus omnis,
            maiores laboriosam voluptatum eveniet!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            animi quo asperiores eligendi sit obcaecati nulla vel quam facilis
            minima rem odit dignissimos vitae eius, voluptatem, natus quod
            expedita exercitationem!
          </p>
          <p>
            Notre promesse à nos clients:
            <li>Un service fiable</li>
            <li>Un prix initial honnête</li>
            <li>Des techniciens amicaux et bien formés</li>
            <li>Un service à la clientèle imbattable</li>
            <li>Des produits 100% écologiques</li>
            <li>
              Des solutions exhaustives de nettoyage de tapis et de meubles
            </li>
          </p>
          <p>
            <strong>
              C'est toujours un honneur de servir nos clients, contact-nous et
              demander votre estimation dès maintenant
            </strong>
          </p>
        </TextContainer>
        <ImageContainer>
          <img src="/assets/biopic.png" />
        </ImageContainer>
      </Container2>
    </Container>
  )
}

const DecorativeLine = styled.img`
  width: 700px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextContainer = styled.main`
  flex-basis: 500px;
`

const ImageContainer = styled.div`
  flex-basis: 100px;
`

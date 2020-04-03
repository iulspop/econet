import React from "react"
import styled from "styled-components"
// import { useTranslation } from "react-i18next"
import { DecoratedButton } from "./common"

export const ResidentialBanner = () => {
  // const { t } = useTranslation("Confirmation")
  return (
    <FlexColumn>
      <DecorativeLine src={"/assets/decorative-horizontal-line.png"} alt={""} />
      <H1>Nos Services Résidentiels</H1>
      <H2>
        Éconet vous offre une gamme de services écologique et de haute qualité
      </H2>
      <GridContainer>
        <IconContainer1>
          <IconLabel for="icon1">Nettoyage de tapis</IconLabel>
          <Icon aria-label="" id="icon1" />
        </IconContainer1>

        <IconContainer2>
          <IconLabel for="icon2">Contrôle d'odeur</IconLabel>
          <Icon aria-label="" id="icon2" />
        </IconContainer2>

        <IconContainer3>
          <IconLabel for="icon3">Nettoyage de meubles</IconLabel>
          <Icon aria-label="" id="icon3" />
        </IconContainer3>

        <IconContainer4>
          <IconLabel for="icon4">Protection</IconLabel>
          <Icon aria-label="" id="icon4" />
        </IconContainer4>

        <IconContainer5>
          <IconLabel for="icon5">Détachage</IconLabel>
          <Icon aria-label="" id="icon5" />
        </IconContainer5>
      </GridContainer>
      <DecoratedButton left right slim>
        Demandez votre estimation
      </DecoratedButton>
    </FlexColumn>
  )
}

const FlexColumn = styled.div`
  --nav-height: 130px;

  @media only screen and ${props => props.theme.media.tabLand} {
    --nav-height: 100px;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    --nav-height: 65px;
  }

  min-height: calc(100vh - var(--nav-height));
  padding-bottom: 7rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const DecorativeLine = styled.img`
  width: 80vw;
  margin: 2rem 0;

  @media only screen and ${props => props.theme.media.phone} {
    width: 90vw;
    margin-bottom: 0;
  }
`

const H1 = styled.h1`
  margin: 0 2rem;
  font-size: 5.5rem;
  line-height: 1.25;
  text-align: center;

  @media only screen and ${props => props.theme.media.tabPort} {
    font-size: 5rem;
  }

  @media only screen and (max-width: 600px) {
    font-size: calc(0.095 * 100vw + 0.6786rem);
  }

  @media only screen and ${props => props.theme.media.phone} {
    margin: 0;
  }
`

const H2 = styled.h2`
  margin: 0 2rem;
  width: 80vw;
  font-weight: 400;
  text-align: center;
`

const GridContainer = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: repeat(5, 120px);
  grid-template-rows: repeat(2, 155px);

  @media only screen and ${props => props.theme.media.tabPort} {
    grid-template-columns: repeat(3, 120px);
    grid-template-rows: repeat(3, 165px);
  }

  @media only screen and ${props => props.theme.media.phone} {
    margin-top: 6rem;
    margin-bottom: 0;
    grid-template-columns: 50%;
    grid-template-rows: repeat(5, 180px);
  }
`

const IconContainer1 = styled.div`
  width: 120px;

  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;

  position: relative;
`

const IconContainer2 = styled(IconContainer1)`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;

  @media only screen and ${props => props.theme.media.tabPort} {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  @media only screen and ${props => props.theme.media.phone} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`

const IconContainer3 = styled(IconContainer1)`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;

  @media only screen and ${props => props.theme.media.tabPort} {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  @media only screen and ${props => props.theme.media.phone} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`

const IconContainer4 = styled(IconContainer1)`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;

  @media only screen and ${props => props.theme.media.tabPort} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  @media only screen and ${props => props.theme.media.phone} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
  }
`
const IconContainer5 = styled(IconContainer1)`
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 2;

  @media only screen and ${props => props.theme.media.tabPort} {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  @media only screen and ${props => props.theme.media.phone} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 5;
    grid-row-end: 6;
  }
`

const IconLabel = styled.label`
  font-size: 1.8rem;
  text-transform: uppercase;
  white-space: nowrap;

  position: absolute;
  z-index: 1;
  top: -4rem;
  left: 50%;
  transform: translateX(-50%);
`

const Icon = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: grey;
`

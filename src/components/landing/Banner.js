import React from "react"
import styled from "styled-components"
import { absCenterH, linkReset } from "../common/mixins"

export const Banner = () => {
  return (
    <StyledBanner>
      <Container>
        <MainHeading>
          relaxe<CorrectLastLetter>z</CorrectLastLetter>
          <br></br>
          <MainHeading2>on s'en occupe</MainHeading2>
        </MainHeading>
        <DecorativeLine
          src={"/assets/decorative-horizontal-line.png"}
          alt={"Ligne décorative. Decorative horizontal line."}
        />
      </Container>

      <Container>
        <SecondaryHeading>
          Nous sommes une entreprise familiale écologique qui met leurs clients
          en avant
        </SecondaryHeading>
      </Container>

      <Container>
        <EstimationPageCTA href={"/estimation"}>
          <SideDecoration
            src={"/assets/side-decoration.png"}
            alt={"Side decoration."}
          />
          <HorizontalLineBorder />
          Demandez votre estimation
          <HorizontalLineBorder2 />
          <SideDecoration2
            src={"/assets/side-decoration.png"}
            alt={"Side decoration."}
          />
        </EstimationPageCTA>
      </Container>
    </StyledBanner>
  )
}

const media = {
  shortenDecorativeLine: "(max-width: 900px)",
  slimNav: "(max-width: 1350px)",
  slimNavMore: "(max-width: 1015px)",
  tablet: "(max-width: 800px)",
  phone: "(max-width: 500px)",
}

const StyledBanner = styled.section`
  --nav-height: 130px;

  @media only screen and ${media.slimNav} {
    --nav-height: 100px;
  }

  @media only screen and ${media.slimNavMore} {
    --nav-height: 65px;
  }

  min-height: calc(100vh - var(--nav-height));

  background-image: linear-gradient(
    109.6deg,
    rgba(204, 228, 247, 1) 11.2%,
    rgba(237, 246, 250, 1) 100.2%
  );

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Container = styled.div`
  position: relative;
`

const MainHeading = styled.h1`
  width: 74rem;
  margin: 0 auto;
  margin-top: 3rem;

  font-size: 13.8rem;
  font-weight: 700;
  letter-spacing: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  line-height: 1;

  @media only screen and ${media.tablet} {
    width: 48rem;
    font-size: 8rem;
  }

  @media only screen and ${media.phone} {
    width: 32rem;
    font-size: 3.7rem;
    margin-top: 3rem;
  }
`

const CorrectLastLetter = styled.span`
  letter-spacing: initial;
`

const MainHeading2 = styled.span`
  font-size: 8.5rem;
  letter-spacing: initial;

  @media only screen and ${media.tablet} {
    font-size: 5.7rem;
    margin: 4rem auto;
  }

  @media only screen and ${media.phone} {
    font-size: 3.6rem;
    line-height: 3;
  }
`

const DecorativeLine = styled.img`
  ${absCenterH};
  width: 860px;
  top: 16.7rem;

  @media only screen and ${media.shortenDecorativeLine} {
    width: 720px;
  }

  @media only screen and ${media.tablet} {
    width: 475px;
    top: 11rem;
  }

  @media only screen and ${media.phone} {
    width: 300px;
    top: 8rem;
  }
`

const SecondaryHeading = styled.h2`
  width: 700px;
  margin: 2rem auto;
  margin-top: 0rem;

  font-size: 2.5rem;
  line-height: 5rem;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0px 0px 4px #fff;

  @media only screen and ${media.tablet} {
    width: 475px;
    font-size: 2rem;
  }

  @media only screen and ${media.phone} {
    width: auto;
    padding: 0 2rem;
    font-size: 2rem;
  }
`

const EstimationPageCTA = styled.a`
  ${linkReset};
  display: block;
  position: relative;
  width: 700px;
  margin: 0 auto;
  margin-bottom: 5rem;
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  @media only screen and ${media.tablet} {
    width: 475px;
    font-size: 2.5rem;
  }

  @media only screen and ${media.phone} {
    width: 310px;
    font-size: 2rem;
  }
`

const HorizontalLineBorder = styled.span`
  ${absCenterH};
  width: 650px;
  height: 2px;
  background: -webkit-gradient(
    radial,
    50% 50%,
    0,
    50% 50%,
    315,
    from(${props => props.theme.colors.primary}),
    to(transparent)
  );

  @media only screen and ${media.tablet} {
    width: 450px;
  }

  @media only screen and ${media.phone} {
    width: 320px;
  }
`

const HorizontalLineBorder2 = styled(HorizontalLineBorder)`
  top: 6rem;

  @media only screen and ${media.tablet} {
    top: 4.4rem;
  }

  @media only screen and ${media.phone} {
    top: 3.3rem;
  }
`

const SideDecoration = styled.img`
  height: 5rem;

  position: absolute;
  top: 6px;
  left: 20px;

  @media only screen and ${media.tablet} {
    height: 3rem;
    top: 8px;
  }

  @media only screen and ${media.phone} {
    height: 2rem;
    top: 7px;
    left: -13px;
  }
`

const SideDecoration2 = styled(SideDecoration)`
  transform: scale(-1);

  position: absolute;
  left: 630px;

  @media only screen and ${media.tablet} {
    left: 425px;
  }

  @media only screen and ${media.phone} {
    left: 304px;
  }
`

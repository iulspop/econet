import React from "react"
import styled from "styled-components"
import { absCenterH, linkReset } from "../../global"
import { theme } from "../../theme"

export const Banner = () => {
  return (
    <StyledBanner>
      <Container>
        <MainHeading>relaxez</MainHeading>
        <DecorativeLine
          src={"assets/decorative-horizontal-line.png"}
          alt={"Ligne décorative. Decorative horizontal line."}
        />
        <MainHeading2>on s'en occupe</MainHeading2>
      </Container>

      <Container>
        <SecondaryHeading>
          Nous sommes une entreprise familiale écologique qui met leurs clients
          en avant
        </SecondaryHeading>
      </Container>

      <Container>
        <EstimationPageCTA href={"#"}>
          <SideDecoration
            src={"assets/side-decoration.png"}
            alt={"Side decoration."}
          />
          <HorizontalLineBorder />
          Demandez votre estimation
          <HorizontalLineBorder2 />
          <SideDecoration2
            src={"assets/side-decoration.png"}
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
	width: 700px
  margin: 8rem auto;

  font-size: 13.8rem;
  letter-spacing: 2rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  line-height: 0;

  white-space: nowrap;

	transform: translateX(7px);
	
	// font-size: calc([minimum size]4rem + ([maximum size]8rem - [minimum size]4rem) * ((100vw - [minimum viewport width])320 / ([maximum viewport width]800 - [minimum viewport width]300)));
	// calc(4rem + (8rem - 4rem) * ((100vw - 320px) / (800px - 300px)))

	@media only screen and ${media.tablet} {
		font-size: 8rem;
	}
	
	@media only screen and ${media.phone} {
		font-size: 4rem;
		margin-top: 5rem;
  }
`

const MainHeading2 = styled(MainHeading)`
  margin: 5rem auto;

  font-size: 8.3rem;
  letter-spacing: -1px;
  transform: translateX(0px);

  @media only screen and ${media.tablet} {
    font-size: 5rem;
    margin: 4rem auto;
  }

  @media only screen and ${media.phone} {
    font-size: 3rem;
    margin: 2rem auto;
  }
`

const DecorativeLine = styled.img`
  display: block;
  width: 860px;
  margin: 0 auto;

  @media only screen and ${media.shortenDecorativeLine} {
    width: 720px;
  }

  @media only screen and ${media.tablet} {
    width: 450px;
  }

  @media only screen and ${media.phone} {
    width: 300px;
  }
`

const SecondaryHeading = styled.h2`
  width: 700px;
  margin: 5rem auto;

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
    font-size: 1.6rem;
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
    font-size: 1.8rem;
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
    from(${theme.colors.primary}),
    to(transparent)
  );

  @media only screen and ${media.tablet} {
    width: 450px;
  }

  @media only screen and ${media.phone} {
    width: 300px;
  }
`

const HorizontalLineBorder2 = styled(HorizontalLineBorder)`
  top: 6rem;

  @media only screen and ${media.tablet} {
    top: 4.4rem;
  }

  @media only screen and ${media.phone} {
    top: 3rem;
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
    top: 5px;
    left: 2px;
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
    left: 289px;
  }
`

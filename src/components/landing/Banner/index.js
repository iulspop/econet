import React from "react"
import styled from "styled-components"
import { absCenterH, linkReset } from "../../global"
import { theme } from "../../theme"

export const Banner = () => {
  const myRef = React.createRef()

  window.onresize = function() {
    const width = window.innerWidth
    if (width < 800) {
      myRef.current.style.transform = `scale(calc(${width} / 800))`
    }
  }

  return (
    <BannerContainer>
      <BannerChild ref={myRef}>
        <MainHeading>relaxez</MainHeading>
        <DecorativeLine
          src={"assets/decorative-horizontal-line.png"}
          alt={"Ligne décorative. Decorative horizontal line."}
        />
        <MainHeading2>on s'en occupe</MainHeading2>
        <SecondaryHeading>
          Nous sommes une entreprise familiale écologique qui met leurs clients
          en avant
        </SecondaryHeading>

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
      </BannerChild>
    </BannerContainer>
  )
}

const media = {
  shortenDecorativeLine: "(max-width: 900px)",
  scaleBanner: "(max-width: 800px)",
}

const BannerContainer = styled.section`
  height: calc(100vh - 130px);
  min-height: 695px;
  position: relative;
  background-image: linear-gradient(
    109.6deg,
    rgba(204, 228, 247, 1) 11.2%,
    rgba(237, 246, 250, 1) 100.2%
  );
`

const BannerChild = styled.div`
  // calc([minimum size 0.4] + ([maximum size 1] - [minimum size 0.4]) * ((100vw - [minimum viewport width 300px]) / ([maximum viewport width 800px] - [minimum viewport width 300px])))
  // calc(0.4 + (1 - 0.4) * ((100vw - 300px) / (800 - 300)))
  // calc((100vw - 300px) / 500)

  // @media only screen and ${media.scaleBanner} {
	// 	transform: scale(calc(100% / 800))
  // }
`

const MainHeading = styled.h1`
  width: 665px;
  font-size: 13.7rem;
  font-weight: 700;
  letter-spacing: 2rem;
  text-align: center;
  text-transform: uppercase;

  position: absolute;
  top: -7rem;
  left: 50%;
  transform: translateX(calc(-50% - 11px));
`

const MainHeading2 = styled(MainHeading)`
  font-size: 8.3rem;
  letter-spacing: -1px;
  white-space: nowrap;

  top: 17rem;
  transform: translateX(calc(-50% - 7px));
`

const DecorativeLine = styled.img`
  width: 860px;

  ${absCenterH};
  top: 20rem;

  @media only screen and ${media.shortenDecorativeLine} {
    width: 720px;
    transform: translateX(calc(-50% + 4px));
  }
`

const SecondaryHeading = styled.h2`
  width: 700px;
  font-size: 2.5rem;
  line-height: 5rem;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0px 0px 4px #fff;

  ${absCenterH};
  top: 37rem;
`

const EstimationPageCTA = styled.a`
  ${linkReset};
  width: 700px;
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  ${absCenterH};
  top: 56rem;
`

const HorizontalLineBorder = styled.span`
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

  ${absCenterH};
`

const HorizontalLineBorder2 = styled(HorizontalLineBorder)`
  top: 6rem;
`

const SideDecoration = styled.img`
  height: 5rem;

  position: absolute;
  top: 6px;
  left: 20px;
`

const SideDecoration2 = styled(SideDecoration)`
  transform: scale(-1);

  position: absolute;
  left: 630px;
`

import React from "react"
import styled from "styled-components"
import { absCenterH, linkReset } from "../../globalStyleUtils"

export const Banner = () => {
  return (
    <Banner_Container>
      <MainHeadingPart1>relaxez</MainHeadingPart1>
      <DecorativeLine
        src={"assets/decorative-horizontal-line.png"}
        alt={"Ligne décorative. Decorative horizontal line."}
      ></DecorativeLine>
      <MainHeadingPart2>on s'en occupe</MainHeadingPart2>
      <SecondaryHeading>
        Nous sommes une entreprise familiale écologique qui met leurs clients en
        avant
      </SecondaryHeading>

      <EstimationPageCTA href={"#"}>
        <HorizontalLineBorder />
        Demandez votre soumission
        <HorizontalLineBorder2 />
      </EstimationPageCTA>
    </Banner_Container>
  )
}

const Banner_Container = styled.section`
  height: calc(100vh - 130px);
  position: relative;
  background-image: linear-gradient(
    109.6deg,
    rgba(204, 228, 247, 1) 11.2%,
    rgba(237, 246, 250, 1) 100.2%
  );
  // &::before {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background-size: cover;
  //   background-image: url(assets/white_daisies.jpg);
  //   filter: grayscale(70%);
  // }
`

const MainHeadingPart1 = styled.h1`
  width: 665px;
  font-size: 13.7rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 2rem;
  text-shadow: 0px 0px 4px #fff;
  ${absCenterH}
  top: -5rem;
`

const MainHeadingPart2 = styled.h1`
  width: 665px;
  font-size: 8.3rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;
  letter-spacing: -1px;
  text-shadow: 0px 0px 4px #fff;
  position: absolute;
  top: 19rem;
  left: 50%;
  transform: translateX(calc(-50% + 4px));
`

const DecorativeLine = styled.img`
  width: 870px;
  ${absCenterH};
  top: 22rem;
`

const SecondaryHeading = styled.h2`
  width: 700px;
  font-size: 2.5rem;
  line-height: 5rem;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 0px 0px 4px #fff;
  ${absCenterH};
  top: 40rem;
`

const EstimationPageCTA = styled.a`
  width: 700px;
  ${linkReset};
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
  // background: linear-gradient(0.25turn, #9af04f, #68a336, #9af04f);
  background: -webkit-gradient(
    radial,
    50% 50%,
    0,
    50% 50%,
    315,
    from(#68a336),
    to(transparent)
  );
  ${absCenterH};
`

const HorizontalLineBorder2 = styled(HorizontalLineBorder)`
  top: 6rem;
`

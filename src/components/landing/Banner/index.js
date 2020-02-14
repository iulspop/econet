import React from "react"
import styled from "styled-components"
import { absCenterH, linkReset } from "../../globalStyleUtils"
import { theme } from "../../theme"

export const Banner = () => {
  return (
    <Banner_Container>
      <MainHeading>relaxez</MainHeading>
      <DecorativeLine
        src={"assets/decorative-horizontal-line.png"}
        alt={"Ligne décorative. Decorative horizontal line."}
      ></DecorativeLine>
      <MainHeading2>on s'en occupe</MainHeading2>
      <SecondaryHeading>
        Nous sommes une entreprise familiale écologique qui met leurs clients en
        avant
      </SecondaryHeading>

      <EstimationPageCTA href={"#"}>
        <SideDecoration
          src={"assets/side-decoration.png"}
          alt={"Side decoration."}
        />
        <HorizontalLineBorder />
        Demandez votre soumission
        <HorizontalLineBorder2 />
        <SideDecoration2
          src={"assets/side-decoration.png"}
          alt={"Side decoration."}
        />
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
  position: absolute;
  top: 17rem;
  left: 50%;
  transform: translateX(calc(-50% - 7px));
`

const DecorativeLine = styled.img`
  width: 860px;
  ${absCenterH};
  top: 20rem;
`

const SecondaryHeading = styled.h2`
  width: 700px;
  font-size: 2.5rem;
  line-height: 5rem;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 0px 0px 4px #fff;
  ${absCenterH};
  top: 37rem;
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
  // background: linear-gradient(0.25turn, #9af04f, ${theme.colors.primary}, #9af04f);
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
  left: 20px;
  top: 6px;
`

const SideDecoration2 = styled(SideDecoration)`
  transform: scale(-1);
  position: absolute;
  left: 630px;
`

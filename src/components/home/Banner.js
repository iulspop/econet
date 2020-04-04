import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

import { absCenterH } from "../../mixins"
import { DecoratedButton } from "../common"

export const Banner = () => {
  const { t, i18n } = useTranslation("Banner")

  return (
    <StyledBanner>
      <Container>
        {i18n.language === "fr" ? (
          <MainHeading>
            relaxe<CorrectLastLetter>z</CorrectLastLetter>
            <br></br>
            <MainHeading2>on s'en occupe</MainHeading2>
          </MainHeading>
        ) : (
          <MainHeading>
            rela<CorrectLastLetter>x</CorrectLastLetter>
            <br></br>
            <MainHeading2>we'll take care of it</MainHeading2>
          </MainHeading>
        )}

        <DecorativeLine
          src={"/assets/decorative-horizontal-line.png"}
          alt={""}
        />
      </Container>

      <SecondaryHeading>{t("secondaryHeading")}</SecondaryHeading>

      <DecoratedButton left right link href="/estimation">
        {t("quoteRequest")}
      </DecoratedButton>
    </StyledBanner>
  )
}

const StyledBanner = styled.section`
  --nav-height: 130px;

  @media only screen and ${props => props.theme.media.tabLand} {
    --nav-height: 100px;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    --nav-height: 65px;
  }

  min-height: calc(100vh - var(--nav-height));

  background-image: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Container = styled.div`
  position: relative;
`

const MainHeading = styled.h1`
  width: 90rem;
  margin: 0 auto;
  margin-top: 3rem;

  font-size: 13.8rem;
  font-weight: 700;
  letter-spacing: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  line-height: 1;

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 48rem;
    font-size: 8rem;
  }

  @media only screen and ${props => props.theme.media.phone} {
    width: 30rem;
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
  white-space: nowrap;

  @media only screen and ${props => props.theme.media.tabPort} {
    margin: 4rem auto;
    font-size: 5.7rem;
    white-space: normal;
    line-height: 1;
  }

  @media only screen and ${props => props.theme.media.phone} {
    font-size: 3.6rem;
  }
`

const DecorativeLine = styled.img`
  ${absCenterH};
  width: 860px;
  top: 16.7rem;

  @media only screen and ${props => props.theme.media.tabLand} {
    width: 720px;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 475px;
    top: 11rem;
  }

  @media only screen and ${props => props.theme.media.phone} {
    width: 300px;
    top: 8rem;
  }
`

const SecondaryHeading = styled.h2`
  width: 75rem;
  margin: 2rem auto;
  margin-top: 0rem;

  font-size: 2.5rem;
  line-height: 5rem;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0px 0px 4px #fff;

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 475px;
    font-size: 2rem;
  }

  @media only screen and ${props => props.theme.media.phone} {
    width: auto;
    padding: 0 2rem;
    font-size: 2rem;
  }
`

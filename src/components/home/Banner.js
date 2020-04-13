import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

import { absCenterH } from "../../mixins"
import { DecoratedButton } from "../common"
import { linkReset } from "../../mixins"

export const Banner = () => {
  const { t, i18n } = useTranslation(["Banner", "Links"])

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

        <DecorativeLine src="/assets/decorative-horizontal-line.svg" alt="" />
      </Container>
      <FlexColumn>
        <LogoImg
          src="/assets/big-logo.png"
          alt="Nettoyage écologique de tapis et de meubles. Nettoyage Éconet Logo."
        />
        <NumberLink href="tel:5146666601">514-666-6601</NumberLink>
      </FlexColumn>

      <H2>{t("secondaryHeading")}</H2>

      <DecoratedButton left right link href={t("Links:contact")}>
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
  padding-bottom: 3rem;

  background-image: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 700px) {
    padding-top: 9rem;
  }
`

const Container = styled.div`
  position: relative;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`

const MainHeading = styled.h1`
  width: 99vw;
  margin: 0 auto;
  margin-top: 3rem;

  font-size: 13.8rem;
  font-weight: 700;
  letter-spacing: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  line-height: 1;

  @media only screen and ${props => props.theme.media.tabPort} {
    font-size: 8rem;
  }

  @media only screen and ${props => props.theme.media.phone} {
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
  text-align: center;

  @media only screen and ${props => props.theme.media.tabPort} {
    margin: 4rem auto;
    font-size: 5.7rem;
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

export const H2 = styled.h2`
  margin-top: 1rem;
  margin-bottom: 5rem;
  width: 70vw;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 80vw;
  }

  @media only screen and ${props => props.theme.media.phone} {
    width: 90vw;
    margin-bottom: 4rem;
    font-size: calc(0.065 * 100vw + 0.6786rem);
  }
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 701px) {
    display: none;
  }
`

const LogoImg = styled.img`
  width: 80vw;
  margin-bottom: 1rem;
`

const NumberLink = styled.a`
  ${linkReset}
  line-height: 1;
  font-size: calc(0.026316 * 100vw + 3.1579rem);
  font-weight: 700;
  transition: 0.3s ease;
  margin-bottom: 3rem;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

import React, { useState } from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { DecoratedButton } from "../common"
import { Form } from "./Form"

export const Estimation = () => {
  const { t } = useTranslation("Estimation")

  const [shownForm, setShownForm] = useState("")

  function showResidentialForm() {
    setShownForm(() => "residential")
  }

  function showCommercialForm() {
    setShownForm(() => "commercial")
  }

  return (
    <StyledMain>
      <Flexbox>
        <DecorativeLine
          src={"/assets/decorative-horizontal-line.png"}
          alt={""}
        />
        <MainHeading>{t("mainHeading")}</MainHeading>
        <SecondaryHeading shownForm={shownForm}>
          {t("secondaryHeading")}
        </SecondaryHeading>
        <Container shownForm={shownForm}>
          <DecoratedButton
            clickAction={showResidentialForm}
            inactive={shownForm === "commercial"}
            ariaLabel="open résidential services form"
            left
          >
            {t("buttonResidential")}
          </DecoratedButton>
          <DecoratedButton
            clickAction={showCommercialForm}
            inactive={shownForm === "residential"}
            ariaLabel="open commercial services form"
            right
          >
            {t("buttonCommercial")}
          </DecoratedButton>
        </Container>
      </Flexbox>

      <div>
        <Form shownForm={shownForm} formName="commercial" />
        <Form shownForm={shownForm} formName="residential" />
      </div>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
`
const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container = styled.div`
  display: inline-block;
  margin-top: ${props => (props.shownForm ? "2rem" : "4.7rem")};

  @media only screen and ${props => props.theme.media.phone} {
    margin-top: 0rem;
  }
`

const DecorativeLine = styled.img`
  width: 700px;
  margin-bottom: 2rem;

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 455px;
    margin-top: 1rem;
  }

  @media only screen and ${props => props.theme.media.phone} {
    width: 290px;
  }
`

const MainHeading = styled.h1`
  margin: 3rem 0;
  margin-top: 2rem;

  font-size: 8.2rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  line-height: 1;

  @media only screen and ${props => props.theme.media.tabPort} {
    font-size: 7.5rem;
  }

  @media only screen and ${props => props.theme.media.phone} {
    font-size: 5rem;
  }
`

const SecondaryHeading = styled.h2`
  display: ${props => (props.shownForm === "" ? "block" : "none")};
  text-align: center;

  @media only screen and ${props => props.theme.media.tabPort} {
    font-size: 2.75rem;
  }

  @media only screen and ${props => props.theme.media.phone} {
    font-size: 2rem;
  }
`

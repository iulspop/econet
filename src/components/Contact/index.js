import React, { useState } from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { Form } from "./Form"
import { ContactInfo } from "./ContactInfo"
import { DecorativeLine } from "../home/common"
import { DecoratedButton } from "../common"

export const Contact = () => {
  const { t } = useTranslation("Estimation")

  const [shownForm, setShownForm] = useState("residential")

  function showResidentialForm() {
    setShownForm(() => "residential")
  }

  function showCommercialForm() {
    setShownForm(() => "commercial")
  }

  return (
    <StyledMain>
      <Flexbox>
        <DecorativeLine isPageTop="true" />

        <MainHeading>{t("mainHeading")}</MainHeading>

        <SecondaryHeading>{t("secondaryHeading")}</SecondaryHeading>

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

      <FlexContainer>
        <Form shownForm={shownForm} formName="commercial" />
        <Form shownForm={shownForm} formName="residential" />
        <ContactInfo />
      </FlexContainer>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media only screen and ${props => props.theme.media.tabPort} {
    padding: 2rem;
  }
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
  text-align: center;

  @media only screen and ${props => props.theme.media.tabPort} {
    font-size: 2.75rem;
  }

  @media only screen and ${props => props.theme.media.phone} {
    font-size: 2rem;
  }
`

const FlexContainer = styled.div`
  width: 90vw;
  margin: 5rem 0;

  display: flex;
  justify-content: center;

  @media only screen and ${props => props.theme.media.tabLand} {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    width: unset;
  }

  @media only screen and ${props => props.theme.media.phone} {
    margin: 1rem 0;
  }
`

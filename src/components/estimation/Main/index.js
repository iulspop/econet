import React, { useState } from "react"
import styled from "styled-components"
import { DecoratedButton } from "./Button"
import { Form } from "./Form"

export const Main = () => {
  const [shownForm, setShownForm] = useState("")

  function showResidentialForm() {
    setShownForm(prev => "residential")
  }

  function showCommercialForm() {
    setShownForm(prev => "commercial")
  }

  return (
    <StyledMain>
      <Container>
        <DecorativeLine
          src={"/assets/decorative-horizontal-line.png"}
          alt={""}
        />
        <MainHeading>Estimation</MainHeading>
      </Container>

      <SecondaryHeading shownForm={shownForm}>
        Afin de bien vous servir, veuillez nous indiquer quel type de service
        vous cherchez.
      </SecondaryHeading>

      <Container>
        <DecoratedButton
          clickAction={showResidentialForm}
          ariaLabel="open résidential services form"
          left
        >
          Résidentiel
        </DecoratedButton>
        <DecoratedButton
          clickAction={showCommercialForm}
          ariaLabel="open commercial services form"
        >
          Commercial
        </DecoratedButton>
      </Container>

      <Container>
        <Form shownForm={shownForm} formName="commercial-estimation" />
        <Form shownForm={shownForm} formName="residential-estimation" />
      </Container>
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

const Container = styled.div`
  display: ${props => (props.shownForm ? "none" : "block")};
`

const SecondaryHeading = styled.h2`
  display: ${props => (props.shownForm === "" ? "block" : "none")};
`

const DecorativeLine = styled.img`
  width: 700px;
  margin: 2rem;
  margin-top: 0rem;
`

const MainHeading = styled.h1`
  margin: 3rem 0;
  margin-top: 2rem;

  font-size: 8.2rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  line-height: 1;
`

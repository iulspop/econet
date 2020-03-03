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
      <Flexbox>
        <DecorativeLine
          src={"/assets/decorative-horizontal-line.png"}
          alt={""}
        />
        <MainHeading>Estimation</MainHeading>
        <SecondaryHeading shownForm={shownForm}>
          Afin de bien vous servir,
          <br /> choisissez le service vous cherchez
        </SecondaryHeading>
        <Container shownForm={shownForm}>
          <DecoratedButton
            clickAction={showResidentialForm}
            inactive={shownForm === "commercial"}
            ariaLabel="open résidential services form"
            left
          >
            Résidentiel
          </DecoratedButton>
          <DecoratedButton
            clickAction={showCommercialForm}
            inactive={shownForm === "residential"}
            ariaLabel="open commercial services form"
          >
            Commercial
          </DecoratedButton>
        </Container>
      </Flexbox>

      <div>
        <Form shownForm={shownForm} formName="commercial-estimation" />
        <Form shownForm={shownForm} formName="residential-estimation" />
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
`

const SecondaryHeading = styled.h2`
  display: ${props => (props.shownForm === "" ? "block" : "none")};
  text-align: center;
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

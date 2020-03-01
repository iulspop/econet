import React, { useState } from "react"
import styled from "styled-components"
import { DecoratedButton } from "./Button"
import { Form } from "./Form"

export const Main = () => {
  const [showForm, setShowForm] = useState(false)

  function toggleForm() {
    setShowForm(!showForm)
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

      <Container showForm={showForm}>
        <h2>
          Afin de bien vous servir, veuillez nous indiquer quel type de service
          vous cherchez.
        </h2>
      </Container>

      <Container>
        <DecoratedButton
          clickAction={toggleForm}
          alt="open résidential services form to get your estimation"
          left
        >
          Résidentiel
        </DecoratedButton>
        <DecoratedButton
          clickAction={toggleForm}
          alt="open commercial services form to get your estimation"
        >
          Commercial
        </DecoratedButton>
      </Container>

      <Container>
        <Form showForm={showForm} />
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
  display: ${props => (props.showForm ? "none" : "block")};
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

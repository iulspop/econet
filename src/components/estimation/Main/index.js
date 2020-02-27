import React, { useState } from "react"
import styled from "styled-components"
import { ButtonLeft, ButtonRight } from "./Buttons"
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
        <ButtonLeft />
        <ButtonRight toggleForm={toggleForm} />
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

  background-image: linear-gradient(
    109.6deg,
    rgba(204, 228, 247, 1) 11.2%,
    rgba(237, 246, 250, 1) 100.2%
  );
`

const Container = styled.div`
  display: ${props => (props.showForm ? "none" : "block")};
`

const DecorativeLine = styled.img`
  width: 700px;
  margin: 2rem;
  margin-top: 5rem;
`

const MainHeading = styled.h1`
  margin: 5rem 0;

  font-size: 8.2rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  line-height: 1;
`

import React from "react"
import styled from "styled-components"
import { Button } from "../common"

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <DecorativeLine
          src={"/assets/decorative-horizontal-line.png"}
          alt={""}
        />
        <MainHeading>Soumission</MainHeading>
      </Container>

      <Container>
        <Button>
          <SideDecorationLeft src={"/assets/side-decoration.png"} alt={""} />
          commercial
        </Button>
        <Button>
          résidentiel
          <SideDecorationRight src={"/assets/side-decoration.png"} alt={""} />
        </Button>
      </Container>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-image: linear-gradient(
    109.6deg,
    rgba(204, 228, 247, 1) 11.2%,
    rgba(237, 246, 250, 1) 100.2%
  );
`

const Container = styled.div``

const DecorativeLine = styled.img`
  width: 700px;
  margin: 2rem;
  margin-top: 5rem;
`

const MainHeading = styled.h1`
  margin: 0;

  font-size: 8.2rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  line-height: 1;
`

const SideDecorationLeft = styled.img`
  width: 8rem;
  position: absolute;
  left: -8rem;

  top: 50%;
  transform: translateY(-50%);
`

const SideDecorationRight = styled(SideDecorationLeft)`
  left: 100%;
  transform: translateY(-50%) scale(-1);
`

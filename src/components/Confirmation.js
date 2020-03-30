import React from "react"
import styled from "styled-components"
// import { useTranslation } from "react-i18next"
import { linkReset } from "../mixins"

export const Confirmation = () => {
  // const { t } = useTranslation("Story")
  return (
    <Container>
      <Box>
        <H1>Merci!</H1>
        <Paragraph>
          Votre estimation à été soumise.
          <LineBreak /> Nous vous contacterons dès que possible.
        </Paragraph>
        <ReturnLink href="/">Retourner</ReturnLink>
      </Box>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.primary};

  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  width: 90vw;
  max-width: 40rem;
  padding: 4rem 2rem;
  background-color: white;
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const H1 = styled.h1`
  margin: 0;
  margin-bottom: 2rem;
  font-size: 3.4rem;
  line-height: 1;
`

const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.2rem;
`

const LineBreak = styled.span`
  &::before {
    @media only screen and (min-width: 500px) {
      content: "\";
      white-space: pre;
    }
  }
`

const ReturnLink = styled.a`
  ${linkReset}
  width: 15rem;
  height: 4.2rem;
  margin-bottom: 1rem;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.primary};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: white;
  font-size: 2.2rem;
  text-align: center;
`

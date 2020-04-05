import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { linkReset } from "../mixins"

export const Confirmation = () => {
  const { t } = useTranslation(["Confirmation", "Links"])
  return (
    <Container>
      <Box>
        <H1>{t("merci")}</H1>
        <Paragraph>
          {t("paragraphLine1")}
          <LineBreak />
          {t("paragraphLine2")}
        </Paragraph>
        <ReturnLink href={t("Links:home")}>{t("return")}</ReturnLink>
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
  width: 91vw;
  max-width: 40rem;
  padding: 4rem 2rem;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and ${props => props.theme.media.phone} {
    padding: 4rem 1.5rem;
  }
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

  @media only screen and ${props => props.theme.media.phone} {
    font-size: calc(0.0195 * 100vw + 1.23rem);
  }
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

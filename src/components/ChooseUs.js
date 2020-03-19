import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { DecorativeLine, FlexColumn, SectionHeading } from "./common"

export const ChooseUs = () => {
  const { t } = useTranslation("ChooseUs")
  return (
    <StyledFlexColumn>
      <DecorativeLine />
      <Container>
        <SectionHeading>{t("h3")}</SectionHeading>
        <ol>
          <li>
            <h4>100% Ecologique</h4>
            <p>Tous nos produits 100%</p>
          </li>
        </ol>
      </Container>
    </StyledFlexColumn>
  )
}

const StyledFlexColumn = styled(FlexColumn)`
  background-image: linear-gradient(
    109.6deg,
    rgba(204, 228, 247, 1) 11.2%,
    rgba(237, 246, 250, 1) 100.2%
  );
`

const Container = styled.div`
  width: 80vw;

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 90vw;
  }
`

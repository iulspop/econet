import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { DecoratedButton } from "../common"
import { FlexColumn, DecorativeLine, SectionHeading } from "./common"

export const RegionsDesservies = () => {
  const { t } = useTranslation("RegionsDesservies")
  return (
    <StyledFlexColumn>
      <DecorativeLine />
      <FlexContainer>
        <TextContainer>
          <SectionHeading>{t("sectionHeading")}</SectionHeading>
          <p>{t("paragraph1")}</p>
          <ButtonContainer>
            <DecoratedButton left right slim>
              {t("button")}
            </DecoratedButton>
          </ButtonContainer>
        </TextContainer>

        <ImageOfMap aria-label={t("mapLabel")} />
      </FlexContainer>
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

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0;
`

const TextContainer = styled.div`
  align-item: stretch;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
  margin: 0 4rem;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 40vw;
  margin: 4rem 0;
`

const ImageOfMap = styled.img`
  width: 40vw;
  height: 35vw;
  background-color: grey;
`

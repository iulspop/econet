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
  align-items: center;
  margin: 4rem 0;
`

const TextContainer = styled.div`
  width: 42vw;
  margin-right: 5vw;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 42vw;
  margin: 4rem 0;
`

const ImageOfMap = styled.img`
  width: 43vw;
  height: 35vw;
  background-color: grey;
`

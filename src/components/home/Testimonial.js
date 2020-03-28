import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { DecorativeLine, FlexColumn, SectionHeading } from "./common"

export const Testimonial = () => {
  const { t } = useTranslation("Testimonial")
  return (
    <StyledFlexColumn>
      <DecorativeLine />
      <SectionHeading>{t("sectionHeading")}</SectionHeading>
      <H4>{t("h4")}</H4>
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

const H4 = styled.h4``

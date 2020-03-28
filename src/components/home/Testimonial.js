import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { DecorativeLine, FlexColumn } from "./common"

export const Testimonial = () => {
  const { t } = useTranslation("Testimonial")
  return (
    <StyledFlexColumn>
      <DecorativeLine />
      <SectionHeadingH3>{t("sectionHeadingH3")}</SectionHeadingH3>
      {/* <SubHeadingH4>{t("subHeadingH4")}</SubHeadingH4> */}
      <CustomerQuote>
        <QuotationMark>“</QuotationMark>
        {t("testimonial1")}
        <QuotationMark>”</QuotationMark>
      </CustomerQuote>
      <CustomerName>- {t("customer1")}</CustomerName>
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

const SectionHeadingH3 = styled.h3`
  font-size: 5rem;
  margin-top: 1rem;
  margin-bottom: 5rem;
  width: 95vw;
  text-align: center;

  @media only screen and ${props => props.theme.media.tabLand} {
    font-size: calc(0.034 * 100vw + 0.95rem);
  }

  @media only screen and ${props => props.theme.media.phone} {
    font-size: calc(0.045 * 100vw + 0.95rem);
  }
`

const SubHeadingH4 = styled.h4`
  font-size: 4rem;
`

const CustomerQuote = styled.p`
  font-size: 5rem;
  width: 66vw;
  text-align: center;
`

const QuotationMark = styled.span`
  color: ${props => props.theme.colors.primary};
`

const CustomerName = styled.strong`
  font-size: 4rem;
`

import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { DecorativeLine, FlexColumn } from "./common"
import { linkReset } from "../../mixins"

export const Testimonial = () => {
  const { t } = useTranslation("Testimonial")
  return (
    <StyledFlexColumn>
      <DecorativeLine />
      <SectionHeadingH3>{t("sectionHeadingH3")}</SectionHeadingH3>
      <CustomerQuote>
        <QuotationMark>“</QuotationMark>
        {t("testimonial1")}
        <QuotationMark>”</QuotationMark>
      </CustomerQuote>
      <CustomerName>- {t("customer1")}</CustomerName>
      <Link
        href="https://goo.gl/maps/fTYwJTmaLoEuuYny9"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("readReviews")}
      </Link>
    </StyledFlexColumn>
  )
}

const StyledFlexColumn = styled(FlexColumn)`
  background-image: ${props => props.theme.colors.background};
`

const SectionHeadingH3 = styled.h3`
  font-size: 5rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 95vw;
  text-align: center;

  @media only screen and ${props => props.theme.media.tabLand} {
    font-size: calc(0.034 * 100vw + 0.95rem);
  }

  @media only screen and ${props => props.theme.media.phone} {
    font-size: calc(0.045 * 100vw + 0.95rem);
  }
`

const CustomerQuote = styled.p`
  font-size: 4rem;
  width: 66vw;
  text-align: center;

  @media only screen and (max-width: 1580px) {
    font-size: calc(0.01315789 * 100vw + 2.921052632rem);
  }

  @media only screen and ${props => props.theme.media.tabLand} {
    width: 80vw;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    font-size: calc(0.03676471 * 100vw + 0.823529412rem);
  }
`

const QuotationMark = styled.span`
  color: ${props => props.theme.colors.primary};
`

const CustomerName = styled.strong`
  margin-top: 0.2rem;
  font-size: 3.5rem;

  @media only screen and ${props => props.theme.media.tabPort} {
    font-size: calc(0.03064516 * 100vw + 1.119354839rem);
  }
`

const Link = styled.a`
  ${linkReset}
  margin-top: 3rem;
  font-size: 2rem;
  transition: 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

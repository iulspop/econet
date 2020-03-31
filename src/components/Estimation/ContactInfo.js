import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { linkReset } from "../../mixins"

export const ContactInfo = () => {
  const { t } = useTranslation("ContactInfo")
  return (
    <ContactInfoBox>
      <H3>{t("contact")}</H3>

      <Container>
        <H4>{t("phone")}</H4>
        <p>
          <Link href="tel:514-666-6601">514-666-6601</Link>
        </p>
      </Container>

      <Container>
        <H4>{t("hours")}</H4>
        <p>
          {t("days")}
          <br></br>
          9AM - 6PM
        </p>
      </Container>

      <Container>
        <H4>{t("area")}</H4>
        <p>{t("cities")}</p>
      </Container>

      <Container>
        <H4>{t("addressTitle")}</H4>
        <address>
          <Link href="https://goo.gl/maps/fTYwJTmaLoEuuYny9">
            {t("address")}
          </Link>
        </address>
      </Container>
    </ContactInfoBox>
  )
}

const ContactInfoBox = styled.aside`
  width: 25vw;
  min-width: 330px;
  height: 587.56px;
  margin-left: 4rem;
  padding: 2rem 1.5rem;
  border-radius: 3px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  background-color: white;
  // background-color: ${props => props.theme.colors.secondary};

  line-height: 1.5;

  @media only screen and ${props => props.theme.media.tabLand} {
    width: 30vw;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 90vw;
    max-width: 531px;
    min-width: unset;
    margin-top: 5rem;
    margin-left: 0;
  }
`

const Container = styled.div`
  margin-bottom: 3rem;
`

const H3 = styled.h3`
  margin: 0;
  margin-bottom: 1.8rem;
  font-size: 3.5rem;
  line-height: 1;
`

const H4 = styled.h4`
  font-size: 2.4rem;
`

const Link = styled.a`
  ${linkReset};
  transition: 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

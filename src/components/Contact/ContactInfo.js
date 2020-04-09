import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { linkReset } from "../../mixins"
import { GatsbyLink } from "../common/Header/Links/GatsbyLink"

export const ContactInfo = () => {
  const { t } = useTranslation("ContactInfo")
  return (
    <ContactInfoBox>
      <H3>{t("contact")}</H3>

      <Container>
        <H4>{t("phone")}</H4>
        <p>
          <Link href="tel:514-666-6601" target="_blank">
            514-666-6601
          </Link>
        </p>
      </Container>

      <Container>
        <H4>{t("email")}</H4>
        <p>
          <Link href="mailto:info@nettoyageeconet.com">
            info@nettoyageeconet.com
          </Link>
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
        <StyledGatsbyLink to="regions-desservies">
          <p>{t("cities")}</p>
        </StyledGatsbyLink>
      </Container>

      <Container>
        <H4>{t("addressTitle")}</H4>
        <address>
          <Link
            href="https://goo.gl/maps/fTYwJTmaLoEuuYny9"
            target="_blank"
            rel="noopener noreferrer"
          >
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
  background-color: ${props => props.theme.colors.primary};
  color: white;

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
  margin-bottom: 2rem;
`

const H3 = styled.h3`
  margin: 0;
  margin-bottom: 1.5rem;
  font-size: 3.5rem;
  line-height: 1;
`

const H4 = styled.h4`
  font-size: 2.4rem;
`

const Link = styled.a`
  ${linkReset};
  transition: 0.3s ease;
  color: white;

  &:hover {
    font-weight: 700;
  }
`

const StyledGatsbyLink = styled(GatsbyLink)`
  ${linkReset};
  transition: 0.3s ease;
  color: white;

  &:hover {
    font-weight: 700;
  }
`

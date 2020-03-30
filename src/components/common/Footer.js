import React, { useState } from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

export const Footer = () => {
  const { t } = useTranslation("Footer")
  return (
    <StyledFooter>
      <LogoImg
        src={"/assets/logo.png"}
        alt={
          "Nettoyage écologique de tapis et de meubles. Nettoyage Éconet Logo."
        }
      />

      <Nav>
        <Column>
          <a>Accueil</a>
          <a>À Propos</a>
          <a>Nous Joindre</a>
        </Column>
        <Column>
          <a>Services Résidentiels</a>
          <a>Services Commerciaux</a>
        </Column>
      </Nav>

      <ListOfLinks>
        <ListItemHorizonalCenterUp>
          <a href="#">
            <SVGIcon
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </SVGIcon>
          </a>
        </ListItemHorizonalCenterUp>
        <ListItemVerticalCenterLeft>
          <a href="#">
            <SVGIcon
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </SVGIcon>
          </a>
        </ListItemVerticalCenterLeft>
        <ListItemHorizonalCenterDown>
          <a href="#">
            <SVGIcon
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z" />
            </SVGIcon>
          </a>
        </ListItemHorizonalCenterDown>
        <ListItemVerticalCenterRight>
          <a href="#">
            <SVGIcon
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
            </SVGIcon>
          </a>
        </ListItemVerticalCenterRight>
      </ListOfLinks>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  height: 30rem;
  padding: 3rem 5rem;
  background-image: linear-gradient(
    109.6deg,
    rgba(204, 228, 247, 1) 11.2%,
    rgba(237, 246, 250, 1) 100.2%
  );
  // background-color: ${props => props.theme.colors.primary};

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoImg = styled.img`
  height: 10vw;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 30vw;
`

const Column = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 14vw;
`

const ListOfLinks = styled.ul`
  margin-top: 4rem;
  position: relative;
  list-style: none;
  width: 10vw;
  height: 15rem;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(/assets/tiny-logo.png);
    height: 2.7rem;
    width: 2.7rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
`

const ListItemHorizonalCenterUp = styled.li`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

const ListItemHorizonalCenterDown = styled(ListItemHorizonalCenterUp)`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
`

const ListItemVerticalCenterLeft = styled.li`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &::before {
    content: "";
    height: 1px;
    width: 100px;
    background-color: ${props => props.theme.colors.primary};

    position: absolute;
    left: -45px;
    top: -37px;
    transform: rotate(35deg);
  }

  &::after {
    content: "";
    height: 1px;
    width: 100px;
    background-color: ${props => props.theme.colors.primary};

    position: absolute;
    left: -45px;
    bottom: -37px;
    transform: rotate(-35deg);
  }
`

const ListItemVerticalCenterRight = styled(ListItemVerticalCenterLeft)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  &::before {
    left: unset;
    right: -45px;
    transform: rotate(-35deg);
  }

  &::after {
    left: unset;
    right: -45px;
    transform: rotate(35deg);
  }
`

const SVGIcon = styled.svg`
  fill: blue;
`

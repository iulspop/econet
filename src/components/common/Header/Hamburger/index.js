import React from "react"
import styled from "styled-components"
import { buttonReset } from "../../mixins"

export const Hamburger = props => {
  const { toggleNav, showNav } = props

  return (
    <StyledHamburger onClick={toggleNav} showNav={showNav}>
      <HamburgerIcon showNav={showNav} />
    </StyledHamburger>
  )
}

export const media = {
  enableHamburger: "(max-width: 1350px)",
}

const StyledHamburger = styled.button`
  align-self: center;

  ${buttonReset}
  display: none;
  height: 100%;
  width: 40px;

  justify-content: center;

  @media only screen and ${media.enableHamburger} {
    display: flex;
  }

  // belongs to HamburgerIcon, but put it here so can hover on button to get effect :_(
  &:hover > span::before {
    top: ${props => (props.showNav ? "0" : "-1rem")};
  }

  &:hover > span::after {
    top: ${props => (props.showNav ? "0" : "1rem")};
  }
`

const HamburgerIcon = styled.span`
  align-self: center;

  position: relative;

  &,
  &::before,
  &::after {
    width: 2.5rem;
    height: 2px;
    display: inline-block;
  }

  &::before,
  &::after {
    content: "";
    background-color: black;
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::before {
    top: -0.8rem;
  }

  &::after {
    top: 0.8rem;
  }

  background-color: ${props => (props.showNav ? "transparent" : "black")};

  &::before {
    top: ${props => (props.showNav ? "0" : "-0.8rem")};
    transform: ${props => (props.showNav ? "rotate(135deg)" : "")};
  }

  &::after {
    top: ${props => (props.showNav ? "0" : "0.8rem")};
    transform: ${props => (props.showNav ? "rotate(-135deg)" : "")};
  }
`

import React, { useState } from "react"
import styled from "styled-components"
import { Tray } from "./Tray"
import { LinkToggleLanguage } from "./Links"
import { Hamburger } from "./Hamburger"

export const MobileNav = () => {
  const [showNav, setShowNav] = useState(false)

  function toggleNav() {
    setShowNav(!showNav)
  }

  return (
    <>
      <Tray toggleNav={toggleNav} showNav={showNav} />
      <MobileLinkToggleLanguage>EN</MobileLinkToggleLanguage>
      <Hamburger toggleNav={toggleNav} showNav={showNav} />
    </>
  )
}

export const media = {
  enableHamburger: "(max-width: 1350px)",
  slimNavMore: "(max-width: 1015px)",
}

const MobileLinkToggleLanguage = styled(LinkToggleLanguage)`
  position: absolute;
  top: 29px;
  right: 100px;
  display: none;

  @media only screen and ${media.enableHamburger} {
    display: block;
  }

  @media only screen and ${media.slimNavMore} {
    top: 12px;
    right: 70px;
  }
`

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

const MobileLinkToggleLanguage = styled(LinkToggleLanguage)`
  position: absolute;
  top: 12px;
  right: 70px;
`

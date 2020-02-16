import React, { useState } from "react"
import { Hamburger } from "../Hamburger"
import { Tray } from "../Tray"

export const MobileNav = () => {
  const [showNav, setShowNav] = useState(false)

  function toggleNav() {
    setShowNav(!showNav)
  }

  return (
    <>
      <Tray showNav={showNav} />
      <Hamburger toggleNav={toggleNav} showNav={showNav} />
    </>
  )
}

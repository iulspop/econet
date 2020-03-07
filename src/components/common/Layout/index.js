import React from "react"
import { Global } from "./styles"
import "./fonts/stylesheet.css"
import "./i18n.js"

export const Layout = ({ children }) => {
  return (
    <>
      <Global />
      {children}
    </>
  )
}

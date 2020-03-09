import React from "react"
import { Global } from "./styles"
import "./fonts/stylesheet.css"

export const Layout = ({ children }) => {
  return (
    <>
      <Global />
      {children}
    </>
  )
}

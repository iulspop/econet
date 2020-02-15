import React from "react"
import { Global } from "./styles"
import "./fonts/stylesheet.css"

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Global />
      {children}
    </React.Fragment>
  )
}

import React from "react"
import { GlobalStyle } from "./globalStyles"
import "./fonts/stylesheet.css"

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  )
}

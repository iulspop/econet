import React from "react"
import { GlobalStyle } from "./styles"
import SiteHeader from "../Header"
import "./fonts/stylesheet.css"

export default function Layout() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <SiteHeader></SiteHeader>
    </React.Fragment>
  )
}

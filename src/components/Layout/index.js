import React from "react"
import { GlobalStyle } from "./styles"
import SiteHeader from "../Header"
import "./fonts/fonts.css"

export default function Layout() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <SiteHeader></SiteHeader>
    </React.Fragment>
  )
}

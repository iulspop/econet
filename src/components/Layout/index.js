import React from "react"
import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import SiteHeader from "../Header"
import "./fonts/fonts.css"

const GlobalStyle = createGlobalStyle`
	${normalize}
	html {
		font-family: sofia-pro-light;
	}
`
export default function Layout() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <SiteHeader></SiteHeader>
    </React.Fragment>
  )
}

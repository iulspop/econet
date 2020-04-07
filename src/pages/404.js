import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { Layout } from "../components/common"
import { Component404 } from "../components/misc/Component404"

export default function page404() {
  return (
    <ThemeProvider theme={{ ...theme, page: "home" }}>
      <Layout>
        <Component404 />
      </Layout>
    </ThemeProvider>
  )
}

import React from "react"
import { ThemeProvider } from "styled-components"
import { Layout, Header } from "../components/common"
import { Banner } from "../components/index"
import { theme } from "../theme"

export default function homePage() {
  return (
    <ThemeProvider theme={{ ...theme, page: "home" }}>
      <Layout>
        <Header />
        <Banner />
      </Layout>
    </ThemeProvider>
  )
}

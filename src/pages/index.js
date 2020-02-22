import React from "react"
import { ThemeProvider } from "styled-components"
import { Layout, Header, theme } from "../components/common"
import { Banner } from "../components/landing"

export default function homePage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
        <Banner />
      </Layout>
    </ThemeProvider>
  )
}

import React from "react"
import { ThemeProvider } from "styled-components"
import { Layout, Header, Footer } from "../components/common"
import { Estimation } from "../components/Estimation"
import { theme } from "../theme"

export default function contactPage() {
  return (
    <ThemeProvider theme={{ ...theme, page: "contact" }}>
      <Layout>
        <Header />
        <Estimation />
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

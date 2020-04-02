import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { Layout, Header, Footer } from "../components/common"
import { ResidentialBanner } from "../components/ResidentialBanner"

export default function residentialPage() {
  return (
    <ThemeProvider theme={{ ...theme, page: "residential" }}>
      <Layout>
        <Header />
        <ResidentialBanner />
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { Layout, Header, Footer } from "../components/common"
import { RegionsPage } from "../components/RegionsPage"

export default function regionsPage() {
  return (
    <ThemeProvider theme={{ ...theme, page: "regions" }}>
      <Layout>
        <Header />
        <RegionsPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

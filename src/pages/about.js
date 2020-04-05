import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { Layout, Header, Footer } from "../components/common"
import { AboutUs } from "../components/AboutUs"

export default function aboutPage() {
  return (
    <ThemeProvider theme={{ ...theme, page: "about" }}>
      <Layout>
        <Header />
        <AboutUs />
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

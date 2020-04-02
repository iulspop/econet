import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { Layout, Header, Footer } from "../components/common"
import { Story } from "../components/Story"

export default function aboutPage() {
  return (
    <ThemeProvider theme={{ ...theme, page: "about" }}>
      <Layout>
        <Header />
        <Story />
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

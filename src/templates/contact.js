import React from "react"
import { ThemeProvider } from "styled-components"
import { Layout, Header, Footer } from "../components/common"
import { Contact } from "../components/Contact"
import { theme } from "../theme"

export default function contactPage() {
  return (
    <ThemeProvider theme={{ ...theme, page: "contact" }}>
      <Layout>
        <Header />
        <Contact />
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

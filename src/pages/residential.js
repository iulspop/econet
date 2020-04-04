import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { Layout, Header, Footer } from "../components/common"
import {
  ResidentialBanner,
  CarpetCleaning,
  FurnitureCleaning,
} from "../components/services"

export default function residentialPage() {
  return (
    <ThemeProvider theme={{ ...theme, page: "residential" }}>
      <Layout>
        <Header />
        <ResidentialBanner />
        <CarpetCleaning />
        <FurnitureCleaning />
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

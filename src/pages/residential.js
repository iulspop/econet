import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { Layout, Header, Footer } from "../components/common"
import {
  BannerResidential,
  CarpetResidential,
  FurnitureResidential,
  StainResidential,
  OdourResidential,
} from "../components/services"

export default function residentialPage() {
  return (
    <ThemeProvider theme={{ ...theme, page: "residential" }}>
      <Layout>
        <Header />
        <BannerResidential />
        <CarpetResidential />
        <FurnitureResidential />
        <StainResidential />
        <OdourResidential />
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

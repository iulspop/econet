import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { Layout, Header, Footer } from "../components/common"
import {
  BannerCommercial,
  CarpetCommercial,
  FurnitureCommercial,
  StainCommercial,
  OdourCommercial,
  ProtectionCommercial,
} from "../components/services/commercial"

export default function commercialPage() {
  return (
    <ThemeProvider theme={{ ...theme, page: "commercial" }}>
      <Layout>
        <Header />
        <BannerCommercial />
        <CarpetCommercial />
        <FurnitureCommercial />
        <StainCommercial />
        <OdourCommercial />
        <ProtectionCommercial />
        <Footer backgroundWhite="true" />
      </Layout>
    </ThemeProvider>
  )
}

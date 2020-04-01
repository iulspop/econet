import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { Layout, Header, Footer } from "../components/common"
import { ResidentialBanner } from "../components/ResidentialBanner"

import { I18nextProvider } from "react-i18next"
import i18n from "../i18n"

export default function residentialPage() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={{ ...theme, page: "residential" }}>
        <Layout>
          <Header />
          <ResidentialBanner />
          <Footer />
        </Layout>
      </ThemeProvider>
    </I18nextProvider>
  )
}

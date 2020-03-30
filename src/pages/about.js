import React from "react"
import { ThemeProvider } from "styled-components"
import { Layout, Header, Footer } from "../components/common"
import { Story } from "../components/Story"
import { theme } from "../theme"

import { I18nextProvider } from "react-i18next"
import i18n from "../i18n"

export default function aboutPage() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={{ ...theme, page: "about" }}>
        <Layout>
          <Header />
          <Story />
          <Footer />
        </Layout>
      </ThemeProvider>
    </I18nextProvider>
  )
}

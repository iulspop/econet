import React from "react"
import { ThemeProvider } from "styled-components"
import { Layout, Header } from "../components/common"
import { theme } from "../theme"

import { I18nextProvider } from "react-i18next"
import i18n from "../i18n"

export default function aboutPage() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={{ ...theme, page: "about" }}>
        <Layout>
          <Header />
        </Layout>
      </ThemeProvider>
    </I18nextProvider>
  )
}

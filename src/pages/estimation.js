import React from "react"
import { ThemeProvider } from "styled-components"
import { Layout, Header } from "../components/common"
import { Estimation } from "../components/Estimation"
import { theme } from "../theme"

import { I18nextProvider } from "react-i18next"
import i18n from "../i18n"

export default function estimationPage() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={{ ...theme, page: "estimation" }}>
        <Layout>
          <Header />
          <Estimation />
        </Layout>
      </ThemeProvider>
    </I18nextProvider>
  )
}

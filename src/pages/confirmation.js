import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { Layout } from "../components/common"
import { Confirmation } from "../components/Confirmation"

import { I18nextProvider } from "react-i18next"
import i18n from "../i18n"

export default function confirmationPage() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={{ ...theme, page: "about" }}>
        <Layout>
          <Confirmation />
        </Layout>
      </ThemeProvider>
    </I18nextProvider>
  )
}

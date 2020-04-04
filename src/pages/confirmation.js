import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { Layout } from "../components/common"
import { Confirmation } from "../components/Confirmation"

export default function confirmationPage() {
  return (
    <ThemeProvider theme={{ ...theme, page: "home" }}>
      <Layout>
        <Confirmation />
      </Layout>
    </ThemeProvider>
  )
}

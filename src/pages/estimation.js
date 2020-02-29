import React from "react"
import { ThemeProvider } from "styled-components"
import { Layout, Header } from "../components/common"
import { Main } from "../components/estimation"
import { theme } from "../theme"

export default function estimationPage() {
  return (
    <ThemeProvider theme={{ ...theme, page: "estimation" }}>
      <Layout>
        <Header />
        <Main />
      </Layout>
    </ThemeProvider>
  )
}

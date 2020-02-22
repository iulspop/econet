import React from "react"
import { ThemeProvider } from "styled-components"
import { Layout, Header, theme } from "../components/common"

export default function estimationPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
      </Layout>
    </ThemeProvider>
  )
}

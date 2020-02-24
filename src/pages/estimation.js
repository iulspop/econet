import React from "react"
import { ThemeProvider } from "styled-components"
import { Layout, Header } from "../components/common"
import { Main } from "../components/estimation"

const theme = {
  colors: {
    primary: "#68a336",
    secondary: "#5a4a42",
    tertiary: "#00aeef",
  },
  media: {
    phone: "(max-width: 500px)",
    tabPort: "(max-width: 900px)",
    tabLand: "(max-width: 1200px)",
    bigDesktop: "(min-width: 1800px)",
  },
  page: "estimation",
}

export default function estimationPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
        <Main />
      </Layout>
    </ThemeProvider>
  )
}

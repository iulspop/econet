import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { Layout, Header } from "../components/common"
import {
  Banner,
  ServiceList,
  ChooseUs,
  HomeForm,
  RegionsDesservies,
} from "../components/home"

import { I18nextProvider } from "react-i18next"
import i18n from "../i18n"

export default function homePage() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={{ ...theme, page: "home" }}>
        <Layout>
          <Header />
          <Banner />
          <ServiceList />
          <ChooseUs />
          <HomeForm />
          <RegionsDesservies />
        </Layout>
      </ThemeProvider>
    </I18nextProvider>
  )
}

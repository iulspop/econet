import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { Layout, Header, Footer } from "../components/common"
import {
  Banner,
  ServiceList,
  ChooseUs,
  HomeForm,
  Testimonial,
  RegionsDesservies,
} from "../components/home"

export default function homePage() {
  return (
    <ThemeProvider theme={{ ...theme, page: "home" }}>
      <Layout>
        <Header />
        <Banner />
        <ServiceList />
        <ChooseUs />
        <HomeForm />
        <Testimonial />
        <RegionsDesservies />
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

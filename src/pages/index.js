import React from "react"
import { Layout, Header } from "../components/common"
import { Banner } from "../components/landing"

export default function homePage() {
  return (
    <Layout>
      <Header />
      <Banner />
    </Layout>
  )
}

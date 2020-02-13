import React from "react"
import styled from "styled-components"

export const Banner = () => {
  return <Banner_Container></Banner_Container>
}

const Banner_Container = styled.section`
  height: calc(100vh - 130px);
  background-image: url(./assets/white_daisies.jpg);
  background-size: cover;
  background-position: center;
`

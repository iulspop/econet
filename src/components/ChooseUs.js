import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

export const ChooseUs = () => {
  const { t } = useTranslation("ServiceList")
  return (
    <Flex>
      <h3>hello</h3>
    </Flex>
  )
}

const Flex = styled.div`
  height: 100vh;
  background-image: linear-gradient(
    109.6deg,
    rgba(204, 228, 247, 1) 11.2%,
    rgba(237, 246, 250, 1) 100.2%
  );
`

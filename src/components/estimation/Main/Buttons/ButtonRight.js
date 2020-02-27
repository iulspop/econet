import React from "react"
import styled from "styled-components"
import { Button } from "../../../common"
import { SideDecorationLeft } from "./ButtonLeft"

export const ButtonRight = props => {
  const { toggleForm } = props

  return (
    <Button toggleForm={toggleForm}>
      commercial
      <SideDecorationRight src={"/assets/side-decoration.png"} alt={""} />
    </Button>
  )
}

const SideDecorationRight = styled(SideDecorationLeft)`
  left: 100%;
  transform: translateY(-50%) scale(-1);
`

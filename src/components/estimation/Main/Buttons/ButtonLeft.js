import React from "react"
import styled from "styled-components"
import { Button } from "../common"

export const ButtonLeft = () => {
  return (
    <Button>
      <SideDecorationLeft src={"/assets/side-decoration.png"} alt={""} />
      commercial
    </Button>
  )
}

export const SideDecorationLeft = styled.img`
  width: 8rem;
  position: absolute;
  left: -8rem;

  top: 50%;
  transform: translateY(-50%);
`

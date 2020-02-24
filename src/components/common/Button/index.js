import React from "react"
import styled from "styled-components"
import { buttonReset } from "../mixins"

export const Button = props => {
  return <StyledButton>{props.text}</StyledButton>
}

const StyledButton = styled.button`
  ${buttonReset}
  position: relative;
  background-color: white;
  z-index: 1;

  &::before {
    width: 100%;
    height: 100%;
    content: "";
    background-color: green;
    position: absolute;
    top: -1px;
    bottom: -1px;
    z-index: -2;
  }
`

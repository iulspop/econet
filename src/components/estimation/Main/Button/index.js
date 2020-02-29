import React from "react"
import styled from "styled-components"
import { Button } from "../../../common"

export const DecoratedButton = ({ left, clickAction, children }) => {
  return (
    <Button clickAction={clickAction}>
      <SideDecoration
        src={"/assets/side-decoration.png"}
        alt={""}
        left={left}
      />
      {children}
    </Button>
  )
}

export const SideDecoration = styled.img`
  width: 8rem;
  position: absolute;
  left: ${props => (props.left ? "-8rem" : "100%")};

  top: 50%;
  transform: ${props =>
    props.left ? "translateY(-50%)" : "translateY(-50%) scale(-1)"};
`

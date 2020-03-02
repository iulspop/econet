import React from "react"
import styled from "styled-components"
import { Button } from "../../../common"

export const DecoratedButton = ({
  left,
  clickAction,
  children,
  ariaLabel,
  active,
}) => {
  return (
    <Button clickAction={clickAction} ariaLabel={ariaLabel} active={active}>
      <SideDecoration
        src={"/assets/side-decoration.png"}
        alt={""}
        left={left}
        active={active}
      />
      {children}
    </Button>
  )
}

export const SideDecoration = styled.img`
  width: 8rem;
  filter: ${props => (props.active ? "none" : "grayscale(100%)")};

  position: absolute;
  left: ${props => (props.left ? "-8rem" : "100%")};
  top: 50%;
  transform: ${props =>
    props.left ? "translateY(-50%)" : "translateY(-50%) scale(-1)"};
`

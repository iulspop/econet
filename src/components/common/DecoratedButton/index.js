import React from "react"
import styled from "styled-components"
import { Button } from "./Button"

export const DecoratedButton = ({
  left,
  right,
  clickAction,
  children,
  ariaLabel,
  inactive,
}) => {
  return (
    <Button clickAction={clickAction} ariaLabel={ariaLabel} inactive={inactive}>
      <SideDecorationLeft
        src={"/assets/side-decoration.png"}
        alt={""}
        left={left}
        inactive={inactive}
      />
      {children}
      <SideDecorationRight
        src={"/assets/side-decoration.png"}
        alt={""}
        right={right}
        inactive={inactive}
      />
    </Button>
  )
}

const SideDecorationLeft = styled.img`
  width: 8rem;
  filter: ${props => (props.inactive ? "grayscale(100%)" : "none")};

  position: absolute;
  top: 50%;
  display: ${props => (props.left ? "block" : "none")};
  left: -8rem;
  transform: translateY(-50%);
`

const SideDecorationRight = styled(SideDecorationLeft)`
  display: ${props => (props.right ? "block" : "none")};
  left: 100%;
  transform: translateY(-50%) scale(-1);
`

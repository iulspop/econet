import React from "react"
import styled from "styled-components"
import { Button } from "./Button"

export const DecoratedButton = ({
  left,
  right,
  clickAction,
  link,
  href,
  children,
  ariaLabel,
  inactive,
  slim,
}) => {
  return (
    <Button
      clickAction={clickAction}
      ariaLabel={ariaLabel}
      inactive={inactive}
      href={href}
      link={link}
      slim={slim}
    >
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
  --decorationWidth: 80px;
  width: var(--decorationWidth);
  filter: ${props => (props.inactive ? "grayscale(100%)" : "none")};

  position: absolute;
  top: 50%;
  display: ${props => (props.left ? "block" : "none")};
  left: calc(0px - var(--decorationWidth));
  transform: translateY(-50%);

  @media only screen and ${props => props.theme.media.tabPort} {
    --decorationWidth: 55px;
  }
`

const SideDecorationRight = styled(SideDecorationLeft)`
  display: ${props => (props.right ? "block" : "none")};
  left: 100%;
  transform: translateY(-50%) scale(-1);
`

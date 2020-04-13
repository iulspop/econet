import React from "react"
import styled from "styled-components"

export const Logo = () => {
  return (
    <LogoLink href={"/"}>
      <picture>
        <source
          media={"(max-width: 1200px)"}
          srcSet={"/assets/logo-slim.png"}
          alt={
            "Nettoyage écologique de tapis et de meubles. Nettoyage Éconet Logo."
          }
        />
        <LogoImg
          src={"/assets/big-logo.png"}
          alt={
            "Nettoyage écologique de tapis et de meubles. Nettoyage Éconet Logo."
          }
        />
      </picture>
    </LogoLink>
  )
}

const LogoLink = styled.a`
  align-self: center;

  margin-right: 3rem;
  line-height: 0;
`

const LogoImg = styled.img`
  height: 100px;

  @media only screen and ${props => props.theme.media.tabLand} {
    height: 50px;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    height: 43px;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`

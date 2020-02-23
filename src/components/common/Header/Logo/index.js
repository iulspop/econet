import React from "react"
import styled from "styled-components"

export const Logo = () => {
  return (
    <LogoLink href={"#"}>
      <picture>
        <source
          media={"(max-width: 1200px)"}
          srcset={"/assets/logo-slim.png"}
        />
        <LogoImg
          src={"/assets/logo.png"}
          alt={"Nettoyage Éconet. Nettoyage écologique de tapis et de meubles"}
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
`

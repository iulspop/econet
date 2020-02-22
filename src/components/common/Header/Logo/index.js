import React from "react"
import styled from "styled-components"

export const Logo = () => {
  return (
    <LogoLink href={"#"}>
      <picture>
        <source media={`${media.disableNav}`} srcset="/assets/logo-slim.png" />
        <LogoImg
          src={"/assets/logo.png"}
          alt={"Nettoyage Éconet. Nettoyage écologique de tapis et de meubles"}
        />
      </picture>
    </LogoLink>
  )
}

export const media = {
  enableHamburger: "(max-width: 1350px)",
  slimNav: "(max-width: 1350px)",
  slimNavMore: "(max-width: 1015px)",
  disableNav: "(max-width: 1350px)",
}

const LogoLink = styled.a`
  align-self: center;

  margin-right: 3rem;
  line-height: 0;
`

const LogoImg = styled.img`
  height: 100px;

  @media only screen and ${media.slimNav} {
    height: 50px;
  }

  @media only screen and ${media.slimNavMore} {
    height: 43px;
  }
`

import React from "react"
import styled from "styled-components"
// import { useTranslation } from "react-i18next"

export const ResidentialBanner = () => {
  // const { t } = useTranslation("Confirmation")
  return (
    <FlexColumn>
      <DecorativeLine src={"/assets/decorative-horizontal-line.png"} alt={""} />
      <h1>hello world!</h1>
    </FlexColumn>
  )
}

const FlexColumn = styled.div`
  --nav-height: 130px;

  @media only screen and ${props => props.theme.media.tabLand} {
    --nav-height: 100px;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    --nav-height: 65px;
  }

  min-height: calc(100vh - var(--nav-height));

  display: flex;
  flex-direction: column;
  align-items: center;
`

const DecorativeLine = styled.img`
  width: 70vw;
  margin: 2rem 0;

  @media only screen and ${props => props.theme.media.tabLand} {
    width: 70vw;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 80vw;
  }

  @media only screen and ${props => props.theme.media.phone} {
    width: 90vw;
    margin-bottom: 0;
  }
`

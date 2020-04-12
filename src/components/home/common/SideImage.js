import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export const SideImage = ({ className, ariaLabel, imageName }) => {
  const fluidImage = graphql`
    fragment fluidImage on File {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `

  const data = useStaticQuery(graphql`
    query {
      carpetCleaning: file(relativePath: { eq: "carpet-cleaning.jpg" }) {
        ...fluidImage
      }
      carpet: file(relativePath: { eq: "carpet.jpg" }) {
        ...fluidImage
      }
      familyEconet: file(relativePath: { eq: "family-econet.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      odourRemoval: file(relativePath: { eq: "odour-removal.jpg" }) {
        ...fluidImage
      }
      ownerPicture: file(relativePath: { eq: "owner-picture.jpg" }) {
        ...fluidImage
      }
      protection: file(relativePath: { eq: "protection.jpg" }) {
        ...fluidImage
      }
      stainRemoval: file(relativePath: { eq: "stain-removal.jpg" }) {
        ...fluidImage
      }
      upholsteryCleaning: file(
        relativePath: { eq: "upholstery-cleaning.jpg" }
      ) {
        ...fluidImage
      }
      vacuumCloseup: file(relativePath: { eq: "vacuum-closeup.jpg" }) {
        ...fluidImage
      }
    }
  `)

  return (
    <StyledSideImage
      className={className}
      aria-label={ariaLabel}
      fluid={data[imageName || "carpet"].childImageSharp.fluid}
    />
  )
}

const StyledSideImage = styled(Image)`
  margin-top: 2rem;
  width: 35vw;

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 90vw;
    height: 100vw;
  }

  @media only screen and ${props => props.theme.media.phone} {
    height: 120vw;
  }
`

import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export const SideImage = ({
  ariaLabel,
  imageName,
  serviceList,
  horizontal,
}) => {
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
        ...fluidImage
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
      aria-label={ariaLabel}
      serviceList={serviceList}
      horizontal={horizontal}
      fluid={data[imageName || "carpet"].childImageSharp.fluid}
    />
  )
}

const StyledSideImage = styled(Image)`
  margin-top: 2rem;
  width: ${props => (props.serviceList ? "25vw" : "35vw")};
  align-item: strech;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;

  @media only screen and ${props => props.theme.media.tabPort} {
    width: ${props => (props.horizontal ? "80vw" : "90vw")};
    height: ${props => (props.horizontal ? "50vw" : "90vw")};
    background-position: top;
  }

  @media only screen and ${props => props.theme.media.phone} {
    width: 90vw;
    height: ${props => (props.horizontal ? "50vw" : "120vw")};
    background-position: top;
  }
`

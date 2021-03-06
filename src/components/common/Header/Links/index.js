import styled from "styled-components"
import { GatsbyLink } from "./GatsbyLink"
import { linkReset } from "../../../../mixins"

export const Link = styled(GatsbyLink)`
  align-self: center;

  ${linkReset};
  width: 120px;
  height: 40px;
  font-size: 1.8rem;
  text-align: center;
  text-transform: uppercase;
  transform: translateY(6px); // to center after adding border on hover
  transition: 0.08s ease;

  &:hover {
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    border-bottom: 8px dotted ${props => props.theme.colors.primary};
  }
`

export const LinkBigger = styled(Link)`
  height: 72px;
  width: 150px;
  text-align: center;

  transform: translateY(9px);
`

export const LinkHome = styled(Link)`
  font-weight: ${props => (props.theme.page === "home" ? "700" : "400")};
  color: ${props =>
    props.theme.page === "home" ? props.theme.colors.primary : "black"};
  border-bottom: ${props =>
    props.theme.page === "home"
      ? `8px dotted ${props.theme.colors.primary}`
      : ""};
`

export const LinkAbout = styled(Link)`
  font-weight: ${props => (props.theme.page === "about" ? "700" : "400")};
  color: ${props =>
    props.theme.page === "about" ? props.theme.colors.primary : "black"};
  border-bottom: ${props =>
    props.theme.page === "about"
      ? `8px dotted ${props.theme.colors.primary}`
      : ""};
`

export const LinkResidential = styled(LinkBigger)`
  font-weight: ${props => (props.theme.page === "residential" ? "700" : "400")};
  color: ${props =>
    props.theme.page === "residential" ? props.theme.colors.primary : "black"};
  border-bottom: ${props =>
    props.theme.page === "residential"
      ? `8px dotted ${props.theme.colors.primary}`
      : ""};
`

export const LinkCommercial = styled(LinkBigger)`
  font-weight: ${props => (props.theme.page === "commercial" ? "700" : "400")};
  color: ${props =>
    props.theme.page === "commercial" ? props.theme.colors.primary : "black"};
  border-bottom: ${props =>
    props.theme.page === "commercial"
      ? `8px dotted ${props.theme.colors.primary}`
      : ""};
`

export const LinkContact = styled(Link)`
  width: 140px;

  font-weight: ${props => (props.theme.page === "contact" ? "700" : "400")};
  color: ${props =>
    props.theme.page === "contact" ? props.theme.colors.primary : "black"};
  border-bottom: ${props =>
    props.theme.page === "contact"
      ? `8px dotted ${props.theme.colors.primary}`
      : ""};
`

export const LinkNumber = styled.a`
  align-self: center;

  ${linkReset};
  width: 200px;
  height: 55px;
  font-size: 2.9rem;
  font-weight: 700;
  text-align: center;
  transition: 0.08s ease;

  &:hover {
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
  }
`

export const LinkToggleLanguage = styled(Link)`
  width: 40px;
  cursor: pointer;

  &:hover {
    border-bottom: 0px;
  }
`

export const MobileLinkToggleLanguage = styled(LinkToggleLanguage)`
  position: absolute;
  top: 29px;
  right: 100px;
  display: none;

  @media only screen and ${props => props.theme.media.tabLand} {
    display: block;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    top: 12px;
    right: 70px;
  }
`

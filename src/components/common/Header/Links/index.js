import styled from "styled-components"
import { linkReset } from "../../../../mixins"

export const Link = styled.a`
  align-self: center;

  ${linkReset};
  width: 120px;
  height: 40px;
  font-size: 1.8rem;
  text-align: center;
  text-transform: uppercase;
  transform: translateY(6px); // to center after adding border on hover

  &:hover {
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    border-bottom: 8px dotted ${props => props.theme.colors.primary};
  }
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

export const LinkEstimation = styled(Link)`
  width: 140px;

  font-weight: ${props => (props.theme.page === "estimation" ? "700" : "400")};
  color: ${props =>
    props.theme.page === "estimation" ? props.theme.colors.primary : "black"};
  border-bottom: ${props =>
    props.theme.page === "estimation"
      ? `8px dotted ${props.theme.colors.primary}`
      : ""};
`

export const LinkNumber = styled(Link)`
  width: 200px;
  height: 55px;
  transform: translateY(0px);
  font-size: 2.9rem;
  font-weight: 700;

  &:hover {
    border-bottom: 0px;
  }
`

export const LinkToggleLanguage = styled(Link)`
  width: 40px;

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

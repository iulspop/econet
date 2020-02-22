import styled from "styled-components"
import { linkReset } from "../../mixins"
import { theme } from "../../../theme"

export const media = {
  enableHamburger: "(max-width: 1350px)",
  slimNav: "(max-width: 1350px)",
  slimNavMore: "(max-width: 1015px)",
  disableNav: "(max-width: 1350px)",
}

export const Link = styled.a`
  align-self: center;

  ${linkReset};
  width: 120px;
  height: 40px;
  font-size: 1.8rem;
  text-align: center;
  text-transform: uppercase;
  transform: translateY(6px); // to center after adding border on hover

  font-weight: ${props => (props.currentPage ? "700" : "400")};
  color: ${props => (props.currentPage ? `${theme.colors.primary}` : "black")};
  border-bottom: ${props =>
    props.currentPage ? `8px dotted ${theme.colors.primary}` : ""}};

  &:hover {
    font-weight: 700;
    color: ${theme.colors.primary};
    border-bottom: 8px dotted ${theme.colors.primary};
  }
`

export const Link2 = styled(Link)`
  width: 140px;
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

  @media only screen and ${media.enableHamburger} {
    display: block;
  }

  @media only screen and ${media.slimNavMore} {
    top: 12px;
    right: 70px;
  }
`
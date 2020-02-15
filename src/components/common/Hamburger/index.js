import React from "react"
import styled from "styled-components"
import { buttonReset } from "../../global"

export class Hamburger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNav: false,
    }
  }

  handleClick() {
    this.state.showNav
      ? this.setState({ showNav: false })
      : this.setState({ showNav: true })
  }

  render() {
    return (
      <Hamburger2>
        <HamburgerIcon
          onClick={() => this.handleClick()}
          showNav={this.props.showNav}
        >
          &nbsp;
        </HamburgerIcon>
      </Hamburger2>
    )
  }
}

const Hamburger2 = styled.button`
  ${buttonReset}

  &:hover > span::before {
    top: -1rem;
  }

  &:hover > span::after {
    top: 1rem;
  }

  @media only screen and (min-width: 1015px) {
    display: none;
  }
`

const HamburgerIcon = styled.span`
  position: relative;
  margin-top: 2.5rem;

  &,
  &::before,
  &::after {
    width: 2.5rem;
    height: 2px;
    background-color: black;
    display: inline-block;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::before {
    top: -0.8rem;
  }

  &::after {
    top: 0.8rem;
  }
`

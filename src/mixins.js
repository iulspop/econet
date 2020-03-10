import { css } from "styled-components"

// Mixin-like utils, can add animations and other globally reusable styles

export const buttonReset = css`
  padding: 0;
  border: none;
  font-family: inherit;
  color: inherit;
  background: none;
`

export const linkReset = css`
  color: black;
  text-decoration: none;
`

export const absCenterH = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

export const buttonStyle = css`
  padding: 2rem 0;
  margin: 0 5rem;
  position: relative;

  font-size: 3.5rem;
  font-weight: 700;
  color: ${props => (props.inactive ? "gray" : props.theme.colors.primary)};
  text-transform: uppercase;
  text-align: center;

  cursor: pointer;

  @media only screen and ${props => props.theme.media.tabPort} {
    font-size: 2.3rem;
    padding: 1.5rem 0;
    margin: 0 3rem;
  }

  @media only screen and ${props => props.theme.media.phone} {
    display: block;
    width: 150px;
    margin: 2rem auto;
    margin-bottom: 3rem;
  }

  &::before {
    width: 130%;
    height: 3px;
    content: "";
    background: radial-gradient(
      circle at center,
      ${props => (props.inactive ? "gray" : props.theme.colors.primary)},
      transparent
    );
    position: absolute;
    top: 0;
    left: -15%;
  }

  &::after {
    width: 130%;
    height: 3px;
    content: "";
    background: radial-gradient(
      circle at center,
      ${props => (props.inactive ? "gray" : props.theme.colors.primary)},
      transparent
    );
    position: absolute;
    top: 100%;
    left: -15%;
  }
`

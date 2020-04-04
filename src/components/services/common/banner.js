import styled from "styled-components"

export const H1 = styled.h1`
  width: 80vw;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 5.5rem;
  line-height: 1.25;
  text-align: center;

  @media only screen and ${props => props.theme.media.tabPort} {
    font-size: 5rem;
  }

  @media only screen and ${props => props.theme.media.phone} {
    font-size: calc(0.095 * 100vw + 0.6786rem);
    margin: 0;
    margin-top: 2rem;
  }
`

export const H2 = styled.h2`
  margin-top: 1rem;
  margin-bottom: 7rem;
  width: 70vw;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 80vw;
  }

  @media only screen and ${props => props.theme.media.phone} {
    font-size: calc(0.065 * 100vw + 0.6786rem);
  }
`

export const GridContainer = styled.div`
  margin-top: 6rem;
  display: grid;
  grid-template-columns: repeat(5, 120px);
  grid-template-rows: repeat(2, 170px);
  grid-gap: 0 15px;

  @media only screen and (max-width: 850px) {
    margin-top: 3rem;
    grid-template-columns: repeat(3, 120px);
    grid-template-rows: repeat(3, 165px);
  }

  @media only screen and ${props => props.theme.media.phone} {
    margin-top: 2rem;
    grid-template-columns: repeat(3, 21vw);
    grid-template-rows: repeat(3, 33vw);
  }
`

export const IconContainer1 = styled.div`
  width: 120px;

  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;

  position: relative;

  @media only screen and ${props => props.theme.media.phone} {
    width: 24vw;
  }
`

export const IconContainer2 = styled(IconContainer1)`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;

  @media only screen and (max-width: 850px) {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
    justify-self: right;
  }
`

export const IconContainer3 = styled(IconContainer1)`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;

  @media only screen and (max-width: 850px) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    justify-self: center;
  }
`

export const IconContainer4 = styled(IconContainer1)`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;

  @media only screen and (max-width: 850px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`
export const IconContainer5 = styled(IconContainer1)`
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 2;

  @media only screen and (max-width: 850px) {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    justify-self: right;
  }
`

export const IconLabel = styled.label`
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
  color: ${props => props.theme.colors.tertiary};
  cursor: pointer;

  position: absolute;
  z-index: 1;
  top: -4rem;
  left: 50%;
  transform: translateX(-50%);

  @media only screen and ${props => props.theme.media.phone} {
    font-size: calc(0.0277 * 100vw + 0.411rem);
    top: calc(-0.111 * 100vw + 1.555rem);
  }
`

export const IconImg = styled.img`
  width: 120px;
  border-radius: 50%;

  @media only screen and ${props => props.theme.media.phone} {
    width: 24vw;
  }
`

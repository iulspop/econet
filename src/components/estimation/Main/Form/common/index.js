import styled from "styled-components"

export const Label = styled.label`
  clear: both;
  width: 27rem;
  margin: auto;
  display: block;
  color: ${props => props.theme.colors.primary};
`
export const Input = styled.input`
  width: 27rem;
  margin: auto;
  display: block;
  border: none;
  border-bottom: solid 1px ${props => props.theme.colors.secondary};
`
export const Fieldset = styled.fieldset`
  margin: 2rem;
  border: none;
  background-color: white;
  border-radius: 6px;
  box-shadow: 5px 5px 5px black;

  display: ${params => (params.hidden ? "hidden" : "block")};
`

export const RadioGroup = styled.fieldset`
  padding: 0;
  clear: both;
  border: none;
`

export const Legend = styled.legend`
  float: left;
  font-weight: 700;
  color: ${props => props.theme.colors.tertiary};
`

export const RadioLegend = styled.legend`
  width: 27rem;
  margin: auto;
  color: ${props => props.theme.colors.primary};
`

export const Select = styled.select`
  display: block;
  width: 10rem;
  margin: auto;
`

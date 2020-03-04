import styled from "styled-components"
import { buttonReset } from "../../../../../mixins"

export const Label = styled.label`
  clear: both;
  display: block;
`

export const RadioLabel = styled.label`
  clear: both;
`

export const CheckboxLabel = styled(RadioLabel)``

export const Input = styled.input`
  display: block;
  margin-bottom: 2rem;
  border: none;
  border-bottom: solid 1px ${props => props.theme.colors.secondary};
`

export const RadioInput = styled.input`
  transform: translateY(2px);
  margin-right: 0.5rem;
`

export const RadioInputMarginLeft = styled(RadioInput)`
  margin-left: 1.5rem;
`

export const Fieldset = styled.fieldset`
  margin: 2rem 0;
  border: none;
  background-color: white;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  display: ${params => (params.hidden ? "none" : "block")};
`

export const RadioGroup = styled.fieldset`
  padding: 0;
  margin-bottom: 3rem;
  clear: both;
  border: none;
`

export const Legend = styled.legend`
  float: left;
  width: 100%;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  color: rgb(100, 100, 100);
  padding-bottom: 1rem;
  border-bottom: solid 1px #d3d3d3;
  margin-bottom: 2rem;
`

export const RadioLegend = styled.legend``

export const Select = styled.select`
  display: block;
  width: 10rem;
  margin-bottom: 3rem;
`

export const SelectWide = styled(Select)`
  width: 20rem;
  margin-top: 0.5rem;
`

export const InputsContainer = styled.div`
  margin: 0 3rem;
`

export const NextButton = styled.button`
  ${buttonReset}
  width: 15rem;
  height: 4.2rem;
  margin-bottom: 1rem;
  border-radius: 2px;
  background-color: ${props => props.theme.colors.primary};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: white;
  float: right;
`

export const BackButton = styled(NextButton)`
  width: 12rem;
  border-radius: 2px;
  background-color: #bdbdbd;
  float: left;
`

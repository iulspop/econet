import styled from "styled-components"
import { buttonReset } from "../../../../mixins"

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
  width: 43vw;
  min-height: 587.56px;
  padding: 1rem 1.5rem;
  padding-bottom: 6.2rem;

  border: none;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  display: ${params => (params.hidden ? "none" : "block")};
  position: relative;

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 90vw;
    max-width: 531px;
  }

  @media only screen and ${props => props.theme.media.phone} {
    width: 90vw;
  }
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

  @media only screen and ${props => props.theme.media.phone} {
    font-size: 2rem;
  }
`

export const RadioLegend = styled.legend``

export const Select = styled.select`
  display: block;
  width: 10rem;
  margin-bottom: 3rem;
`

export const SelectWide = styled(Select)`
  width: 28rem;
  margin-top: 0.5rem;

  @media only screen and ${props => props.theme.media.phone} {
    width: 21rem;
  }
`

export const InputsContainer = styled.div`
  margin: 0 3rem;

  @media only screen and ${props => props.theme.media.phone} {
    margin: 0 1rem;
  }
`

export const NextButton = styled.button`
  ${buttonReset}
  width: 15rem;
  height: 4.2rem;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.primary};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: white;

  position: absolute;
  right: 4.5rem;
  bottom: 2rem;

  @media only screen and ${props => props.theme.media.phone} {
    width: 12rem;
    height: 4rem;
  }

  @media only screen and ${props => props.theme.media.phone} {
    right: 2.5rem;
  }
`

export const BackButton = styled(NextButton)`
  width: 12rem;
  border-radius: 3px;
  background-color: #bdbdbd;

  right: unset;
  left: 4.5rem;

  @media only screen and ${props => props.theme.media.phone} {
    width: 10rem;
  }

  @media only screen and ${props => props.theme.media.phone} {
    left: 2.5rem;
  }
`

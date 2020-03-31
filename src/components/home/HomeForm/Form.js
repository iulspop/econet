import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { DecoratedButton } from "../../common"

export const Form = () => {
  const { t } = useTranslation("HomeForm")

  function handleChange(e) {
    if (e.target.value) {
      e.target.classList.add("filled")
    } else {
      e.target.classList.remove("filled")
    }
  }

  return (
    <StyledForm
      method="POST"
      action="/confirmation"
      data-netlify="true"
      name="homeForm"
    >
      <input type="hidden" name="form-name" value="homeForm" />
      <InputContainerMarginRight>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          placeholder=""
          onChange={handleChange}
        />
        <Label htmlFor="firstName">{t("firstName")}</Label>
      </InputContainerMarginRight>

      <InputContainer>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder=""
          onChange={handleChange}
        />
        <Label htmlFor="email">{t("email")}</Label>
      </InputContainer>

      <InputContainerMarginRight>
        <DateInput
          type="date"
          name="date"
          id="date"
          placeholder=""
          onChange={handleChange}
        />
        <Label htmlFor="date">{t("date")}</Label>
      </InputContainerMarginRight>

      <InputContainer>
        <Select name="time" id="time" onClick={handleChange}>
          <option value="8 AM">8 AM</option>
          <option value="8:30 AM">8:30 AM</option>
          <option value="9 AM">9 AM</option>
          <option value="9:30 AM">9:30 AM</option>
          <option value="10 AM">10 AM</option>
          <option value="10:30 AM">10:30 AM</option>
          <option value="11 AM">11 AM</option>
          <option value="11:30 AM">11:30 AM</option>
          <option value="12 AM">12 AM</option>
          <option value="12:30 AM">12:30 AM</option>
          <option value="1 PM">1 PM</option>
          <option value="1:30 PM">1:30 PM</option>
          <option value="2 PM">2 PM</option>
          <option value="2:30 PM">2:30 PM</option>
          <option value="3 PM">3 PM</option>
          <option value="3:30 PM">3:30 PM</option>
          <option value="4 PM">4 PM</option>
          <option value="4:30 PM">4:30 PM</option>
          <option value="5 PM">5 PM</option>
          <option value="5:30 PM">5:30 PM</option>
          <option value="6 PM">6 PM</option>
          <option value="6:30 PM">6:30 PM</option>
        </Select>
        <Label htmlFor="time">{t("time")}</Label>
      </InputContainer>

      <InputContainerMarginRight>
        <Input type="phone" name="phone" id="phone" onChange={handleChange} />
        <Label htmlFor="phone">{t("phone")}</Label>
      </InputContainerMarginRight>

      <InputContainer>
        <CustomerQuestionSelect
          name="newCustomer"
          id="newCustomer"
          onClick={handleChange}
        >
          <option value="yes">{t("yesNewCustomer")}</option>
          <option value="no">{t("noNewCustomer")}</option>
          <option value="neither">{t("neitherNewCustomer")}</option>
        </CustomerQuestionSelect>
        <CustomerQuestionLabel htmlFor="newCustomer">
          {t("newCustomer")}
        </CustomerQuestionLabel>
      </InputContainer>

      <InputContainer>
        <TextArea
          name="message"
          id="message"
          rows="5"
          cols="33"
          onChange={handleChange}
        />
        <Label htmlFor="message">{t("message")}</Label>
      </InputContainer>

      <ButtonContainer>
        <DecoratedButton left right slim>
          {t("send")}
        </DecoratedButton>
      </ButtonContainer>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  width: 45vw;
  flex-wrap: wrap;

  @media only screen and (max-width: 1390px) {
    width: 51vw;
  }

  @media only screen and ${props => props.theme.media.tabLand} {
    width: 70vw;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 90vw;
  }
`

const InputContainer = styled.div`
  display: inline-block;
  position: relative;
  margin: 2.5rem 0;

  &:focus-within > label {
    transform: translateY(-4rem);

    @media only screen and ${props => props.theme.media.phone} {
      transform: translateY(-3.8rem);
    }
  }

  & .filled + label {
    transform: translateY(-4rem);

    @media only screen and ${props => props.theme.media.phone} {
      transform: translateY(-3.8rem);
    }
  }

  &:focus-within {
    outline: 1px dotted ${props => props.theme.colors.tertiary};
  }

  @media only screen and ${props => props.theme.media.phone} {
    margin: 2rem 0;
  }
`

const InputContainerMarginRight = styled(InputContainer)`
  margin-right: 3vw;
`

const Label = styled.label`
  position: absolute;
  padding: 0.8rem 1rem;
  height: 80%;
  left: 0;
  transition: 0.3s ease;

  text-transform: uppercase;
  font-size: 1.8rem;
  cursor: text;
  white-space: nowrap;
`

const CustomerQuestionLabel = styled(Label)`
  font-size: 1.7rem;
`

const Input = styled.input`
  padding: 1rem 1rem;
  width: 21vw;
  height: 50px;

  border: none;
  box-shadow: -1px -1px 2px #ededed, 1px 1px 2px #ededed;
  border-radius: 3px;

  cursor: text;

  @media only screen and (max-width: 1390px) {
    width: 24vw;
  }

  @media only screen and ${props => props.theme.media.tabLand} {
    width: 33.5vw;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 43.5vw;
  }

  @media only screen and ${props => props.theme.media.phone} {
    width: 90vw;
  }
`

const DateInput = styled(Input)`
  color: transparent;
  transition: 0.3s ease;

  &:focus {
    color: black;
  }
  &.filled {
    color: black;
  }
`

const TextArea = styled.textarea`
  padding: 1rem 1rem;
  width: 45vw;

  border: none;
  box-shadow: -1px -1px 2px #ededed, 1px 1px 2px #ededed;
  border-radius: 3px;

  @media only screen and (max-width: 1390px) {
    width: 51vw;
  }

  @media only screen and ${props => props.theme.media.tabLand} {
    width: 70vw;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 90vw;
  }
`

const Select = styled.select`
  padding: 1rem 1rem;
  padding-right: 4rem;
  width: 21vw;
  height: 50px;

  border: none;
  background-color: #fff;
  box-shadow: -1px -1px 2px #ededed, 1px 1px 2px #ededed;
  border-radius: 3px;

  appearance: none;
  background-image: url("/assets/arrows_down.svg");
  background-repeat: no-repeat;
  background-position: right 0 top 50%;
  background-size: 4rem;

  color: transparent;
  transition: 0.3s ease;
  &:focus {
    color: black;
  }
  &.filled {
    color: black;
  }

  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
  cursor: text;

  @media only screen and (max-width: 1390px) {
    width: 24vw;
  }

  @media only screen and ${props => props.theme.media.tabLand} {
    width: 33.5vw;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 43.5vw;
  }

  @media only screen and ${props => props.theme.media.phone} {
    width: 90vw;
  }
`

const CustomerQuestionSelect = styled(Select)`
  @media only screen and (max-width: 660px) {
    width: 90vw;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 45vw;
  margin: 2.5rem 0;

  @media only screen and (max-width: 1390px) {
    width: 51vw;
  }

  @media only screen and ${props => props.theme.media.tabLand} {
    width: 70vw;
    margin-top: 2rem;
    margin-bottom: 5.5rem;
  }

  @media only screen and ${props => props.theme.media.tabPort} {
    width: 90vw;
  }

  @media only screen and ${props => props.theme.media.phone} {
    margin-top: 0;
    margin-bottom: 2rem;
  }
`

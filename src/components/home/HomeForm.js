import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { DecoratedButton } from "../common"
import {
  FlexColumn,
  DecorativeLine,
  ListAndImageFlex,
  ListContainer,
  SectionHeading,
} from "./common"

export const HomeForm = () => {
  const { t } = useTranslation("HomeForm")

  function handleChange(e) {
    if (e.target.value) {
      e.target.classList.add("filled")
    } else {
      e.target.classList.remove("filled")
    }
  }

  return (
    <FlexColumn>
      <DecorativeLine />
      <ListAndImageFlex>
        <ListContainer>
          <SectionHeading>{t("sectionHeading")}</SectionHeading>
          <Form action="">
            <InputContainerMarginRight>
              <Input
                type="text"
                id="firstName"
                placeholder=""
                onChange={handleChange}
              />
              <Label for="firstName">First Name</Label>
            </InputContainerMarginRight>

            <InputContainer>
              <Input
                type="email"
                id="email"
                placeholder=""
                onChange={handleChange}
              />
              <Label for="email">Email</Label>
            </InputContainer>

            <InputContainerMarginRight>
              <DateInput
                type="date"
                id="date"
                placeholder=""
                onChange={handleChange}
              />
              <Label for="date">Preferred Date</Label>
            </InputContainerMarginRight>

            <InputContainer>
              <Select name="time" id="time" onChange={handleChange}>
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
              <Label for="time">Preferred Time</Label>
            </InputContainer>

            <InputContainerMarginRight>
              <Input type="phone" id="phone" onChange={handleChange} />
              <Label for="phone">Phone</Label>
            </InputContainerMarginRight>

            <InputContainer>
              <Select
                name="newCustomer"
                id="newCustomer"
                onChange={handleChange}
              >
                <option value="yes">Yes, I am a potential new customer</option>
                <option value="no">No, I'm a current existing customer</option>
                <option value="neither">I'm neither.</option>
              </Select>
              <Label for="newCustomer">Are you a new customer?</Label>
            </InputContainer>

            <InputContainer>
              <TextArea
                name="message"
                id="message"
                rows="5"
                cols="33"
                onChange={handleChange}
              />
              <Label for="message">Message</Label>
            </InputContainer>

            <ButtonContainer>
              <DecoratedButton left right slim>
                Send your request
              </DecoratedButton>
            </ButtonContainer>
          </Form>
        </ListContainer>
      </ListAndImageFlex>
    </FlexColumn>
  )
}

const Form = styled.form`
  display: flex;
  width: 45vw;
  flex-wrap: wrap;
`

const InputContainer = styled.div`
  display: inline-block;
  position: relative;
  margin: 2.5rem 0;

  &:focus-within > label {
    transform: translateY(-4rem);
  }

  & .filled + label {
    transform: translateY(-4rem);
  }

  &:focus-within {
    outline: 1px dotted ${props => props.theme.colors.tertiary};
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
`

const Input = styled.input`
  padding: 1rem 1rem;
  width: 21vw;
  height: 50px;

  border: none;
  box-shadow: -1px -1px 2px #ededed, 1px 1px 2px #ededed;
  border-radius: 3px;

  cursor: text;
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
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 45vw;
  margin: 2.5rem 0;
`

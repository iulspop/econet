import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import {
  FlexColumn,
  DecorativeLine,
  ListAndImageFlex,
  ListContainer,
  SectionHeading,
} from "./common"

export const HomeForm = () => {
  const { t } = useTranslation("HomeForm")
  return (
    <FlexColumn>
      <DecorativeLine />
      <ListAndImageFlex>
        <ListContainer>
          <SectionHeading>{t("sectionHeading")}</SectionHeading>
          <form action="">
            <InputContainer>
              <Label for="firstName">First Name</Label>
              <Input type="text" id="firstName" />
            </InputContainer>

            <InputContainer>
              <Label for="email">Email</Label>
              <Input type="email" id="email" />
            </InputContainer>

            <InputContainer>
              <Label for="date">Preferred Date</Label>
              <DateInput type="date" id="date" />
            </InputContainer>

            <InputContainer>
              <Label for="time">Preferred Time</Label>
              <Select name="time" id="time">
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
            </InputContainer>

            <InputContainer>
              <Label for="phone">Phone</Label>
              <Input type="phone" id="phone" />
            </InputContainer>

            <InputContainer>
              <Label for="newCustomer">Are you a new customer?</Label>
              <Select name="newCustomer" id="newCustomer">
                <option value="yes">Yes, I am a potential new customer</option>
                <option value="no">No, I'm a current existing customer</option>
                <option value="neither">I'm neither.</option>
              </Select>
            </InputContainer>

            <InputContainer>
              <Label for="message">Message</Label>
              <Input type="textbox" id="message" />
            </InputContainer>

            <button type="submit">Submit</button>
          </form>
        </ListContainer>
      </ListAndImageFlex>
    </FlexColumn>
  )
}

const InputContainer = styled.div`
  position: relative;
`

const Label = styled.label`
  position: absolute;
  padding: 0 1rem;
  width: 18vw;
  height: 100%;
  background-color: white;
`

const Input = styled.input`
  border: none;
  box-shadow: -1px -1px 2px #ededed, 1px 1px 2px #ededed;
  border-radius: 3px;
  height: 50px;
  width: 20vw;
`

const DateInput = styled(Input)``

const Select = styled.select`
  border: none;
  background-color: #fff;
  padding-right: 4rem;
  box-shadow: -1px -1px 2px #ededed, 1px 1px 2px #ededed;
  border-radius: 3px;
  height: 50px;
  width: 20vw;
  placeholder: none;
  appearance: none;
  background-image: url("/assets/arrows_down.svg");
  background-repeat: no-repeat;
  background-position: right 0 top 50%;
  background-size: 4rem;
`

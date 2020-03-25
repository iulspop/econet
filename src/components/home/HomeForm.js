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
            <Label for="name">First Name</Label>
            <Input type="text" id="name" />

            <label>
              Email
              <input type="email" />
            </label>

            <label>
              Preferred Date
              <input type="date" />
            </label>

            <label>
              Preferred Time
              <select name="time">
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
              </select>
            </label>

            <label>
              Phone
              <input type="phone" />
            </label>

            <label>
              Are you a new customer?
              <select name="newCustomer">
                <option value="yes">Yes, I am a potential new customer</option>
                <option value="no">No, I'm a current existing customer</option>
                <option value="neither">I'm neither.</option>
              </select>
            </label>

            <label>
              Message
              <input type="textbox" />
            </label>

            <button type="submit">Submit</button>
          </form>
        </ListContainer>
      </ListAndImageFlex>
    </FlexColumn>
  )
}

const Label = styled.label`
  position: absolute;
  left: 0.5rem;
`

const Input = styled.input`
  position: relative;
`

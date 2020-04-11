import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import {
  StyledForm,
  InputContainer,
  InputContainerMarginRight,
  Input,
  Label,
  SmallerFontLabel,
  Select,
  TextArea,
  ButtonContainer,
} from "../../home/HomeForm/Form"
import { DecoratedButton } from "../../common"

export const Form = ({ shownForm, formName }) => {
  const { t } = useTranslation(["HomeForm", "Links"])

  function handleChange(e) {
    if (e.target.value) {
      e.target.classList.add("filled")
    } else {
      e.target.classList.remove("filled")
    }
  }

  return (
    <NewForm
      shownForm={shownForm}
      method="POST"
      action={t("Links:confirmation")}
      data-netlify="true"
      name={formName}
    >
      <input type="hidden" name="form-name" value={formName} />
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
        <Select name="newCustomer" id="newCustomer" onClick={handleChange}>
          <option value="yes">{t("yesNewCustomer")}</option>
          <option value="no">{t("noNewCustomer")}</option>
          <option value="neither">{t("neitherNewCustomer")}</option>
        </Select>
        <SmallerFontLabel htmlFor="newCustomer">
          {t("newCustomer")}
        </SmallerFontLabel>
      </InputContainer>

      <InputContainerMarginRight>
        <Input type="phone" name="phone" id="phone" onChange={handleChange} />
        <Label htmlFor="phone">{t("phone")}</Label>
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
        <Select name="language" id="language" onClick={handleChange}>
          <option value="french">{t("french")}</option>
          <option value="english">{t("english")}</option>
          <option value="spanish">{t("spanish")}</option>
          <option value="indifferent">{t("indifferent")}</option>
        </Select>
        <SmallerFontLabel htmlFor="language">{t("language")}</SmallerFontLabel>
      </InputContainerMarginRight>

      <InputContainer>
        <Select
          name="prefCommunication"
          id="prefCommunication"
          onClick={handleChange}
        >
          <option value="phone">{t("phoneCom")}</option>
          <option value="text message">{t("textCom")}</option>
          <option value="email">{t("emailCom")}</option>
        </Select>
        <SmallerFontLabel htmlFor="prefCommunication">
          {t("prefCommunication")}
        </SmallerFontLabel>
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
    </NewForm>
  )
}

const NewForm = styled(StyledForm)`
  display: ${props => {
    if (props.name === "commercial") {
      return props.shownForm === "commercial" ? "flex" : "none"
    } else if (props.name === "residential") {
      return props.shownForm === "residential" ? "flex" : "none"
    } else {
      throw Error("invalid form name")
    }
  }};
`

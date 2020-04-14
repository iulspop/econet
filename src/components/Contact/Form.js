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
} from "../home/HomeForm/Form"
import { DecoratedButton } from "../common"

export const Form = ({ shownForm, formName }) => {
  const { t, i18n } = useTranslation(["HomeForm", "Links"])

  function handleChange(e) {
    if (e.target.value) {
      e.target.classList.add("filled")
    } else {
      e.target.classList.remove("filled")
    }
  }

  function determineFormName(language, formName) {
    if (language === "fr") {
      switch (formName) {
        case "residential":
          return "residentialFR"
        case "commercial":
          return "commercialFR"
        default:
          throw new Error(`Invalid formName. Received: ${formName}`)
      }
    } else if (language === "en") {
      switch (formName) {
        case "residential":
          return "residentialEN"
        case "commercial":
          return "commercialEN"
        default:
          throw new Error(`Invalid formName. Received: ${formName}`)
      }
    } else {
      throw new Error(`Invalid language. Received: ${language}`)
    }
  }

  return (
    <NewForm
      shownForm={shownForm}
      method="POST"
      action={t("Links:confirmation")}
      data-netlify="true"
      name={determineFormName(i18n.language, formName)}
      formName={formName}
    >
      <input
        type="hidden"
        name="form-name"
        value={determineFormName(i18n.language, formName)}
      />
      {formName === "commercial" ? (
        <InputContainerMarginRight>
          <Input
            type="text"
            name="company"
            id="company"
            placeholder=""
            onChange={handleChange}
          />
          <Label htmlFor="company">{t("company")}</Label>
        </InputContainerMarginRight>
      ) : (
        <></>
      )}
      <InputContainerMarginRight>
        <Input
          type="text"
          name="firstName"
          id={formName === "residential" ? "firstNameRES" : "firstNameCOM"}
          placeholder=""
          onChange={handleChange}
        />
        <Label
          htmlFor={formName === "residential" ? "firstNameRES" : "firstNameCOM"}
        >
          {t("firstName")}
        </Label>
      </InputContainerMarginRight>

      <InputContainer>
        <Select
          name="newCustomer"
          id={formName === "residential" ? "newCustomerRES" : "newCustomerCOM"}
          onClick={handleChange}
        >
          <option value="yes">{t("yesNewCustomer")}</option>
          <option value="no">{t("noNewCustomer")}</option>
          <option value="neither">{t("neitherNewCustomer")}</option>
        </Select>
        <SmallerFontLabel
          htmlFor={
            formName === "residential" ? "newCustomerRES" : "newCustomerCOM"
          }
        >
          {t("newCustomer")}
        </SmallerFontLabel>
      </InputContainer>

      <InputContainerMarginRight>
        <Input
          type="phone"
          name="phone"
          id={formName === "residential" ? "phoneRES" : "phoneCOM"}
          onChange={handleChange}
        />
        <Label htmlFor={formName === "residential" ? "phoneRES" : "phoneCOM"}>
          {t("phone")}
        </Label>
      </InputContainerMarginRight>

      <InputContainer>
        <Input
          type="email"
          name="email"
          id={formName === "residential" ? "emailRES" : "emailCOM"}
          placeholder=""
          onChange={handleChange}
        />
        <Label htmlFor={formName === "residential" ? "emailRES" : "emailCOM"}>
          {t("email")}
        </Label>
      </InputContainer>

      <InputContainerMarginRight>
        <Select
          name="language"
          id={formName === "residential" ? "languageRES" : "languageCOM"}
          onClick={handleChange}
        >
          <option value="french">{t("french")}</option>
          <option value="english">{t("english")}</option>
          <option value="spanish">{t("spanish")}</option>
          <option value="indifferent">{t("indifferent")}</option>
        </Select>
        <SmallerFontLabel
          htmlFor={formName === "residential" ? "languageRES" : "languageCOM"}
        >
          {t("language")}
        </SmallerFontLabel>
      </InputContainerMarginRight>

      <InputContainer>
        <Select
          name="prefCommunication"
          id={
            formName === "residential"
              ? "prefCommunicationRES"
              : "prefCommunicationCOM"
          }
          onClick={handleChange}
        >
          <option value="phone">{t("phoneCom")}</option>
          <option value="text message">{t("textCom")}</option>
          <option value="email">{t("emailCom")}</option>
        </Select>
        <SmallerFontLabel
          htmlFor={
            formName === "residential"
              ? "prefCommunicationRES"
              : "prefCommunicationCOM"
          }
        >
          {t("prefCommunication")}
        </SmallerFontLabel>
      </InputContainer>

      <InputContainer>
        <TextArea
          name="message"
          id={formName === "residential" ? "messageRES" : "messageCOM"}
          rows="5"
          cols="33"
          onChange={handleChange}
        />
        <Label
          htmlFor={formName === "residential" ? "messageRES" : "messageCOM"}
        >
          {t("message")}
        </Label>
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
    if (props.formName === "commercial") {
      return props.shownForm === "commercial" ? "flex" : "none"
    } else if (props.formName === "residential") {
      return props.shownForm === "residential" ? "flex" : "none"
    } else {
      throw Error("invalid form name")
    }
  }};
`

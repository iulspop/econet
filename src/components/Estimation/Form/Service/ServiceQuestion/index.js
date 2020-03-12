import React from "react"
import { useTranslation } from "react-i18next"
import { RadioGroup } from "../../common"
import { Checkbox } from "../Checkbox"

export const ServiceQuestion = ({ formName, toggleOption }) => {
  const { t } = useTranslation("ServiceQuestion")
  return (
    <RadioGroup>
      <Checkbox toggleOption={toggleOption} inputName="tapis">
        {t("tapis")}
      </Checkbox>
      <Checkbox toggleOption={toggleOption} inputName="meubles">
        {t("meubles")}
      </Checkbox>
      <Checkbox toggleOption={toggleOption} inputName="cirage">
        {t("cirage")}
      </Checkbox>

      {formName === "residential" ? (
        <>
          <Checkbox toggleOption={toggleOption} inputName="detachage">
            {t("detachage")}
          </Checkbox>
          <Checkbox toggleOption={toggleOption} inputName="controleOdeur">
            {t("controleOdeur")}
          </Checkbox>
          <Checkbox
            toggleOption={toggleOption}
            inputName="protectionTapisMeubles"
          >
            {t("protectionTapisMeubles")}
          </Checkbox>
        </>
      ) : (
        <></>
      )}
    </RadioGroup>
  )
}

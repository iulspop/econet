import React from "react"
import { useTranslation } from "react-i18next"
import { Container, Box, H1, Paragraph, ReturnLink } from "./common"

export const Confirmation = () => {
  const { t } = useTranslation(["Confirmation", "Links"])
  return (
    <Container>
      <Box>
        <H1>{t("merci")}</H1>
        <Paragraph>{t("paragraph")}</Paragraph>
        <ReturnLink href={t("Links:home")}>{t("return")}</ReturnLink>
      </Box>
    </Container>
  )
}

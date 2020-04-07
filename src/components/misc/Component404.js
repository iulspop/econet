import React from "react"
import { useTranslation } from "react-i18next"
import { Container, Box, H1, Paragraph, ReturnLink } from "./common"

export const Component404 = () => {
  const { t } = useTranslation(["Component404", "Links"])
  return (
    <Container>
      <Box>
        <H1>{t("h1")}</H1>
        <Paragraph>{t("paragraph")}</Paragraph>
        <ReturnLink href={t("Links:home")}>{t("return")}</ReturnLink>
      </Box>
    </Container>
  )
}

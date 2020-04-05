import React from "react"
import i18next from "i18next"
import * as ReactI18next from "react-i18next"
import { Helmet } from "react-helmet"

export function wrapWithI18nProvider({ element, props }) {
  const i18n = i18next
    .createInstance({
      lng: props.pageContext.language,
      interpolation: { escapeValue: false },
      initImmediate: false,
      resources: props.pageContext.i18nResources,
    })
    .use(ReactI18next.initReactI18next)
  // noinspection JSIgnoredPromiseFromCall
  i18n.init()
  return (
    <ReactI18next.I18nextProvider i18n={i18n}>
      <Helmet htmlAttributes={{ lang: props.pageContext.language }}>
        <title>Nettoyage Econet</title>
        <meta
          name="description"
          content="Carpet and Upholstery Cleaning Company"
        />
      </Helmet>
      {element}
    </ReactI18next.I18nextProvider>
  )
}

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
  i18n.init()
  return (
    <ReactI18next.I18nextProvider i18n={i18n}>
      <Helmet htmlAttributes={{ lang: props.pageContext.language }}>
        <title>{props.pageContext.title}</title>
        <meta name="description" content={props.pageContext.metaDescription} />
        <link
          rel="alternate"
          hreflang={props.pageContext.altLanguage}
          href={`https://nettoyageeconet.com` + props.pageContext.altUrl}
        />
        <link
          rel="alternate"
          hreflang={props.pageContext.language}
          href={`https://nettoyageeconet.com` + props.pageContext.url}
        />
      </Helmet>
      {element}
    </ReactI18next.I18nextProvider>
  )
}

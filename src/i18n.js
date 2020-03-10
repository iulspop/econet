import i18n from "i18next"
import Backend from "i18next-xhr-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n
  // load translation using xhr -> see /src/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },

    detection: {
      order: [
        "querystring",
        "path",
        "htmlTag",
        "navigator",
        "cookie",
        "localStorage",
      ],
      lookupQuerystring: "lng",
      checkWhitelist: true,
    },

    lng: "fr",
    fallbackLng: "fr",
    whitelist: ["en", "fr"],
    debug: true,
    ns: ["Header", "Banner"],

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    react: {
      useSuspense: false,
    },
  })

export default i18n
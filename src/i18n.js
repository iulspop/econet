import i18n from "i18next"
import Backend from "i18next-node-fs-backend"
import { initReactI18next } from "react-i18next"

i18n
  // load translation async using node.js
  // learn more: https://github.com/i18next/i18next-node-fs-backend
  .use(Backend)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    backend: {
      loadPath: "/src/locales/{{lng}}/{{ns}}.json",
    },

    lng: "fr",
    fallbackLng: "fr",
    whitelist: ["en", "fr"],
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    react: {
      useSuspense: false, // causes crash with SSR
    },
  })

export default i18n

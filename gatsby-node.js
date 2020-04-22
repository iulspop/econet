const fs = require("fs-extra")
const path = require("path")
const i18next = require("i18next")
const nodeFsBackend = require("i18next-sync-fs-backend")

const languages = ["fr", "en"]
var pagesJSON = fs.readFileSync("./src/pages.json")
var pages = JSON.parse(pagesJSON)

exports.createPages = ({ actions }) => {
  const { createPage, createRedirect } = actions

  createAllRedirects(createRedirect)

  for (let page in pages) {
    languages.forEach(language => {
      const i18n = createI18nextInstance(language, pages[page].namespaces)

      const pageTemplate = path.resolve(pages[page].component)

      const altLanguage = language === "fr" ? "en" : "fr"

      return createPage({
        path: pages[page][language].path,
        component: pageTemplate,
        context: {
          language: language,
          altLanguage: altLanguage,
          url: pages[page][language].path,
          altUrl: pages[page][altLanguage].path,
          title: pages[page][language].title,
          metaDescription: pages[page][language].metaDescription,
          i18nResources: i18n.services.resourceStore.data,
        },
      })
    })
  }
}

const createI18nextInstance = (language, namespaces) => {
  const i18n = i18next.createInstance()
  i18n.use(nodeFsBackend).init({
    lng: language,
    ns: namespaces,
    fallbackLng: "fr",
    initImmediate: false,
    interpolation: { escapeValue: false },
    backend: { loadPath: `${__dirname}/src/locales/{{lng}}/{{ns}}.json` },
  })
  return i18n
}

const createAllRedirects = createRedirect => {
  createRedirect({
    fromPath: "/NosClients.html",
    toPath: "/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/Faq.html",
    toPath: "/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/Emplois.html",
    toPath: "/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/Certifications.html",
    toPath: "/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/Contact.html",
    toPath: "/contact",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/Contact.asp",
    toPath: "/contact",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/NettoyageDeTapis.html",
    toPath: "/residential",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/MeublesCuirEtTissu.html",
    toPath: "/residential",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/Services.html",
    toPath: "/residential",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/Procede.html",
    toPath: "/residential",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/Garantie.html",
    toPath: "/residential",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/Residentiel/",
    toPath: "/residential",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/Commercial/",
    toPath: "/commercial",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/Entreprise.html",
    toPath: "/commercial",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/en/*",
    toPath: "/en/404",
    statusCode: 404,
  })
  createRedirect({ fromPath: "/*", toPath: "/404", statusCode: 404 })
}

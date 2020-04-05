const fs = require("fs-extra")
const path = require("path")
const i18next = require("i18next")
const nodeFsBackend = require("i18next-sync-fs-backend")

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)
const srcPath = resolveApp("src")

const removeTrailingSlash = path =>
  path === `/` ? path : path.replace(/\/$/, ``)

const allLanguages = ["fr", "en"]

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage, createRedirect } = actions

  // First delete the incoming page that was automatically created by Gatsby
  // So everything in src/pages/
  deletePage(page)

  // redirect from old econet website links
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
  // allLanguages.forEach(language =>
  //   createRedirect({
  //     fromPath: `/${language}/*`,
  //     toPath: `/${language}/404`,
  //     statusCode: 404,
  //   })
  // )
  // createRedirect({ fromPath: "/*", toPath: "/404", statusCode: 404 })

  allLanguages.map(language => {
    const localizedPath =
      language === "fr" ? page.path : `${language}${page.path}`

    const i18n = createI18nextInstance(language)

    return createPage({
      // Pass on everything from the original page
      ...page,
      // Since page.path returns with a trailing slash (e.g. "/de/")
      // We want to remove that
      path: removeTrailingSlash(localizedPath),
      // Pass in the locale as context to every page
      // This context also gets passed to the src/components/layout file
      // This should ensure that the locale is available on every page
      context: {
        ...page.context,
        language: language,
        i18nResources: i18n.services.resourceStore.data,
      },
    })
  })
}

const createI18nextInstance = language => {
  const i18n = i18next.createInstance()
  i18n.use(nodeFsBackend).init({
    lng: language,
    ns: [
      "AboutUs",
      "AreaQuestions",
      "Banner",
      "BannerCommercial",
      "BannerResidential",
      "CarpetCommercial",
      "CarpetResidential",
      "ChooseUs",
      "Confirmation",
      "Contact",
      "ContactInfo",
      "Estimation",
      "Footer",
      "FurnitureCommercial",
      "FurnitureResidential",
      "Header",
      "HomeForm",
      "Links",
      "OdourCommercial",
      "OdourResidential",
      "ProtectionCommercial",
      "ProtectionResidential",
      "RegionsDesservies",
      "Service",
      "ServiceList",
      "ServiceQuestion",
      "StainCommercial",
      "StainResidential",
      "StainsQuestion",
      "Testimonial",
      "Visit",
    ],
    fallbackLng: "fr",
    initImmediate: false,
    interpolation: { escapeValue: false },
    backend: { loadPath: `${srcPath}/locales/{{lng}}/{{ns}}.json` },
  })
  return i18n
}

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
  const { createPage, deletePage } = actions

  // First delete the incoming page that was automatically created by Gatsby
  // So everything in src/pages/
  deletePage(page)

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
      "AreaQuestions",
      "Banner",
      "BannerResidential",
      "CarpetResidential",
      "ChooseUs",
      "Confirmation",
      "Contact",
      "ContactInfo",
      "Estimation",
      "Footer",
      "FurnitureResidential",
      "Header",
      "HomeForm",
      "RegionsDesservies",
      "Service",
      "ServiceList",
      "ServiceQuestion",
      "StainsQuestion",
      "Story",
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

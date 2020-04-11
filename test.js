const fs = require("fs-extra")
var pagesInfoJSON = fs.readFileSync("./pagesInfo.json")
var pagesInfo = JSON.parse(pagesInfoJSON)

for (var pagePath in pagesInfo) {
  if (pagesInfo.hasOwnProperty(pagePath)) {
    console.log(pagePath + " -> " + pagesInfo[pagePath])
    console.log(pagePath.)
  }
}

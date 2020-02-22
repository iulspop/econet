const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const landingPageTemplate = path.resolve(`src/templates/landingPage.js`)

  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  //Create pages
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      // Path for this page — required
      path: node.frontmatter.path,
      component: landingPageTemplate,
      context: {},
      // Add optional context data to be inserted
      // as props into the page component..
      //
      // The context data can also be used as
      // arguments to the page GraphQL query.
      //
      // The page "path" is always available as a GraphQL
      // argument.
    })
  })
}

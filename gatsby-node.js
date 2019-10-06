/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const templates = {
    talks: path.resolve("src/templates/talk.js"),
    sessions: path.resolve("src/templates/session.js"),
    visits: path.resolve("src/templates/session.js"),
    workshops: path.resolve("src/templates/talk.js"),
  }

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.path) {
        let type = node.frontmatter.path.match(/(?<=\/)\w*(?=\/)/)[0]

        createPage({
          path: node.frontmatter.path,
          component: templates[type],
        })
      }
    })
  })
}

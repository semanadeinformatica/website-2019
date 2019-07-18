/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const talkTemplate = path.resolve("src/templates/talk.js")
  const sessionTemplate = path.resolve("src/templates/session.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            fileAbsolutePath
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
        let component = null;

        if(node.fileAbsolutePath.search("/talks/") !== -1)
          component = talkTemplate
        else if(node.fileAbsolutePath.search("/sessions/") !== -1)
          component = sessionTemplate


        createPage({
          path: node.frontmatter.path,
          component,
        })
      }
    })
  })
}

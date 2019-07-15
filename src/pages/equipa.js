import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const styles = {
  image: {
    width: "248px",
    height: "248px",
  },
}

const TeamPage = ({ data }) => (
  <Layout>
    <SEO title="Equipa" />
    <h1>Equipa</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <div key={node.frontmatter.name}>
          <Img
            fluid={node.frontmatter.img.childImageSharp.fluid}
            style={styles.image}
          />
          <div>
            <div>{node.frontmatter.name}</div>
            <div>{node.frontmatter.role}</div>
            <div>
              {node.frontmatter.linkedin ? (
                <a href={node.frontmatter.linkedin}>LinkedIn</a>
              ) : (
                ""
              )}
            </div>
            <div>
              {node.frontmatter.github ? (
                <a href={node.frontmatter.github}>GitHub</a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    ))}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const pageQuery = graphql`
  query TeamQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/team/" } }
      sort: { fields: [frontmatter___role], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            role
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            linkedin
            github
          }
        }
      }
    }
  }
`

export default TeamPage

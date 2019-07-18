import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Member from "../components/member"

const TeamPage = ({ data }) => (
  <Layout>
    <SEO title="Equipa" />
    <h1>Equipa</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <div key={node.frontmatter.name}>
          <Member key={node.frontmatter.name} data={node.frontmatter} />
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

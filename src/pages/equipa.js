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
        {node.frontmatter.members.map(member => (
          <div key={member.name}>
            <Img
              fluid={member.img.childImageSharp.fluid}
              style={styles.image}
            />
            <div>
              <div>{member.name}</div>
              <div>{member.role}</div>
            </div>
          </div>
        ))}
      </div>
    ))}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const teamQuery = graphql`
  query TeamQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/team/"}}) {
      edges {
        node {
          id
          frontmatter {
            members {
              name
              role
              img {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            path
          }
        }
      }
    }
  }
`

export default TeamPage

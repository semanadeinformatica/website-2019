import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Occupations from "../components/occupations"

const styles = {
  image: {
    width: "100px",
    height: "100px",
  },
}

const SpeakersPage = ({ data }) => (
  <Layout>
    <SEO title="Speakers" />
    <h1>Speakers</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        {node.frontmatter.speakers.map(speaker => (
          <div key={speaker.name}>
            <Img
              fluid={speaker.img.childImageSharp.fluid}
              style={styles.image}
            />
            <div>
              <Link to={node.frontmatter.path}>{speaker.name}</Link>
            </div>
            <Occupations occupations={speaker.occupations} />
          </div>
        ))}
      </div>
    ))}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const pageQuery = graphql`
  query SpeakersQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            speakers {
              name
              occupations {
                what
                where
              }
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

export default SpeakersPage

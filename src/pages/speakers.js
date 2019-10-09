import React from "react"
import { graphql } from "gatsby"
import { Container } from "reactstrap"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import PageBanner from "../components/utils/page_banner"
import DailySpeakers from "../components/speakers/daily-speakers"

import Icon from "../images/svg/speakers.inline.svg"

const SpeakersPage = ({ data }) => (
  <Layout>
    <SEO title="Speakers" />
    <PageBanner>
      <Icon />
    </PageBanner>
    <Container>
      {data.allMarkdownRemark.group.map(({ edges }, index) => (
        <DailySpeakers talks={edges} key={index} day={index + 1} />
      ))}
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query SpeakersQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/talks/" } }) {
      group(field: frontmatter___day) {
        edges {
          node {
            id
            frontmatter {
              speakers {
                name
                occupations {
                  where
                }
                img {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                linkedin
                website
                twitter
              }
              day
              path
              type
            }
          }
        }
      }
    }
  }
`

export default SpeakersPage

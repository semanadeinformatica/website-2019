import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import Banner from "../components/session/banner"
import Description from "../components/session/description"
import Companies from "../components/session/companies"
import Participate from "../components/utils/participate"

export default function Template({ data }) {
  const { markdownRemark: session } = data

  return (
    <Layout>
      <SEO title={session.frontmatter.title} />
      <Banner title={session.frontmatter.title} />
      <Description
        image={session.frontmatter.img}
        day={session.frontmatter.day}
        place={session.frontmatter.place}
        start_time={session.frontmatter.start_time}
        end_time={session.frontmatter.end_time}
        description={session.html}
      />
      {session.frontmatter.companies ? (
        <Companies companies={session.frontmatter.companies} />
      ) : (
        ""
      )}
      <Participate link={session.frontmatter.registration} />
    </Layout>
  )
}

export const sessionQuery = graphql`
  query getSession($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        path
        title
        img {
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        day(formatString: "D MMMM", locale: "pt-PT")
        place
        start_time
        end_time
        registration
        companies
      }
    }
  }
`

import React from "react"
import { Container } from "reactstrap"
import { graphql } from "gatsby"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import Banner from "../components/session/banner"
import Description from "../components/session/description"
import Companies from "../components/session/companies"
import Participate from "../components/session/participate"

import SessionStyles from "../styles/session/session.module.css"

export default function Template({ data }) {
  const { markdownRemark: session } = data

  return (
    <Layout>
      <SEO title={session.frontmatter.title} />
      <div className={SessionStyles.bannerContainer}>
        <Container>
          <Banner
            image={session.frontmatter.img.childImageSharp.fluid}
            title={session.frontmatter.title}
          />
        </Container>
      </div>
      <Container>
        <Description
          day={session.frontmatter.day}
          place={session.frontmatter.place}
          start_time={session.frontmatter.start_time}
          end_time={session.frontmatter.end_time}
          description={session.html}
        />
      </Container>
      <div className={SessionStyles.companiesContainer}>
        <Container>
          {session.frontmatter.companies ? (
            <Companies companies={session.frontmatter.companies} />
          ) : (
            ""
          )}
        </Container>
      </div>
      <div>
        <Container>
          <Participate registration={session.frontmatter.registration} />
        </Container>
      </div>
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

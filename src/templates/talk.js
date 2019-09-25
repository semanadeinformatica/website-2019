import React from "react"
import { graphql } from "gatsby"
import { Container } from "reactstrap"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import Speaker from "../components/talk/speaker"
import Talk from "../components/talk/talk"
import Participate from "../components/talk/participate"

export default function Template({ data }) {
  const { markdownRemark: talk } = data
  const info = { ...talk.frontmatter }

  return (
    <Layout>
      <SEO title={info.title} />
      <Container fluid>
        <Speaker data={info.speakers[0]} />
        <Talk data={info}>
          <div dangerouslySetInnerHTML={{ __html: talk.html }}></div>
        </Talk>
        <Participate href={info.href ? info.href : "/coming"} />
      </Container>
    </Layout>
  )
}

export const talkQuery = graphql`
  query getTalk($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        path
        title
        n_day
        type
        day(formatString: "D MMMM", locale: "pt-PT")
        place
        start_time
        end_time
        speakers {
          name
          bio
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
          linkedin
          twitter
          website
        }
      }
    }
  }
`

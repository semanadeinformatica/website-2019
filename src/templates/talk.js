import React from "react"
import { graphql } from "gatsby"
import { Container } from "reactstrap"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import Speaker from "../components/talk/speaker"
import Description from "../components/talk/description"
import Participate from "../components/utils/participate"
import Partnership from "../components/talk/partnership"

import TalkStyles from "../styles/talk/talk.module.css"

export default function Template({ data }) {
  const { markdownRemark: talk } = data
  const info = { ...talk.frontmatter }

  return (
    <Layout>
      <SEO title={info.title} />
      <Container fluid className={TalkStyles.container}>
        <Speaker data={info.speakers[0]} />
        {info.partnership ? (
          <Partnership partnership={info.partnership[0]} />
        ) : (
          ""
        )}
        <Description data={info}>
          <div dangerouslySetInnerHTML={{ __html: talk.html }}></div>
        </Description>
      </Container>
      {info.registration ? <Participate link={info.registration} /> : ""}
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
        type
        day(formatString: "D MMMM", locale: "pt-PT")
        place
        start_time
        end_time
        registration
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
        partnership {
          name
          description
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          facebook
          instagram
          website
        }
      }
    }
  }
`

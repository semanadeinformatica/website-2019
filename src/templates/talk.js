import React from "react"
// import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Speaker from "../components/speaker"

export default function Template({ data }) {
  const { markdownRemark: talk } = data

  return (
    <Layout>
      <SEO title={talk.frontmatter.title} />
      <div>
        <h1>{talk.frontmatter.title}</h1>
        <div>{talk.frontmatter.day}</div>
        <div>
          {talk.frontmatter.start_time} {" - "} {talk.frontmatter.end_time}
        </div>
        <div>{talk.frontmatter.place}</div>
        <div dangerouslySetInnerHTML={{ __html: talk.html }}></div>

        <div>
          <h2>Speakers</h2>
          <div>
            {talk.frontmatter.speakers.map(speaker => {
              return <Speaker key={speaker.name} data={speaker} />
            })}
          </div>
        </div>
      </div>
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

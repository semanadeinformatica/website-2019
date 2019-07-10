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
        <p>{talk.frontmatter.day}</p>
        <p>{talk.frontmatter.time}</p>
        <p>{talk.frontmatter.place}</p>
        <div dangerouslySetInnerHTML={{ __html: talk.html }}></div>

        <div>
          <h2>Speakers</h2>
          <div>
            {talk.frontmatter.speakers.map(speaker => {
              return <Speaker data={speaker} />
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
        day
        place
        time
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

import React from "react"
// import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
              return (
                <div>
                  <h3>{speaker.name}</h3>
                  <Img fluid={speaker.img.childImageSharp.fluid} />
                  <p>{speaker.occupation}</p>
                  <p>{speaker.workplace}</p>
                  <p>{speaker.bio}</p>
                  <a href={speaker.twitter}>Twitter</a>
                  <a href={speaker.linkedin}>LinkedIn</a>
                  <a href={speaker.website}>Website</a>
                </div>
              )
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
          occupation
          workplace
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

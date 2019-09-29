import React from "react"
// import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import Speaker from "../components/speaker"

export default function Template({ data }) {
  const { markdownRemark: workshop } = data

  const {
    title,
    day,
    start_time,
    end_time,
    place,
    speakers,
    registration,
  } = workshop.frontmatter

  return (
    <Layout>
      <SEO title={title} />
      <div>
        <h2>workshop</h2>
        <div>
          <h1>{title}</h1>
          <div>{day}</div>
          <div>
            {start_time} {" - "} {end_time}
          </div>
          <div>{place}</div>
          <div dangerouslySetInnerHTML={{ __html: workshop.html }}></div>
          <a type="button" href={registration}>
            Inscrições
          </a>

          <div>
            <h2>Speakers</h2>
            <div>
              {speakers.map(speaker => {
                return <Speaker key={speaker.name} data={speaker} />
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const workshopQuery = graphql`
  query getWoskhop($path: String!) {
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
      }
    }
  }
`

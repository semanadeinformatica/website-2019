import React from "react"
// import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"

export default function Template({ data }) {
  const { markdownRemark: session } = data

  const {
    title,
    day,
    start_time,
    end_time,
    place,
    registration,
  } = session.frontmatter

  return (
    <Layout>
      <SEO title={title} />
      <div>
        <h2>session</h2>
        <div>
          <h1>{title}</h1>
          <div>{day}</div>
          <div>
            {start_time} {" - "} {end_time}
          </div>
          <div>{place}</div>
          <div dangerouslySetInnerHTML={{ __html: session.html }}></div>

          <a
            type="button"
            href={registration}
            target="_blank"
            rel="noopener noreferrer"
          >
            Inscrições
          </a>
        </div>
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
        day(formatString: "D MMMM", locale: "pt-PT")
        place
        start_time
        end_time
        registration
      }
    }
  }
`

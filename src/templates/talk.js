import React from "react"
// import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark: talk } = data

  return (
    <Layout>
      <SEO title={talk.frontmatter.title} />
      <div>
        <h1>{talk.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: talk.html }}></div>
      </div>
    </Layout>
  )
}

export const talkQuery = graphql`
  query TalkByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`

import React from "react"
import { graphql, Link } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"

import Image from "../components/image"
import SEO from "../components/seo"
import Navbar from "../components/navbar"

const IndexPage = ({ data }) => (
  <div>
    <Navbar />
    <SEO title="Home" />
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/talks/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default IndexPage

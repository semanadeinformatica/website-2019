import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <h2>Pages</h2>
    <div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
    <div>
      <Link to="/sobre-nos/">Sobre nós</Link>
    </div>
    <div>
      <Link to="/speakers/">Speakers</Link>
    </div>
    <div>
      <Link to="/competicao-programacao/">Competição</Link>
    </div>
    <div>
      <Link to="/program/">Programa</Link>
    </div>
    <div>
      <Link to="/equipa/">Equipa</Link>
    </div>
    <div>
      <Link to="/contactos/">Contactos</Link>
    </div>

    <h2>Talks</h2>
    <ul>
      {data.allMarkdownRemark.edges.map(talk => (
        <li key={talk.node.id}>
          <Link to={talk.node.frontmatter.path}>
            {talk.node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/talks/" } }
    ) {
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

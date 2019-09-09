import React from "react"
import { graphql, Link } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"

import Image from "../components/image"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Tickets from "../components/tickets"

const IndexPage = ({ data }) => (
  <div>
    <Navbar />
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Tickets />

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
      <Link to="/patrocinios/">Patrocínios</Link>
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
